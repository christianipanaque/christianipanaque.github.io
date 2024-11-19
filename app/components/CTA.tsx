"use client";

import { useEffect } from "react";

export default function ExternalRedirectLink() {
  useEffect(() => {
    const handleExternalRedirect = (event: MouseEvent) => {
      const targetUrl =
        "https://docs.google.com/document/d/18Psq_TmHDtOFLGaly7kf3MvloWj5ZiSr4BR8-NAKUu8/edit?usp=embed_facebook"; // Replace with your actual URL

      // Detect TikTok in-app browser by checking platform constraints
      const isTikTokBrowser =
        navigator.userAgent.includes("Tiktok") ||
        (navigator.platform === "iPhone" && navigator.vendor === "Apple");

      if (isTikTokBrowser) {
        event.preventDefault(); // Prevent default behavior of <a> tag

        // Use external redirect handler
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
      href="https://docs.google.com/document/d/18Psq_TmHDtOFLGaly7kf3MvloWj5ZiSr4BR8-NAKUu8/edit?usp=embed_facebook"
      className="py-4 px-6 block w-full rounded-xl text-2xl font-merriweather bg-[#cf7447] hover:bg-[#A56D51] text-white shadow-lg cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open the link in a new browser tab"
    >
      Acceder Ahora
    </a>
  );
}
