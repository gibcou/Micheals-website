import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@/components/ui/image";

export default function Hero({ heroImage, heroVideo }) {
  const sectionRef = useRef(null);
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="sanctuary" ref={sectionRef} className="grain relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <motion.div className="absolute inset-x-0 -top-[14%] h-[128%]" style={{ y: imageY }}>
        {heroVideo && (
          <video
            className="ken-burns h-full w-full object-cover"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        )}
        <Image
          src={heroImage}
          alt="Architectural interior of a luxury mountain estate at blue hour"
          className="ken-burns h-full w-full"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/20 to-foreground/55" />
      </motion.div>

      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 flex h-full flex-col justify-between px-6 py-10 md:px-12 md:py-14">
        {/* Top brand bar */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between"
        >
          <span className="font-display text-xl font-semibold tracking-tight text-background md:text-2xl">
            Prestige Estate Management
          </span>
          <span className="hidden text-[10px] uppercase tracking-luxe text-background/70 md:block">
            Bozeman · Montana
          </span>
        </motion.div>

        {/* Headline */}
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-[11px] uppercase tracking-luxe text-background/70"
          >
            Comprehensive Estate & Lifestyle Management
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[15vw] font-medium leading-[0.95] tracking-tight text-background md:text-[8vw] lg:text-[7.5rem]"
          >
            Your Estate,
            <br />
            <span className="italic font-normal">Perfected.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-base leading-relaxed text-background/85 md:text-lg"
          >
            One trusted point of contact for property management, cleaning, and
            maintenance, so your estate is cared for with the discretion and
            precision of a private concierge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <button
              onClick={() => scrollTo("#onboarding")}
              data-cursor="ring"
              className="sweep inline-flex items-center justify-center bg-accent px-8 py-4 text-[11px] uppercase tracking-luxe text-accent-foreground"
            >
              <span>Apply for Management</span>
            </button>
            <button
              onClick={() => scrollTo("#blueprint")}
              className="sweep sweep-light inline-flex items-center justify-center border border-background/40 px-8 py-4 text-[11px] uppercase tracking-luxe text-background"
            >
              <span>Explore the Blueprint of Care</span>
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center gap-4 text-[10px] uppercase tracking-luxe text-background/60"
        >
          <span>Scroll</span>
          <span className="relative h-px w-16 overflow-hidden bg-background/20">
            <motion.span
              className="absolute inset-y-0 left-0 w-1/2 bg-background/90"
              animate={{ x: ["-100%", "220%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}