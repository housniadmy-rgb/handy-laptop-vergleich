import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, XCircle, ExternalLink, ChevronRight, ChevronDown } from "lucide-react";
import { produkte, getProduktBySlug } from "@/data/produkte";
import StarRating from "@/components/StarRating";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return produkte.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const produkt = getProduktBySlug(params.slug);
  if (!produkt) return { title: "Produkt nicht gefunden" };
  return {
    title: `${produkt.name} Test & Erfahrungen 2025`,
    description: produkt.kurzbeschreibung,
  };
}

const kategorieLabel: Record<string, string> = {
  smartphone: "Smartphone",
  laptop: "Laptop",
  tablet: "Tablet",
};

export default function ProduktDetailPage({ params }: Props) {
  const produkt = getProduktBySlug(params.slug);
  if (!produkt) notFound();

  const aehnliche = produkte
    .filter((p) => p.kategorie === produkt.kategorie && p.slug !== produkt.slug)
    .slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-700">Startseite</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/kategorie/handy-laptop" className="hover:text-blue-700">Alle Geräte</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">{produkt.name}</span>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
        {produkt.besteWahl && (
          <div className="inline-flex items-center gap-2 bg-blue-700 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            ⭐ {produkt.besteWahl}
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="flex-1">
            <div className="mb-2">
              <span className="text-xs font-semibold text-blue-700 bg-blue-100 rounded-full px-3 py-1">
                {kategorieLabel[produkt.kategorie]}
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-3">{produkt.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <StarRating rating={produkt.bewertung} size="lg" />
              <span className="text-3xl font-bold text-blue-700">
                {produkt.preis.toLocaleString("de-DE")} €
              </span>
            </div>
            <p className="text-gray-600 text-lg mb-6">{produkt.kurzbeschreibung}</p>
            <a
              href={produkt.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl transition-colors text-lg"
            >
              <ExternalLink className="w-5 h-5" />
              Jetzt kaufen – {produkt.preis.toLocaleString("de-DE")} €*
            </a>
            <p className="text-xs text-gray-400 mt-2">* Affiliate-Link – für dich keine Mehrkosten</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Features */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Top-Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {produkt.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </section>

          {/* Pros & Cons */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Vor- und Nachteile</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-bold text-green-700 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Vorteile
                </h3>
                <ul className="space-y-2">
                  {produkt.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-red-600 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <XCircle className="w-4 h-4" />
                  Nachteile
                </h3>
                <ul className="space-y-2">
                  {produkt.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm text-gray-700">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Häufige Fragen (FAQ)</h2>
            <div className="space-y-4">
              {produkt.faq.map((item, i) => (
                <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
                    {item.frage}
                    <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" />
                  </summary>
                  <div className="px-4 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">
                    {item.antwort}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Technische Daten */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Technische Daten</h2>
            <div className="space-y-2">
              {Object.entries(produkt.technischeDaten).map(([key, value]) => (
                <div key={key} className="text-sm">
                  <dt className="font-semibold text-gray-500 text-xs uppercase tracking-wide">{key}</dt>
                  <dd className="text-gray-800 mt-0.5">{value}</dd>
                </div>
              ))}
            </div>
          </section>

          {/* Kauf-Button */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <div className="text-center mb-3">
              <div className="text-2xl font-bold text-blue-700 mb-1">
                {produkt.preis.toLocaleString("de-DE")} €
              </div>
              <StarRating rating={produkt.bewertung} />
            </div>
            <a
              href={produkt.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl transition-colors"
            >
              Zum besten Preis kaufen →
            </a>
            <p className="text-xs text-gray-400 text-center mt-2">* Affiliate-Link</p>
          </div>

          {/* Ähnliche Produkte */}
          {aehnliche.length > 0 && (
            <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Ähnliche Geräte</h2>
              <div className="space-y-3">
                {aehnliche.map((p) => (
                  <Link
                    key={p.id}
                    href={`/handy-laptop/${p.slug}`}
                    className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-all"
                  >
                    <div>
                      <div className="font-semibold text-sm text-gray-800">{p.name}</div>
                      <StarRating rating={p.bewertung} size="sm" />
                    </div>
                    <div className="text-sm font-bold text-blue-700 flex-shrink-0 ml-2">
                      {p.preis.toLocaleString("de-DE")} €
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
