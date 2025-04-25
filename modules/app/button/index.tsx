import { cn } from "@/modules/utils";
import React, { ReactNode } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

export default function Button({
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "h-16 min-w-[166px] flex items-center",
        "cursor-pointer hover:opacity-90 transition duration-300 ease-in-out justify-center",
        "gap-2.5 bg-gradient-to-r from-[#42BDDD] to-[#0FEDBE] rounded-[11px] text-[#04111B]",
        disabled && "opacity-80 pointer-events-none",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
