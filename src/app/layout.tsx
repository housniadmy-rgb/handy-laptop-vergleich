import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Handy & Laptop Vergleich 2025 – Die besten Smartphones, Laptops & Tablets",
    template: "%s | HandyLaptopVergleich.de",
  },
  description:
    "Unabhängige Vergleiche und Tests für Smartphones, Laptops und Tablets. Finde das beste Gerät für deine Bedürfnisse mit unseren detaillierten Bewertungen.",
  keywords: ["Handy Vergleich", "Laptop Test", "Tablet Vergleich", "Smartphone Bewertung"],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "HandyLaptopVergleich.de",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
