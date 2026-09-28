import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-foreground"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
        >
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl tracking-tight text-background md:text-4xl"
            >
              Prestige<span className="text-accent">.</span>
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-5 h-px w-24 origin-left bg-accent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}