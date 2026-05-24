export type Kategorie = "smartphone" | "laptop" | "tablet";

export interface Produkt {
  id: string;
  slug: string;
  name: string;
  kategorie: Kategorie;
  preis: number;
  bewertung: number;
  besteWahl?: string;
  kurzbeschreibung: string;
  bild: string;
  affiliateUrl: string;
  features: string[];
  pros: string[];
  cons: string[];
  technischeDaten: Record<string, string>;
  faq: { frage: string; antwort: string }[];
}

export const produkte: Produkt[] = [
  {
    id: "iphone-16-pro",
    slug: "iphone-16-pro",
    name: "iPhone 16 Pro",
    kategorie: "smartphone",
    preis: 1199,
    bewertung: 4.8,
    besteWahl: "Beste Wahl Smartphone",
    kurzbeschreibung:
      "Das leistungsstärkste iPhone aller Zeiten mit dem A18 Pro Chip, ProRes Video und einem brillanten Super Retina XDR Display.",
    bild: "/images/iphone-16-pro.jpg",
    affiliateUrl:
      "https://www.amazon.de/dp/B0CHX1W1XY?tag=bestvpnvergle-21",
    features: [
      "A18 Pro Chip",
      "Pro Kamerasystem mit 48 MP",
      "6,3 Zoll Super Retina XDR",
      "ProRes Video Aufnahme",
      "Titangehäuse",
      "USB-C mit USB 3",
      "Action-Taste",
      "iOS 18",
    ],
    pros: [
      "Herausragende Kameraqualität",
      "Sehr schnelle Performance",
      "Exzellente Videofähigkeiten",
      "Premium Build Quality",
      "Lange Softwareunterstützung",
      "Starke Akkulaufzeit",
    ],
    cons: [
      "Sehr hoher Preis",
      "Kein USB-C Adapter im Lieferumfang",
      "Keine SD-Karten Erweiterung",
      "Hohe Reparaturkosten",
    ],
    technischeDaten: {
      Display: "6,3 Zoll Super Retina XDR OLED, 2622 × 1206 px",
      Prozessor: "Apple A18 Pro",
      RAM: "8 GB",
      Speicher: "128 GB / 256 GB / 512 GB / 1 TB",
      Kamera: "48 MP + 48 MP + 12 MP Teleobjektiv",
      Frontkamera: "12 MP TrueDepth",
      Akku: "3582 mAh",
      Betriebssystem: "iOS 18",
      Anschlüsse: "USB-C (USB 3)",
      Abmessungen: "149,6 × 71,5 × 8,25 mm",
      Gewicht: "199 g",
      Farben: "Schwarzes Titan, Weißes Titan, Natürliches Titan, Wüstentitan",
    },
    faq: [
      {
        frage: "Ist das iPhone 16 Pro wasserdicht?",
        antwort:
          "Ja, das iPhone 16 Pro hat eine IP68-Zertifizierung und ist bis zu 6 Meter Tiefe für 30 Minuten wasserfest.",
      },
      {
        frage: "Unterstützt das iPhone 16 Pro 5G?",
        antwort:
          "Ja, das iPhone 16 Pro unterstützt 5G für schnelle Mobilfunkverbindungen.",
      },
      {
        frage: "Wie lange wird das iPhone 16 Pro Software-Updates erhalten?",
        antwort:
          "Apple unterstützt iPhones in der Regel mindestens 5-6 Jahre mit iOS-Updates.",
      },
      {
        frage: "Kann man den Akku des iPhone 16 Pro selbst austauschen?",
        antwort:
          "Apple bietet ein Self-Repair-Programm an, empfiehlt jedoch den Service durch autorisierte Techniker.",
      },
    ],
  },
  {
    id: "samsung-galaxy-s25-ultra",
    slug: "samsung-galaxy-s25-ultra",
    name: "Samsung Galaxy S25 Ultra",
    kategorie: "smartphone",
    preis: 1299,
    bewertung: 4.7,
    kurzbeschreibung:
      "Samsungs Flaggschiff mit integriertem S Pen, 200 MP Kamera und dem leistungsstarken Snapdragon 8 Elite Prozessor.",
    bild: "/images/samsung-s25-ultra.jpg",
    affiliateUrl:
      "https://www.amazon.de/dp/B0CXXXXX/ref=nosim?tag=bestvpnvergle-21",
    features: [
      "Snapdragon 8 Elite",
      "200 MP Hauptkamera",
      "Integrierter S Pen",
      "6,9 Zoll Dynamic AMOLED 2X",
      "Galaxy AI Features",
      "12 GB RAM",
      "Titangehäuse",
      "Android 15 + One UI 7",
    ],
    pros: [
      "Einzigartiger S Pen integriert",
      "Außergewöhnliche Kameraausstattung",
      "Sehr großes Display",
      "Galaxy AI sehr nützlich",
      "Langer Akku",
      "Großzügige 7 Jahre Updates",
    ],
    cons: [
      "Sehr teuer",
      "Groß und schwer",
      "One UI kann überladen wirken",
      "Langsames Aufladen im Vergleich",
    ],
    technischeDaten: {
      Display: "6,9 Zoll Dynamic AMOLED 2X, 3088 × 1440 px",
      Prozessor: "Qualcomm Snapdragon 8 Elite",
      RAM: "12 GB",
      Speicher: "256 GB / 512 GB / 1 TB",
      Kamera: "200 MP + 50 MP + 10 MP + 10 MP",
      Frontkamera: "12 MP",
      Akku: "5000 mAh",
      Betriebssystem: "Android 15 / One UI 7",
      Anschlüsse: "USB-C (USB 3.2 Gen 2)",
      Abmessungen: "162,8 × 77,6 × 8,2 mm",
      Gewicht: "218 g",
      Farben: "Titanium Black, Titanium Gray, Titanium Silverblue, Titanium Whitesilver",
    },
    faq: [
      {
        frage: "Ist der S Pen im Lieferumfang enthalten?",
        antwort:
          "Ja, beim Galaxy S25 Ultra ist der S Pen integriert und im Lieferumfang enthalten.",
      },
      {
        frage: "Wie lange bekommt das Galaxy S25 Ultra Updates?",
        antwort:
          "Samsung garantiert 7 Jahre Android-Updates und Sicherheitspatches für das S25 Ultra.",
      },
      {
        frage: "Unterstützt das S25 Ultra Wireless Charging?",
        antwort:
          "Ja, mit 15W Wireless Charging und umgekehrtem Wireless Charging für andere Geräte.",
      },
      {
        frage: "Hat das Galaxy S25 Ultra einen microSD-Slot?",
        antwort:
          "Nein, das S25 Ultra hat keinen microSD-Slot. Der interne Speicher ist nicht erweiterbar.",
      },
    ],
  },
  {
    id: "google-pixel-9-pro",
    slug: "google-pixel-9-pro",
    name: "Google Pixel 9 Pro",
    kategorie: "smartphone",
    preis: 999,
    bewertung: 4.6,
    kurzbeschreibung:
      "Googles KI-Flaggschiff mit Tensor G4 Chip, herausragender Kamera-KI und purem Android-Erlebnis.",
    bild: "/images/google-pixel-9-pro.jpg",
    affiliateUrl:
      "https://www.amazon.de/dp/B0DXXXXXXX/ref=nosim?tag=bestvpnvergle-21",
    features: [
      "Google Tensor G4 Chip",
      "KI-gestützte Kamerafunktionen",
      "6,3 Zoll LTPO OLED Display",
      "Gemini AI integriert",
      "Reines Android Erlebnis",
      "Magic Eraser & Photo Unblur",
      "7 Jahre Updates garantiert",
      "Temperatursensor",
    ],
    pros: [
      "Beste KI-Kamerafunktionen",
      "Reines Android ohne Bloatware",
      "7 Jahre Software-Updates",
      "Schnelle Sicherheitsupdates",
      "Fairer Preis für Flaggschiff",
      "Hervorragender Nachtmodus",
    ],
    cons: [
      "Tensor G4 weniger leistungsstark als Konkurrenz",
      "Wärmemanagement ausbaufähig",
      "Kein Steckplatz für SD-Karte",
      "Akku mittelmäßig",
    ],
    technischeDaten: {
      Display: "6,3 Zoll LTPO OLED, 2856 × 1280 px",
      Prozessor: "Google Tensor G4",
      RAM: "16 GB",
      Speicher: "128 GB / 256 GB / 512 GB / 1 TB",
      Kamera: "50 MP + 48 MP Ultraweitwinkel + 48 MP Teleobjektiv",
      Frontkamera: "10,5 MP",
      Akku: "4700 mAh",
      Betriebssystem: "Android 15",
      Anschlüsse: "USB-C (USB 3.2 Gen 2)",
      Abmessungen: "152,8 × 72 × 8,5 mm",
      Gewicht: "199 g",
      Farben: "Obsidian, Porcelain, Hazel, Rose Quartz",
    },
    faq: [
      {
        frage: "Was ist besonders an der Pixel 9 Pro Kamera?",
        antwort:
          "Das Pixel 9 Pro nutzt KI intensiv für Fotos: Magic Eraser, Best Take, Photo Unblur und Video Boost gehören zu den Highlights.",
      },
      {
        frage: "Wie lange erhält das Pixel 9 Pro Updates?",
        antwort:
          "Google garantiert 7 Jahre Android-Updates und Sicherheitspatches – Branchenspitze.",
      },
      {
        frage: "Ist Gemini AI auf dem Pixel 9 Pro verfügbar?",
        antwort:
          "Ja, Gemini ist tief in das System integriert und ersetzt Google Assistant als Standard-KI.",
      },
      {
        frage: "Hat das Pixel 9 Pro eine gute Akkulaufzeit?",
        antwort:
          "Der 4700-mAh-Akku reicht für einen vollen Tag, ist aber kein Spitzenreiter in seiner Klasse.",
      },
    ],
  },
  {
    id: "macbook-air-m3",
    slug: "macbook-air-m3",
    name: "MacBook Air M3",
    kategorie: "laptop",
    preis: 1299,
    bewertung: 4.8,
    besteWahl: "Beste Wahl Laptop",
    kurzbeschreibung:
      "Das dünnste und leichteste MacBook aller Zeiten mit dem revolutionären M3 Chip – perfekte Balance aus Performance und Akkulaufzeit.",
    bild: "/images/macbook-air-m3.jpg",
    affiliateUrl:
      "https://www.amazon.de/dp/B0CWXXXXXXX/ref=nosim?tag=bestvpnvergle-21",
    features: [
      "Apple M3 Chip (8-Core CPU)",
      "13,6 Zoll Liquid Retina Display",
      "Bis zu 18 Stunden Akku",
      "Kein Lüfter – lautloses Design",
      "MagSafe Laden",
      "Wi-Fi 6E & Bluetooth 5.3",
      "macOS Sonoma",
      "Unterstützt zwei externe Displays",
    ],
    pros: [
      "Außergewöhnliche Akkulaufzeit",
      "Lautloses Fanless Design",
      "Hervorragende Performance",
      "Sehr leicht (1,24 kg)",
      "Exzellentes Retina Display",
      "Starker Wiederverkaufswert",
    ],
    cons: [
      "Nur 2 USB-C Ports",
      "Kein SD-Kartenleser",
      "RAM nicht aufrüstbar",
      "Teurer Einstiegspreis",
    ],
    technischeDaten: {
      Display: "13,6 Zoll Liquid Retina, 2560 × 1664 px",
      Prozessor: "Apple M3 (8-Core CPU, 10-Core GPU)",
      RAM: "8 GB / 16 GB / 24 GB",
      Speicher: "256 GB / 512 GB / 1 TB / 2 TB SSD",
      Grafik: "Apple M3 integriert (10-Core GPU)",
      Akku: "52,6 Wh – bis zu 18 Stunden",
      Betriebssystem: "macOS Sonoma",
      Anschlüsse: "2× Thunderbolt / USB 4, MagSafe 3, 3,5mm Klinke",
      Abmessungen: "304,1 × 215 × 11,3 mm",
      Gewicht: "1,24 kg",
      Farben: "Mitternacht, Silber, Polarstern, Violet",
    },
    faq: [
      {
        frage: "Kann das MacBook Air M3 externe Monitore betreiben?",
        antwort:
          "Ja, das MacBook Air M3 unterstützt jetzt erstmals zwei externe Displays gleichzeitig – jedoch nur wenn der Laptop-Deckel geschlossen ist.",
      },
      {
        frage: "Hat das MacBook Air M3 einen Lüfter?",
        antwort:
          "Nein, das MacBook Air M3 ist fanless – es hat keinen Lüfter und arbeitet völlig lautlos.",
      },
      {
        frage: "Wie viel RAM brauche ich für das MacBook Air M3?",
        antwort:
          "Für normale Aufgaben reichen 8 GB. Für professionelle Video- oder Fotobearbeitung empfehlen wir 16 GB.",
      },
      {
        frage: "Ist das MacBook Air M3 für Gaming geeignet?",
        antwort:
          "Es eignet sich für viele macOS-Games und Apple Arcade, ist aber nicht für AAA-Gaming optimiert.",
      },
    ],
  },
  {
    id: "dell-xps-16",
    slug: "dell-xps-16",
    name: "Dell XPS 16",
    kategorie: "laptop",
    preis: 1499,
    bewertung: 4.5,
    kurzbeschreibung:
      "Dells Premium-Laptop mit 16-Zoll OLED-Display, Intel Core Ultra Prozessor und dedizierter NVIDIA Grafik für Kreative.",
    bild: "/images/dell-xps-16.jpg",
    affiliateUrl:
      "https://www.amazon.de/dp/B0CXXXXXXX/ref=nosim?tag=bestvpnvergle-21",
    features: [
      "Intel Core Ultra 7 Prozessor",
      "16 Zoll OLED 4K Display",
      "NVIDIA GeForce RTX 4060",
      "32 GB DDR5 RAM",
      "Windows 11 Pro",
      "Thunderbolt 4 Ports",
      "Wi-Fi 6E",
      "Touchpad mit Haptik-Feedback",
    ],
    pros: [
      "Brillantes OLED 4K Display",
      "Starke dedizierte GPU",
      "Premium Build Quality",
      "Schnelle SSD",
      "Gute Lautsprecher",
      "SD-Kartenleser vorhanden",
    ],
    cons: [
      "Sehr teuer",
      "Schwer (1,96 kg)",
      "Akku nicht ideal",
      "Kann unter Last warm werden",
      "Wenig Anschlüsse",
    ],
    technischeDaten: {
      Display: "16 Zoll OLED 4K, 3840 × 2400 px, 120 Hz",
      Prozessor: "Intel Core Ultra 7 155H",
      RAM: "32 GB DDR5",
      Speicher: "1 TB NVMe SSD",
      Grafik: "NVIDIA GeForce RTX 4060 8 GB",
      Akku: "86 Wh",
      Betriebssystem: "Windows 11 Pro",
      Anschlüsse: "2× Thunderbolt 4, USB-C 3.2, SD-Kartenleser, 3,5mm Klinke",
      Abmessungen: "357 × 245 × 18,5 mm",
      Gewicht: "1,96 kg",
      Farben: "Platinum, Graphite",
    },
    faq: [
      {
        frage: "Eignet sich der Dell XPS 16 für Video-Editing?",
        antwort:
          "Ja, mit dem Intel Core Ultra 7, 32 GB RAM und NVIDIA RTX 4060 ist er hervorragend für 4K-Videobearbeitung geeignet.",
      },
      {
        frage: "Kann man RAM oder SSD im Dell XPS 16 aufrüsten?",
        antwort:
          "Die SSD ist aufrüstbar. Der RAM ist fest verlötet und nicht nachrüstbar.",
      },
      {
        frage: "Wie gut ist der Akku des Dell XPS 16?",
        antwort:
          "Bei normaler Nutzung hält er etwa 6-8 Stunden. Bei Grafik-intensiven Aufgaben deutlich weniger.",
      },
      {
        frage: "Unterstützt der Dell XPS 16 Thunderbolt 4?",
        antwort:
          "Ja, er hat zwei Thunderbolt 4 Ports für schnelle Datenübertragung und externe Monitore.",
      },
    ],
  },
  {
    id: "lenovo-thinkpad-x1-carbon",
    slug: "lenovo-thinkpad-x1-carbon",
    name: "Lenovo ThinkPad X1 Carbon",
    kategorie: "laptop",
    preis: 1399,
    bewertung: 4.6,
    kurzbeschreibung:
      "Der business-orientierte Ultrabook-Klassiker: leicht, robust, sicher und mit langer Akkulaufzeit für professionelle Nutzer.",
    bild: "/images/thinkpad-x1-carbon.jpg",
    affiliateUrl:
      "https://www.amazon.de/dp/B0CXXXXXXX/ref=nosim?tag=bestvpnvergle-21",
    features: [
      "Intel Core Ultra 7 165U",
      "14 Zoll IPS Anti-Glare Display",
      "Military-Grade Zertifizierung (MIL-STD-810H)",
      "Fingerabdrucksensor & IR-Kamera",
      "4G LTE optional",
      "ThinkShutter Kameraverschluss",
      "Exzellente Tastatur",
      "Windows 11 Pro",
    ],
    pros: [
      "Legendäre ThinkPad Tastatur",
      "Sehr leicht (1,12 kg)",
      "Hohe Robustheit",
      "Exzellente Akkulaufzeit",
      "Viele Sicherheitsfeatures",
      "LTE Option verfügbar",
    ],
    cons: [
      "Display nicht der hellste",
      "Keine dedizierte GPU",
      "Design sehr konservativ",
      "Kein HDMI-Port",
      "Teuer für die Specs",
    ],
    technischeDaten: {
      Display: "14 Zoll IPS, 1920 × 1200 px, Anti-Glare",
      Prozessor: "Intel Core Ultra 7 165U",
      RAM: "16 GB / 32 GB LPDDR5",
      Speicher: "512 GB / 1 TB NVMe SSD",
      Grafik: "Intel Arc integriert",
      Akku: "57 Wh – bis zu 15 Stunden",
      Betriebssystem: "Windows 11 Pro",
      Anschlüsse: "2× Thunderbolt 4, 2× USB-A 3.2, HDMI 2.1, SD-Slot, 3,5mm",
      Abmessungen: "315,6 × 222,5 × 14,9 mm",
      Gewicht: "1,12 kg",
      Farben: "Deep Black, Storm Grey",
    },
    faq: [
      {
        frage: "Für wen ist das ThinkPad X1 Carbon geeignet?",
        antwort:
          "Es ist ideal für Business-Profis, die viel reisen und einen leichten, robusten und sicheren Laptop benötigen.",
      },
      {
        frage: "Hat das ThinkPad X1 Carbon einen guten Support?",
        antwort:
          "Ja, Lenovo bietet exzellenten Business-Support mit optionaler Vor-Ort-Garantie und schnellen Reaktionszeiten.",
      },
      {
        frage: "Kann man das ThinkPad X1 Carbon aufrüsten?",
        antwort:
          "Der RAM ist fest verlötet. Die SSD ist in der Regel austauschbar, je nach Konfiguration.",
      },
      {
        frage: "Ist das ThinkPad X1 Carbon für Gaming geeignet?",
        antwort:
          "Nein, es hat keine dedizierte GPU und ist nicht für Gaming ausgelegt. Es ist ein reines Business-Gerät.",
      },
    ],
  },
  {
    id: "ipad-pro-m4",
    slug: "ipad-pro-m4",
    name: "iPad Pro M4",
    kategorie: "tablet",
    preis: 1099,
    bewertung: 4.7,
    besteWahl: "Beste Wahl Tablet",
    kurzbeschreibung:
      "Apples ultradünnes Pro-Tablet mit M4 Chip, brillantem Tandem OLED Display und Apple Pencil Pro Unterstützung.",
    bild: "/images/ipad-pro-m4.jpg",
    affiliateUrl:
      "https://www.amazon.de/dp/B0CXXXXXXX/ref=nosim?tag=bestvpnvergle-21",
    features: [
      "Apple M4 Chip",
      "11 Zoll / 13 Zoll Tandem OLED",
      "ProMotion 120 Hz",
      "Apple Pencil Pro kompatibel",
      "Magic Keyboard kompatibel",
      "USB-C Thunderbolt 4",
      "Face ID",
      "iPadOS 17",
    ],
    pros: [
      "Brillantes Tandem OLED Display",
      "Extrem dünn und leicht",
      "Leistungsstark wie ein Laptop",
      "Apple Pencil Pro Unterstützung",
      "Exzellente Build Quality",
      "Vielseitig einsetzbar",
    ],
    cons: [
      "Sehr teuer mit Zubehör",
      "iPadOS noch eingeschränkt",
      "Kein SD-Kartenslot",
      "Apple Pencil & Keyboard extra",
      "Kein macOS",
    ],
    technischeDaten: {
      Display: "11 Zoll Tandem OLED, 2420 × 1668 px, 120 Hz ProMotion",
      Prozessor: "Apple M4 (9-Core CPU, 10-Core GPU)",
      RAM: "8 GB / 16 GB",
      Speicher: "256 GB / 512 GB / 1 TB / 2 TB",
      Kameras: "Rückkamera 12 MP, Frontkamera 12 MP",
      Akku: "31,29 Wh – bis zu 10 Stunden",
      Betriebssystem: "iPadOS 17",
      Anschlüsse: "USB-C mit Thunderbolt 4 / USB 4",
      Abmessungen: "249,7 × 177,5 × 5,3 mm",
      Gewicht: "444 g",
      Farben: "Space Schwarz, Silber",
    },
    faq: [
      {
        frage: "Kann das iPad Pro M4 als Laptop-Ersatz dienen?",
        antwort:
          "Mit Magic Keyboard und Apple Pencil Pro kann es viele Laptop-Aufgaben erledigen, iPadOS hat aber noch Einschränkungen bei Desktop-Apps.",
      },
      {
        frage: "Unterstützt das iPad Pro M4 den Apple Pencil Pro?",
        antwort:
          "Ja, das iPad Pro M4 ist mit dem Apple Pencil Pro kompatibel, der neue Features wie Squeeze und Barrel Roll bietet.",
      },
      {
        frage: "Hat das iPad Pro M4 Cellular?",
        antwort:
          "Es gibt Wi-Fi und Wi-Fi + Cellular Varianten. Die Cellular-Version unterstützt 5G.",
      },
      {
        frage: "Wie viel Speicher brauche ich beim iPad Pro M4?",
        antwort:
          "Für normale Nutzung reichen 256 GB. Für professionelle Kreativarbeit mit großen Dateien empfehlen wir 512 GB oder mehr.",
      },
    ],
  },
  {
    id: "samsung-galaxy-tab-s10",
    slug: "samsung-galaxy-tab-s10",
    name: "Samsung Galaxy Tab S10",
    kategorie: "tablet",
    preis: 899,
    bewertung: 4.5,
    kurzbeschreibung:
      "Samsungs Premium Android-Tablet mit Dynamic AMOLED Display, S Pen inklusive und Galaxy AI für kreative Nutzung.",
    bild: "/images/samsung-tab-s10.jpg",
    affiliateUrl:
      "https://www.amazon.de/dp/B0CXXXXXXX/ref=nosim?tag=bestvpnvergle-21",
    features: [
      "Snapdragon 8 Gen 3 for Galaxy",
      "11 Zoll Dynamic AMOLED 2X",
      "S Pen inklusive",
      "Galaxy AI Features",
      "IP68 Wasserschutz",
      "DeX Modus",
      "Wi-Fi 7",
      "Android 14 + One UI 6.1",
    ],
    pros: [
      "S Pen im Lieferumfang",
      "Günstigerer Preis als iPad Pro",
      "Galaxy DeX für Desktop-Erfahrung",
      "IP68 Wasserschutz",
      "Sehr gutes Display",
      "7 Jahre Updates",
    ],
    cons: [
      "Android-App-Ecosystem auf Tablets eingeschränkt",
      "One UI kann komplex wirken",
      "Weniger optimierte Apps als iPadOS",
      "Kamera nur durchschnittlich",
    ],
    technischeDaten: {
      Display: "11 Zoll Dynamic AMOLED 2X, 2560 × 1600 px, 120 Hz",
      Prozessor: "Snapdragon 8 Gen 3 for Galaxy",
      RAM: "8 GB / 12 GB",
      Speicher: "128 GB / 256 GB (erweiterbar per microSD)",
      Kameras: "Rückkamera 13 MP, Frontkamera 12 MP",
      Akku: "8000 mAh",
      Betriebssystem: "Android 14 / One UI 6.1",
      Anschlüsse: "USB-C 3.2 Gen 1, microSD, Nano SIM (LTE Version)",
      Abmessungen: "270,4 × 165,8 × 5,8 mm",
      Gewicht: "498 g",
      Farben: "Moonstone Gray, Sapphire Blue, Coral Red, Platinum Silver",
    },
    faq: [
      {
        frage: "Ist der S Pen beim Galaxy Tab S10 inklusive?",
        antwort:
          "Ja, beim Samsung Galaxy Tab S10 ist der S Pen im Lieferumfang enthalten – im Gegensatz zum iPad, wo Pencil extra kostet.",
      },
      {
        frage: "Unterstützt das Galaxy Tab S10 DeX?",
        antwort:
          "Ja, Samsung DeX verwandelt das Tablet in eine Desktop-Umgebung mit Fenstern und Taskleiste.",
      },
      {
        frage: "Hat das Galaxy Tab S10 einen microSD-Slot?",
        antwort:
          "Ja, der interne Speicher kann mit einer microSD-Karte erweitert werden – ein großer Vorteil gegenüber dem iPad.",
      },
      {
        frage: "Wie viele Jahre bekommt das Galaxy Tab S10 Updates?",
        antwort:
          "Samsung garantiert 7 Jahre Android-Updates und Sicherheitspatches für das Galaxy Tab S10.",
      },
    ],
  },
];

export const getProduktBySlug = (slug: string) =>
  produkte.find((p) => p.slug === slug);

export const getProduktByKategorie = (kategorie: Kategorie) =>
  produkte.filter((p) => p.kategorie === kategorie);

export const getBestWahl = () => produkte.filter((p) => p.besteWahl);
