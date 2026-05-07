import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Spotlight } from "@/components/ui/spotlight";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Mail, Phone, Github, Download } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const words = [
    { text: "Full" },
    { text: "Stack" },
    { text: "Web", className: "text-blue-500 dark:text-blue-400" },
    { text: "Developer", className: "text-blue-500 dark:text-blue-400" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <BackgroundBeams />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-24 lg:py-20">

          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div {...fadeUp(0.1)}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6 tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4"
            >
              Sonny A.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
                Nepomuceno
              </span>
            </motion.h1>

            <motion.div {...fadeUp(0.3)}>
              <TypewriterEffect words={words} className="justify-center lg:justify-start" />
            </motion.div>

            <motion.p
              {...fadeUp(0.4)}
              className="text-neutral-400 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed mt-2 mb-8"
            >
              Full Stack Web Developer with 6+ years at H.R.D Singapore Pte Ltd, building and
              maintaining 5+ internal web platforms used daily across multiple departments.
              Specializes in Vue.js, Laravel 9 and MySQL — delivering clean, scalable systems
              from production monitoring to real-time order tracking.
            </motion.p>

            <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 text-sm text-center shadow-lg shadow-blue-500/25">
                View Projects
              </a>
              <a href="#about" className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-200 text-sm text-center">
                About Me
              </a>
              <a
                href="/SonnyNepomuceno.pdf"
                download="SonnyNepomuceno.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-blue-500/40 text-blue-400 font-semibold hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-200 text-sm"
              >
                <Download size={15} />
                Download CV
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.6)} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-neutral-500 text-sm">
              <a href="tel:+639638718959" className="flex items-center gap-2 hover:text-neutral-300 transition-colors">
                <Phone size={14} />
                +63 963 871 8959
              </a>
              <a href="mailto:sonnybst@gmail.com" className="flex items-center gap-2 hover:text-neutral-300 transition-colors">
                <Mail size={14} />
                sonnybst@gmail.com
              </a>
              <a href="https://github.com/sonnynepomuceno" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-neutral-300 transition-colors">
                <Github size={14} />
                github.com/sonnynepomuceno
              </a>
            </motion.div>
          </div>

          {/* Right — 3D Card */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <CardContainer containerClassName="py-0">
              <CardBody className="relative group/card w-72 sm:w-80 rounded-2xl p-5 border border-white/10 bg-gradient-to-b from-neutral-900 to-black hover:border-blue-500/30 transition-colors duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover/card:opacity-20 blur transition duration-500" />

                <CardItem translateZ={80} className="w-full">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src="/halfBody-Son.png"
                      alt="Sonny A. Nepomuceno"
                      className="w-full h-auto object-contain rounded-xl group-hover/card:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                </CardItem>

                <CardItem translateZ={50} className="text-white text-lg font-bold mt-4 w-full">
                  Sonny A. Nepomuceno
                </CardItem>

                <CardItem as="p" translateZ={30} className="text-blue-400 text-sm mt-1 w-full">
                  Full Stack Web Developer
                </CardItem>

                <CardItem translateZ={20} className="mt-3 w-full">
                  <div className="flex flex-wrap gap-1.5">
                    {["Laravel", "Vue.js", "Node.js", "MySQL"].map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-white/10 text-neutral-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-neutral-600 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
