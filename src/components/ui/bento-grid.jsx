import { cn } from "@/lib/utils";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, header, icon }) => {
  return (
    <CardSpotlight
      className={cn(
        "row-span-1 rounded-xl transition duration-300 p-4 border border-white/[0.05] bg-neutral-900 justify-between flex flex-col space-y-4 cursor-default",
        className
      )}
    >
      {header}
      <div>
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <div className="font-semibold text-neutral-200 text-sm">{title}</div>
        </div>
        <div className="font-normal text-neutral-400 text-xs leading-relaxed">
          {description}
        </div>
      </div>
    </CardSpotlight>
  );
};
