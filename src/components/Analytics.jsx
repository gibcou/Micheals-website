import { useEffect } from "react";

/**
 * Injects the Umami tracking script, driven entirely by env vars so no
 * website ID or script URL is ever hardcoded. Renders nothing itself.
 * Skipped outside production so local dev and Vercel preview builds are
 * never counted (data-domains on the script is a second safety net for
 * that on the Umami side).
 */
export default function Analytics() {
  useEffect(() => {
    const websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;
    const scriptUrl = import.meta.env.VITE_UMAMI_SCRIPT_URL;
    const domains = import.meta.env.VITE_UMAMI_DOMAINS;

    if (!import.meta.env.PROD || !websiteId || !scriptUrl) return;

    const script = document.createElement("script");
    script.defer = true;
    script.src = scriptUrl;
    script.dataset.websiteId = websiteId;
    if (domains) script.dataset.domains = domains;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
