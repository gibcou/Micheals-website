import React from "react";

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="transparence" className="bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-28">
        {/* Final handshake */}
        <div className="grid grid-cols-1 gap-12 border-b border-border pb-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="text-[11px] uppercase tracking-luxe text-accent">
              The Final Handshake
            </span>
            <h2 className="mt-6 font-display text-5xl font-medium leading-[1.02] tracking-tight text-foreground md:text-7xl">
              Your estate,
              <br />
              <span className="italic font-normal">in trusted hands.</span>
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              We invite you to begin a private consultation. A dedicated advisor
              will walk you through how a single team can carry every detail of
              your property, so you are free to live.
            </p>
            <button
              onClick={() => scrollTo("#onboarding")}
              data-cursor="ring"
              className="sweep mt-10 inline-flex items-center bg-foreground px-8 py-4 text-[11px] uppercase tracking-luxe text-background"
            >
              <span>Apply for Management</span>
            </button>
          </div>

          <div className="md:col-span-5 md:col-start-9">
            <div className="space-y-8">
              <div>
                <span className="text-[10px] uppercase tracking-luxe text-muted-foreground">
                  Direct to the Principal
                </span>
                <a
                  href="mailto:info@prestigeestatemanagement.com"
                  className="mt-3 block break-all text-sm text-foreground transition-colors hover:text-accent"
                >
                  info@prestigeestatemanagement.com
                </a>
                <a
                  href="tel:+14065550100"
                  className="mt-2 block text-sm text-foreground transition-colors hover:text-accent"
                >
                  (406) 555-0100
                </a>
              </div>
              <div className="border-t border-border pt-8">
                <span className="text-[10px] uppercase tracking-luxe text-muted-foreground">
                  Studio
                </span>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  Bozeman, Montana
                  <br />
                  Serving the greater Gallatin Valley
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & trust */}
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="font-display text-2xl font-semibold tracking-tight text-foreground">
              Prestige<span className="text-accent">.</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Comprehensive estate & lifestyle management. One trusted point of
              contact for discerning owners.
            </p>
          </div>

          <div className="md:col-span-3">
            <span className="text-[10px] uppercase tracking-luxe text-muted-foreground">
              Services
            </span>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li>Property Management</li>
              <li>Cleaning Services</li>
              <li>Maintenance & Contracting</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <span className="text-[10px] uppercase tracking-luxe text-muted-foreground">
              Standards
            </span>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li>Fully insured & bonded</li>
              <li>Background-checked crews</li>
              <li>Licensed & certified</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <span className="text-[10px] uppercase tracking-luxe text-muted-foreground">
              Navigate
            </span>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li>
                <button onClick={() => scrollTo("#blueprint")} className="hover:text-accent">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#philosophy")} className="hover:text-accent">
                  Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#onboarding")} className="hover:text-accent">
                  Apply
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-[11px] uppercase tracking-luxe text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Prestige Estate Management</span>
          <span>Bozeman · Montana · United States</span>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none mt-12 select-none md:mt-16"
        >
          <span className="block text-center font-display text-[13vw] font-medium leading-none text-foreground/5">
            Prestige
          </span>
        </div>
      </div>
    </footer>
  );
}