import { cn } from "@/modules/utils";
import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  sectionClasName?:string
};
export default function Section({ children, className, sectionClasName }: SectionProps) {
  return (
    <section className={cn("flex w-full relative", sectionClasName)}>
      <div
        className={cn(
          "container mx-auto flex-col flex w-full px-14 max-md:px-5",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}
