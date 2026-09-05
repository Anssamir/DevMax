const faqItems = [
  {
    id: 'project-timeline',
    question: 'How long does a typical project take?',
    answer: 'Most projects range from 8-16 weeks, depending on scope and complexity. We\'ll provide a detailed timeline during our discovery phase.',
  },
  {
    id: 'pricing-model',
    question: 'What\'s your pricing model?',
    answer: 'We offer both project-based and retainer pricing. Every engagement starts with a discovery phase to understand your needs and provide an accurate estimate.',
  },
  {
    id: 'startup-work',
    question: 'Do you work with startups?',
    answer: 'Yes! We work with startups at all stages, from pre-seed to Series C. We understand the unique challenges and speed requirements of early-stage companies.',
  },
  {
    id: 'technologies',
    question: 'What technologies do you use?',
    answer: 'We choose the right technology stack for each project. Our expertise includes React, Next.js, Node.js, Python, and various AI/ML frameworks.',
  },
  {
    id: 'ongoing-support',
    question: 'How do you handle ongoing support?',
    answer: 'We offer flexible maintenance and support packages after launch. Many of our clients continue with us on a retainer basis for ongoing improvements.',
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="bg-white dark:bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Frequently asked
              </p>
              <h2 className="font-heading text-2xl font-bold leading-tight text-text-heading">
                Everything you want to know before we start.
              </h2>
            </div>
            <a href="#contact" className="bg-primary-mid text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-bold transition-colors shadow-sm inline-flex items-center gap-2">
              Ask us anything
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.id} className="bg-surface-container dark:bg-surface-container border border-outline-variant rounded-xl p-6 space-y-3">
                <h3 className="font-heading font-bold text-text-heading">
                  {faq.question}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
