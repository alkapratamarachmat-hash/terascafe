const services = [
  {
    icon: '🔧',
    title: 'Tune Up & Servis Berkala',
    desc: 'Periksa dan setel mesin, busi, filter udara, filter bensin, dan komponen vital lainnya sesuai jadwal servis pabrikan.',
    price: 'Mulai Rp 85.000',
  },
  {
    icon: '🛢️',
    title: 'Ganti Oli Mesin',
    desc: 'Penggantian oli mesin dengan produk premium Shell, Castrol, Motul, atau Yamalube sesuai rekomendasi kendaraan Anda.',
    price: 'Mulai Rp 55.000',
  },
  {
    icon: '🔩',
    title: 'Overhaul Mesin',
    desc: 'Pembongkaran dan rekondisi mesin secara menyeluruh — piston, ring, klep, gasket. Dijamin kembali bertenaga.',
    price: 'Mulai Rp 1.500.000',
  },
  {
    icon: '⚡',
    title: 'Servis Kelistrikan',
    desc: 'Diagnosa dan perbaikan sistem kelistrikan: aki, dinamo, starter, lampu, dan sistem injeksi EFI/FI.',
    price: 'Mulai Rp 100.000',
  },
  {
    icon: '❄️',
    title: 'AC Mobil',
    desc: 'Servis AC lengkap — isi freon, bersihkan kondensor dan evaporator, ganti kompresor dan komponen AC lainnya.',
    price: 'Mulai Rp 150.000',
  },
  {
    icon: '🔄',
    title: 'Kaki-kaki & Rem',
    desc: 'Spooring, balancing, ganti kampas rem, cakram, shockbreaker, tie rod, ball joint, dan komponen suspensi.',
    price: 'Mulai Rp 70.000',
  },
]

export default function Services() {
  return (
    <section id="layanan" className="bg-[#0d0d0d] py-24 border-t border-[#2c2c2c]">
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
                Layanan Kami
              </span>
            </div>
            <h2
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              className="text-[#f0ebe0] font-900 text-5xl md:text-7xl uppercase leading-tight"
            >
              Semua Ada<br />
              <span className="text-[#e85d04]">Di Sini</span>
            </h2>
          </div>
          <p className="text-[#f0ebe0]/50 text-base max-w-sm md:text-right">
            Dari motor harian sampai mobil keluarga — kami tangani semua jenis kendaraan dengan profesional.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2c2c2c]">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-[#0d0d0d] p-8 group hover:bg-[#161616] transition-colors duration-300 border-l-2 border-l-transparent hover:border-l-[#e85d04]"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                className="text-[#f0ebe0] font-800 text-2xl uppercase mb-3 group-hover:text-[#e85d04] transition-colors"
              >
                {s.title}
              </h3>
              <p className="text-[#f0ebe0]/50 text-sm leading-relaxed mb-6">{s.desc}</p>
              <div
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                className="text-[#f48c06] font-700 text-lg uppercase tracking-wide"
              >
                {s.price}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-[#f0ebe0]/30 text-sm text-center mt-8">
          * Harga dapat berubah tergantung jenis kendaraan dan kondisi. Hubungi kami untuk estimasi gratis.
        </p>
      </div>
    </section>
  )
}
