export default function About() {
  return (
    <section id="tentang" className="bg-[#161616] py-24 border-t border-[#2c2c2c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden bg-[#1e1e1e]">
              <img
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=700&h=500&fit=crop&auto=format"
                alt="Mekanik bengkel sedang bekerja"
                className="w-full h-80 md:h-[480px] object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 border border-[#2c2c2c]" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#e85d04] p-6 text-center">
              <div
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                className="text-white font-900 text-5xl leading-none"
              >
                9
              </div>
              <div className="text-white/80 text-xs uppercase tracking-widest mt-1">Tahun<br />Pengalaman</div>
            </div>
          </div>

          {/* Text side */}
          <div className="pt-8 md:pt-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#e85d04]" />
              <span
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                className="text-[#e85d04] text-sm font-700 uppercase tracking-[0.25em]"
              >
                Tentang Kami
              </span>
            </div>

            <h2
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              className="text-[#f0ebe0] font-900 text-5xl md:text-6xl uppercase leading-tight mb-6"
            >
              Bengkel Keluarga<br />
              <span className="text-[#e85d04]">Bukan Sekadar</span><br />
              Bisnis
            </h2>

            <p className="text-[#f0ebe0]/60 text-base leading-relaxed mb-5">
              Warung Bengkel didirikan oleh Pak Komaruddin pada tahun 2017 di Jl. Raya Serang, Tangerang. Bermula dari garasi kecil dengan satu lift kendaraan, kini kami memiliki workshop seluas 400 m² dengan peralatan modern dan 12 mekanik bersertifikat.
            </p>
            <p className="text-[#f0ebe0]/60 text-base leading-relaxed mb-8">
              Kami percaya bengkel yang baik bukan soal alat canggih saja, tapi soal kejujuran — kami tidak akan pernah menyarankan perbaikan yang tidak perlu. Kepercayaan Anda adalah bahan bakar kami.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'Mekanik Bersertifikat',
                'Garansi Pengerjaan 30 Hari',
                'Spare Part Original & KW Super',
                'Harga Transparan & Terjangkau',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-4 h-4 bg-[#e85d04] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[#f0ebe0]/70 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#kontak"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              className="bg-[#e85d04] hover:bg-[#f48c06] text-white font-800 text-base px-8 py-4 uppercase tracking-widest transition-colors inline-block"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
