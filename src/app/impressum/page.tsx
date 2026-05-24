import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von HandyLaptopVergleich.de gemäß § 5 TMG.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Impressum</h1>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 space-y-6 text-gray-700">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>HandyLaptopVergleich.de</strong>
          </p>
          <address className="not-italic mt-2 leading-7">
            Berlinstr. 37<br />
            55411 Bingen am Rhein<br />
            Deutschland
          </address>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a href="mailto:housniadmy@yahoo.de" className="text-blue-700 hover:underline">
              housniadmy@yahoo.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <address className="not-italic leading-7">
            HandyLaptopVergleich.de<br />
            Berlinstr. 37<br />
            55411 Bingen am Rhein
          </address>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Affiliate-Hinweis</h2>
          <p className="text-sm leading-7">
            Diese Website enthält Affiliate-Links. Wenn du über einen dieser Links ein Produkt kaufst,
            erhalten wir eine kleine Provision – für dich entstehen dabei keine Mehrkosten. Die mit
            (*) oder dem Hinweis &ldquo;Affiliate-Link&rdquo; gekennzeichneten Links sind solche Partnerlinks.
            Unsere redaktionellen Inhalte und Bewertungen werden davon nicht beeinflusst.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Haftungsausschluss</h2>
          <h3 className="font-semibold text-gray-800 mb-2">Haftung für Inhalte</h3>
          <p className="text-sm leading-7 mb-4">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich.
          </p>
          <h3 className="font-semibold text-gray-800 mb-2">Haftung für Links</h3>
          <p className="text-sm leading-7">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Urheberrecht</h2>
          <p className="text-sm leading-7">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </div>
    </div>
  );
}
