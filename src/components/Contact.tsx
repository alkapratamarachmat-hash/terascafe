import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nama: '', telp: '', kendaraan: '', pesan: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ nama: '', telp: '', kendaraan: '', pesan: '' })
  }

  const inputClass =
    'w-full bg-[#1e1e1e] border border-[#2c2c2c] focus:border-[#e85d04] outline-none px-4 py-3 text-[#f0ebe0] text-sm placeholder-[#555] transition-colors'

  return (
    <section id="kontak" className="bg-[#161616] py-24 border-t border-[#2c2c2c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info side */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#e85d04]" />
              <span
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                className="text-[#e85d04] text-sm font-700 uppercase tracking-[0.25em]"
              >
                Hubungi Kami
              </span>
            </div>
            <h2
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              className="text-[#f0ebe0] font-900 text-5xl md:text-6xl uppercase leading-tight mb-8"
            >
              Siap Bantu<br />
              <span className="text-[#e85d04]">Kendaraan Anda</span>
            </h2>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: '📍',
                  label: 'Alamat',
                  value: 'Jl. Raya Serang KM.28',
                },
                {
                  icon: '📞',
                  label: 'Telepon / WhatsApp',
                  value: '0882-9475-6430',
                },
                {
                  icon: '🕐',
                  label: 'Jam Operasional',
                  value: 'Senin – Sabtu: 08.00 – 20.00\nMinggu: 08.00 – 16.00',
                },
                {
                  icon: '📧',
                  label: 'Email',
                  value: 'raka@warungbengkel.id',
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#e85d04]/10 border border-[#e85d04]/30 flex items-center justify-center flex-shrink-0 text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                      className="text-[#e85d04] text-xs font-700 uppercase tracking-widest mb-0.5"
                    >
                      {item.label}
                    </div>
                    <div className="text-[#f0ebe0]/70 text-sm whitespace-pre-line">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/6288294756430"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1da851] text-white font-800 text-base px-6 py-4 uppercase tracking-widest transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat via WhatsApp
            </a>
          </div>

          {/* Form side */}
          <div>
            <div className="bg-[#0d0d0d] border border-[#2c2c2c] p-8">
              <h3
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                className="text-[#f0ebe0] font-800 text-2xl uppercase tracking-wide mb-6"
              >
                Booking Servis
              </h3>

              {sent && (
                <div className="bg-[#e85d04]/10 border border-[#e85d04]/40 text-[#e85d04] px-4 py-3 text-sm mb-6">
                  Pesan terkirim! Kami akan menghubungi Anda segera.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#f0ebe0]/50 text-xs uppercase tracking-widest mb-1 block">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Budi Santoso"
                      value={form.nama}
                      onChange={(e) => setForm({ ...form, nama: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-[#f0ebe0]/50 text-xs uppercase tracking-widest mb-1 block">
                      No. WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812-xxxx-xxxx"
                      value={form.telp}
                      onChange={(e) => setForm({ ...form, telp: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[#f0ebe0]/50 text-xs uppercase tracking-widest mb-1 block">
                    Jenis Kendaraan
                  </label>
                  <select
                    required
                    value={form.kendaraan}
                    onChange={(e) => setForm({ ...form, kendaraan: e.target.value })}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="">Pilih jenis kendaraan...</option>
                    <option>Motor Matic</option>
                    <option>Motor Bebek</option>
                    <option>Motor Sport</option>
                    <option>Mobil MPV / Keluarga</option>
                    <option>Mobil SUV</option>
                    <option>Mobil Sedan</option>
                    <option>Kendaraan Niaga</option>
                  </select>
                </div>
                <div>
                  <label className="text-[#f0ebe0]/50 text-xs uppercase tracking-widest mb-1 block">
                    Keluhan / Layanan yang Diinginkan
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Contoh: Mesin bunyi kasar, minta ganti oli sekalian..."
                    value={form.pesan}
                    onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  className="w-full bg-[#e85d04] hover:bg-[#f48c06] text-white font-800 text-base py-4 uppercase tracking-widest transition-colors"
                >
                  Kirim Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
