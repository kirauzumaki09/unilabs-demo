'use client';
import { BuyPage } from "@/modules/components";
import React from "react";

export default function HowToBuy() {
  return (
    <div className="flex justify-center min-h-screen gap-16 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col gap-[32px] w-full">
        <BuyPage />
      </main>
    </div>
  );
}
