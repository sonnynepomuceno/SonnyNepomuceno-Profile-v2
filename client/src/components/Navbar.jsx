import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Linkedin, Facebook } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sonny-nepomuceno-13ba65324/",
    icon: <Linkedin size={16} />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/TKxSilencExph/",
    icon: <Facebook size={16} />,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo + social icons grouped together */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="text-white font-bold text-lg tracking-tight hover:text-blue-400 transition-colors duration-200"
          >
            SONNY<span className="text-blue-400">.</span>
          </a>
          <div className="flex items-center gap-1.5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-7 h-7 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-neutral-400 hover:text-blue-400 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          <div className="space-y-1.5 w-6">
            <span className={cn("block h-0.5 bg-white transition-all duration-300 origin-center", menuOpen ? "rotate-45 translate-y-2" : "")} />
            <span className={cn("block h-0.5 bg-white transition-all duration-300", menuOpen ? "opacity-0 scale-x-0" : "")} />
            <span className={cn("block h-0.5 bg-white transition-all duration-300 origin-center", menuOpen ? "-rotate-45 -translate-y-2" : "")} />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={cn("md:hidden overflow-hidden transition-all duration-300 ease-in-out", menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0")}>
        <div className="bg-black/95 backdrop-blur-md border-t border-white/10 px-4 py-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-neutral-400 hover:text-blue-400 text-sm border-b border-white/5 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
