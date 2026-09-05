export default function FinalCta() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-container to-surface-container" />

      <div className="relative max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="font-heading text-4xl font-bold leading-tight text-white">
            Ready to build something real?
          </h2>
          <p className="text-lg text-neutral-soft max-w-2xl mx-auto">
            Tell us what you&apos;re building, and we&apos;ll tell you if we&apos;re the
            right team to help you build it.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a href="mailto:hello@devmax.app" className="bg-primary-mid text-white font-semibold py-4 px-10 rounded-md hover:bg-primary-bold transition-colors">
            Start a project
          </a>
          <a href="#how-we-work" className="border border-neutral-soft text-white font-semibold py-4 px-10 rounded-md hover:bg-white/10 transition-colors">
            Book a call
          </a>
        </div>
      </div>
    </section>
  )
}
