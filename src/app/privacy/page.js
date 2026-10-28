import LegalContent from "@/components/LegalContent";

const SITE_URL = "https://prestigeestatemanagement.com";

export const metadata = {
  title: "Privacy Policy & Terms of Service",
  description:
    "How Prestige Estate Management collects, stores, and protects your information, and the terms that govern use of our website and client portal.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  return <LegalContent />;
}
