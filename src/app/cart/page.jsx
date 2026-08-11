"use client";

import Link from "next/link";
import { useCart } from "../components/CartProvider";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-4xl">

          <div className="rounded-3xl bg-white p-12 text-center shadow-sm">

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-5xl">
              🛒
            </div>

            <h1 className="mt-6 text-4xl font-black">
              Корзина пуста
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-slate-500">
              Добавьте товары из каталога, и они появятся здесь.
            </p>

            <Link
              href="/products"
              className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Перейти к товарам
            </Link>

          </div>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

          <div>
            <p className="font-bold text-blue-600">
              PARTGO
            </p>

            <h1 className="mt-2 text-4xl font-black">
              Корзина
            </h1>

            <p className="mt-2 text-slate-500">
              Товаров в корзине: {cart.length}
            </p>
          </div>

          <button
            onClick={clearCart}
            className="rounded-xl border border-red-200 px-5 py-3 font-bold text-red-500 transition hover:bg-red-50"
          >
            Очистить корзину
          </button>

        </div>


        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">


          <div className="space-y-4 lg:col-span-2">

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-3xl bg-white p-5 shadow-sm md:flex-row md:items-center"
              >


                <div className="flex h-32 w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-100 md:w-40">

                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title || "Товар"}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-5xl">
                      🚗
                    </span>
                  )}

                </div>



                <div className="flex-1">

                  <p className="text-sm font-bold text-blue-600">
                    {item.category || "Автозапчасти"}
                  </p>

                  <h2 className="mt-1 text-xl font-black">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-lg font-bold">
                    ${Number(item.price || 0).toFixed(2)}
                  </p>

                </div>



                <div className="flex items-center gap-3">

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.quantity - 1
                      )
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xl font-bold hover:bg-slate-200"
                  >
                    −
                  </button>

                  <span className="w-8 text-center font-black">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.quantity + 1
                      )
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xl font-bold hover:bg-slate-200"
                  >
                    +
                  </button>

                </div>



                <button
                  onClick={() => removeFromCart(item.id)}
                  className="font-bold text-red-500 hover:text-red-700"
                >
                  Удалить
                </button>

              </div>

            ))}

          </div>



          <div className="h-fit rounded-3xl bg-white p-7 shadow-sm">

            <h2 className="text-2xl font-black">
              Заказ
            </h2>

            <div className="my-6 border-t border-slate-200" />

            <div className="flex justify-between text-slate-500">
              <span>Товары</span>

              <span>
                {cart.length}
              </span>
            </div>

            <div className="mt-4 flex justify-between">

              <span className="font-bold">
                Итого
              </span>

              <span className="text-2xl font-black">
                ${cartTotal.toFixed(2)}
              </span>

            </div>

            <button
              className="mt-7 w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700"
              onClick={() =>
                alert("Заказ оформляется!")
              }
            >
              Оформить заказ
            </button>

            <Link
              href="/products"
              className="mt-3 block w-full rounded-xl border border-slate-200 px-6 py-4 text-center font-bold transition hover:bg-slate-50"
            >
              Продолжить покупки
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}