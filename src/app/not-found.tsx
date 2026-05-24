import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl mb-6">📱</div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">404 – Seite nicht gefunden</h1>
      <p className="text-gray-500 text-lg mb-8 max-w-md">
        Die gesuchte Seite existiert nicht. Vielleicht hilft dir ein Blick auf unsere Produktübersicht?
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-blue-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors"
        >
          Zur Startseite
        </Link>
        <Link
          href="/kategorie/handy-laptop"
          className="border-2 border-blue-700 text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
        >
          Alle Geräte
        </Link>
      </div>
    </div>
  );
}
