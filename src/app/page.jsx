"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 font-bold text-blue-500">PARTGO AUTO PARTS</p>

          <h1 className="text-5xl font-black">
            Автозапчасти
            <br />
            для вашего автомобиля
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Большой каталог автозапчастей для разных автомобилей.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/products"
              className="rounded-xl bg-blue-600 px-6 py-4 font-bold text-white"
            >
              Смотреть товары
            </a>

            <a
              href="/cart"
              className="rounded-xl border border-white/30 px-6 py-4 font-bold text-white"
            >
              Корзина
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-blue-600">КАТЕГОРИИ</p>

          <h2 className="mt-2 text-4xl font-black text-slate-950">
            Найдите деталь по категории
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border bg-white p-7">
              <div className="text-4xl">⚙️</div>
              <h3 className="mt-5 text-xl font-black">Двигатель</h3>
              <p className="mt-3 text-slate-500">
                Детали двигателя и системы питания
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-7">
              <div className="text-4xl">🛑</div>
              <h3 className="mt-5 text-xl font-black">Тормоза</h3>
              <p className="mt-3 text-slate-500">Колодки, диски и суппорты</p>
            </div>

            <div className="rounded-3xl border bg-white p-7">
              <div className="text-4xl">🔧</div>
              <h3 className="mt-5 text-xl font-black">Фильтры</h3>
              <p className="mt-3 text-slate-500">
                Масляные, воздушные и топливные
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-7">
              <div className="text-4xl">⚡</div>
              <h3 className="mt-5 text-xl font-black">Электрика</h3>
              <p className="mt-3 text-slate-500">
                Аккумуляторы, лампы и электроника
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-7">
              <div className="text-4xl">🔩</div>
              <h3 className="mt-5 text-xl font-black">Подвеска</h3>
              <p className="mt-3 text-slate-500">
                Амортизаторы и элементы подвески
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-7">
              <div className="text-4xl">🚘</div>
              <h3 className="mt-5 text-xl font-black">Кузов</h3>
              <p className="mt-3 text-slate-500">Детали кузова и освещение</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-blue-600 p-10 text-white">
            <h2 className="text-4xl font-black">150+ автозапчастей</h2>

            <p className="mt-4 text-blue-100">
              Найдите нужную деталь в нашем каталоге.
            </p>

            <a
              href="/products"
              className="mt-8 inline-block rounded-xl bg-white px-7 py-4 font-bold text-blue-600"
            >
              Открыть каталог
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
