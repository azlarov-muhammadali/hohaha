export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-4">


          <div>

            <h2 className="text-2xl font-black">
              Part<span className="text-blue-600">Go</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Демонстрационный сервис для поиска
              автомобильных запчастей и магазинов.
            </p>

          </div>



          <div>

            <h3 className="font-bold">
              Навигация
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-500">

              <a
                href="/"
                className="block hover:text-blue-600"
              >
                Главная
              </a>

              <a
                href="/products"
                className="block hover:text-blue-600"
              >
                Товары
              </a>

              <a
                href="/reviews"
                className="block hover:text-blue-600"
              >
                Отзывы
              </a>

            </div>

          </div>



          <div>

            <h3 className="font-bold">
              Информация
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-500">

              <a
                href="/about"
                className="block hover:text-blue-600"
              >
                О нас
              </a>

              <a
                href="/contact"
                className="block hover:text-blue-600"
              >
                Контакты
              </a>

              <a
                href="/map"
                className="block hover:text-blue-600"
              >
                Магазины
              </a>

            </div>

          </div>



          <div>

            <h3 className="font-bold">
              Связаться с нами
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-500">

              <p>
                📞 +998 90 123 45 67
              </p>

              <p>
                ✉️ demo@partgo.com
              </p>

              <p>
                📍 Ташкент, Uzbekistan
              </p>

            </div>

          </div>

        </div>


        <div className="mt-10 border-t border-gray-100 pt-6 text-center text-xs text-gray-400">

          © 2026 PartGo.
          Все товары, магазины, пользователи и контакты
          на данном demo-сайте вымышленные.

        </div>

      </div>

    </footer>
  );
}