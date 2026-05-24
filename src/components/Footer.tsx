import Link from "next/link";
import { Smartphone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 rounded-lg p-1.5">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                HandyLaptop<span className="text-gray-400 font-normal">Vergleich</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-4 max-w-sm">
              Unabhängige Vergleiche und Tests für Smartphones, Laptops und Tablets.
              Wir helfen dir, das beste Gerät für deine Bedürfnisse zu finden.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Berlinstr. 37, 55411 Bingen am Rhein</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:housniadmy@yahoo.de" className="hover:text-white transition-colors">
                  housniadmy@yahoo.de
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kategorien</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/kategorie/handy-laptop" className="hover:text-white transition-colors">
                  Alle Geräte
                </Link>
              </li>
              <li>
                <Link href="/kategorie/handy-laptop?kategorie=smartphone" className="hover:text-white transition-colors">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link href="/kategorie/handy-laptop?kategorie=laptop" className="hover:text-white transition-colors">
                  Laptops
                </Link>
              </li>
              <li>
                <Link href="/kategorie/handy-laptop?kategorie=tablet" className="hover:text-white transition-colors">
                  Tablets
                </Link>
              </li>
              <li>
                <Link href="/vergleich" className="hover:text-white transition-colors">
                  Gerätevergleich
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/impressum" className="hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} HandyLaptopVergleich.de – Alle Rechte vorbehalten.</p>
          <p className="text-center sm:text-right">
            * Affiliate-Links: Bei einem Kauf über unsere Links erhalten wir eine kleine Provision – für dich entstehen keine Mehrkosten.
          </p>
        </div>
      </div>
    </footer>
  );
}
