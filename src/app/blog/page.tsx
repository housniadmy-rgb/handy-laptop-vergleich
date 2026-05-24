import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog – Tipps & News zu Smartphones, Laptops und Tablets",
  description:
    "Aktuelle Ratgeber, Kauftipps und News rund um Smartphones, Laptops und Tablets auf HandyLaptopVergleich.de.",
};

const beitraege = [
  {
    slug: "beste-smartphones-2025",
    titel: "Die besten Smartphones 2025: iPhone 16 Pro vs. Galaxy S25 Ultra",
    beschreibung:
      "Apple oder Samsung – welches Flaggschiff bietet das bessere Gesamtpaket? Wir vergleichen die wichtigsten Kriterien: Kamera, Performance, Akku und Preis.",
    datum: "2025-05-10",
    lesezeit: "8 min",
    kategorie: "Smartphones",
  },
  {
    slug: "macbook-air-m3-test",
    titel: "MacBook Air M3 im Test: Der perfekte Alltagsbegleiter?",
    beschreibung:
      "Das MacBook Air M3 setzt neue Maßstäbe bei Akkulaufzeit und Performance. Wir haben es 4 Wochen lang intensiv getestet.",
    datum: "2025-04-25",
    lesezeit: "10 min",
    kategorie: "Laptops",
  },
  {
    slug: "ipad-pro-m4-oder-laptop",
    titel: "iPad Pro M4 oder Laptop: Was passt besser zu dir?",
    beschreibung:
      "Mit dem M4 Chip ist das iPad Pro leistungsstärker denn je. Doch kann es wirklich einen Laptop ersetzen? Wir klären auf.",
    datum: "2025-04-15",
    lesezeit: "7 min",
    kategorie: "Tablets",
  },
  {
    slug: "google-pixel-9-pro-kamera",
    titel: "Google Pixel 9 Pro: Die beste Kamera im Test",
    beschreibung:
      "Das Pixel 9 Pro gilt als Kamera-Flaggschiff schlechthin. Wir testen KI-Funktionen, Nachtmodus und Videoqualität ausführlich.",
    datum: "2025-04-05",
    lesezeit: "9 min",
    kategorie: "Smartphones",
  },
  {
    slug: "laptop-kaufberatung-2025",
    titel: "Laptop Kaufberatung 2025: Worauf du achten solltest",
    beschreibung:
      "Display, Akku, Prozessor, RAM – welche Specs wirklich wichtig sind und welche du ignorieren kannst.",
    datum: "2025-03-20",
    lesezeit: "12 min",
    kategorie: "Kaufberatung",
  },
  {
    slug: "samsung-galaxy-tab-s10-test",
    titel: "Samsung Galaxy Tab S10: Das beste Android-Tablet?",
    beschreibung:
      "Mit S Pen, Galaxy AI und 7 Jahren Updates hat das Tab S10 viel zu bieten. Unser ausführlicher Testbericht.",
    datum: "2025-03-10",
    lesezeit: "8 min",
    kategorie: "Tablets",
  },
];

const kategorieColors: Record<string, string> = {
  Smartphones: "bg-blue-100 text-blue-700",
  Laptops: "bg-purple-100 text-purple-700",
  Tablets: "bg-green-100 text-green-700",
  Kaufberatung: "bg-amber-100 text-amber-700",
};

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Blog</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Ratgeber, Kauftipps und aktuelle Tests – damit du immer die beste Kaufentscheidung triffst.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {beitraege.map((beitrag) => (
          <article
            key={beitrag.slug}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
          >
            <div className="mb-3">
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full ${kategorieColors[beitrag.kategorie] || "bg-gray-100 text-gray-600"}`}
              >
                {beitrag.kategorie}
              </span>
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{beitrag.titel}</h2>
            <p className="text-sm text-gray-600 flex-1 mb-4">{beitrag.beschreibung}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(beitrag.datum).toLocaleDateString("de-DE", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {beitrag.lesezeit} Lesezeit
                </span>
              </div>
              <Link
                href={`/blog/${beitrag.slug}`}
                className="flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
              >
                Lesen
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
