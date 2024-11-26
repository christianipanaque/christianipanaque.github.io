"use client";

import { useEffect } from "react";

export default function ExternalRedirectLink({ primaryText, secondaryText }) {
  useEffect(() => {
    const handleExternalRedirect = (event: MouseEvent) => {
      const targetUrl = "https://wa.me/message/GGSWDFMMNE3HP1"; // Replace with your actual URL

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
      className="button-custom"
      href="https://wa.me/message/GGSWDFMMNE3HP1"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open the link in a new browser tab"
    >
      {primaryText}
      <span>{secondaryText}</span>
    </a>
  );
}
