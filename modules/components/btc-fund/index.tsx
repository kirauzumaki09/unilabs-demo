import React from "react";
import { Hero } from "./hero";
import { Overview } from "./overview";
import { Why } from "./why";
import { How } from "./how";
import { Allocation } from "./allocation";
import { HowToInvest } from "./how-to-invest";
import { FAQ } from "@/modules/app/faq/faq";
import { Banner } from "./banner";

export function BTCFundPage() {
  return (
    <>
      <Hero />
      <Overview />
      <Why />
      <How />
      <Allocation />
      <HowToInvest />
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
