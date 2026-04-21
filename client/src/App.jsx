import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import IntroAnimation from "@/components/IntroAnimation";
import { Linkedin, Facebook, Github, Mail, Phone, MapPin } from "lucide-react";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[200] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400"
    />
  );
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <IntroAnimation onComplete={() => setIntroComplete(true)} />

      {introComplete && <ScrollProgressBar />}

      <main
        className="bg-black min-h-screen"
        style={{
          opacity: introComplete ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />

        {/* Footer */}
        <footer className="bg-neutral-950 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid sm:grid-cols-3 gap-8 mb-10">

              {/* Brand + socials */}
              <div>
                <a href="#home" className="inline-flex items-center gap-1 text-white font-bold text-xl mb-3 hover:text-blue-400 transition-colors">
                  SONNY<span className="text-blue-400">.</span>
                </a>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                  Full Stack Web Developer crafting web systems with Laravel, Vue.js, and Node.js.
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/sonny-nepomuceno/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="https://github.com/sonnynepomuceno"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://www.facebook.com/TKxSilencExph/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
                  >
                    <Facebook size={16} />
                  </a>
                </div>
              </div>

              {/* Quick links */}
              <div>
                <p className="text-white font-semibold text-sm mb-4">Quick Links</p>
                <ul className="space-y-2">
                  {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-neutral-500 hover:text-blue-400 text-sm transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact info */}
              <div>
                <p className="text-white font-semibold text-sm mb-4">Contact</p>
                <ul className="space-y-3">
                  <li>
                    <a href="mailto:sonnybst@gmail.com" className="flex items-start gap-2 text-neutral-500 hover:text-blue-400 text-sm transition-colors">
                      <Mail size={14} className="mt-0.5 flex-shrink-0" />
                      sonnybst@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+639638718959" className="flex items-start gap-2 text-neutral-500 hover:text-blue-400 text-sm transition-colors">
                      <Phone size={14} className="mt-0.5 flex-shrink-0" />
                      09638718959
                    </a>
                  </li>
                  <li>
                    <span className="flex items-start gap-2 text-neutral-500 text-sm">
                      <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                      Pabahay, Bagtas, Tanza, Cavite
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-2">
              <p className="text-neutral-600 text-xs">
                © {new Date().getFullYear()} Sonny A. Nepomuceno. All rights reserved.
              </p>
              <p className="text-neutral-700 text-xs">
                Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
