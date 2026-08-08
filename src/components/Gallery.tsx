const photos = [
  {
    src: 'https://images.unsplash.com/photo-1504222490345-c075b7c1f0f0?w=600&h=400&fit=crop&auto=format',
    alt: 'Mekanik servis mesin mobil',
    caption: 'Overhaul Mesin',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format',
    alt: 'Area workshop bengkel',
    caption: 'Workshop Utama',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=400&fit=crop&auto=format',
    alt: 'Penggantian ban kendaraan',
    caption: 'Ganti Ban',
  },
  {
    src: 'https://images.unsplash.com/photo-1620221049069-7a4d5fa9b95d?w=600&h=800&fit=crop&auto=format',
    alt: 'Mekanik memeriksa kendaraan',
    caption: 'Pengecekan Menyeluruh',
  },
  {
    src: 'https://images.unsplash.com/photo-1547038577-da80abbc4f19?w=600&h=400&fit=crop&auto=format',
    alt: 'Alat-alat bengkel profesional',
    caption: 'Peralatan Modern',
  },
  {
    src: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&h=400&fit=crop&auto=format',
    alt: 'Servis sistem rem kendaraan',
    caption: 'Servis Rem',
  },
]

export default function Gallery() {
  return (
    <section id="galeri" className="bg-[#161616] py-24 border-t border-[#2c2c2c]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#e85d04]" />
            <span
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              className="text-[#e85d04] text-sm font-700 uppercase tracking-[0.25em]"
            >
              Galeri
            </span>
          </div>
          <h2
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            className="text-[#f0ebe0] font-900 text-5xl md:text-7xl uppercase leading-tight"
          >
            Kerja Kami,<br />
            <span className="text-[#e85d04]">Bukti Nyata</span>
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group bg-[#1e1e1e] ${
                i === 3 ? 'row-span-2' : ''
              }`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  i === 3 ? 'h-full' : 'h-48 md:h-56'
                }`}
                style={i === 3 ? { minHeight: '296px' } : {}}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#e85d04]/0 group-hover:bg-[#e85d04]/20 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d0d0d]/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  className="text-white font-700 text-sm uppercase tracking-widest"
                >
                  {p.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
