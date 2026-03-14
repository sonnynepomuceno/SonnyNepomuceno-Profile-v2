import { GraduationCap } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const skills = [
  "HTML", "CSS", "PHP", "JavaScript",
  "Vue.js", "Vuetify 3", "Laravel 9", "REST API",
  "Node.js", "Express.js", "MySQL",
];

const education = [
  { degree: "Computer Engineering", school: "Cavite State University Rosario - CCAT", year: "2017 – 2018" },
  { degree: "Computer Programming", school: "DATACOM Institute of Computer Technology", year: "2012 – 2014" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-10">

            {/* Profile card */}
            <CardSpotlight className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-blue-400" />Profile
              </h3>
              <p className="text-neutral-400 leading-relaxed text-base">
                I am a qualified and professional web developer with extensive experience in full-stack development.
                I possess strong creative and analytical skills, and I am a team player with a keen eye for detail.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {[
                  { label: "Phone", value: "+639638718959" },
                  { label: "Email", value: "sonnybst@gmail.com" },
                  { label: "Location", value: "Bagtas, Tanza, Cavite" },
                  { label: "Availability", value: "Open to work" },
                ].map((item) => (
                  <div key={item.label} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <p className="text-neutral-500 text-xs mb-1">{item.label}</p>
                    <p className="text-neutral-200 text-sm font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </CardSpotlight>

            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-blue-400" />Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <CardSpotlight key={i} className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <GraduationCap size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{edu.degree}</p>
                      <p className="text-neutral-400 text-xs mt-0.5">{edu.school}</p>
                      <p className="text-blue-400 text-xs mt-1">{edu.year}</p>
                    </div>
                  </CardSpotlight>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-blue-400" />Languages
              </h3>
              <div className="flex gap-3">
                {["English", "Tagalog"].map((lang) => (
                  <span key={lang} className="px-4 py-2 rounded-full border border-blue-500/30 text-blue-300 text-sm bg-blue-500/5">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Skills */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-blue-400" />Technical Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <CardSpotlight
                  key={skill}
                  className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-center text-neutral-300 text-sm font-medium hover:border-blue-500/40 hover:text-white transition-colors duration-200 cursor-default"
                >
                  <span className="relative z-10">{skill}</span>
                </CardSpotlight>
              ))}
            </div>

            <CardSpotlight className="mt-8 p-5 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/[0.06]">
              <p className="text-neutral-400 text-sm leading-relaxed">
                <span className="text-white font-medium">6+ years</span> of full-stack experience building enterprise web systems with{" "}
                <span className="text-blue-400">Laravel</span>,{" "}
                <span className="text-blue-400">Vue.js</span>, and{" "}
                <span className="text-blue-400">Node.js</span>.
              </p>
            </CardSpotlight>
          </div>
        </div>
      </div>
    </section>
  );
}
