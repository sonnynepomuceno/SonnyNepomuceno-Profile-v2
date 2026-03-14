import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Facebook, Send, Loader2 } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const initialForm = { full_name: "", email: "", subject: "", message: "" };

const toastConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.limitReached) {
        toast.error(
          "You have already reached the 3-attempt limit for this email address.",
          toastConfig
        );
      } else if (data.success) {
        toast.success("Message sent! I'll get back to you soon.", toastConfig);
        setForm(initialForm);
      } else {
        const msg =
          data.errors?.map((e) => e.msg).join(", ") ||
          data.message ||
          "Something went wrong.";
        toast.error(msg, toastConfig);
      }
    } catch {
      toast.error("Network error. Please try again.", toastConfig);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <ToastContainer />
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

        {/* Contact form */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-1">Send me a message</h3>
            <p className="text-neutral-500 text-sm mb-6">Fill in the form and I'll get back to you.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-400 text-xs uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={form.full_name}
                    onChange={handleChange}
                    placeholder="Juan dela Cruz"
                    required
                    className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 text-xs uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 text-xs uppercase tracking-wider mb-1.5">
                  Subject <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Job opportunity / Collaboration / etc."
                  required
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-colors"
                />
              </div>

              <div>
                <label className="block text-neutral-400 text-xs uppercase tracking-wider mb-1.5">
                  Message <span className="text-blue-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  rows={5}
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
