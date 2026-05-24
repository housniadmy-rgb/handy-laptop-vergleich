"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Smartphone, BarChart2 } from "lucide-react";

const navLinks = [
  { href: "/", label: "Startseite" },
  {
    href: "/kategorie/handy-laptop",
    label: "Alle Geräte",
    icon: <Smartphone className="w-4 h-4" />,
  },
  { href: "/vergleich", label: "Vergleich", icon: <BarChart2 className="w-4 h-4" /> },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-700 rounded-lg p-1.5">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-blue-700 hidden sm:block">
              HandyLaptop<span className="text-gray-500 font-normal">Vergleich</span>
            </span>
            <span className="text-xl font-bold text-blue-700 sm:hidden">HLV</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/kategorie/handy-laptop"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
            >
              Alle Geräte
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu öffnen"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <Link
                href="/kategorie/handy-laptop"
                className="block bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-blue-800 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Alle Geräte anzeigen
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
