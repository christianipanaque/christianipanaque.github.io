"use client";

import { useEffect } from "react";

export default function ExternalRedirectLink() {
  useEffect(() => {
    const handleExternalRedirect = (event: MouseEvent) => {
      const targetUrl =
        "https://docs.google.com/document/d/18Psq_TmHDtOFLGaly7kf3MvloWj5ZiSr4BR8-NAKUu8/edit?usp=embed_facebook"; // Replace with your actual URL

      const isTikTokBrowser = (() => {
        if ("userAgentData" in navigator) {
          const userAgentData = navigator.userAgentData as any;
          return userAgentData.brands.some((brand: { brand: string }) =>
            brand.brand.includes("TikTok")
          );
        }
        return navigator.userAgent.includes("TikTok");
      })();

      if (isTikTokBrowser) {
        event.preventDefault(); // Prevent default behavior of <a> tag

        // Redirect to external browser
        window.location.href = `https://www.openinbrowser.com?url=${encodeURIComponent(
          targetUrl
        )}`;
      }
    };

    // Attach the event to the link
    const linkElement = document.getElementById("cta-link-id"); // Replace with your <a> tag ID
    if (linkElement) {
      linkElement.addEventListener("click", handleExternalRedirect);
    }

    // Cleanup event listener on unmount
    return () => {
      if (linkElement) {
        linkElement.removeEventListener("click", handleExternalRedirect);
      }
    };
  }, []);
  return (
    <a
      id="cta-link-id"
      className="inline-block px-20 py-8 text-white bg-gradient-to-b from-[#B27A5B] to-[#A56D51] rounded-md shadow-lg hover:shadow-xl active:shadow-sm border border-[#8E5940] relative overflow-hidden transition-all duration-200 ease-in-out transform hover:translate-y-[-2px] active:translate-y-[2px]"
      href="https://docs.google.com/document/d/18Psq_TmHDtOFLGaly7kf3MvloWj5ZiSr4BR8-NAKUu8/edit?usp=embed_facebook"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open the link in a new browser tab"
    >
      <span className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-md opacity-50"></span>
      <span className="relative z-10 font-montserrat font-extrabold text-3xl uppercase">
        Acceder Ahora
      </span>
    </a>
  );
}
