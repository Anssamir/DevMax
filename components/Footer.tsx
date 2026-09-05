const footerNavLinks = {
  services: [
    { label: 'Product Strategy', href: '#' },
    { label: 'UX/UI Design', href: '#' },
    { label: 'Development', href: '#' },
    { label: 'AI Systems', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Work', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  connect: [
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-white pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-4 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-mid" />
              <span className="font-heading text-xl font-bold">DevMax</span>
            </div>
            <p className="text-sm text-neutral-soft leading-relaxed">
              Full-stack product studio combining strategy, design, engineering, and AI.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="space-y-4">
              <h4 className="font-heading font-bold">Services</h4>
              <ul className="space-y-2 text-sm text-neutral-soft">
                {footerNavLinks.services.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading font-bold">Company</h4>
              <ul className="space-y-2 text-sm text-neutral-soft">
                {footerNavLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading font-bold">Connect</h4>
              <ul className="space-y-2 text-sm text-neutral-soft">
                {footerNavLinks.connect.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-intense">
          <p className="text-xs text-neutral-soft">
            © 2026 DevMax. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-neutral-soft hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-neutral-soft hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
