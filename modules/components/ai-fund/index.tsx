import { FAQ } from "@/modules/app/faq/faq";
import { Allocation, allocationData } from "./allocation";
import { Banner } from "./banner";
import { Hero } from "./hero";
import { HowToInvest, investData } from "./how-to-invest";
import { howDataList, HowMiningSec } from "./HowMiningSec";
import { AIoverviewdata, Overview } from "./overview";
import { WhyInvestSec } from "./WhyInvestSec";
import { FadeInOnScroll } from "@/modules/app/fadein-scroll";

export function AIFundPage() {
  return (
    <>
      <Hero
        bg="aiFundBg"
        heading2=" AI & Crypto"
        heading1="Investing in the Future of"
        subTitle="AI Fund Unilabs"
        description="The AI Fund by Unilabs offers algorithm-driven exposure to
                    high-growth AI-powered blockchain projects. Invest in the future
                    of AI-integrated decentralized finance."
      />
      <Overview title="AI Fund Overview" image="/overview image.svg" overviewdata={AIoverviewdata}>
        <FadeInOnScroll>
          <p className=" text-[18px] leading-[1.8] max-w-[564px] max-lg:max-w-full text-[#f0f0f0]">
            Unilabs AI Fund is one of the first investment vehicles designed to
            strategically invest in and derive value from AI-integrated
            blockchain projects. Focused on the intersection of artificial
            intelligence and decentralized finance (DeFi), the AI Fund provides
            institutional-grade exposure to high-growth AI-powered crypto
            assets.
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <p className=" text-[18px] leading-[1.8] my-[30px] max-w-[564px] max-lg:max-w-full text-[#f0f0f0]">
            Unlike traditional investments, the Unilabs AI Fund eliminates the
            complexities of direct digital asset management, offering a fully
            AI-driven, algorithmically optimized portfolio through a secure and
            transparent investment structure. Fund shares are designed to
            reflect the value of AI-focused blockchain assets selected using a
            proprietary investment methodology, dynamically rebalanced to
            maximize exposure to the most promising projects in AI-driven DeFi,
            machine learning protocols, and autonomous smart contract platforms.
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <p className=" text-[18px] max-w-[564px] max-lg:max-w-full text-[#f0f0f0]">
            By backing early-stage AI projects and actively holding
            AI-integrated cryptocurrencies, the Unilabs AI Fund provides
            unparalleled access to the next wave of decentralized intelligence.
          </p>
        </FadeInOnScroll>
      </Overview>
      <WhyInvestSec />
      <HowMiningSec title="How the AI Fund Works" howdata={howDataList} />
      <Allocation allocationDataList={allocationData} />
      <HowToInvest
        title="How to Invest in the AI Fund"
        investdataList={investData}
      />
      <FAQ data={AIfaqData} notabs />
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
