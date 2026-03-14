import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const contactItems = [
  {
    icon: <Mail className="w-6 h-6 text-blue-400" />,
    label: "Email",
    value: "sonnybst@gmail.com",
    href: "mailto:sonnybst@gmail.com",
    description: "Send me an email anytime",
  },
  {
    icon: <Phone className="w-6 h-6 text-blue-400" />,
    label: "Phone",
    value: "09638718959",
    href: "tel:+639638718959",
    description: "Mon – Fri, 9am – 6pm",
  },
  {
    icon: <MapPin className="w-6 h-6 text-blue-400" />,
    label: "Location",
    value: "Blk 4 Lot 8 Sec 15 Ph 2 Pabahay",
    subValue: "Bagtas, Tanza, Cavite",
    href: null,
    description: "Philippines",
  },
  {
    icon: <Linkedin className="w-6 h-6 text-blue-400" />,
    label: "LinkedIn",
    value: "sonny-nepomuceno",
    href: "https://www.linkedin.com/in/sonny-nepomuceno-13ba65324/",
    description: "Connect with me professionally",
  },
  {
    icon: <Facebook className="w-6 h-6 text-blue-400" />,
    label: "Facebook",
    value: "TKxSilencExph",
    href: "https://www.facebook.com/TKxSilencExph/",
    description: "Follow me on Facebook",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-3">Get in touch</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-neutral-500 mt-4 text-sm max-w-md mx-auto">
            Feel free to reach out through any of the channels below. I'm always open to new opportunities and collaborations.
          </p>
        </div>

        {/* Contact cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {contactItems.map((item) => (
            <CardSpotlight
              key={item.label}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/15 transition-colors">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-neutral-500 text-xs mb-1 uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-white text-sm font-medium hover:text-blue-400 transition-colors break-all block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  )}
                  {item.subValue && (
                    <p className="text-neutral-400 text-xs mt-0.5">{item.subValue}</p>
                  )}
                  <p className="text-neutral-600 text-xs mt-1">{item.description}</p>
                </div>
              </div>
            </CardSpotlight>
          ))}
        </div>

        {/* Availability badge */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Available for work</span>
          </div>
        </div>
      </div>
    </section>
  );
}
