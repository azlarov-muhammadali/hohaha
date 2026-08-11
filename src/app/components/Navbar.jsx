"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "./CartProvider";

export default function Navbar() {
  const [accountOpen, setAccountOpen] = useState(false);

  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">


        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-950 text-xl text-white">
            ⚙
          </div>

          <div>

            <div className="text-xl font-black tracking-tight">
              Part<span className="text-blue-600">Go</span>
            </div>

            <div className="text-[10px] font-medium uppercase tracking-widest text-gray-400">
              Auto Parts
            </div>

          </div>

        </Link>



        <nav className="hidden items-center gap-7 lg:flex">

          <Link
            href="/"
            className="text-sm font-semibold hover:text-blue-600"
          >
            Главная
          </Link>

          <Link
            href="/products"
            className="text-sm font-medium text-gray-500 hover:text-blue-600"
          >
            Товары
          </Link>

          <Link
            href="/reviews"
            className="text-sm font-medium text-gray-500 hover:text-blue-600"
          >
            Отзывы
          </Link>

          <Link
            href="/map"
            className="text-sm font-medium text-gray-500 hover:text-blue-600"
          >
            Карта
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-gray-500 hover:text-blue-600"
          >
            О нас
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-gray-500 hover:text-blue-600"
          >
            Контакты
          </Link>

        </nav>



        <div className="flex items-center gap-3">


          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold transition hover:bg-gray-50"
          >

            <span>
              🛒
            </span>

            <span className="hidden sm:inline">
              Корзина
            </span>

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}

          </Link>



          <div className="relative">

            <button
              onClick={() => setAccountOpen(!accountOpen)}
              className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-blue-600 text-sm font-bold text-white"
            >

              <img
                src={null}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

              <span>
                MA
              </span>

            </button>


            {accountOpen && (

              <div className="absolute right-0 top-14 w-60 rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl">

                <div className="border-b border-gray-100 px-3 pb-3">

                  <p className="font-bold">
                    Muhammad Ali
                  </p>

                  <p className="text-xs text-gray-400">
                    demo@partgo.com
                  </p>

                </div>

                <Link
                  href="/profile"
                  className="mt-2 block rounded-xl px-3 py-3 text-sm hover:bg-gray-100"
                >
                  👤 Изменить аккаунт
                </Link>

                <button className="w-full rounded-xl px-3 py-3 text-left text-sm text-red-500 hover:bg-red-50">
                  🚪 Выйти
                </button>

              </div>

            )}

          </div>

        </div>

      </div>

    </header>
  );
}