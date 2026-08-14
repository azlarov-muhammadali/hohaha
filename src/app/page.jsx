"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function getImage(item, type = "part") {
  if (
    item?.image &&
    typeof item.image === "string" &&
    item.image.trim() !== ""
  ) {
    return item.image;
  }

  let query = "";

  if (type === "car") {
    query = `${item?.company || ""} ${item?.name || ""} car`;
  } else if (type === "company") {
    query = `${item?.name || ""} car`;
  } else {
    query = `car auto part ${item?.name || "auto part"}`;
  }

  return `https://loremflickr.com/900/600/${encodeURIComponent(
    query
  )}?lock=${item?.id || 1}`;
}
const categories = [
  {
    title: "Двигатель",
    text: "Фильтры, свечи, ремни и другие детали",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Тормозная система",
    text: "Колодки, диски и детали тормозной системы",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Автомобильные детали",
    text: "Большой выбор деталей для разных автомобилей",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
  },
];

const advantages = [
  {
    icon: "🚗",
    title: "Для разных автомобилей",
    text: "Запчасти для множества марок и моделей.",
  },
  {
    icon: "🔧",
    title: "Большой каталог",
    text: "Более 150 демонстрационных товаров.",
  },
  {
    icon: "⚡",
    title: "Быстрый поиск",
    text: "Находите нужную деталь по названию автомобиля.",
  },
];

export default function Home() {
  const [account, setAccount] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const [form, setForm] = useState({
    nickname: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const savedAccount = localStorage.getItem("partgo-account");

    if (savedAccount) {
      try {
        setAccount(JSON.parse(savedAccount));
      } catch {
        localStorage.removeItem("partgo-account");
        setShowRegister(true);
      }
    } else {
      setShowRegister(true);
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function createAccount(e) {
    e.preventDefault();

    if (!form.nickname.trim() || !form.phone.trim() || !form.email.trim()) {
      alert("Заполни все поля.");
      return;
    }

    const newAccount = {
      nickname: form.nickname.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
    };

    localStorage.setItem("partgo-account", JSON.stringify(newAccount));

    setAccount(newAccount);
    setShowRegister(false);
    setShowAccount(false);
  }

  function deleteAccount() {
    localStorage.removeItem("partgo-account");

    setAccount(null);
    setShowAccount(false);

    setForm({
      nickname: "",
      phone: "",
      email: "",
    });

    setShowRegister(true);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* ACCOUNT BUTTON */}

      {account && (
        <button
          onClick={() => setShowAccount(true)}
          className="fixed left-5 top-24 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold shadow-xl transition hover:scale-105 hover:bg-blue-500"
          title="Мой аккаунт"
        >
          {account.nickname.charAt(0).toUpperCase()}
        </button>
      )}

      {/* HERO */}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />

        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=85"
          alt="Автомобиль"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              PARTGO • AUTO PARTS
            </div>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Автозапчасти
              <span className="block text-blue-500">для твоего автомобиля</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Найди нужную деталь среди большого каталога PartGo.
              Выбирай автомобиль, находи запчасть и добавляй её в корзину.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-xl bg-blue-600 px-7 py-4 font-bold transition hover:bg-blue-500"
              >
                Открыть каталог
              </Link>

              <Link
                href="/cart"
                className="rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-bold backdrop-blur transition hover:bg-white/20"
              >
                🛒 Перейти в корзину
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="font-bold uppercase tracking-widest text-blue-500">
            Категории
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Найди нужную категорию
          </h2>

          <p className="mt-3 text-slate-400">
            Основные категории автозапчастей PartGo.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              href="/products"
              key={category.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition hover:-translate-y-1 hover:border-blue-500/50"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">{category.title}</h3>

                <p className="mt-2 text-slate-400">{category.text}</p>

                <div className="mt-5 font-bold text-blue-500">
                  Смотреть детали →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ADVANTAGES */}

      <section className="border-y border-white/10 bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-950 p-7"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG CTA */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-700 to-blue-500 p-8 md:p-14">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-widest text-blue-100">
              PARTGO
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Более 150 демонстрационных товаров
            </h2>

            <p className="mt-5 text-lg leading-8 text-blue-50">
              Открой каталог, выбери автомобиль и найди подходящую
              автозапчасть.
            </p>

            <Link
              href="/products"
              className="mt-8 inline-flex rounded-xl bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-slate-100"
            >
              Перейти к товарам
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER INFO */}

      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-10 md:flex-row md:items-center">
          <div>
            <div className="text-2xl font-black">
              Part<span className="text-blue-500">Go</span>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              AUTO PARTS
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">
              Главная
            </Link>

            <Link href="/products" className="hover:text-white">
              Товары
            </Link>

            <Link href="/cart" className="hover:text-white">
              Корзина
            </Link>

            <Link href="/about" className="hover:text-white">
              О нас
            </Link>

            <Link href="/contacts" className="hover:text-white">
              Контакты
            </Link>
          </div>
        </div>
      </section>

      {/* REGISTER MODAL */}

      {showRegister && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-7 shadow-2xl">
            <div className="mb-7 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-black">
                PG
              </div>

              <h2 className="mt-5 text-3xl font-black">
                Добро пожаловать!
              </h2>

              <p className="mt-2 text-slate-400">
                Создай аккаунт PartGo, чтобы продолжить.
              </p>
            </div>

            <form onSubmit={createAccount} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Никнейм
                </label>

                <input
                  type="text"
                  name="nickname"
                  value={form.nickname}
                  onChange={handleChange}
                  placeholder="Например: Muhammad"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Номер телефона
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+998 90 123 45 67"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="mt-3 w-full rounded-xl bg-blue-600 py-4 font-bold transition hover:bg-blue-500"
              >
                Создать аккаунт
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ACCOUNT MODAL */}

      {showAccount && account && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
          onClick={() => setShowAccount(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-black">
                {account.nickname.charAt(0).toUpperCase()}
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  {account.nickname}
                </h2>

                <p className="text-sm text-slate-400">
                  Аккаунт PartGo
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              <div className="rounded-xl bg-slate-950 p-4">
                <p className="text-xs text-slate-500">Телефон</p>
                <p className="mt-1 font-semibold">{account.phone}</p>
              </div>

              <div className="rounded-xl bg-slate-950 p-4">
                <p className="text-xs text-slate-500">Email</p>
                <p className="mt-1 font-semibold">{account.email}</p>
              </div>
            </div>

            <div className="mt-7 flex gap-3">
              <button
                onClick={() => setShowAccount(false)}
                className="flex-1 rounded-xl bg-slate-800 py-3 font-bold transition hover:bg-slate-700"
              >
                Закрыть
              </button>

              <button
                onClick={deleteAccount}
                className="flex-1 rounded-xl bg-red-600 py-3 font-bold transition hover:bg-red-500"
              >
                Удалить аккаунт
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}