"use client";

export default function ExternalRedirectLink({ primaryText, secondaryText }) {
  return (
    <a
      id="cta-link-id"
      className="button-custom"
      href="https://buy.stripe.com/8wM8y9eyRehl7fi002"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open the link in a new browser tab"
    >
      {primaryText}
      <span>{secondaryText}</span>
    </a>
  );
}
