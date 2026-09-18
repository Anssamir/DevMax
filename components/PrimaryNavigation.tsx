'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'About us', href: '#about', hasDropdown: false },
  { label: 'How we work', href: '#how-we-work', hasDropdown: false },
  { label: 'Selected work', href: '#selected-work', hasDropdown: false },
  { label: 'What we build', href: '#what-we-build', hasDropdown: false },
  { label: 'AI systems', href: '#ai-systems', hasDropdown: false },
]

export default function PrimaryNavigation() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    // Growing past the breakpoint brings the inline links back, so the panel
    // has nothing left to do.
    const desktop = window.matchMedia('(min-width: 1024px)')
    const onBreakpoint = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onBreakpoint)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onBreakpoint)
    }
  }, [open])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      {/* Catches taps outside the panel while it is open. */}
      {open && (
        <div
          className="fixed inset-0 -z-10 lg:hidden"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 rounded-full bg-white/20 backdrop-blur-2xl border border-black/10 shadow-lg">
        {/* Logo + Wordmark */}
        <a href="/" className="flex items-center">
          <Image
            src="/DevMax logo.svg"
            alt="DevMax"
            width={120}
            height={32}
            className="h-7 w-auto sm:h-8"
            priority
          />
        </a>

        {/* Center Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
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

        {/* Right Side CTA + menu toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex px-5 py-2 text-sm font-semibold text-[#101410] bg-white border border-[#101410] rounded-full hover:bg-[#ACCE3D] hover:text-white hover:border-[#ACCE3D] transition-all duration-300"
          >
            Get started
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="primary-nav-menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 text-[#101410] transition-colors hover:bg-white"
          >
            {/* Three bars that fold into a cross while the panel is open. */}
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                  open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0.5'
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                  open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0.5'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile / tablet panel */}
      <div
        id="primary-nav-menu"
        className={`lg:hidden max-w-7xl mx-auto mt-2 origin-top overflow-hidden rounded-3xl border border-black/10 bg-white/80 shadow-lg backdrop-blur-2xl transition-all duration-300 ${
          open
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <div className="flex flex-col p-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-medium text-black/75 transition-colors hover:bg-black/5 hover:text-[#79A125]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="sm:hidden mt-2 rounded-full border border-[#101410] bg-white px-5 py-3 text-center text-sm font-semibold text-[#101410] transition-all duration-300 hover:border-[#ACCE3D] hover:bg-[#ACCE3D] hover:text-white"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  )
}
