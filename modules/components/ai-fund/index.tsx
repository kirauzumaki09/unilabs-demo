import React from "react";
import { Hero } from "./hero";
import { Overview } from "./overview";
import { Why } from "./why";
import { How } from "./how";
import { Allocation } from "./allocation";
import { HowToInvest } from "./how-to-invest";
import { FAQ } from "@/modules/app/faq/faq";
import { Banner } from "./banner";

export function AIFundPage() {
  return (
    <>
      <Hero />
      <Overview />
      <Why />
      <How />
      <Allocation />
      <HowToInvest />
      <FAQ data={AIfaqData} />
      <Banner
        title="Invest in the Future of AI and Crypto"
        paragraph="The AI Fund is your gateway to AI-powered crypto investing, offering a systematic, data-driven approach to wealth creation in the artificial intelligence and blockchain economy."
        sub="Don’t miss out on the next wave of innovation—invest in the AI Fund today."
      />
    </>
  );
}

const AIfaqData = [
  {
    title: "How does the AI Fund make investment decisions?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
  },
  {
    title: "What assets does the AI Fund invest in?",
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
