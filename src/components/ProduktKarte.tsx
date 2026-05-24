import Link from "next/link";
import { CheckCircle, XCircle, ExternalLink } from "lucide-react";
import { Produkt } from "@/data/produkte";
import StarRating from "./StarRating";

interface ProduktKarteProps {
  produkt: Produkt;
  showDetails?: boolean;
}

const kategorieLabel: Record<string, string> = {
  smartphone: "Smartphone",
  laptop: "Laptop",
  tablet: "Tablet",
};

const kategorieColors: Record<string, string> = {
  smartphone: "bg-blue-100 text-blue-700",
  laptop: "bg-purple-100 text-purple-700",
  tablet: "bg-green-100 text-green-700",
};

export default function ProduktKarte({ produkt, showDetails = false }: ProduktKarteProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      {produkt.besteWahl && (
        <div className="bg-blue-700 text-white text-xs font-semibold text-center py-2 px-4">
          ⭐ {produkt.besteWahl}
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span
              className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2 ${kategorieColors[produkt.kategorie]}`}
            >
              {kategorieLabel[produkt.kategorie]}
            </span>
            <h3 className="text-lg font-bold text-gray-900">{produkt.name}</h3>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-blue-700">{produkt.preis.toLocaleString("de-DE")} €</div>
          </div>
        </div>

        <div className="mb-3">
          <StarRating rating={produkt.bewertung} />
        </div>

        <p className="text-sm text-gray-600 mb-4 flex-1">{produkt.kurzbeschreibung}</p>

        {showDetails && (
          <>
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Top Features</h4>
              <ul className="space-y-1">
                {produkt.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <h4 className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">Vorteile</h4>
                <ul className="space-y-1">
                  {produkt.pros.slice(0, 3).map((pro) => (
                    <li key={pro} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-1">Nachteile</h4>
                <ul className="space-y-1">
                  {produkt.cons.slice(0, 3).map((con) => (
                    <li key={con} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <XCircle className="w-3 h-3 text-red-400 flex-shrink-0 mt-0.5" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}

        <div className="flex flex-col gap-2 mt-auto">
          <a
            href={produkt.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Jetzt kaufen – {produkt.preis.toLocaleString("de-DE")} €
          </a>
          <Link
            href={`/handy-laptop/${produkt.slug}`}
            className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-xl transition-colors text-sm"
          >
            Ausführlicher Test →
          </Link>
        </div>
      </div>
    </div>
  );
}
