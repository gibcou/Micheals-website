"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SERVICES = [
  {
    index: "01",
    title: "Property Management",
    image: null,
    summary:
      "Comprehensive asset protection. From routine mechanical and environmental checks to rigorous vendor oversight and financial reporting, we act as your single point of contact to ensure your estate is meticulously maintained in your absence.",
    points: ["Mechanical & environmental checks", "Vendor oversight & management", "Financial reporting", "Single point of contact"],
  },
  {
    index: "02",
    title: "Cleaning Services",
    image: null,
    summary:
      "Immaculate interiors executed to elite standards. We provide meticulous housekeeping and deep-cleaning protocols tailored specifically for high-end finishes, fine textiles, and luxury living spaces.",
    points: ["Meticulous housekeeping", "Deep-cleaning protocols", "Fine textile & finish care", "Pre-arrival preparation"],
  },
  {
    index: "03",
    title: "Maintenance & Contracting",
    image: null,
    summary:
      "Skilled trade execution without the runaround. From proactive preventative maintenance and seasonal winterization to complex repairs, our in-house capabilities and vetted contractor network keep your property operating at peak performance.",
    points: ["Preventative maintenance", "Seasonal winterization", "Complex repairs", "Vetted contractor network"],
  },
];

function ServiceRow({ service, image, i }) {
  const isEven = i % 2 === 0;
  return (
    <div className="border-t border-border">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 px-6 py-16 md:grid-cols-12 md:items-center md:gap-12 md:px-12 md:py-24">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`curtain-reveal group overflow-hidden md:col-span-5 ${
            isEven ? "md:order-1" : "md:order-2 md:col-start-8"
          }`}>
          <Image
            src={image}
            alt={service.title}
            fill
            sizes="(min-width: 768px) 42vw, 100vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`md:col-span-5 ${isEven ? "md:order-2 md:col-start-8" : "md:order-1"}`}
        >
          <span className="text-[11px] uppercase tracking-luxe text-accent">
            {service.index}
          </span>
          <h3 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
            {service.title}
          </h3>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            {service.summary}
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 text-sm text-foreground/80"
              >
                <span className="h-px w-5 bg-accent" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default function BlueprintOfCare({ images }) {
  return (
    <section id="blueprint" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <span className="text-[11px] uppercase tracking-luxe text-accent">
              The Blueprint of Care
            </span>
            <h2 className="mt-6 font-display text-5xl font-medium leading-[1.02] tracking-tight text-foreground md:text-7xl">
              A single hand for
              <br />
              <span className="italic font-normal">every detail.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-base leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9 md:text-lg"
          >
            This is not a menu to choose from. The three disciplines below,
            oversight, housekeeping, and preventative care, are inseparable
            parts of one blueprint, each watching for what the others would
            otherwise miss. We engage them together, as a single program
            under one dedicated team, so your estate is cared for in full,
            never in pieces.
          </motion.p>
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        {SERVICES.map((s, i) => (
          <ServiceRow
            key={s.title}
            service={s}
            image={images[i]}
            i={i}
          />
        ))}
        <div className="border-t border-border">
          <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-20">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Retained individually, any one of these disciplines is
              incomplete: an estate inspected but not maintained, or
              immaculate but unwatched, is only half cared for. We take on
              the whole blueprint, or none of it, so nothing about your
              estate is ever left to chance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}