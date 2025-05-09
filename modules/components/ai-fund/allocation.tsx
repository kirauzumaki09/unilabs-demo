import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import { SlideInOnScroll } from "@/modules/app/slide-in-on-scroll";
import Candle from "@/assets/otherpages/candle-stick.svg";
import Contract from "@/assets/otherpages/contract.svg";
import MachineLearning from "@/assets/otherpages/machilne-learning.svg";
import Blur2 from "@/assets/otherpages/allocation-blur2.svg";
import Blur from "@/assets/otherpages/allocation-blur.svg";
import Web3 from "@/assets/otherpages/web3.svg";
import React from "react";
import NativeBTC from "@/assets/otherpages/native-btc.svg";
import WBTC from "@/assets/otherpages/wbtc.svg";
import Derivatives from "@/assets/otherpages/derivatives.svg";
import Staking from "@/assets/otherpages/staking.svg";
import Ecosystem from "@/assets/otherpages/ecosystem.svg";
import Digger from "@/assets/otherpages/mining-digger.svg";
import Estae from "@/assets/otherpages/estate.svg";
import Yield from "@/assets/otherpages/yield.svg";
import Market from "@/assets/otherpages/market.svg";
import Metals from "@/assets/otherpages/metals.svg";

import Fee from "@/assets/otherpages/fee.svg";

type AllocationList={
  label: string;
  desc: string;
  icon: React.ReactNode;
}

interface AllocationProps {
  allocationDataList: AllocationList[];
}

export function Allocation({allocationDataList}: AllocationProps) {
  return (
    <section className="relative pb-[170px]">
      <div className="container mx-auto flex flex-col relative max-lg:px-5">
        <SlideInOnScroll>
          <h4 className="uppercase max-w-[766px] mx-auto font-extrabold font-anybody mb-[20px] text-[80px] leading-[1.1] lg:text-center text-white">
            Fund allocation Strategy
          </h4>
        </SlideInOnScroll>
        <div className="flex items-center justify-center">
          <FadeInOnScroll className="flex items-center justify-center">
            <p className="text-lg w-full max-md:w-full lg:text-center mb-[60px] text-sec-text">
              The AI Fund is diversified across multiple AI-integrated
              blockchain sectors:
            </p>
          </FadeInOnScroll>
        </div>
        <div className="flex gap-[30px] justify-center w-full items-center relative">
          <div className="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-[30px]">
            {allocationDataList.map((data, index) => (
              <FadeInOnScroll key={data.label} delay={index * 0.2}>
                <div className="allocation-card relative z-[10]">
                  <p className="allocation-head">
                    {data.label}
                  </p>
                  <div className="allocation-icon">
                    {data.icon}
                  </div>
                  <p>{data.desc}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
          <div className="absolute w-[95%] left-0 -z-10">
            <Blur />
          </div>
        </div>
      </div>
      <div className="absolute w-[65%] right-0 top-0">
        <Blur2 />
      </div>
    </section>
  );
}

export const RWAallocationData = [
  {
    label: "Tokenized Real Estate",
    desc: " Exposure to on-chain real estate funds, rental-backed securities, and tokenized property investments.",
    icon: <Estae />,
  },
  {
    label: "Commodities & Precious Metals",
    desc: "Investments in gold, silver, and other tokenized commodity markets for inflation-resistant returns.",
    icon: <Metals />,
  },
  {
    label: "Yield-Bearing Fixed Income",
    desc: "Allocations to tokenized debt markets, bonds, and structured yield products providing stable returns.",
    icon: <Yield />,
  },
  {
    label: "Regulated RWA Marketplaces",
    desc: "Exposure to emerging platforms facilitating institutional RWA adoption.",
    icon: <Market />,
  },
];

export const BTCallocationData = [
  {
    label: "Native Bitcoin (BTC)",
    desc: "Direct holdings of Bitcoin, ensuring long-term security and value appreciation.",
    icon: <NativeBTC />,
  },
  {
    label: "Wrapped Bitcoin (WBTC, TBTC, RenBTC)",
    desc: "BTC-backed assets designed for liquidity and DeFi integrations.",
    icon: <WBTC />,
  },
  {
    label: "Yield-Bearing BTC Derivatives",
    desc: "Bitcoin-focused staking solutions and synthetic assets designed to generate returns on BTC holdings.",
    icon: <Derivatives />,
  },
  {
    label: "Liquid Staking Solutions",
    desc: "Allocations to liquid staking providers that offer BTC-based yield without locking up funds.",
    icon: <Staking />,
  },
];

export const miningallocationData = [
  {
    label: "Core PoW Networks",
    desc: "Direct investment in Bitcoin (BTC), Litecoin (LTC), and other leading mining-backed assets.",
    icon: <MachineLearning />,
  },
  {
    label: "Emerging PoW Ecosystems",
    desc: "Select allocation in newer, high-growth PoW chains like Kaspa (KAS), Ergo (ERG), and Nervos (CKB).",
    icon: <Ecosystem />,
  },
  {
    label: "Mining Infrastructure Tokens",
    desc: "Exposure to assets that power the mining economy, such as decentralized computing resources and energy-efficient mining networks.",
    icon: <Digger />,
  },
  {
    label: "Hash Rate & Fee-Based Assets",
    desc: "Investments in projects that benefit from increased network transaction fees and security incentives.",
    icon: <Fee />,
  },
];

export const allocationData = [
  {
    label: "AI-Powered Trading & DeFi",
    desc: "Autonomous finance platforms that leverage AI-driven algorithms for smart trading and risk assessment.",
    icon: <Candle />,
  },
  {
    label: "Machine Learning in Blockchain",
    desc: "Decentralized machine learning models that optimize predictive analytics and smart contract automation.",
    icon: <MachineLearning />,
  },
  {
    label: "AI & Web3 Infrastructure",
    desc: "Blockchain protocols integrating AI for enhanced scalability, automation, and governance.",
    icon: <Web3 />,
  },
  {
    label: "Autonomous Smart Contracts",
    desc: "Next-generation AI-driven contract execution models reducing human intervention in financial transactions.",
    icon: <Contract />,
  },
];
