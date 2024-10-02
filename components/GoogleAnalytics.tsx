"use client"; // This marks the component as a Client Component

import Script from "next/script";
import { useEffect } from "react";

const GA_TRACKING_ID = "G-MD51YRYGX9"; // Replace with your GA tracking ID

// This component only runs client-side for Google Analytics tracking
export default function GoogleAnalytics() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const page_path = window.location.pathname + window.location.search;

      // Send page view event to Google Analytics
      if (window.gtag) {
        window.gtag("config", GA_TRACKING_ID, {
          page_path,
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
    </>
  );
}
