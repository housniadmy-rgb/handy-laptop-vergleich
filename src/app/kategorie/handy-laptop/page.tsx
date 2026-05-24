"use client";

import { useState } from "react";
import { produkte, Kategorie } from "@/data/produkte";
import ProduktKarte from "@/components/ProduktKarte";
import { Smartphone, Laptop, Tablet, SlidersHorizontal } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const kategorien: { id: Kategorie | "alle"; label: string; icon: React.ReactNode }[] = [
  { id: "alle", label: "Alle Geräte", icon: <SlidersHorizontal className="w-4 h-4" /> },
  { id: "smartphone", label: "Smartphones", icon: <Smartphone className="w-4 h-4" /> },
  { id: "laptop", label: "Laptops", icon: <Laptop className="w-4 h-4" /> },
  { id: "tablet", label: "Tablets", icon: <Tablet className="w-4 h-4" /> },
];

type SortOption = "bewertung" | "preis-asc" | "preis-desc";

function KategorieContent() {
  const searchParams = useSearchParams();
  const initialKat = (searchParams.get("kategorie") as Kategorie) || "alle";
  const [aktiveKategorie, setAktiveKategorie] = useState<Kategorie | "alle">(initialKat);
  const [sortierung, setSortierung] = useState<SortOption>("bewertung");

  const gefiltert = produkte
    .filter((p) => aktiveKategorie === "alle" || p.kategorie === aktiveKategorie)
    .sort((a, b) => {
      if (sortierung === "bewertung") return b.bewertung - a.bewertung;
      if (sortierung === "preis-asc") return a.preis - b.preis;
      if (sortierung === "preis-desc") return b.preis - a.preis;
      return 0;
    });

  return (
    <>
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Handy & Laptop Vergleich 2025</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            {produkte.length} Geräte aus 3 Kategorien – ausführlich getestet und ehrlich bewertet.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
          <div className="flex flex-wrap gap-2">
            {kategorien.map((kat) => (
              <button
                key={kat.id}
                onClick={() => setAktiveKategorie(kat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all border ${
                  aktiveKategorie === kat.id
                    ? "bg-blue-700 text-white border-blue-700 shadow-sm"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-700"
                }`}
              >
                {kat.icon}
                {kat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sortieren:</span>
            <select
              value={sortierung}
              onChange={(e) => setSortierung(e.target.value as SortOption)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-700 focus:outline-none focus:border-blue-500"
            >
              <option value="bewertung">Beste Bewertung</option>
              <option value="preis-asc">Preis aufsteigend</option>
              <option value="preis-desc">Preis absteigend</option>
            </select>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          {gefiltert.length} Gerät{gefiltert.length !== 1 ? "e" : ""} gefunden
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gefiltert.map((produkt) => (
            <ProduktKarte key={produkt.id} produkt={produkt} showDetails={true} />
          ))}
        </div>
      </section>
    </>
  );
}

export default function KategoriePage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-gray-500">Lade Geräte...</div>}>
      <KategorieContent />
    </Suspense>
  );
}
