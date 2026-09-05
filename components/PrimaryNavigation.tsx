const navLinks = [
  { label: 'How we work', href: '#how-we-work', hasDropdown: false },
  { label: 'Selected work', href: '#selected-work', hasDropdown: false },
  { label: 'What we build', href: '#what-we-build', hasDropdown: false },
  { label: 'AI systems', href: '#ai-systems', hasDropdown: false },
]

export default function PrimaryNavigation() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 rounded-full bg-ink-mid/70 backdrop-blur-xl border border-white/10 shadow-lg">
        {/* Logo + Wordmark */}
        <a href="/" className="flex items-center gap-3">
          <svg className="w-7 h-7 text-white" viewBox="0 0 32 32" fill="none">
            <path d="M4 8L8 4L12 8L8 12L4 8Z" fill="currentColor" />
            <path d="M12 8L16 4L20 8L16 12L12 8Z" fill="currentColor" />
            <path d="M20 8L24 4L28 8L24 12L20 8Z" fill="currentColor" />
          </svg>
          <span className="font-heading text-lg font-bold text-white tracking-tight">
            DevMax
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
            >
              {link.label}
              {link.hasDropdown && (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Right Side CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
          >
            Sign in
          </a>
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-semibold text-ink-mid bg-white rounded-full hover:bg-white/90 transition-colors"
          >
            Get DevMax
          </a>
        </div>
      </nav>
    </div>
  )
}
