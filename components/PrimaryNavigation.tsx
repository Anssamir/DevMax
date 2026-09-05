const navLinks = [
  { label: 'About us', href: '#about', hasDropdown: false },
  { label: 'How we work', href: '#how-we-work', hasDropdown: false },
  { label: 'Selected work', href: '#selected-work', hasDropdown: false },
  { label: 'What we build', href: '#what-we-build', hasDropdown: false },
  { label: 'AI systems', href: '#ai-systems', hasDropdown: false },
]

export default function PrimaryNavigation() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 rounded-full bg-white/20 backdrop-blur-2xl border border-black/10 shadow-lg">
        {/* Logo + Wordmark */}
        <a href="/" className="flex items-center gap-3">
          <svg className="w-7 h-7 text-black" viewBox="0 0 32 32" fill="none">
            <path d="M4 8L8 4L12 8L8 12L4 8Z" fill="currentColor" />
            <path d="M12 8L16 4L20 8L16 12L12 8Z" fill="currentColor" />
            <path d="M20 8L24 4L28 8L24 12L20 8Z" fill="currentColor" />
          </svg>
          <span className="font-heading text-lg font-bold text-black tracking-tight">
            DevMax
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link flex items-center gap-1 px-4 py-2 text-sm font-medium text-black/70 hover:text-[#79A125] hover:font-bold transition-all rounded-full"
            >
              <span>{link.label}</span>
              {link.hasDropdown && (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Right Side CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-semibold text-[#101410] bg-white border border-[#101410] rounded-full hover:bg-[#ACCE3D] hover:text-white hover:border-[#ACCE3D] transition-all duration-300"
          >
            Get started
          </a>
        </div>
      </nav>
    </div>
  )
}
