import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimation({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflow = "";
      setVisible(false);
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Glow orb */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          <div className="relative text-center px-4">
            {/* Name */}
            <div className="overflow-hidden">
              <motion.h1
                className="text-6xl sm:text-8xl lg:text-9xl font-bold text-white tracking-tight"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                SONNY<span className="text-blue-400">.</span>
              </motion.h1>
            </div>

            {/* Divider bar */}
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-5 mb-5"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
            />

            {/* Subtitle */}
            <motion.p
              className="text-neutral-400 text-sm sm:text-base tracking-[0.25em] uppercase"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              Full Stack Web Developer
            </motion.p>

            {/* Loading dots */}
            <div className="flex items-center justify-center gap-1.5 mt-8">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-blue-400"
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
