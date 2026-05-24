import Link from "next/link";
import { Smartphone, Laptop, Tablet, ChevronRight, Shield, Star, BarChart2 } from "lucide-react";
import { produkte, getBestWahl } from "@/data/produkte";
import ProduktKarte from "@/components/ProduktKarte";
import StarRating from "@/components/StarRating";

export default function Home() {
  const besteWahl = getBestWahl();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/50 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            Aktualisiert: Mai 2025
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Die besten Smartphones, Laptops & Tablets im Vergleich
          </h1>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Unabhängige Tests und ehrliche Bewertungen für die wichtigsten Geräte 2025. Wir helfen dir, die richtige Wahl zu treffen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kategorie/handy-laptop"
              className="bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Alle Geräte vergleichen
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/vergleich"
              className="border-2 border-white/40 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <BarChart2 className="w-5 h-5" />
              Direkt vergleichen
            </Link>
          </div>
        </div>
      </section>

      {/* Kategorien */}
      <section className="bg-white py-12 px-4 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Kategorien</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/kategorie/handy-laptop?kategorie=smartphone"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-600 hover:bg-blue-50 transition-all"
            >
              <div className="bg-blue-100 group-hover:bg-blue-200 rounded-xl p-4 transition-colors">
                <Smartphone className="w-8 h-8 text-blue-700" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-900">Smartphones</h3>
                <p className="text-sm text-gray-500 mt-1">3 getestete Modelle</p>
              </div>
            </Link>
            <Link
              href="/kategorie/handy-laptop?kategorie=laptop"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-purple-100 hover:border-purple-600 hover:bg-purple-50 transition-all"
            >
              <div className="bg-purple-100 group-hover:bg-purple-200 rounded-xl p-4 transition-colors">
                <Laptop className="w-8 h-8 text-purple-700" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-900">Laptops</h3>
                <p className="text-sm text-gray-500 mt-1">3 getestete Modelle</p>
              </div>
            </Link>
            <Link
              href="/kategorie/handy-laptop?kategorie=tablet"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-green-100 hover:border-green-600 hover:bg-green-50 transition-all"
            >
              <div className="bg-green-100 group-hover:bg-green-200 rounded-xl p-4 transition-colors">
                <Tablet className="w-8 h-8 text-green-700" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-900">Tablets</h3>
                <p className="text-sm text-gray-500 mt-1">2 getestete Modelle</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Beste Wahl */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Unsere Top-Empfehlungen 2025</h2>
            <p className="text-gray-500 mt-3">Jede Kategorie hat einen klaren Gewinner</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {besteWahl.map((produkt) => (
              <ProduktKarte key={produkt.id} produkt={produkt} showDetails={false} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/kategorie/handy-laptop"
              className="inline-flex items-center gap-2 bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors"
            >
              Alle 8 Geräte vergleichen
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vertrauens-Features */}
      <section className="bg-white border-t border-b border-gray-200 py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-3">
              <div className="bg-blue-100 rounded-xl p-3">
                <Shield className="w-6 h-6 text-blue-700" />
              </div>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">100% Unabhängig</h3>
            <p className="text-sm text-gray-500">Wir kaufen alle Geräte selbst und testen sie ehrlich.</p>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              <div className="bg-amber-100 rounded-xl p-3">
                <Star className="w-6 h-6 text-amber-600" />
              </div>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Detaillierte Tests</h3>
            <p className="text-sm text-gray-500">Jedes Gerät wird über Wochen im Alltag getestet.</p>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              <div className="bg-green-100 rounded-xl p-3">
                <BarChart2 className="w-6 h-6 text-green-700" />
              </div>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Direkte Vergleiche</h3>
            <p className="text-sm text-gray-500">Vergleiche beliebige Geräte direkt nebeneinander.</p>
          </div>
        </div>
      </section>

      {/* Alle Produkte Übersicht */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Alle getesteten Geräte</h2>
            <p className="text-gray-500 mt-3">8 Geräte aus 3 Kategorien im ausführlichen Test</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {produkte.map((produkt) => (
              <div key={produkt.id} className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-2">
                  {produkt.besteWahl && (
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 rounded-full px-2 py-0.5 self-start">
                      ⭐ Top Pick
                    </span>
                  )}
                  <h3 className="font-bold text-gray-900 text-sm">{produkt.name}</h3>
                  <StarRating rating={produkt.bewertung} size="sm" />
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-700">{produkt.preis.toLocaleString("de-DE")} €</span>
                    <Link
                      href={`/handy-laptop/${produkt.slug}`}
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Test lesen →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
