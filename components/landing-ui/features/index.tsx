import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionWithHover } from "./section-with-hover";

function Feature() {
  return (
    <div className="w-full mt-4 sm:mt-10">
      <div className="container mx-auto max-w-7xl">
        <div className="items-start">
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter text-center font-regular">
              Got an idea? Let’s make it into something people want
            </h2>
          </div>
          <div className="w-full">
            <SectionWithHover />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
