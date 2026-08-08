export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0d0d0d] border-t border-[#2c2c2c]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#e85d04] flex items-center justify-center">
                <span style={{ fontFamily: 'Barlow Condensed, sans-serif' }} className="text-white font-black text-xl leading-none">WB</span>
              </div>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                <div className="text-white font-black text-2xl leading-none tracking-wide uppercase">Warung Bengkel</div>
                <div className="text-[#e85d04] font-bold text-xs leading-none tracking-widest uppercase">Terpercaya Sejak 2017</div>
              </div>
            </div>
            <p className="text-[#f0ebe0]/40 text-sm leading-relaxed max-w-xs">
              Bengkel motor dan mobil dengan standar tinggi, harga jujur, dan mekanik berpengalaman di Bogor.
            </p>
          </div>

          {/* Links */}
          <div>
            <div
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              className="text-[#f0ebe0] font-700 text-sm uppercase tracking-widest mb-4"
            >
              Navigasi
            </div>
            <ul className="space-y-2">
              {['Beranda', 'Tentang', 'Layanan', 'Galeri', 'Testimoni', 'Kontak'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#f0ebe0]/40 hover:text-[#e85d04] text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <div
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              className="text-[#f0ebe0] font-700 text-sm uppercase tracking-widest mb-4"
            >
              Layanan
            </div>
            <ul className="space-y-2">
              {['Tune Up', 'Ganti Oli', 'Overhaul Mesin', 'AC Mobil', 'Kelistrikan', 'Kaki-kaki & Rem'].map((s) => (
                <li key={s} className="text-[#f0ebe0]/40 text-sm">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2c2c2c] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#f0ebe0]/30 text-xs">
            © {year} Warung Bengkel. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-1 text-[#f0ebe0]/20 text-xs">
            <span className="w-2 h-2 rounded-full bg-[#e85d04] animate-pulse" />
            <span>Buka Sekarang — Senin s/d Sabtu 08.00–20.00</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
