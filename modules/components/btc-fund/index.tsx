import { FAQ } from "@/modules/app/faq/faq";
import { Hero } from "../ai-fund/hero";
import { BTChowData, HowMiningSec } from "../ai-fund/HowMiningSec";


import { Overview } from "./overview";
import { Why } from "./why";
import { BTCinvestData, HowToInvest } from "../ai-fund/how-to-invest";
import { Allocation, BTCallocationData } from "../ai-fund/allocation";
import { Banner } from "../ai-fund/banner";

export function BTCFundPage() {
  return (
    <>
      <Hero
        heading2="Pow Assets"
        heading1="Powering the Future of"
        subTitle="Mining Fund Unilabs"
        description="The Mining Fund by Unilabs offers strategic exposure to a diversified basket of proof-of-work blockchain assets, ensuring long-term value capture from decentralized mining ecosystems."
      />
      <Overview />
      <Why />
      <HowMiningSec title="How the BTC Fund Works" howdata={BTChowData} />
      <Allocation allocationDataList={BTCallocationData} />
      <HowToInvest
        title="How to Invest in the BTC Fund"
        investdataList={BTCinvestData}
      />
      <FAQ data={BTCfaqData} />
      <Banner
        title="Invest in the Next Evolution of Bitcoin Investing"
        paragraph="The Unilabs BTC Fund offers diversified Bitcoin exposure, enhanced yield strategies, and smart portfolio management. It is designed for investors who want to hold Bitcoin while optimizing returns through structured investment strategies."
        sub="Maximize your BTC potential with a strategic, professionally managed approach to Bitcoin investing."
      />
    </>
  );
}

const BTCfaqData = [
  {
    title: "How does the BTC Fund generate returns?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
  },
  {
    title: "What assets does the BTC Fund invest in?",
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
