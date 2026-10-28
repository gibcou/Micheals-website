import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center text-foreground">
      <span className="font-display text-sm italic text-accent/70">404</span>
      <h1 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
        This page could not be found.
      </h1>
      <Link
        href="/"
        className="border border-foreground/30 px-6 py-3 text-[11px] uppercase tracking-luxe text-foreground transition-colors hover:bg-foreground hover:text-background"
      >
        Return home
      </Link>
    </div>
  );
}
