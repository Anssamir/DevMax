export default function SocialProofStrip() {
  return (
    <section id="social-proof" className="bg-surface-container dark:bg-surface-container border-y border-outline-variant py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-text-primary">
              Built for teams that care about getting it right.
            </p>
            <p className="text-xs text-text-secondary">
              Senior product thinking, end-to-end delivery.
            </p>
          </div>

          <div className="flex items-center gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-text-heading">50+</div>
              <div className="text-xs text-text-secondary">Products Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-text-heading">98%</div>
              <div className="text-xs text-text-secondary">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-text-heading">4.9</div>
              <div className="text-xs text-text-secondary">Client Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
