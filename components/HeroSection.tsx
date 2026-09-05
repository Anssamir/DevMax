export default function HeroSection() {
  return (
    <section id="hero" className="bg-white dark:bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary-container">
              <span className="text-xs font-semibold text-ink-mid">
                Full-stack product studio
              </span>
            </div>

            <h1 className="font-heading text-6xl font-bold leading-tight text-text-heading">
              From idea to launch.
              <br />
              Built to grow.
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
              DevMax turns ambitious product ideas into launch-ready software
              — combining product strategy, experience design, engineering,
              and AI in one senior team.
            </p>

            <div className="flex items-center gap-4">
              <a href="#contact" className="bg-primary-mid text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-bold transition-colors shadow-sm">
                Start a project
              </a>
              <a href="#how-we-work" className="border border-outline text-text-primary font-semibold py-3 px-6 rounded-md hover:bg-surface-hover transition-colors">
                See how we work
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
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

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-ink-container to-surface">
              <div className="absolute inset-0 bg-gradient-to-br from-ink-container/80 to-surface/80" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-white/60 text-sm font-mono">
                  devmax.app
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
