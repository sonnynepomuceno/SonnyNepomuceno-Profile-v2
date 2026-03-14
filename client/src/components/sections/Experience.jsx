import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "H.R.D Singapore Pte Ltd",
    period: "2019 – 2025",
    duration: "6 years",
    responsibilities: [
      "Created web-based systems to help company production processes",
      "Managed local deployment and server configuration for internal web systems",
      "Built user-friendly website systems to track and manage project plans across departments",
    ],
    tech: ["Laravel 9", "Vue.js", "Vuetify 3", "Node.js", "Express.js", "MySQL", "REST API"],
    gradient: "from-blue-500 to-cyan-500",
    dotColor: "bg-blue-500",
  },
  {
    role: "AutoCAD Draftsman",
    company: "H.R.D Singapore Pte Ltd",
    period: "2014 – 2019",
    duration: "5 years",
    responsibilities: [
      "Designing, checking, and revising piping plans for residential construction",
      "Read and interpreted Japanese instructions from planners and subcontractors",
      "Reported staff mistakes regarding standard operating procedure (SOP)",
    ],
    tech: ["AutoCAD", "Technical Drawing", "SOP Documentation", "Japanese Liaison"],
    gradient: "from-purple-500 to-pink-500",
    dotColor: "bg-purple-500",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-3">My journey</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-blue-500/60 via-purple-500/40 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative flex flex-col lg:flex-row items-start gap-8 ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 w-5 h-5 rounded-full border-2 border-black items-center justify-center z-10">
                  <div className={`w-3 h-3 rounded-full ${exp.dotColor}`} />
                </div>

                <div className="lg:hidden flex items-center gap-4 w-full">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 ${exp.dotColor}`} />
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <div className={`w-full lg:w-[45%] ${idx % 2 === 0 ? "lg:pr-10" : "lg:pl-10"}`}>
                  <CardSpotlight className="relative p-6 rounded-2xl bg-neutral-900/80 border border-white/[0.07] hover:border-white/15 transition-colors duration-300">
                    <div className={`absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r ${exp.gradient} opacity-60`} />

                    <div className="flex items-start gap-3 mb-4 mt-2">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.gradient} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                        <Briefcase size={18} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base">{exp.role}</h3>
                        <p className="text-neutral-400 text-sm">{exp.company}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.gradient} text-white`}>
                        {exp.period} · {exp.duration}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-5">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="text-neutral-400 text-sm flex items-start gap-2 leading-relaxed">
                          <span className="text-blue-400 mt-0.5 flex-shrink-0">›</span>{r}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-neutral-400 border border-white/[0.06] hover:border-white/20 hover:text-neutral-200 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardSpotlight>
                </div>
                <div className="hidden lg:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
