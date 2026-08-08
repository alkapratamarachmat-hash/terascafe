const reviews = [
  {
    name: 'Budi Santoso',
    job: 'Pengemudi Ojek Online',
    text: 'Udah 3 tahun langganan di sini. Motor Vario gue sering kena servis berat, tapi hasilnya selalu memuaskan. Harga juga masuk akal, nggak pernah dibohongin soal spare part.',
    rating: 5,
    avatar: 'BS',
  },
  {
    name: 'Ibu Ratna Dewi',
    job: 'Ibu Rumah Tangga',
    text: 'AC mobil saya rusak mendadak, langsung bawa ke Warung Bengkel. Dikerjain cepat dan hasilnya dingin banget sekarang! Orangnya ramah dan menjelaskan masalahnya dengan detail.',
    rating: 5,
    avatar: 'RD',
  },
  {
    name: 'Rizal Maulana',
    job: 'Wiraswasta',
    text: 'Ganti kampas rem sama balancing ban. Prosesnya cepat, sekitar 1.5 jam. Bengkel bersih dan ada ruang tunggu nyaman. Harga sesuai yang dikasih di awal, tidak ada biaya tambahan.',
    rating: 5,
    avatar: 'RM',
  },
  {
    name: 'Pak Agus Setiawan',
    job: 'Karyawan Swasta',
    text: 'Mobil avanza saya bunyi aneh di bagian mesin. Diagnosa di sini akurat dan tepat sasaran. Overhaul selesai 2 hari, mesin langsung kembali halus. Sangat direkomendasikan!',
    rating: 5,
    avatar: 'AS',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill={i < count ? '#f48c06' : '#2c2c2c'}
        >
          <path d="M7 1l1.55 3.14L12 4.63l-2.5 2.44.59 3.44L7 8.77l-3.09 1.74.59-3.44L2 4.63l3.45-.49L7 1z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-[#0d0d0d] py-24 border-t border-[#2c2c2c]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#e85d04]" />
              <span
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                className="text-[#e85d04] text-sm font-700 uppercase tracking-[0.25em]"
              >
                Testimoni
              </span>
            </div>
            <h2
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              className="text-[#f0ebe0] font-900 text-5xl md:text-7xl uppercase leading-tight"
            >
              Kata Mereka<br />
              <span className="text-[#e85d04]">Yang Sudah Percaya</span>
            </h2>
          </div>
          <div className="text-right">
            <div
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              className="text-[#e85d04] font-900 text-5xl"
            >
              4.9<span className="text-[#f0ebe0]/30">/5</span>
            </div>
            <StarRating count={5} />
            <div className="text-[#f0ebe0]/40 text-xs mt-1 uppercase tracking-widest">dari 5.000+ ulasan</div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 gap-px bg-[#2c2c2c]">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#0d0d0d] p-8 hover:bg-[#161616] transition-colors duration-300">
              {/* Quote mark */}
              <div
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                className="text-[#e85d04]/20 font-900 text-8xl leading-none mb-4 -mt-4"
              >
                "
              </div>
              <p className="text-[#f0ebe0]/70 text-base leading-relaxed mb-6 -mt-6">
                {r.text}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#e85d04] flex items-center justify-center flex-shrink-0">
                    <span
                      style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                      className="text-white font-800 text-sm"
                    >
                      {r.avatar}
                    </span>
                  </div>
                  <div>
                    <div
                      style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                      className="text-[#f0ebe0] font-700 text-base uppercase tracking-wide"
                    >
                      {r.name}
                    </div>
                    <div className="text-[#f0ebe0]/40 text-xs uppercase tracking-widest">{r.job}</div>
                  </div>
                </div>
                <StarRating count={r.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
