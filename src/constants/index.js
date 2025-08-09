const navLinks = [
    {
        name: "Projekte",
        link: "#work",
    },
    {
        name: "Erfahrung ",
        link: "#experience",
    },
    {
        name: "Kompetenzen ",
        link: "#skills",
    },
    {
        name: "Mindset",
        link: "#testimonials",
    },
];

const words = [
    { text: "Sysadmin", imgPath: "/images/ideas.svg" },
    { text: "IT-Sicherheit", imgPath: "/images/concepts.svg" },
    { text: "Automatisierung", imgPath: "/images/designs.svg" },
    { text: "Python-Scripting", imgPath: "/images/code.svg" },
    { text: "React.js", imgPath: "/images/ideas.svg" },
    { text: "DevOps Tools", imgPath: "/images/concepts.svg" },
    { text: "Bash Scripting", imgPath: "/images/designs.svg" },
    { text: "Active Directory", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: "Windows & Linux", label: "Betriebssysteme & Plattformen" },
    { value: "Bash, PowerShell", label: "CLI & Scripting" },
    { value: "Python", label: "Programmiersprachen" },
    { value: "React, Node.js, Three.js", label: "JS Frameworks & Libraries" },
    { value: "Git", label: "DevOps & Tools" },
    { value: "IT-Security", label: "IT-Sicherheit" },
    { value: "HTML5, CSS3, JavaScript", label: "Web & Frontend" },
    { value: "PHP, SQL", label: "Backend" },
  ];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Qualitätsorientiert",
        desc: "Konsequent hochwertige Ergebnisse mit Liebe zum Detail liefern.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Zuverlässige Kommunikation",
        desc: "Transparente Updates während des gesamten Projekts sicherstellen.",
    },
    {
        imgPath: "/images/time.png",
        title: "Termintreue",
        desc: "Projekte immer fristgerecht mit hoher Qualität abschließen.",
    },
];

const techStackImgs = [
    {
        name: "React",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Node.js",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Three.js",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Git",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Node.js",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Three.js",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Git",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
        "Elektro Tertlidis GmbH",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "IT Adminmistrator",
        date: "Januar 2019 - jetzt",
        responsibilities: [
            "Installation und Einrichtung von Software und Betriebssystemen.",
            "Einrichtung von Geräten und IT-Infrastrukturen.",
            "Administration und Wartung von Geräten und IT-Infrastrukturen.",
            "Daten-/Anwendungsmigration.",
            "Durchführung von Updates.",
            "Zusammenbau von PC-Systemen.",
            "Computer-Aufbauservice und Geräteeinweisung.",
            "Anwenderunterstützung und Hilfe bei Problemen und Fragen.",
            "Beratung zu Systemen oder Systemerweiterungen.",
        ],
    },
    {
        review:
            "Elektro Tertlidis GmbH",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Einzelhändler",
        date: "Januar 2019 - jetzt",
        responsibilities: [
            "Auftragsbearbeitung.",
            "Rechnungsstellung.",
            "Bearbeitung des Zahlungsverkehrs.",
            "Dokumentation der Geschäftsvorfälle.",
            "Kundenbetreuung.",
            "Kassieren und Abrechnen.",
        ],
    },
    {
        review:
            "IT-Admin & Security Hobbyist | CTF & Pentesting-Fan",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "Sicherheitsenthusiast",
        date: "Januar 1995 - jetzt",
        responsibilities: [
            "Seit meiner Kindheit beschäftige ich mich intensiv mit IT – mittlerweile über 20 Jahre.",
            "Mein Schwerpunkt liegt auf IT-Sicherheit und IT-Administration.",
            "Als IT-Administrator in einem Unternehmen habe ich komplette IT-Infrastrukturen geplant, aufgebaut und betreut.",
            "Ich bilde mich kontinuierlich im IT-Bereich weiter – sowohl theoretisch als auch praktisch.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Epiktet (Handbüchlein der Moral, Abschnitt 5)",
        mentions: "@epiktet",
        review:
            "Nicht die Dinge selbst beunruhigen die Menschen, sondern die Meinungen und Urteile über die Dinge.",
        imgPath: "/images/client1.png"
    },
    {
        name: "Marcus Aurelius (Meditationen, Buch 5, Abschnitt 16)",
        mentions: "@marcusaurelius",
        review:
            "Die Seele wird durch den Gedanken, den sie wählt, geformt. Wähle gute Gedanken.",
        imgPath: "/images/client2.png"
    },
    {
        name: "Buddha (Dhammapada, Vers 1)",
        mentions: "@buddha",
        review:
            "Alle Dinge entstehen durch den Geist. Wenn ein Mensch mit reinem Geist spricht oder handelt, folgt ihm das Glück wie sein Schatten.",
        imgPath: "/images/client3.png"
    },
    {
        name: "Seneca (Briefe an Lucilius, Brief 113, Abschnitt 29)",
        mentions: "@seneca",
        review:
            "Beherrsche deinen Geist, und du wirst stärker sein als der, der Städte erobert.",
        imgPath: "/images/client5.png"
    },
    {
        name: "Bibel (Römer 12:2)",
        mentions: "@paulusvontarsus",
        review:
            "Und passt euch nicht dieser Welt an, sondern ändert euch durch Erneuerung eures Sinnes, damit ihr prüfen könnt, was der gute und wohlgefällige und vollkommene Wille Gottes ist.",
        imgPath: "/images/client4.png"
    },
    {
        name: "Seneca (De Ira, Buch 2, Abschnitt 36)",
        mentions: "@seneca",
        review:
            "Lenke deine Gedanken auf das Gute, und dein Geist wird zur Festung des Friedens.",
        imgPath: "/images/client6.png"
    },
];


const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/georgiost/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};