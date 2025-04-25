import React from "react";
import { Hero } from "./hero";
import { Overview } from "./overview";
import { Why } from "./why";
import { How } from "./how";
import { Allocation } from "./allocation";
import { HowToInvest } from "./how-to-invest";
import { FAQ } from "@/modules/app/faq/faq";
import { Banner } from "./banner";

export function TechFundPage() {
  return (
    <>
      <Hero />
      <Overview />
      <Why />
      <How />
      <Allocation />
      <HowToInvest />
      <FAQ data={RWAfaqData} />
      <Banner
        title="Invest in the Future of Tokenized Real-World Assets"
        paragraph="The Unilabs RWA Fund offers a secure, diversified, and yield-enhanced investment strategy for real-world assets brought on-chain. As tokenization reshapes financial markets, this fund provides a structured way to access real estate, commodities, and institutional-grade investments."
        sub=""
      />
    </>
  );
}

const RWAfaqData = [
  {
    title: "How does the RWA Fund generate returns?",
    desc: "The fund generates yield by investing in a basket of tokenized real-world assets. The asset composition includes real estate, tokenized stocks, treasury bills, and other assets. Additionally, income from yield-bearing tokenized is optimized through AI to maximize risk-adjusted returns.",
  },
  {
    title: "What assets does the RWA Fund invest in?",
    desc: "The fund targets high-quality tokenized assets, including stocks, real estate, and governmental bonds. Additionally, all investments undergo AI-based due diligence to ensure compliance, security, and reliable returns.",
  },
  {
    title: "Is my investment actively managed?",
    desc: "Yes. The RWA Fund is actively managed by Unilabs’ AI engine, which monitors market conditions, evaluates risk, and reallocates capital across assets to maintain optimal performance. ",
  },
  {
    title: "How can I track my investment performance?",
    desc: "You can monitor your portfolio and returns through the Unilabs dashboard. All data is updated in real-time and verifiable on-chain, giving you full transparency into fund performance, allocation, and income generated.",
  },
  {
    title: "What is the minimum investment amount?",
    desc: "The minimum investment amount for the RWA Fund will be $1,000 or crypto equivalent. ",
  },
  {
    title: "How do I withdraw my funds?",
    desc: "Withdrawals can be made directly through your Unilabs dashboard. Depending on the liquidity of the underlying RWA tokens, withdrawal requests are either processed instantly or within a short settlement window. All withdrawals are handled via audited smart contracts for security and transparency.",
  },
];
