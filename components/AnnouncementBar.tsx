export default function AnnouncementBar() {
  return (
    <section id="announcement" className="bg-surface dark:bg-black text-text-primary dark:text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
        <div className="w-2 h-2 rounded-full bg-primary-mid" />
        <p className="font-mono text-xs font-semibold">
          Now building AI-native products for ambitious teams
        </p>
        <svg
          className="w-4 h-4 text-primary-mid"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 17L17 7M17 7H7M17 7v10"
          />
        </svg>
      </div>
    </section>
  )
}
