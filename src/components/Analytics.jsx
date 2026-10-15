import { useEffect } from "react";

function injectScript({ src, websiteId, domains }) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = src;
  script.dataset.websiteId = websiteId;
  if (domains) script.dataset.domains = domains;
  document.head.appendChild(script);
  return script;
}

/**
 * Injects the Umami tracking script (and, if configured, the heatmap
 * recorder script), driven entirely by env vars so no website ID or
 * script URL is ever hardcoded. Renders nothing itself. Skipped outside
 * production so local dev and Vercel preview builds are never counted
 * (data-domains on each script is a second safety net for that on the
 * Umami side).
 */
export default function Analytics() {
  useEffect(() => {
    const websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;
    const scriptUrl = import.meta.env.VITE_UMAMI_SCRIPT_URL;
    const recorderUrl = import.meta.env.VITE_UMAMI_RECORDER_URL;
    const domains = import.meta.env.VITE_UMAMI_DOMAINS;

    if (!import.meta.env.PROD || !websiteId || !scriptUrl) return;

    const scripts = [injectScript({ src: scriptUrl, websiteId, domains })];
    if (recorderUrl) {
      scripts.push(injectScript({ src: recorderUrl, websiteId, domains }));
    }

    return () => {
      scripts.forEach((script) => document.head.removeChild(script));
    };
  }, []);

  return null;
}
