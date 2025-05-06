'use client';
import { BuyPage } from "@/modules/components";
import FundMain from "@/modules/components/fund-main";
import React from "react";

export default function FundUpdates() {
  return (
    <div className="flex justify-center min-h-screen gap-16 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col gap-[32px] w-full">
        <FundMain />
      </main>
    </div>
  );
}
