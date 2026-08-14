import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartProvider";
import { AccountProvider } from "./components/AccountProvider";

export const metadata = {
  title: "PartGo — Автозапчасти",
  description: "PartGo — каталог автомобильных запчастей",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="bg-gray-50 text-gray-900">
        <CartProvider>
          <AccountProvider>
            <Navbar />

            <main>
              {children}
            </main>

            <Footer />
          </AccountProvider>
        </CartProvider>
      </body>
    </html>
  );
}