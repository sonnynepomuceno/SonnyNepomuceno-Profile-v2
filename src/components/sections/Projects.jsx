import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { Monitor, ClipboardCheck, Send, Zap, LayoutDashboard } from "lucide-react";

const projects = [
  {
    title: "New House Type Monitoring System",
    description: "Application that monitors the status of new house types that the company develops across various departments. Provides real-time project visibility and milestone tracking.",
    tech: ["Laravel 9", "Vue.js", "Vuetify 3", "MySQL"],
    icon: <Monitor className="h-5 w-5 text-blue-400" />,
    className: "md:col-span-2",
    gradient: "from-blue-900/60 to-indigo-900/60",
    iconBg: "bg-blue-500/15",
  },
  {
    title: "Plaster Board Checklist System",
    description: "Used in production to verify all checkpoints of the plan, ensuring zero mistakes and avoiding customer feedback.",
    tech: ["Laravel 9", "Vue.js", "Vuetify 3", "MySQL"],
    icon: <ClipboardCheck className="h-5 w-5 text-purple-400" />,
    className: "md:col-span-1",
    gradient: "from-purple-900/60 to-pink-900/60",
    iconBg: "bg-purple-500/15",
  },
  {
    title: "Sending Order System",
    description: "Monitors the transmission of order data effectively, streamlining inter-department order dispatch with real-time status updates.",
    tech: ["Vue.js", "Vuetify 3", "Node.js", "MySQL"],
    icon: <Send className="h-5 w-5 text-cyan-400" />,
    className: "md:col-span-1",
    gradient: "from-cyan-900/60 to-teal-900/60",
    iconBg: "bg-cyan-500/15",
  },
  {
    title: "Denki Confirmation Ps5 System",
    description: "Streamlines confirmations between two departments with real-time communication and centralized plan monitoring for better accountability.",
    tech: ["Vue.js", "Vuetify 3", "Node.js", "MySQL"],
    icon: <Zap className="h-5 w-5 text-yellow-400" />,
    className: "md:col-span-1",
    gradient: "from-yellow-900/50 to-orange-900/50",
    iconBg: "bg-yellow-500/15",
  },
  {
    title: "PB Monitoring System",
    description: "Tracks plasterboard production and delivery to ensure all priorities are completed as soon as possible, minimizing delays and optimizing resource allocation.",
    tech: ["Vue.js", "Vuetify 3", "Node.js", "MySQL"],
    icon: <LayoutDashboard className="h-5 w-5 text-green-400" />,
    className: "md:col-span-1",
    gradient: "from-green-900/60 to-emerald-900/60",
    iconBg: "bg-green-500/15",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-3">What I&apos;ve built</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-neutral-500 mt-4 text-sm max-w-lg mx-auto">
            Enterprise internal systems built and deployed for H.R.D Singapore Pte Ltd
          </p>
        </div>

        <BentoGrid>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={project.className}
            >
              <BentoGridItem
                title={project.title}
                description={
                  <div>
                    <p className="mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-white/10 text-neutral-300 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                }
                header={
                  <div className={`w-full h-24 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center border border-white/5`}>
                    <div className={`w-12 h-12 rounded-xl ${project.iconBg} flex items-center justify-center border border-white/10`}>
                      {project.icon}
                    </div>
                  </div>
                }
                icon={project.icon}
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
