import { FAQ } from "@/modules/app/faq/faq";
import { Hero } from "../ai-fund/hero";



import { Why } from "./why";
import { Overview } from "../ai-fund/overview";
import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import { HowMiningSec, RWAhowData } from "../ai-fund/HowMiningSec";
import { HowToInvest, RWAinvestData } from "../ai-fund/how-to-invest";
import { Allocation, RWAallocationData } from "../ai-fund/allocation";
import { Banner } from "../ai-fund/banner";

export function RWAFundPage() {
  return (
    <>
      <Hero
      bg="rwaFundBG"
        heading2="Assets"
        heading1="Tokenized Access to Real-World"
        subTitle="BTC Fund Unilabs"
        description="The RWA Fund by Unilabs provides institutional-grade exposure to tokenized real estate, commodities, and debt markets, bridging traditional finance and DeFi for diversified investing."
      />
      <Overview title="RWA Fund Overview" image={"/rwa.svg"}>
        <FadeInOnScroll>
          <p className="text-[#f0f0f0] leading-[1.8] text-[18px]e max-lg:text-xl max-w-[564px] max-lg:max-w-full">
            The Unilabs RWA Fund provides a structured gateway to tokenized
            real-world assets (RWAs), enabling investors to gain on-chain
            exposure to real estate, commodities, fixed-income markets, and
            institutional-grade yield products. By integrating blockchain
            technology with traditional asset classes, the RWA Fund offers a
            secure, liquid, and diversified approach to investing in tangible
            assets.
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <p className="text-[#f0f0f0] leading-[1.8] text-[18px] max-lg:text-xl my-6 max-w-[564px] max-lg:max-w-full">
            Tokenization is redefining asset ownership, making historically
            illiquid markets more accessible, efficient, and transparent. The
            Unilabs RWA Fund enables investors to participate in this financial
            transformation, capturing the benefits of on-chain real estate,
            yield-bearing structured products, and tokenized commodities.
          </p>
        </FadeInOnScroll>
      </Overview>
      <Why />
      <HowMiningSec title="How the RWA Fund Works" howdata={RWAhowData} />
      <Allocation allocationDataList={RWAallocationData} />
      <HowToInvest
        title="How to Invest in the RWA Fund"
        investdataList={RWAinvestData}
      />
      <FAQ data={RWAfaqData} notabs />
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
