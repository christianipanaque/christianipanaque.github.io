import "../styles/globals.css";
import "../styles/checkboxes.css";
import "../styles/radios.css";

export const metadata = {
  title: "Tú También Puedes Dominar la Inteligencia Artificial | Christiam.pe",
  description:
    "Aprende a dominar la Inteligencia Artificial con guías prácticas, herramientas modernas y consejos de expertos en Christiam.pe."
};

const GOOGLE_ANALYTICS_ID = "G-3R2G9RQHWY";
const GOOGLE_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2024-11-19T12:34:00-05:00",
  dateModified: "2024-11-19T14:53:00-05:00",
  mainEntity: {
    "@type": "Person",
    name: "Christiam Martin Ipanaque Jimenez",
    alternateName: "Christiam Ipanaque",
    url: "https://christiam.pe",
    identifier: "02121987",
    description: "Tú También Puedes Dominar la Inteligencia Artificial",
    image:
      "https://christiam.pe/images/profile/christiam-martin-ipanaque-jimenez.jpg",
    jobTitle: "Ingeniero de Software Senior",
    worksFor: {
      "@type": "Organization",
      name: "Christiam.pe"
    },
    interactionStatistic: [
      {
        "@type": "InteractionCounter",
        interactionType: {
          "@type": "Action",
          name: "Follow"
        },
        userInteractionCount: 1
      },
      {
        "@type": "InteractionCounter",
        interactionType: {
          "@type": "Action",
          name: "Like"
        },
        userInteractionCount: 5
      },
      {
        "@type": "InteractionCounter",
        interactionType: {
          "@type": "Action",
          name: "Write"
        },
        userInteractionCount: 2346
      }
    ]
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressRegion: "Lima",
    addressCountry: "PE"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-PE">
      <head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ANALYTICS_ID}');
            `
          }}
        />

        {/* Meta Data */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Aprende a dominar la Inteligencia Artificial con guías prácticas, herramientas modernas y consejos de expertos en Christiam.pe."
        />
        <meta
          name="keywords"
          content="Inteligencia Artificial, Aprendizaje Automático, Guías IA, Herramientas IA, Christiam"
        />
        <meta name="author" content="Christiam Martin Ipanaque Jimenez" />
        <link rel="canonical" href="https://christiam.pe/" />

        <link
          rel="icon"
          href="https://christiam.pe/images/profile/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://christiam.pe/images/profile/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://christiam.pe/images/profile/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://christiam.pe/images/profile/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="https://christiam.pe/images/profile/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="https://christiam.pe/images/profile/android-chrome-512x512.png"
        />
        <link
          rel="manifest"
          href="https://christiam.pe/images/profile/manifest.json"
        />
        <meta name="theme-color" content="#6C1111" />
        <link
          rel="icon"
          href="https://christiam.pe/images/profile/favicon.ico"
        />

        <title>
          Tú También Puedes Dominar la Inteligencia Artificial | Christiam.pe
        </title>

        {/* Google Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(GOOGLE_STRUCTURED_DATA)
          }}
        />

        {/* Social media tags */}

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Tú También Puedes Dominar la Inteligencia Artificial | Christiam.pe"
        />
        <meta
          property="og:description"
          content="Aprende a dominar la Inteligencia Artificial con guías prácticas, herramientas modernas y consejos de expertos en Christiam.pe."
        />
        <meta property="og:url" content="https://christiam.pe/" />
        <meta
          property="og:image"
          content="https://christiam.pe/images/profile/christiam-martin-ipanaque-jimenez.jpg"
        />
        <meta property="og:locale" content="es_PE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tú También Puedes Dominar la Inteligencia Artificial | Christiam.pe"
        />
        <meta
          name="twitter:description"
          content="Aprende a dominar la Inteligencia Artificial con guías prácticas, herramientas modernas y consejos de expertos en Christiam.pe."
        />
        <meta
          name="twitter:image"
          content="https://christiam.pe/images/profile/christiam-martin-ipanaque-jimenez.jpg"
        />
        <meta name="twitter:site" content="@christiamipanaque" />
      </head>
      <body className="bg-zinc-100">
        {children}
      </body>
    </html>
  );
}
