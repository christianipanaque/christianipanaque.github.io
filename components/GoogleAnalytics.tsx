"use client"; // This marks the component as a Client Component

import Script from "next/script";
import { useEffect } from "react";

const GA_TRACKING_ID = "G-3R2G9RQHWY"; // Replace with your GA tracking ID

// This component only runs client-side for Google Analytics tracking
export default function GoogleAnalytics() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const page_path = window.location.pathname + window.location.search;

      // Send page view event to Google Analytics
      if (window.gtag) {
        window.gtag("config", GA_TRACKING_ID, {
          page_path
        });
      }
    }
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive" // Load GA script after the page becomes interactive
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname + window.location.search,
          });
        `}
      </Script>
      <Script type="application/ld+json">
        {`
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "dateCreated": "2024-11-19T12:34:00-05:00",
          "dateModified": "2024-11-19T14:53:00-05:00",
          "mainEntity": {
            "@type": "Person",
            "name": "Christiam Martin Ipanaque Jimenez",
            "alternateName": "Christiam Ipanaque",
            "url": "https://christiam.pe",
            "identifier": "02121987",
            "description": "Tú También Puedes Dominar la Inteligencia Artificial",
            "image": "https://christiam.pe/images/profile/christiam-martin-ipanaque-jimenez.jpg",
            "jobTitle": "Ingeniero de Software Senior",
            "worksFor": {
              "@type": "Organization",
              "name": "Christiam.pe"
            },
            "interactionStatistic": [
              {
                "@type": "InteractionCounter",
                "interactionType": {
                  "@type": "Action",
                  "name": "Follow"
                },
                "userInteractionCount": 1
              },
              {
                "@type": "InteractionCounter",
                "interactionType": {
                  "@type": "Action",
                  "name": "Like"
                },
                "userInteractionCount": 5
              },
              {
                "@type": "InteractionCounter",
                "interactionType": {
                  "@type": "Action",
                  "name": "Write"
                },
                "userInteractionCount": 2346
              }
            ]
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lima",
            "addressRegion": "Lima",
            "addressCountry": "PE"
          }
        `}
      </Script>
    </>
  );
}
