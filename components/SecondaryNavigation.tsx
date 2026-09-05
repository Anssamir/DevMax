export default function SecondaryNavigation() {
  return (
    <section id="secondary-nav" className="bg-surface-container dark:bg-surface-container border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-text-secondary">
              One team across
            </span>
            <span className="font-mono text-xs font-semibold text-ink-mid">
              strategy · design · engineering · AI
            </span>
          </div>

          <div className="flex items-center gap-8">
            <a href="#for-founders" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
              For founders
            </a>
            <a href="#for-product-teams" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
              For product teams
            </a>
            <a href="#explore" className="flex items-center gap-2 py-2 px-4 rounded-full border border-outline text-text-primary hover:bg-surface-hover transition-colors">
              <span className="text-sm font-medium">Explore our work</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
