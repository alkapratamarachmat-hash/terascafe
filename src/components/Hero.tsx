export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-[#0d0d0d]">
        <img
          src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1600&h=900&fit=crop&auto=format"
          alt="Mekanik bekerja di bengkel"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
      </div>

      {/* Orange accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e85d04]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#e85d04]" />
            <span
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              className="text-[#e85d04] text-sm font-700 uppercase tracking-[0.25em]"
            >
              Bengkel Terpercaya Sejak 2017
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            className="text-[#f0ebe0] font-900 leading-none uppercase mb-6"
          >
            <span className="block text-7xl md:text-9xl">Servis</span>
            <span className="block text-7xl md:text-9xl text-[#e85d04]">Kendaraan</span>
            <span className="block text-7xl md:text-9xl">Anda</span>
          </h1>

          {/* Subheading */}
          <p className="text-[#f0ebe0]/60 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
            Bengkel lengkap dengan mekanik berpengalaman. Kami siap tangani motor dan mobil Anda — dari tune up, ganti oli, sampai overhaul mesin.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#kontak"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              className="bg-[#e85d04] hover:bg-[#f48c06] text-white font-800 text-lg px-8 py-4 uppercase tracking-widest transition-colors inline-block"
            >
              Booking Sekarang
            </a>
            <a
              href="#layanan"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              className="border border-[#f0ebe0]/30 hover:border-[#e85d04] hover:text-[#e85d04] text-[#f0ebe0] font-700 text-lg px-8 py-4 uppercase tracking-widest transition-colors inline-block"
            >
              Lihat Layanan
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2c2c2c]">
          {[
            { num: '9+', label: 'Tahun Pengalaman' },
            { num: '5.000+', label: 'Pelanggan Puas' },
            { num: '12', label: 'Mekanik Terlatih' },
            { num: '24/7', label: 'Siap Melayani' },
          ].map((s) => (
            <div key={s.label} className="bg-[#161616] px-6 py-5">
              <div
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                className="text-[#e85d04] font-900 text-4xl leading-none mb-1"
              >
                {s.num}
              </div>
              <div className="text-[#f0ebe0]/50 text-sm uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
