"use client";

import { useState } from "react";

export default function ContactsPage() {
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gray-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-bold uppercase tracking-widest text-blue-400">
            PARTGO
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Контакты
          </h1>

          <p className="mt-5 text-gray-400">
            Есть вопрос? Напишите нам.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8">
          <h2 className="text-2xl font-black">
            Свяжитесь с нами
          </h2>

          <div className="mt-8 space-y-5">
            <div>
              <p className="text-sm text-gray-400">Телефон</p>
              <p className="mt-1 font-bold">
                +998 90 000 00 00
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="mt-1 font-bold">
                support@partgo.example
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">График</p>
              <p className="mt-1 font-bold">
                Пн–Сб, 09:00–18:00
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="rounded-3xl bg-white p-8"
        >
          <h2 className="text-2xl font-black">
            Написать сообщение
          </h2>

          <input
            required
            placeholder="Ваше имя"
            className="mt-6 w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-blue-600"
          />

          <input
            required
            type="email"
            placeholder="Email"
            className="mt-4 w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-blue-600"
          />

          <textarea
            required
            placeholder="Сообщение"
            className="mt-4 h-32 w-full resize-none rounded-2xl border border-gray-200 p-4 outline-none focus:border-blue-600"
          />

          <button className="mt-4 rounded-2xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700">
            Отправить
          </button>

          {sent && (
            <p className="mt-4 font-bold text-green-600">
              Сообщение отправлено!
            </p>
          )}
        </form>
      </section>
    </main>
  );
}