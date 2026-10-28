import HomeView from "@/components/HomeView";

const SITE_URL = "https://prestigeestatemanagement.com";
const TITLE =
  "Prestige Estate Management — Private Estate & Ranch Stewardship | Montana";
const DESCRIPTION =
  "Prestige Estate Management provides discreet, single-point-of-contact estate and ranch stewardship for private estates, seasonal compounds, and large-acreage properties across Montana, with on-site oversight of grounds, buildings, and mechanical systems. Your estate, perfected.";
const HERO_IMAGE =
  "https://media.base44.com/images/public/6aba7b7e7783ccf861248a9c/f94b19398_generated_8554b353.jpg";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Prestige Estate Management",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: HERO_IMAGE,
        width: 1480,
        height: 819,
        alt: "Architectural interior of a luxury mountain estate at blue hour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [HERO_IMAGE],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Prestige Estate Management",
  alternateName: "PEMGroup",
  description: DESCRIPTION,
  url: SITE_URL,
  image: HERO_IMAGE,
  telephone: "+1-406-555-0100",
  email: "info@prestigeestatemanagement.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bozeman",
    addressRegion: "MT",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "State",
    name: "Montana",
  },
  priceRange: "$$$$",
  serviceType: [
    "Private estate management",
    "Ranch management",
    "Estate housekeeping",
    "Preventative maintenance & grounds",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <HomeView />
    </>
  );
}
