import React from "react";
import { Hero } from "./hero";
import { Overview } from "./overview";
import { Why } from "./why";
import { How } from "./how";
import { Allocation } from "./allocation";
import { HowToInvest } from "./how-to-invest";
import { FAQ } from "@/modules/app/faq/faq";
import { Banner } from "./banner";

export function MiningFundPage() {
  return (
    <>
      <Hero />
      <Overview />
      <Why />
      <How />
      <Allocation />
      <HowToInvest />
      <FAQ data={MiningfaqData} />
      <Banner
        title="Invest in the Power Behind Decentralized Blockchains"
        paragraph="The Unilabs Mining Fund offers a structured, professionally managed approach to PoW investing, ensuring you gain exposure to the most secure and battle-tested blockchain assets."
        sub="Do not just invest in crypto—own the assets that power the network."
      />
    </>
  );
}

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
