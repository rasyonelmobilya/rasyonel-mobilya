"use client"

import { useState } from "react"

export default function Home() {
  const [genislik, setGenislik] = useState(200)
  const [yukseklik, setYukseklik] = useState(240)
  const [derinlik, setDerinlik] = useState(60)
  const [kapak, setKapak] = useState(4)
  const [cekmece, setCekmece] = useState(2)
  const [ayna, setAyna] = useState(false)

  const fiyat =
    genislik * 45 +
    yukseklik * 25 +
    derinlik * 15 +
    kapak * 1500 +
    cekmece * 1200 +
    (ayna ? 6000 : 0)

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        <div className="p-8 bg-neutral-50 border-r space-y-5">

          <div>
            <h1 className="text-3xl font-bold text-neutral-800">
              Rasyonel Mobilya
            </h1>

            <p className="text-neutral-500 mt-2">
              Özel Ölçü Mobilya Teklif Sistemi
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">

            <div>
              <label className="text-sm font-medium">
                Genişlik
              </label>

              <input
                type="number"
                value={genislik}
                onChange={(e) => setGenislik(Number(e.target.value))}
                className="w-full mt-1 border rounded-2xl p-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Yükseklik
              </label>

              <input
                type="number"
                value={yukseklik}
                onChange={(e) => setYukseklik(Number(e.target.value))}
                className="w-full mt-1 border rounded-2xl p-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Derinlik
              </label>

              <input
                type="number"
                value={derinlik}
                onChange={(e) => setDerinlik(Number(e.target.value))}
                className="w-full mt-1 border rounded-2xl p-3"
              />
            </div>

          </div>

          <div className="grid grid-cols-2 gap-3">

            <div>
              <label className="text-sm font-medium">
                Kapak Sayısı
              </label>

              <input
                type="number"
                value={kapak}
                onChange={(e) => setKapak(Number(e.target.value))}
                className="w-full mt-1 border rounded-2xl p-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Çekmece Sayısı
              </label>

              <input
                type="number"
                value={cekmece}
                onChange={(e) => setCekmece(Number(e.target.value))}
                className="w-full mt-1 border rounded-2xl p-3"
              />
            </div>

          </div>

          <div className="flex items-center justify-between border rounded-2xl p-4 bg-white">

            <div>
              <p className="font-medium text-neutral-700">
                Aynalı Kapak
              </p>

              <p className="text-sm text-neutral-500">
                + ₺6.000
              </p>
            </div>

            <button
              onClick={() => setAyna(!ayna)}
              className={`w-14 h-8 rounded-full relative transition ${
                ayna ? "bg-green-500" : "bg-neutral-300"
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 rounded-full bg-white transition ${
                  ayna ? "right-1" : "left-1"
                }`}
              />
            </button>

          </div>

          <button className="w-full bg-green-600 text-white rounded-2xl p-4 text-lg font-semibold hover:opacity-90 transition">
            WhatsApp Teklif Gönder
          </button>

        </div>

        <div className="p-8 flex items-center justify-center bg-white">

          <div className="w-full max-w-sm">

            <div className="text-center mb-6">

              <h2 className="text-2xl font-bold text-neutral-800">
                Canlı Önizleme
              </h2>

              <p className="text-neutral-500 text-sm mt-1">
                Ölçü girdikçe fiyat değişir.
              </p>

            </div>

            <div className="relative mx-auto w-72 h-[420px] bg-[#d8c3a5] rounded-xl border-[10px] border-[#b08968] shadow-xl overflow-hidden">

              <div
                className="absolute inset-0 grid"
                style={{
                  gridTemplateColumns: `repeat(${kapak}, 1fr)`
                }}
              >
                {Array.from({ length: kapak }).map((_, i) => (
                  <div
                    key={i}
                    className="border-r border-[#8d6e63]"
                  />
                ))}
              </div>

            </div>

            <div className="mt-8 bg-neutral-100 rounded-2xl p-5 text-center shadow-inner">

              <p className="text-neutral-500 text-sm">
                Tahmini Fiyat
              </p>

              <h3 className="text-4xl font-bold text-neutral-800 mt-2">
                ₺{fiyat.toLocaleString("tr-TR")}
              </h3>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}