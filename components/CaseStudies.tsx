const caseStudies = [
  {
    id: 'fintech-dashboard',
    title: 'FinTech Dashboard',
    category: 'Fintech',
    description: 'Real-time analytics platform for institutional investors.',
  },
  {
    id: 'healthtech-platform',
    title: 'HealthTech Platform',
    category: 'Healthcare',
    description: 'Patient management system with AI-powered diagnostics.',
  },
  {
    id: 'ecommerce-experience',
    title: 'E-commerce Experience',
    category: 'Retail',
    description: 'Personalized shopping experience with recommendation engine.',
  },
]

export default function CaseStudies() {
  return (
    <section id="selected-work" className="bg-white dark:bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4">
          <p className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider">
            Selected work
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-text-heading">
            Ideas are easy to talk about. Products are harder to ship.
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl">
            See how we&apos;ve turned business problems, product ideas, and complex
            workflows into real digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((project) => (
            <div key={project.id} className="bg-surface-container dark:bg-surface-container border border-outline-variant rounded-xl p-6 space-y-4">
              <div className="aspect-video bg-neutral-subtle rounded-lg" />
              <div className="space-y-2">
                <p className="text-xs font-semibold text-text-secondary uppercase">
                  {project.category}
                </p>
                <h3 className="font-heading text-xl font-bold text-text-heading">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
