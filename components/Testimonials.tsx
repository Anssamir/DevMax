const testimonials = [
  {
    id: 'sarah-chen',
    quote: "DevMax didn't just build our product — they helped us figure out what to build. The team's strategic thinking was invaluable.",
    author: 'Sarah Chen',
    role: 'CEO, FinTech Startup',
  },
  {
    id: 'michael-rodriguez',
    quote: 'The quality of work and speed of delivery exceeded our expectations. They truly understand how to build products that scale.',
    author: 'Michael Rodriguez',
    role: 'CTO, HealthTech Company',
  },
  {
    id: 'emily-park',
    quote: "Working with DevMax felt like having an extension of our own team. Their AI expertise gave us a real competitive advantage.",
    author: 'Emily Park',
    role: 'Founder, E-commerce Platform',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-surface-container dark:bg-surface-container py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4">
          <p className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider">
            What founders say
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-text-heading">
            Built with trust. Measured by outcomes.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-black border border-outline-variant rounded-xl p-8 space-y-6">
              <p className="text-base text-text-secondary leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-heading font-bold text-text-heading">
                  {testimonial.author}
                </p>
                <p className="text-sm text-text-secondary">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
