'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';

export interface HeroGradientBackgroundProps {
  /** Image to animate. Anything with soft gradients works best. */
  src?: string;
  /** Animation speed multiplier. */
  speed?: number;
  /** How far the artwork is allowed to flow, in UV units. */
  amplitude?: number;
  /** >1 crops into the artwork so the dense, saturated area fills the frame. */
  zoom?: number;
  /** Saturation boost. 1 leaves the source colours untouched. */
  vibrance?: number;
  /**
   * How far the cover-fit may relax towards stretching when the container's
   * aspect is nowhere near the artwork's — a tall, narrow hero column would
   * otherwise crop down to a near-solid band of colour. 0 keeps a strict
   * cover-fit at every size.
   */
  stretch?: number;
  /**
   * 'cover' crops the artwork to fill the frame. 'fill' shows the whole
   * artwork, stretched so its top and bottom sit flush with the frame's.
   */
  fit?: 'cover' | 'fill';
  /** Point of the artwork to centre the frame on, in 0..1 image coordinates. */
  focus?: [number, number];
  paused?: boolean;
  className?: string;
  style?: CSSProperties;
}

const VERT = `
precision highp float;
attribute vec2 aPosition;
varying vec2 vUV;

void main() {
  vUV = aPosition * 0.5 + 0.5;
  vUV.y = 1.0 - vUV.y;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;
varying vec2 vUV;
uniform sampler2D uTex;
uniform float uTime, uSpeed, uAmp, uZoom, uVibrance, uInset;
uniform vec2 uCover, uFocus;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p *= 2.02;
    a *= 0.5;
  }
  return v;
}

void main() {
  // Fit the artwork to the canvas, then leave a small inset so the warp never
  // drags the transparent border into view.
  vec2 uv = (vUV - 0.5) * uCover * (uInset / uZoom) + uFocus;
  float t = uTime * uSpeed;

  // Two-pass domain warp: the second layer is fed by the first, which is what
  // gives the slow, folding "liquid" motion rather than a flat wobble.
  float n1 = fbm(uv * 2.0 + vec2(t * 0.10, -t * 0.07));
  float n2 = fbm(uv * 3.0 + vec2(-t * 0.08, t * 0.12) + n1);
  vec2 disp = vec2(n1 - 0.5, n2 - 0.5) * uAmp;

  // A gentle directional drift along the ribbon so the whole shape breathes.
  disp += vec2(sin(t * 0.25 + uv.y * 3.0), cos(t * 0.20 + uv.x * 2.5)) * uAmp * 0.35;

  vec2 suv = uv + disp;
  suv = (suv - 0.5) * (1.0 + 0.03 * sin(t * 0.30)) + 0.5;

  vec4 tex = texture2D(uTex, clamp(suv, 0.0, 1.0));

  // Travelling sheen, so highlights move across the ribbon instead of only with it.
  float sheen = fbm(suv * 2.5 + vec2(t * 0.15, t * 0.09)) - 0.5;
  tex.rgb += tex.a * sheen * 0.16;

  // Saturate around luminance (alpha-premultiplied, so work in straight colour).
  vec3 straight = tex.a > 0.001 ? tex.rgb / tex.a : tex.rgb;
  float luma = dot(straight, vec3(0.2126, 0.7152, 0.0722));
  straight = clamp(mix(vec3(luma), straight, uVibrance), 0.0, 1.0);

  gl_FragColor = vec4(straight * tex.a, tex.a);
}
`;

