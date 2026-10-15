import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

const SERVICES = [
  {
    index: "01",
    title: "Estate & Ranch Oversight",
    image: null,
    summary:
      "Routine, on-site oversight of your grounds, outbuildings, and mechanical systems: scheduled inspections, freeze and mechanical checks, and every contractor managed and supervised on your behalf.",
    points: ["Scheduled site inspections", "Mechanical & freeze-protection checks", "Contractor & vendor management", "Detailed condition reporting"],
  },
  {
    index: "02",
    title: "Estate Housekeeping",
    image: null,
    summary:
      "A dedicated housekeeping team trained to the standard of a private residence: full turnover service, pre-arrival preparation, and specialized care for your estate's finest architectural surfaces.",
    points: ["Turnover & changeover service", "Pre-arrival preparation", "Specialized architectural surface care", "Linens & seasonal rotation"],
  },
  {
    index: "03",
    title: "Preventative Maintenance & Grounds",
    image: null,
    summary:
      "Proactive facility maintenance paired with seasonal grounds preparation, so your estate's buildings, equipment, and land are protected through every Montana season.",
    points: ["Preventative facility maintenance", "Seasonal grounds preparation", "Winterization & freeze protection", "Outbuilding & equipment care"],
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
            width={928}
            height={1152}
            className="h-full w-full transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
            fittingType="fill"
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
            Rather than a menu of disconnected tasks, we build a customizable
            stewardship plan around your property's exact footprint. Each
            package below is delivered by one dedicated team, so your estate
            is never passed between strangers.
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
      </div>
    </section>
  );
}