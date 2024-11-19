import Script from "next/script";

const ProfilePageStructuredData = () => {
  const structuredData = {
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
    <Script
      type="application/ld+json"
      id="structured-data"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default ProfilePageStructuredData;
