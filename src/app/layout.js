import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartProvider";

export const metadata = {
  title: "PartGo — Автозапчасти",
  description: "Магазин автозапчастей PartGo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <CartProvider>
          <Navbar />

          <main>
            {children}
          </main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}