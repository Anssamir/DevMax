import HeroGradientBackground from '@/components/HeroGradientBackground'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-white px-4 pb-20 pt-32 sm:px-6 lg:px-8"
    >
      {/* Animated gradient block: anchored to the right and stretched from the
          very top of the hero to its very bottom at every screen height. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[80%] sm:w-[70%] lg:w-[56%]">
        <div
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 5vw), 0 100%)',
            // Fade the artwork's own alpha towards the copy column, so the
            // block dissolves into the page with no seam at its left edge.
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 25%, rgba(0,0,0,0.8) 55%, #000 78%)',
            maskImage:
              'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 25%, rgba(0,0,0,0.8) 55%, #000 78%)',
          }}
        >
          <HeroGradientBackground className="absolute inset-0 h-full w-full" zoom={1.15} />
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary-container">
            <span className="text-xs font-semibold text-ink-mid">
              Full-stack product studio
            </span>
          </div>

          <h1 className="font-heading text-5xl font-bold leading-tight text-text-heading sm:text-6xl">
            From idea to launch.
            <br />
            Built to grow.
          </h1>

          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            DevMax turns ambitious product ideas into launch-ready software
            — combining product strategy, experience design, engineering,
            and AI in one senior team.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#contact" className="bg-primary-mid text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-bold transition-colors shadow-sm">
              Start a project
            </a>
            <a href="#how-we-work" className="border border-outline text-text-primary font-semibold py-3 px-6 rounded-md hover:bg-surface-hover transition-colors">
              See how we work
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-mid" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-text-secondary">50+ products launched</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-mid" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-text-secondary">End-to-end delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
