import { cn } from "@/lib/utils";

const COMETS = [
  { top: "15%", width: "120px", delay: "0s",   duration: "3s"   },
  { top: "38%", width: "80px",  delay: "1.3s", duration: "2.6s" },
  { top: "62%", width: "100px", delay: "2.7s", duration: "3.4s" },
  { top: "82%", width: "65px",  delay: "0.7s", duration: "2.2s" },
];

export function CometCard({ children, className }) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl", className)}>
      {COMETS.map((c, i) => (
        <span
          key={i}
          className="absolute left-0 h-px pointer-events-none z-20"
          style={{
            top: c.top,
            width: c.width,
            animationName: "comet",
            animationDelay: c.delay,
            animationDuration: c.duration,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.9) 50%, rgba(180,210,255,0.5) 80%, transparent)",
            filter: "drop-shadow(0 0 5px rgba(255,255,255,0.6))",
          }}
        />
      ))}
      {children}
    </div>
  );
}
