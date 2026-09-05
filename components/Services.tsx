const services = [
  {
    id: 'product-strategy',
    title: 'Product Strategy',
    description: 'From market research to product roadmaps. We help you figure out what to build and why.',
  },
  {
    id: 'ux-ui-design',
    title: 'UX/UI Design',
    description: 'User-centered design that converts. From wireframes to high-fidelity prototypes.',
  },
  {
    id: 'full-stack-development',
    title: 'Full-Stack Development',
    description: 'Modern web and mobile applications built with the right technology stack.',
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description: 'Intelligent features that add real value. From recommendation engines to predictive analytics.',
  },
]

export default function Services() {
  return (
    <section id="what-we-build" className="bg-surface-container dark:bg-surface-container py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4">
          <p className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider">
            What we build
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-text-heading">
            Start with what you need to achieve.
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl">
            Whether you&apos;re starting from zero or improving something that
            already exists, we&apos;ll help you find the right path.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white dark:bg-black border border-outline-variant rounded-xl p-8 space-y-4">
              <h3 className="font-heading text-xl font-bold text-text-heading">
                {service.title}
              </h3>
              <p className="text-base text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
