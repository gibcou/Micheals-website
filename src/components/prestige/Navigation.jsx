import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Services", href: "#blueprint" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Onboarding", href: "#onboarding" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.header
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <div className="mx-auto flex max-w-[1600px] items-center justify-between border-b border-border/60 bg-background/85 px-6 py-5 backdrop-blur-md md:px-12">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl"
            >
              Prestige<span className="text-accent">.</span>
            </button>

            <nav className="hidden items-center gap-10 md:flex">
              {LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleNav(l.href)}
                  className="nav-link text-[11px] uppercase tracking-luxe text-foreground/70 transition-colors hover:text-foreground"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#onboarding")}
                className="border border-foreground/30 px-5 py-2.5 text-[11px] uppercase tracking-luxe text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Apply for Management
              </button>
            </nav>

            <button
              className="text-[11px] uppercase tracking-luxe text-foreground md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>

          {open && (
            <div className="border-t border-border bg-background/95 px-6 py-6 backdrop-blur md:hidden">
              {LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleNav(l.href)}
                  className="block w-full py-3 text-left text-xs uppercase tracking-luxe text-foreground/80"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#onboarding")}
                className="mt-4 w-full border border-foreground/30 py-3 text-[11px] uppercase tracking-luxe text-foreground"
              >
                Apply for Management
              </button>
            </div>
          )}
        </motion.header>
      )}
    </AnimatePresence>
  );
}