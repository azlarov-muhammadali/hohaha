"use client";

import { useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import {
  parts,
  companies,
  cars,
  categories,
} from "@/data/database";

import { useCart } from "../components/CartProvider";

function ProductsContent() {
  const searchParams = useSearchParams();

  const initialCategory = searchParams.get("category") || "";
  const initialCompany = searchParams.get("company") || "";
  const initialCar = searchParams.get("car") || "";

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState(initialCategory);

  const [selectedCompany, setSelectedCompany] =
    useState(initialCompany);

  const [selectedCar, setSelectedCar] =
    useState(initialCar);

  const { addToCart, cart } = useCart();

  // Фильтрация товаров
  const filteredParts = useMemo(() => {
    return parts.filter((part) => {
      const text = `
        ${part.name || ""}
        ${part.company || ""}
        ${part.car || ""}
        ${part.category || ""}
      `.toLowerCase();

      const searchMatch = text.includes(search.toLowerCase());

      const categoryMatch =
        !selectedCategory ||
        part.category === selectedCategory;

      const companyMatch =
        !selectedCompany ||
        part.company === selectedCompany;

      const carMatch =
        !selectedCar ||
        part.car === selectedCar;

      return (
        searchMatch &&
        categoryMatch &&
        companyMatch &&
        carMatch
      );
    });
  }, [
    search,
    selectedCategory,
    selectedCompany,
    selectedCar,
  ]);

  // Добавление товара в корзину
  function handleAddToCart(part) {
    addToCart(part, 1);
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER CATALOG */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div className="max-w-3xl">

              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Каталог PartGo
              </p>

              <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Найдите нужную запчасть
              </h1>

              <p className="mt-4 text-gray-500">
                Ищите деталь по названию, автомобилю,
                компании или категории.
              </p>

            </div>

            <Link
              href="/cart"
              className="flex w-fit items-center gap-3 rounded-2xl bg-gray-950 px-5 py-4 font-bold text-white transition hover:bg-blue-600"
            >
              <span>🛒</span>

              <span>Корзина</span>

              <span className="rounded-full bg-white px-2.5 py-1 text-xs font-black text-gray-950">
                {cart.length}
              </span>
            </Link>

          </div>

          {/* SEARCH */}
          <div className="mt-8">

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Например: Toyota Camry, тормозные колодки..."
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 text-base outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />

          </div>

        </div>
      </section>


      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 lg:grid-cols-[250px_1fr]">


          {/* SIDEBAR */}
          <aside className="space-y-6">

            {/* CATEGORIES */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5">

              <h2 className="font-bold">
                Категории
              </h2>

              <div className="mt-4 space-y-2">

                <button
                  onClick={() => setSelectedCategory("")}
                  className={`w-full rounded-xl px-3 py-2.5 text-left text-sm ${
                    !selectedCategory
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Все категории
                </button>

                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() =>
                      setSelectedCategory(category.name)
                    }
                    className={`w-full rounded-xl px-3 py-2.5 text-left text-sm ${
                      selectedCategory === category.name
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {category.icon} {category.name}
                  </button>
                ))}

              </div>

            </div>


            {/* COMPANIES */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5">

              <h2 className="font-bold">
                Производитель
              </h2>

              <div className="mt-4 space-y-2">

                <button
                  onClick={() => {
                    setSelectedCompany("");
                    setSelectedCar("");
                  }}
                  className={`w-full rounded-xl px-3 py-2.5 text-left text-sm ${
                    !selectedCompany
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Все компании
                </button>

                {companies.map((company) => (
                  <button
                    key={company.id}
                    onClick={() => {
                      setSelectedCompany(company.name);
                      setSelectedCar("");
                    }}
                    className={`w-full rounded-xl px-3 py-2.5 text-left text-sm ${
                      selectedCompany === company.name
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {company.name}
                  </button>
                ))}

              </div>

            </div>


            {/* CARS */}
            {selectedCompany && (
              <div className="rounded-2xl border border-gray-200 bg-white p-5">

                <h2 className="font-bold">
                  Автомобиль
                </h2>

                <select
                  value={selectedCar}
                  onChange={(e) =>
                    setSelectedCar(e.target.value)
                  }
                  className="mt-4 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none focus:border-blue-500"
                >

                  <option value="">
                    Все модели
                  </option>

                  {cars
                    .filter(
                      (car) =>
                        car.company === selectedCompany
                    )
                    .map((car) => (
                      <option
                        key={car.id}
                        value={car.name}
                      >
                        {car.name} — {car.year}
                      </option>
                    ))}

                </select>

              </div>
            )}

          </aside>


          {/* PRODUCTS */}
          <div>

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-black">
                  Запчасти
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  Найдено: {filteredParts.length}
                </p>

              </div>

            </div>


            {/* EMPTY */}
            {filteredParts.length === 0 ? (

              <div className="rounded-3xl border border-gray-200 bg-white py-20 text-center">

                <div className="text-5xl">
                  🔍
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Ничего не найдено
                </h3>

                <p className="mt-2 text-gray-400">
                  Попробуйте изменить запрос или фильтр.
                </p>

              </div>

            ) : (

              /* PRODUCT GRID */
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

                {filteredParts.map((part) => (

                  <div
                    key={part.id}
                    className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                  >

                    {/* IMAGE */}

                    <Link
                      href={`/products?part=${part.id}`}
                      className="relative flex h-52 items-center justify-center overflow-hidden bg-gray-100"
                    >

                      {part.image &&
                      typeof part.image === "string" &&
                      part.image.trim() !== "" ? (

                        <img
                          src={part.image}
                          alt={part.name || "Автозапчасть"}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />

                      ) : (

                        <div className="flex h-full w-full flex-col items-center justify-center bg-gray-100 text-gray-400">

                          <span className="text-5xl">
                            🚗
                          </span>

                          <span className="mt-2 text-sm">
                            Нет изображения
                          </span>

                        </div>

                      )}

                    </Link>


                    {/* INFO */}

                    <div className="p-5">

                      <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        {part.company}
                      </p>

                      <h3 className="mt-2 text-lg font-bold">
                        {part.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {part.car}
                      </p>

                      <p className="mt-3 text-xs text-gray-400">
                        {part.category}
                      </p>


                      {/* PRICE */}

                      <div className="mt-5">

                        <p className="text-xl font-black">

                          {Number(
                            part.price || 0
                          ).toLocaleString()}

                          {" "}

                          {part.currency || "UZS"}

                        </p>

                        <p className="mt-1 text-xs text-gray-400">

                          ⭐ {part.rating || "—"}

                          {" · "}

                          В наличии: {part.stock ?? 0}

                        </p>

                      </div>


                      {/* ADD TO CART */}

                      <button
                        type="button"
                        onClick={() =>
                          handleAddToCart(part)
                        }
                        className="mt-5 w-full rounded-xl bg-gray-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-600 active:scale-[0.98]"
                      >
                        🛒 Добавить в корзину
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

        </div>

      </section>

    </div>
  );
}


/* PAGE */

export default function ProductsPage() {

  return (

    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-gray-500">
            Загрузка товаров...
          </p>
        </div>
      }
    >

      <ProductsContent />

    </Suspense>

  );
}