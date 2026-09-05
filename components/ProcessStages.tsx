const stages = [
  { name: 'Strategy', icon: '🎯', active: false },
  { name: 'Design', icon: '🎨', active: false },
  { name: 'Engineering', icon: '⚡', active: true },
  { name: 'AI Systems', icon: '🤖', active: false },
  { name: 'Growth', icon: '📈', active: false },
]

export default function ProcessStages() {
  return (
    <section id="how-we-work" className="bg-surface-container dark:bg-surface-container py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4">
          <p className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider">
            One team. Every stage.
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-text-heading">
            Think it. Design it. Build it. Launch it. Grow it.
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl">
            We work across the full product journey — so you can move from a
            rough idea to a working product without stitching together
            disconnected specialists.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stages.map((stage) => (
            <div
              key={stage.name}
              className={`p-6 rounded-xl border ${
                stage.active
                  ? 'bg-primary-mid border-primary-mid'
                  : 'bg-white dark:bg-black border-outline-variant'
              }`}
            >
              <div className="text-2xl mb-4">{stage.icon}</div>
              <h3 className={`font-heading font-bold ${stage.active ? 'text-black' : 'text-text-heading'}`}>
                {stage.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-outline-variant">
          <p className="text-base font-medium text-text-secondary max-w-2xl">
            You don&apos;t have to figure out which service you need first. Tell us
            what you&apos;re trying to achieve.
          </p>
          <a href="#contact" className="border border-text-heading text-text-primary font-semibold py-3 px-6 rounded-md hover:bg-surface-hover transition-colors">
            Book a call
          </a>
        </div>
      </div>
    </section>
  )
}
