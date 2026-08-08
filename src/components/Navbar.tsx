import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Kontak', href: '#kontak' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0d0d0d]/95 backdrop-blur-sm border-b border-[#2c2c2c]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#e85d04] flex items-center justify-center">
            <span style={{ fontFamily: 'Barlow Condensed, sans-serif' }} className="text-white font-black text-lg leading-none">WB</span>
          </div>
          <div style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            <div className="text-white font-black text-xl leading-none tracking-wide uppercase">Warung</div>
            <div className="text-[#e85d04] font-bold text-sm leading-none tracking-widest uppercase">Bengkel</div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              className="text-[#f0ebe0]/70 hover:text-[#e85d04] transition-colors text-base font-600 tracking-widest uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontak"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            className="bg-[#e85d04] hover:bg-[#f48c06] text-white font-700 text-sm px-5 py-2 uppercase tracking-widest transition-colors"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#f0ebe0] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#f0ebe0] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#f0ebe0] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-[#2c2c2c] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              className="text-[#f0ebe0]/70 hover:text-[#e85d04] text-lg font-600 uppercase tracking-widest transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
