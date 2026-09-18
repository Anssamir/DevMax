'use client';

import { useEffect, useRef, type CSSProperties } from 'react';

export interface MeshGradientProps {
  speed?: number;
  baseColor?: string;
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
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;
varying vec2 vUV;
uniform float uTime, uSpeed;
uniform vec3 uBase;

void main() {
  vec2 uv = vUV;
  float t = uTime * uSpeed * 0.12;

  vec2 b1 = vec2(0.35 + 0.20 * sin(t * 0.9 + 1.0),  0.40 + 0.15 * cos(t * 0.7 + 2.0));
  vec2 b2 = vec2(0.65 + 0.15 * cos(t * 1.1 + 0.5),  0.55 + 0.18 * sin(t * 0.8 + 3.0));
  vec2 b3 = vec2(0.50 + 0.18 * sin(t * 0.6 + 4.0),  0.30 + 0.12 * cos(t * 1.0 + 1.5));
  vec2 b4 = vec2(0.20 + 0.12 * cos(t * 1.2 + 2.5),  0.65 + 0.10 * sin(t * 0.9 + 0.8));
  vec2 b5 = vec2(0.75 + 0.10 * sin(t * 0.8 + 3.5),  0.25 + 0.14 * cos(t * 1.1 + 4.0));

  float g1 = exp(-dot(uv - b1, uv - b1) * 6.0);
  float g2 = exp(-dot(uv - b2, uv - b2) * 7.0);
  float g3 = exp(-dot(uv - b3, uv - b3) * 5.5);
  float g4 = exp(-dot(uv - b4, uv - b4) * 8.0);
  float g5 = exp(-dot(uv - b5, uv - b5) * 7.5);

  float glow = g1 * 0.35 + g2 * 0.30 + g3 * 0.25 + g4 * 0.15 + g5 * 0.15;
  glow = clamp(glow, 0.0, 1.0);

  vec3 col = mix(vec3(1.0), uBase, glow * 0.55);

  gl_FragColor = vec4(col, 1.0);
}
`;

type Vec3 = [number, number, number];

function hexToRgb(hex: string): Vec3 {
  const m = hex.trim().replace('#', '');
  const full = m.length === 3 ? m.split('').map((c) => c + c).join('') : m;
  const n = parseInt(full, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function createShader(gl: WebGLRenderingContext, type: number, src: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('MeshGradient shader error:', gl.getShaderInfoLog(shader) ?? '(no info)');
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function MeshGradient({
  speed = 0.35,
  baseColor = '#ACCE3D',
  paused = false,
  className,
  style,
}: MeshGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const live = useRef({ speed, baseColor, paused });
  live.current = { speed, baseColor, paused };

  const dirty = useRef(true);
  dirty.current = true;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let gl: WebGLRenderingContext | null = null;
    try {
      gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false });
    } catch { return; }
    if (!gl) return;
    if (canvas.clientWidth < 1 || canvas.clientHeight < 1) return;

    const vs = createShader(gl, gl.VERTEX_SHADER, VERT);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('MeshGradient link error:', gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const u = {
      time: gl.getUniformLocation(program, 'uTime'),
      speed: gl.getUniformLocation(program, 'uSpeed'),
      base: gl.getUniformLocation(program, 'uBase'),
    };

    gl.clearColor(1, 1, 1, 0);

    let width = 1;
    let height = 1;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      gl!.viewport(0, 0, canvas.width, canvas.height);
      dirty.current = true;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    io.observe(canvas);

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduceMotion = mq.matches;
    const onMotion = (e: MediaQueryListEvent) => { reduceMotion = e.matches; dirty.current = true; };
    mq.addEventListener('change', onMotion);

    const onLost = (e: Event) => { e.preventDefault(); cancelAnimationFrame(raf); };
    canvas.addEventListener('webglcontextlost', onLost);

    let clock = 0;
    let last = performance.now();
    let raf = 0;

    const render = (now: number) => {
      raf = requestAnimationFrame(render);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const cfg = live.current;
      const frozen = cfg.paused || reduceMotion;
      if (!frozen) clock += dt;
      if (!visible) return;
      if (frozen && !dirty.current) return;
      dirty.current = false;

      gl!.clear(gl!.COLOR_BUFFER_BIT);

      const [r, g, b] = hexToRgb(cfg.baseColor);
      gl!.uniform1f(u.time, clock);
      gl!.uniform1f(u.speed, cfg.speed);
      gl!.uniform3f(u.base, r, g, b);

      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      mq.removeEventListener('change', onMotion);
      canvas.removeEventListener('webglcontextlost', onLost);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ display: 'block', width: '100%', height: '100%', ...style }}
    />
  );
}
