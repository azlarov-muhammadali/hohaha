export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=85"
          alt="Автомобильная мастерская"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 text-white">
            <p className="font-bold uppercase tracking-widest text-blue-400">
              PARTGO
            </p>

            <h1 className="mt-4 text-5xl font-black">
              О компании
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-gray-200">
              PartGo — демонстрационный каталог автомобильных
              запчастей, созданный для удобного поиска деталей.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-gray-50 p-8">
            <div className="text-4xl">🔎</div>
            <h2 className="mt-5 text-xl font-black">
              Удобный поиск
            </h2>
            <p className="mt-3 text-gray-500">
              Ищите детали по автомобилю, компании или категории.
            </p>
          </div>

          <div className="rounded-3xl bg-gray-50 p-8">
            <div className="text-4xl">🚗</div>
            <h2 className="mt-5 text-xl font-black">
              Много автомобилей
            </h2>
            <p className="mt-3 text-gray-500">
              Каталог связан с моделями автомобилей и производителями.
            </p>
          </div>

          <div className="rounded-3xl bg-gray-50 p-8">
            <div className="text-4xl">🛒</div>
            <h2 className="mt-5 text-xl font-black">
              Корзина
            </h2>
            <p className="mt-3 text-gray-500">
              Добавляйте понравившиеся запчасти в корзину.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}