"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AccountContext = createContext(null);

export function AccountProvider({ children }) {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("partgo-account");

    if (saved) {
      setAccount(JSON.parse(saved));
    } else {
      setShowCreate(true);
    }

    setLoading(false);
  }, []);

  function createAccount(data) {
    localStorage.setItem("partgo-account", JSON.stringify(data));
    setAccount(data);
    setShowCreate(false);
  }

  function deleteAccount() {
    localStorage.removeItem("partgo-account");
    setAccount(null);
    setShowAccount(false);
    setShowCreate(true);
  }

  if (loading) return null;

  return (
    <AccountContext.Provider
      value={{
        account,
        createAccount,
        deleteAccount,
        showCreate,
        setShowCreate,
        showAccount,
        setShowAccount,
      }}
    >
      {children}

      {showCreate && (
        <CreateAccountModal onCreate={createAccount} />
      )}

      {showAccount && account && (
        <AccountModal
          account={account}
          onClose={() => setShowAccount(false)}
          onDelete={deleteAccount}
        />
      )}
    </AccountContext.Provider>
  );
}

export function useAccount() {
  return useContext(AccountContext);
}

function CreateAccountModal({ onCreate }) {
  const [phone, setPhone] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  function submit(e) {
    e.preventDefault();

    if (!phone || !nickname || !email) {
      alert("Заполни все поля");
      return;
    }

    onCreate({
      phone,
      nickname,
      email,
    });
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-5">
      <form
        onSubmit={submit}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
      >
        <div className="mb-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white">
            ⚙
          </div>

          <h2 className="mt-5 text-3xl font-black">
            Создать аккаунт
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Создай профиль PartGo, чтобы пользоваться сайтом.
          </p>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Никнейм"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-blue-600"
          />

          <input
            type="tel"
            placeholder="Номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-blue-600"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-blue-600"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-2xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-700"
        >
          Создать аккаунт
        </button>
      </form>
    </div>
  );
}

function AccountModal({ account, onClose, onDelete }) {
  const initials = account.nickname
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-5"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-lg font-black text-white">
            {initials}
          </div>

          <div>
            <h2 className="text-2xl font-black">
              {account.nickname}
            </h2>

            <p className="text-sm text-gray-500">
              Аккаунт PartGo
            </p>
          </div>
        </div>

        <div className="mt-7 space-y-3">
          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-xs text-gray-400">Телефон</p>
            <p className="mt-1 font-bold">{account.phone}</p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-xs text-gray-400">Email</p>
            <p className="mt-1 font-bold">{account.email}</p>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-2xl border border-gray-200 py-4 font-bold"
          >
            Закрыть
          </button>

          <button
            onClick={onDelete}
            className="flex-1 rounded-2xl bg-red-500 py-4 font-bold text-white hover:bg-red-600"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}