"use client";

import { useState } from "react";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Александр",
      rating: 5,
      text: "Хороший магазин, быстро нашёл нужную запчасть.",
    },
    {
      id: 2,
      name: "Дмитрий",
      rating: 4,
      text: "Большой выбор автозапчастей. Всё удобно.",
    },
    {
      id: 3,
      name: "Мухаммад",
      rating: 5,
      text: "Понравился сайт и удобный каталог.",
    },
  ]);

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  function addReview(e) {
    e.preventDefault();

    if (!name.trim() || !text.trim()) {
      alert("Заполните имя и отзыв");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      rating: Number(rating),
      text: text.trim(),
    };

    setReviews((prev) => [newReview, ...prev]);

    setName("");
    setText("");
    setRating(5);
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-blue-600 font-semibold mb-2">
            PartGo
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Отзывы клиентов
          </h1>

          <p className="text-gray-500 max-w-2xl">
            Узнайте, что думают наши клиенты о PartGo,
            автозапчастях и работе нашего сайта.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-sm border p-6 h-fit">
            <h2 className="text-2xl font-bold mb-2">
              Оставить отзыв
            </h2>

            <p className="text-gray-500 text-sm mb-6">
              Поделитесь своим мнением о PartGo.
            </p>

            <form onSubmit={addReview} className="space-y-4">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Ваше имя
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Введите имя"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Оценка
                </label>

                <select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="5">★★★★★ — Отлично</option>
                  <option value="4">★★★★☆ — Хорошо</option>
                  <option value="3">★★★☆☆ — Нормально</option>
                  <option value="2">★★☆☆☆ — Плохо</option>
                  <option value="1">★☆☆☆☆ — Очень плохо</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Отзыв
                </label>

                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Напишите свой отзыв..."
                  rows={5}
                  className="w-full border rounded-xl px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
              >
                Опубликовать отзыв
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">
                  Все отзывы
                </h2>

                <p className="text-gray-500">
                  Отзывов: {reviews.length}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white border rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-bold text-lg">
                        {review.name}
                      </h3>

                      <div className="text-yellow-500 text-lg">
                        {"★".repeat(review.rating)}
                        <span className="text-gray-300">
                          {"★".repeat(5 - review.rating)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-7">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 text-center">
          <h2 className="text-3xl font-bold mb-3">
            PartGo — запчасти для вашего автомобиля
          </h2>

          <p className="text-gray-400">
            Найдите нужную деталь быстро и удобно.
          </p>
        </div>
      </section>
    </main>
  );
}