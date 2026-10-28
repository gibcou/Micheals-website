import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import CursorDot from "@/components/prestige/CursorDot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--next-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--next-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata = {
  metadataBase: new URL("https://prestigeestatemanagement.com"),
  title: "Prestige Estate Management",
  description:
    "Discreet, single-point-of-contact estate and ranch stewardship for private estates, seasonal compounds, and large-acreage properties across Montana.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  const isProd = process.env.NODE_ENV === "production";
  const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const umamiScriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
  const umamiDomains = process.env.NEXT_PUBLIC_UMAMI_DOMAINS;

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
        <CursorDot />
        <Toaster />
        {/* Heatmap recorder — always on; Umami matches data-domains itself. */}
        <Script
          src="https://umami-for-a-project.vercel.app/recorder.js"
          data-website-id="57dd8ff6-6542-4f56-9094-252f25cfc101"
          data-domains="prestigeestatemanagement.com,www.prestigeestatemanagement.com"
          strategy="afterInteractive"
        />
        {/* Pageview analytics — production only, driven by env vars. */}
        {isProd && umamiWebsiteId && umamiScriptUrl && (
          <Script
            src={umamiScriptUrl}
            data-website-id={umamiWebsiteId}
            data-domains={umamiDomains}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
