"use client";

import { useState } from "react";
import { produkte } from "@/data/produkte";
import StarRating from "@/components/StarRating";
import { CheckCircle, XCircle, ExternalLink, Plus, Trash2 } from "lucide-react";

const MAX_VERGLEICH = 3;

export default function VergleichPage() {
  const [ausgewaehlt, setAusgewaehlt] = useState<string[]>([]);

  const toggle = (id: string) => {
    setAusgewaehlt((prev) =>
      prev.includes(id)
        ? prev.filter((p) => p !== id)
        : prev.length < MAX_VERGLEICH
        ? [...prev, id]
        : prev
    );
  };

  const verglicheneProdukte = produkte.filter((p) => ausgewaehlt.includes(p.id));

  const alleDatenKeys = Array.from(
    new Set(verglicheneProdukte.flatMap((p) => Object.keys(p.technischeDaten)))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Gerätevergleich</h1>
        <p className="text-gray-500 text-lg">
          Wähle bis zu {MAX_VERGLEICH} Geräte aus und vergleiche sie direkt nebeneinander.
        </p>
      </div>

      {/* Auswahl */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Geräte auswählen ({ausgewaehlt.length}/{MAX_VERGLEICH})
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {produkte.map((p) => {
            const isSelected = ausgewaehlt.includes(p.id);
            const isDisabled = !isSelected && ausgewaehlt.length >= MAX_VERGLEICH;
            return (
              <button
                key={p.id}
                onClick={() => toggle(p.id)}
                disabled={isDisabled}
                className={`text-left p-3 rounded-xl border-2 transition-all text-sm ${
                  isSelected
                    ? "border-blue-600 bg-blue-50 shadow-sm"
                    : isDisabled
                    ? "border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed"
                    : "border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 cursor-pointer"
                }`}
              >
                <div className="flex items-start justify-between gap-1 mb-1">
                  <span className="font-semibold text-gray-800 leading-tight">{p.name}</span>
                  {isSelected ? (
                    <Trash2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
                  )}
                </div>
                <div className="text-blue-700 font-bold text-xs">{p.preis.toLocaleString("de-DE")} €</div>
                <StarRating rating={p.bewertung} size="sm" />
              </button>
            );
          })}
        </div>
      </section>

      {verglicheneProdukte.length < 2 ? (
        <div className="text-center py-16 text-gray-400">
          <div className="text-5xl mb-4">📊</div>
          <p className="text-lg">Bitte wähle mindestens 2 Geräte zum Vergleich aus.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 bg-gray-100 rounded-tl-xl font-semibold text-gray-600 w-40">
                  Kriterium
                </th>
                {verglicheneProdukte.map((p) => (
                  <th key={p.id} className="p-4 bg-gray-100 font-bold text-gray-900 text-center">
                    <div>{p.name}</div>
                    {p.besteWahl && (
                      <div className="text-xs text-blue-600 font-normal mt-1">⭐ {p.besteWahl}</div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Preis */}
              <tr className="border-b border-gray-100">
                <td className="p-4 text-sm font-semibold text-gray-600 bg-gray-50">Preis</td>
                {verglicheneProdukte.map((p) => (
                  <td key={p.id} className="p-4 text-center">
                    <span className="text-xl font-bold text-blue-700">
                      {p.preis.toLocaleString("de-DE")} €
                    </span>
                  </td>
                ))}
              </tr>

              {/* Bewertung */}
              <tr className="border-b border-gray-100">
                <td className="p-4 text-sm font-semibold text-gray-600 bg-gray-50">Bewertung</td>
                {verglicheneProdukte.map((p) => (
                  <td key={p.id} className="p-4 text-center">
                    <div className="flex justify-center">
                      <StarRating rating={p.bewertung} />
                    </div>
                  </td>
                ))}
              </tr>

              {/* Technische Daten */}
              {alleDatenKeys.map((key, i) => (
                <tr key={key} className={`border-b border-gray-100 ${i % 2 === 0 ? "" : "bg-gray-50/50"}`}>
                  <td className="p-4 text-sm font-semibold text-gray-600 bg-gray-50">{key}</td>
                  {verglicheneProdukte.map((p) => (
                    <td key={p.id} className="p-4 text-center text-sm text-gray-700">
                      {p.technischeDaten[key] || "–"}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Vorteile */}
              <tr className="border-b border-gray-100">
                <td className="p-4 text-sm font-semibold text-gray-600 bg-gray-50 align-top">Vorteile</td>
                {verglicheneProdukte.map((p) => (
                  <td key={p.id} className="p-4 align-top">
                    <ul className="space-y-1">
                      {p.pros.slice(0, 4).map((pro) => (
                        <li key={pro} className="flex items-start gap-1.5 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* Nachteile */}
              <tr className="border-b border-gray-100">
                <td className="p-4 text-sm font-semibold text-gray-600 bg-gray-50 align-top">Nachteile</td>
                {verglicheneProdukte.map((p) => (
                  <td key={p.id} className="p-4 align-top">
                    <ul className="space-y-1">
                      {p.cons.slice(0, 4).map((con) => (
                        <li key={con} className="flex items-start gap-1.5 text-xs text-gray-600">
                          <XCircle className="w-3 h-3 text-red-400 flex-shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* Kaufen */}
              <tr>
                <td className="p-4 text-sm font-semibold text-gray-600 bg-gray-50 rounded-bl-xl">Kaufen</td>
                {verglicheneProdukte.map((p) => (
                  <td key={p.id} className="p-4 text-center">
                    <a
                      href={p.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-3 rounded-lg transition-colors text-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Kaufen
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
