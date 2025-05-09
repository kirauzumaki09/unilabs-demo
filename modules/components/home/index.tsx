import React from "react";
import { Hero } from "./hero";
import { Launchpad } from "./launchpad";
import { HowItWorks } from "./how-it-works";
import { Application } from "./application";
import Funds from "./funds";
import { Tiers } from "./tiers";
import { Tokenomics } from "./tokenomics";
import { Roadmap } from "./roadmap";
import { FAQ } from "../../app/faq/faq";
import CommunityReviews from "./community";
import FundUpdates from "./fund-updates";

export function HomePage() {
  return (
    <>
      <Hero />
      <Launchpad />
      <HowItWorks />
      <Application />
      <Funds />
      <Tiers />
      <CommunityReviews/>
      <Tokenomics />
      <Roadmap />
      <FundUpdates/>
      <FAQ notabs data={faqData} />
    </>
  );
}

const faqData = [
  {
    title: "What is Unilabs?",
    desc: "Unilabs is the first AI-backed DeFi asset management platform. We utilize advanced AI to track thousands of emerging projects to determine early investments and deliver industry-leading yields. The platform aims to deliver exceptional returns by enabling institutional investment opportunities for retail traders. ",
  },
  {
    title: "What is the utility of the UNIL token?",
    desc: "The UNIL token is the core utility and governance asset of the Unilabs ecosystem. Holding UNIL unlocks a range of benefits, including:",
    list: [
      {
        pre: "Dividends & Yield Sharing:",
        text: "Token holders receive a share of platform-generated profits through periodic dividends, distributed directly to their wallets.",
      },
      {
        pre: "Governance Rights:",
        text: "UNIL holders can vote on key decisions such as fund strategies, project listings, and protocol upgrades—shaping the future of Unilabs.",
      },
      {
        pre: "Exclusive Access:",
        text: "Enjoy early access to high-potential investment opportunities, premium research reports, and whitelisted pools.",
      },
      {
        pre: "Staking Rewards:",
        text: " Stake UNIL to earn passive income while supporting platform stability and liquidity.",
      },
      {
        pre: "Tiered Benefits:",
        text: "Higher token holdings unlock enhanced yield rates, reduced fees, and access to institutional-grade tools typically reserved for hedge funds.",
      },
    ],
  },
  {
    title: "Is Unilabs secure?",
    desc: "Yes, the platform is built on the highest standards of decentralized security to ensure that all transactions are secure and transparent on the blockchain.",
  },
  {
    title: "How does Unilab determine which projects to support?",
    desc: "Unilabs leverages advanced AI models to scan, analyze, and evaluate thousands of emerging blockchain projects in real-time. Our proprietary algorithms assess key indicators such as on-chain activity, market momentum, developer engagement, tokenomics, and community growth. By combining these data points with predictive modeling and risk assessment frameworks, Unilabs identifies high-potential projects at an early stage. This AI-driven approach allows us to make informed investment decisions and position our users for optimal returns—often before the wider market takes notice.",
  },
  {
    title: "What is the smart contract address?",
    desc: "",
  },
  {
    title: "Has the platform been security audited?",
    desc: "Yes! The Unilabs investment platform has been audited by the world’s most reputed blockchain security and testing companies.",
  },
];
