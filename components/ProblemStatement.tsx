export default function ProblemStatement() {
  return (
    <section id="problem" className="bg-white dark:bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider">
              Building software shouldn&apos;t feel fragmented
            </p>
            <h2 className="font-heading text-4xl font-bold leading-tight text-text-heading">
              One product shouldn&apos;t need five different teams.
            </h2>
            <div className="space-y-6 text-base text-text-secondary leading-relaxed">
              <p>
                Ideas get stuck between strategy and execution. Designs get
                thrown over the wall to developers. AI gets added after the
                product is already built. And every handoff creates more time,
                more cost, and more room for things to get lost.
              </p>
              <p>
                DevMax brings product thinking, design, engineering, and AI
                together in one team — so the people shaping the product are
                also the people building it.
              </p>
            </div>
          </div>

          <div className="bg-surface-container dark:bg-surface-container border border-text-heading rounded-xl p-8 space-y-6">
            <h3 className="font-heading text-2xl font-bold leading-tight text-text-heading">
              Less handoff. Better decisions. Faster progress.
            </h3>
            <a href="#how-we-work" className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-primary-mid transition-colors">
              See our approach
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
