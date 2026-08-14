"use client";

import { useState } from "react";

const shops = [
  {
    city: "Ташкент",
    name: "PartGo Center",
    address: "Центр города",
    phone: "+998 90 111 22 33",
  },
  {
    city: "Самарканд",
    name: "PartGo Samarkand",
    address: "Центральный район",
    phone: "+998 90 222 33 44",
  },
  {
    city: "Бухара",
    name: "PartGo Bukhara",
    address: "Центральная улица",
    phone: "+998 90 333 44 55",
  },
];

export default function MapPage() {
  const [city, setCity] = useState("");

  const filtered = shops.filter((shop) =>
    shop.city.toLowerCase().includes(city.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=85"
          alt="Автомобиль"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 text-white">
            <p className="font-bold uppercase tracking-widest text-blue-400">
              PARTGO MAP
            </p>

            <h1 className="mt-4 text-5xl font-black">
              Найдите магазин
            </h1>

            <p className="mt-5 text-gray-200">
              Выберите город и найдите ближайший магазин PartGo.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Введите город..."
          className="w-full rounded-2xl border border-gray-200 bg-white px-6 py-5 outline-none focus:border-blue-600"
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {filtered.map((shop) => (
            <div
              key={shop.name}
              className="rounded-3xl bg-white p-7 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl">
                📍
              </div>

              <h2 className="mt-5 text-xl font-black">
                {shop.name}
              </h2>

              <p className="mt-2 text-gray-500">
                {shop.city}
              </p>

              <p className="mt-1 text-gray-500">
                {shop.address}
              </p>

              <p className="mt-4 font-bold">
                {shop.phone}
              </p>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  shop.city + " " + shop.address
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 block rounded-2xl bg-gray-950 py-4 text-center font-bold text-white hover:bg-blue-600"
              >
                Открыть на карте
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}