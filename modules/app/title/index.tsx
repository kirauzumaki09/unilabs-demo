import { cn } from "@/modules/utils";
import React from "react";

type TitleProps = {
  text: string;
  tinted?: boolean;
  className?: string;
  sub?: boolean;
};
export function Title({
  text,
  tinted = false,
  sub = false,
  className,
}: TitleProps) {
  return (
    <h3
      className={cn(
        "font-extrabold text-center font-anybody uppercase  leading-[120px]",
        className,
        tinted ? "gradText" : "text-white",
        sub ? "text-[4.5625rem]" : "text-[9.375rem]"
      )}
    >
      {text}
    </h3>
  );
}
