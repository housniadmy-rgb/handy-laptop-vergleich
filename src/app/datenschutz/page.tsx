import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von HandyLaptopVergleich.de.",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Datenschutzerklärung</h1>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 space-y-6 text-gray-700 text-sm leading-7">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">1. Datenschutz auf einen Blick</h2>
          <h3 className="font-semibold text-gray-800 mb-2">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className="font-semibold text-gray-800 mb-2">Datenschutz</h3>
          <p className="mb-3">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3 className="font-semibold text-gray-800 mb-2">Verantwortliche Stelle</h3>
          <p className="mb-2">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <address className="not-italic bg-gray-50 rounded-lg p-4 text-gray-700">
            HandyLaptopVergleich.de<br />
            Berlinstr. 37<br />
            55411 Bingen am Rhein<br />
            E-Mail:{" "}
            <a href="mailto:housniadmy@yahoo.de" className="text-blue-700 hover:underline">
              housniadmy@yahoo.de
            </a>
          </address>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">3. Datenerfassung auf dieser Website</h2>
          <h3 className="font-semibold text-gray-800 mb-2">Server-Log-Dateien</h3>
          <p className="mb-3">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
            Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die
            Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">4. Affiliate-Links</h2>
          <p>
            Diese Website nutzt Affiliate-Partnerprogramme. Wenn Sie auf einen Affiliate-Link
            klicken und darüber ein Produkt kaufen, erhalten wir eine Provision. Dabei können Cookies
            durch den jeweiligen Partneranbieter gesetzt werden, die das Nutzerverhalten verfolgen.
            Weitere Informationen entnehmen Sie bitte den Datenschutzhinweisen des jeweiligen
            Anbieters (z.B. Amazon).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">5. Amazon Partnerprogramm</h2>
          <p>
            Wir sind Teilnehmer des Amazon-Partnerprogramms, einem Affiliate-Werbeprogramm für
            Websites, das zur Bereitstellung eines Mediums für Websites konzipiert wurde, mittels
            dessen durch die Platzierung von Werbeanzeigen und Links zu Amazon.de Werbekosten
            verdient werden können. Im Rahmen dieses Partnerprogramms können Cookies von Amazon
            gesetzt werden. Datenschutzinformationen finden Sie in der{" "}
            <a
              href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Datenschutzerklärung von Amazon
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">6. Ihre Rechte</h2>
          <p className="mb-3">Sie haben jederzeit das Recht:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
            <li>Die Berichtigung unrichtiger Daten zu verlangen</li>
            <li>Die Löschung Ihrer gespeicherten Daten zu verlangen</li>
            <li>Die Einschränkung der Datenverarbeitung zu verlangen</li>
            <li>Der Datenverarbeitung zu widersprechen</li>
            <li>Datenübertragbarkeit zu beantragen</li>
          </ul>
          <p className="mt-3">
            Bei Fragen zum Datenschutz wenden Sie sich an:{" "}
            <a href="mailto:housniadmy@yahoo.de" className="text-blue-700 hover:underline">
              housniadmy@yahoo.de
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
