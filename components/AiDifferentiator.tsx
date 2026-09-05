const aiCapabilities = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy',
    description: 'Identify where AI can create real value in your product.',
  },
  {
    id: 'ml-engineering',
    title: 'ML Engineering',
    description: 'Build and deploy machine learning models at scale.',
  },
  {
    id: 'intelligent-ux',
    title: 'Intelligent UX',
    description: 'Design AI-powered features that users actually want to use.',
  },
]

export default function AiDifferentiator() {
  return (
    <section id="ai-systems" className="bg-ink-container dark:bg-ink-container py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4">
          <p className="font-mono text-xs font-semibold text-primary-mid uppercase tracking-wider">
            AI-native. Not AI-added.
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-white">
            AI isn&apos;t a feature we bolt on. It&apos;s in the DNA of every product we build.
          </h2>
          <p className="text-lg text-neutral-soft max-w-3xl">
            Most teams treat AI as an afterthought. We treat it as a first
            principle — baked into strategy, design, and engineering from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aiCapabilities.map((capability) => (
            <div key={capability.id} className="bg-surface-container/50 rounded-xl p-6 space-y-4">
              <h3 className="font-heading text-xl font-bold text-white">
                {capability.title}
              </h3>
              <p className="text-sm text-neutral-soft leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
