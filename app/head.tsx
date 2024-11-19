export default function Head() {
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

  return (
    <>
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
      <link rel="icon" href="https://christiam.pe/favicon.ico" />
      <link
        rel="apple-touch-icon"
        href="https://christiam.pe/apple-touch-icon.png"
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

      {/* Preload Merriweather Fonts */}
      <link
        rel="preload"
        href="/fonts/Merriweather-Black.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Merriweather-BlackItalic.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Merriweather-Bold.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Merriweather-BoldItalic.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Merriweather-Italic.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Merriweather-Light.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Merriweather-LightItalic.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Merriweather-Regular.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />

      {/* Preload Roboto Fonts */}
      <link
        rel="preload"
        href="/fonts/Roboto-Black.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Roboto-BlackItalic.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Roboto-Bold.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Roboto-BoldItalic.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Roboto-Italic.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Roboto-Light.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Roboto-LightItalic.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Roboto-Medium.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Roboto-MediumItalic.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Roboto-Regular.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Roboto-Thin.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Roboto-ThinItalic.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
    </>
  );
}
