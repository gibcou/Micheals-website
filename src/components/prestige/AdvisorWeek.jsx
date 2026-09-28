import React from "react";
import { motion } from "framer-motion";

const DAYS = [
  {
    day: "Monday",
    title: "The Walk-Through",
    body: "Every room, system, and lock inspected on site. Findings photographed, logged, and shared with you before lunch.",
  },
  {
    day: "Tuesday",
    title: "Vendor Day",
    body: "Contractors scheduled, supervised, and inspected in person, so no work is ever left to chance.",
  },
  {
    day: "Wednesday",
    title: "Housekeeping Reset",
    body: "Linens laundered, surfaces detailed, and seasonal rotation handled to hotel standard.",
  },
  {
    day: "Thursday",
    title: "Guest & Calendar Care",
    body: "Arrivals staged, keys managed, and every stay prepared as if for family.",
  },
  {
    day: "Friday",
    title: "The Weekly Report",
    body: "A single summary to your phone: photos, notes, and every action taken on your behalf.",
  },
];

export default function AdvisorWeek() {
  return (
    <section id="advisor-week" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="text-[11px] uppercase tracking-luxe text-accent">
            The Advisor&apos;s Week
          </span>
          <h2 className="mt-6 font-display text-5xl font-medium leading-[1.02] tracking-tight text-foreground md:text-6xl">
            What your advisor handles,
            <br />
            <span className="italic font-normal">while you live.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            This is what a single week inside our care looks like. You are not
            managing any of it. You are receiving the summary.
          </p>
        </motion.div>

        <div className="mt-16">
          {DAYS.map((d, i) => (
            <motion.div
              key={d.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-1 gap-4 border-t border-border py-8 transition-colors hover:bg-card md:grid-cols-12 md:items-baseline md:gap-8 md:px-6"
            >
              <div className="flex items-baseline gap-4 md:col-span-4">
                <span className="font-display text-sm italic text-accent/70">
                  0{i + 1}
                </span>
                <span className="text-[11px] uppercase tracking-luxe text-muted-foreground">
                  {d.day}
                </span>
              </div>
              <div className="md:col-span-3">
                <span className="font-display text-2xl font-medium tracking-tight text-foreground">
                  {d.title}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:col-span-5 md:text-base">
                {d.body}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}