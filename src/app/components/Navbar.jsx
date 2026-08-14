"use client";

import Link from "next/link";
import { useAccount } from "./AccountProvider";

export default function Navbar() {
  const { account, setShowAccount, setShowCreate } = useAccount();

  const initials = account
    ? account.nickname.slice(0, 2).toUpperCase()
    : "";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-xl">
            ⚙️
          </div>

          <div>
            <div className="text-xl font-black">
              Part<span className="text-blue-600">Go</span>
            </div>

            <div className="text-[10px] font-bold tracking-widest text-gray-400">
              AUTO PARTS
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 font-semibold text-gray-500 md:flex">
          <Link href="/" className="hover:text-blue-600">
            Главная
          </Link>

          <Link href="/products" className="hover:text-blue-600">
            Товары
          </Link>

          <Link href="/reviews" className="hover:text-blue-600">
            Отзывы
          </Link>

          <Link href="/map" className="hover:text-blue-600">
            Карта
          </Link>

          <Link href="/about" className="hover:text-blue-600">
            О нас
          </Link>

          <Link href="/contacts" className="hover:text-blue-600">
            Контакты
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="rounded-2xl border border-gray-200 px-5 py-3 font-bold hover:bg-gray-50"
          >
            🛒 Корзина
          </Link>

          {account ? (
            <button
              onClick={() => setShowAccount(true)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-black text-white transition hover:scale-105"
            >
              {initials}
            </button>
          ) : (
            <button
              onClick={() => setShowCreate(true)}
              className="rounded-2xl bg-blue-600 px-5 py-3 font-bold text-white"
            >
              Войти
            </button>
          )}
        </div>
      </div>
    </header>
  );
}