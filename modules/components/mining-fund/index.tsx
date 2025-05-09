import { Why } from "./why";

import { FAQ } from "@/modules/app/faq/faq";

import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import { HowMiningSec } from "../ai-fund/HowMiningSec";
import { Allocation, miningallocationData } from "../ai-fund/allocation";
import { Banner } from "../ai-fund/banner";
import { Hero } from "../ai-fund/hero";
import { HowToInvest, mininginvestData } from "../ai-fund/how-to-invest";
import { Minningoverviewdata, Overview } from "../ai-fund/overview";

export function MiningFundPage() {
  return (
    <>
      <Hero
        bg="miningfundBG"
        heading2="Pow Assets"
        heading1="Powering the Future of"
        subTitle="Mining Fund Unilabs"
        description="The Mining Fund by Unilabs offers strategic exposure to a diversified basket of proof-of-work blockchain assets, ensuring long-term value capture from decentralized mining ecosystems."
      />
      <Overview title="Mining Fund Overview" image="/mining-overview.svg" overviewdata={Minningoverviewdata}>
        <FadeInOnScroll>
          <p className=" text-[18px] leading-[1.8] max-w-[564px] max-lg:max-w-full text-[#f0f0f0]">
            The Unilabs Mining Fund is a first-of-its-kind investment vehicle
            designed to provide structured exposure to proof-of-work (PoW)
            blockchain assets. As PoW remains a fundamental pillar of blockchain
            security and decentralization, this fund focuses on capturing value
            from Bitcoin, mining infrastructure tokens, and high-growth PoW
            networks.
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <p className=" text-[18px] leading-[1.8] my-[30px] max-w-[564px] max-lg:max-w-full text-[#f0f0f0]">
            By holding a dynamically rebalanced portfolio of leading PoW assets,
            the Mining Fund allows investors to participate in the long-term
            economic and security benefits of decentralized mining without the
            need to manage physical mining operations.
          </p>
        </FadeInOnScroll>
      </Overview>

      <Why />
      <HowMiningSec title="How the Mining Fund Works" howdata={mininghowData} />

      <Allocation allocationDataList={miningallocationData} />
      <HowToInvest
        title="How to Invest in the Mining Fund"
        investdataList={mininginvestData}
      />
      <FAQ data={MiningfaqData} notabs />
      <Banner
        title="Invest in the Power Behind Decentralized Blockchains"
        paragraph="The Unilabs Mining Fund offers a structured, professionally managed approach to PoW investing, ensuring you gain exposure to the most secure and battle-tested blockchain assets."
        sub="Do not just invest in crypto—own the assets that power the network."
      />
    </>
  );
}

export const mininghowData = [
  {
    title: "Intelligent Asset Discovery",
    label: [
      {
        pre: "",
        desc: "Proprietary on-chain analytics and mining network health indicators identify top-performing PoW assets.",
      },
      {
        pre: "",
        desc: "The fund actively tracks hash rate growth, network fees, and decentralization metrics to optimize holdings.",
      },
    ],
  },
  {
    title: "Data-Driven Investment Allocation",
    sub: "Each PoW asset is evaluated based on:",
    label: [
      {
        pre: "Security & Network Strength –",
        desc: "How decentralized and resistant to attacks is the blockchain?",
      },
      {
        pre: "Mining Profitability & Hash Rate Trends – ",
        desc: "Is mining activity growing, and is the network economically sustainable?",
      },
      {
        pre: "Adoption & Utility – ",
        desc: " Does the asset have strong transaction volume and use cases?",
      },
    ],
  },
  {
    title: "Optimized Portfolio Balancing",
    sub: "The Mining Fund dynamically adjusts allocations based on:",
    label: [
      {
        pre: "",
        desc: "Global mining difficulty trends",
      },
      {
        pre: "",
        desc: "Hash rate shifts and miner activity",
      },
      {
        pre: "",
        desc: "Token supply mechanics and halving cycles",
      },
    ],
  },
  {
    title: "Continuous Monitoring & Performance Adjustments",
    label: [
      {
        pre: "",
        desc: "The fund tracks network dynamics in real time to ensure that capital is allocated to the most secure and profitable PoW assets.",
      },
    ],
  },
];

const MiningfaqData = [
  {
    title: "How does the Mining Fund make investment decisions?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
  },
  {
    title: "What assets does the Mining Fund invest in?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
  },
  {
    title: "Is my investment actively managed?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
  },
  {
    title: "How can I track my investment performance?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
  },
  {
    title: "What is the minimum investment amount?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
  },
  {
    title: "How do I withdraw my funds?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
  },
];