function createShader(gl: WebGLRenderingContext, type: number, src: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('HeroGradientBackground shader error:', gl.getShaderInfoLog(shader) ?? '(no info)');
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function HeroGradientBackground({
  src = '/hero-bacground.png',
  speed = 0.9,
  amplitude = 0.045,
  zoom = 1.35,
  vibrance = 1.35,
  stretch = 0.8,
  fit = 'cover',
  focus = [0.5, 0.5],
  paused = false,
  className,
  style,
}: HeroGradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  const live = useRef({ speed, amplitude, zoom, vibrance, stretch, fit, focus, paused });
  live.current = { speed, amplitude, zoom, vibrance, stretch, fit, focus, paused };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let gl: WebGLRenderingContext | null = null;
    try {
      gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: true });
    } catch {
      return;
    }
    if (!gl) return;

    const vs = createShader(gl, gl.VERTEX_SHADER, VERT);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('HeroGradientBackground link error:', gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const u = {
      time: gl.getUniformLocation(program, 'uTime'),
      speed: gl.getUniformLocation(program, 'uSpeed'),
      amp: gl.getUniformLocation(program, 'uAmp'),
      zoom: gl.getUniformLocation(program, 'uZoom'),
      vibrance: gl.getUniformLocation(program, 'uVibrance'),
      inset: gl.getUniformLocation(program, 'uInset'),
      cover: gl.getUniformLocation(program, 'uCover'),
      focus: gl.getUniformLocation(program, 'uFocus'),
      tex: gl.getUniformLocation(program, 'uTex'),
    };

    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    let imageAspect = 1;
    let textureReady = false;

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => {
      if (!gl) return;
      imageAspect = image.naturalWidth / image.naturalHeight;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      textureReady = true;
      setReady(true);
    };
    image.src = src;

    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, canvas.clientWidth);
      const height = Math.max(1, canvas.clientHeight);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      gl!.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    io.observe(canvas);

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduceMotion = mq.matches;
    const onMotion = (e: MediaQueryListEvent) => { reduceMotion = e.matches; };
    mq.addEventListener('change', onMotion);

    const onLost = (e: Event) => { e.preventDefault(); cancelAnimationFrame(raf); };
    canvas.addEventListener('webglcontextlost', onLost);

    let clock = 0;
    let last = performance.now();

    const render = (now: number) => {
      raf = requestAnimationFrame(render);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const cfg = live.current;
      if (!cfg.paused && !reduceMotion) clock += dt;
      if (!visible || !textureReady) return;

      const canvasAspect = canvas.clientWidth / Math.max(1, canvas.clientHeight);
      let cover: [number, number] = [1, 1];

      if (cfg.fit === 'cover') {
        const fitted: [number, number] =
          canvasAspect > imageAspect
            ? [1, imageAspect / canvasAspect]
            : [canvasAspect / imageAspect, 1];

        // Mismatch in octaves between the container and the artwork. Stays at a
        // strict cover-fit for ordinary shapes, then eases towards a stretch fit
        // past roughly a 1.8x mismatch (phone-height columns).
        const mismatch = Math.abs(Math.log(canvasAspect / imageAspect)) / Math.LN2;
        const relax = cfg.stretch * Math.min(1, Math.max(0, (mismatch - 0.85) / 0.9));
        cover = [
          fitted[0] + (1 - fitted[0]) * relax,
          fitted[1] + (1 - fitted[1]) * relax,
        ];
      }

      gl!.clear(gl!.COLOR_BUFFER_BIT);
      gl!.activeTexture(gl!.TEXTURE0);
      gl!.bindTexture(gl!.TEXTURE_2D, texture);
      gl!.uniform1i(u.tex, 0);
      gl!.uniform1f(u.time, clock);
      gl!.uniform1f(u.speed, cfg.speed);
      gl!.uniform1f(u.amp, cfg.amplitude);
      gl!.uniform1f(u.zoom, Math.max(0.1, cfg.zoom));
      gl!.uniform1f(u.vibrance, cfg.vibrance);
      // 'fill' shows the artwork edge to edge; 'cover' keeps a little slack so
      // the warp has room to move without smearing the frame's borders.
      gl!.uniform1f(u.inset, cfg.fit === 'fill' ? 0.995 : 0.94);
      gl!.uniform2f(u.cover, cover[0], cover[1]);
      gl!.uniform2f(u.focus, cfg.focus[0], cfg.focus[1]);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      mq.removeEventListener('change', onMotion);
      canvas.removeEventListener('webglcontextlost', onLost);
      image.onload = null;
      gl.deleteTexture(texture);
      gl.deleteBuffer(buf);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, [src]);

  return (
    <div aria-hidden="true" className={className} style={{ position: 'relative', ...style }}>
      {/* Static artwork: what renders before the canvas is live, and the
          fallback when WebGL is unavailable. */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${src})`,
          backgroundSize: fit === 'fill' ? '100% 100%' : `${zoom * 100}% auto`,
          backgroundPosition: `${focus[0] * 100}% ${focus[1] * 100}%`,
          backgroundRepeat: 'no-repeat',
          opacity: ready ? 0 : 1,
          transition: 'opacity 600ms ease',
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          display: 'block',
          width: '100%',
          height: '100%',
          opacity: ready ? 1 : 0,
          transition: 'opacity 600ms ease',
        }}
      />
    </div>
  );
}
