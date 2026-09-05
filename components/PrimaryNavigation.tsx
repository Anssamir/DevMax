export default function PrimaryNavigation() {
  return (
    <nav id="primary-nav" className="bg-white dark:bg-black border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-primary-mid" />
            <span className="font-heading text-xl font-bold text-text-heading">
              DevMax
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#how-we-work" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
              How we work
            </a>
            <a href="#selected-work" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
              Selected work
            </a>
            <a href="#what-we-build" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
              What we build
            </a>
            <a href="#ai-systems" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
              AI systems
            </a>
          </div>

          <a href="#contact" className="bg-primary-mid text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-bold transition-colors shadow-sm flex items-center gap-2">
            Start a project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}
