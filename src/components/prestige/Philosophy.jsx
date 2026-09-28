import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

const PILLARS = [
  {
    label: "Our Vision",
    body: "To be the single, trusted point of contact for a discerning portfolio of clients, simplifying their lives by delivering a full spectrum of exceptional services from one cohesive team.",
  },
  {
    label: "Our Mission",
    body: "To streamline our clients' lives through comprehensive, personalized estate and lifestyle management, saving invaluable time and providing complete peace of mind.",
  },
  {
    label: "Our Standard",
    body: "Every interaction reflects our core values of quality, integrity, and professionalism, ensuring your needs are met with meticulous attention to detail.",
  },
];

export default function Philosophy({ aboutImage }) {
  return (
    <section id="philosophy" className="relative bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="curtain-reveal group aspect-[3/2] overflow-hidden md:col-span-7"
          >
            <Image
              src={aboutImage}
              alt="A formally set dining table in a quiet luxury estate"
              className="h-full w-full transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
              fittingType="fill"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center md:col-span-5"
          >
            <span className="text-[11px] uppercase tracking-luxe text-accent">
              The Philosophy
            </span>
            <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
              The quiet aftermath
              <br />
              of <span className="italic font-normal">perfection.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              PEMGroup was founded on a simple recognition: discerning owners in
              the Bozeman area needed a single, trusted point of contact to
              expertly manage their properties and lifestyles. We built that
              umbrella, and we hold it with unwavering care.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-secondary p-8 md:p-12"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-sm italic text-accent/70">
                  0{i + 1}
                </span>
                <span className="text-[11px] uppercase tracking-luxe text-accent">
                  {p.label}
                </span>
              </div>
              <p className="mt-6 text-base leading-relaxed text-foreground/85 md:text-lg">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}