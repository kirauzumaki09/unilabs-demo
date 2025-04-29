"use client";
import React, { useEffect, useState } from "react";
import HeroVector from "@/assets/hero-vector.svg";
import ETH from "@/assets/eth.svg";
import USDT from "@/assets/usdt.svg";
import { Progress } from "radix-ui";
import { motion } from "framer-motion";
import Button from "@/modules/app/button";
import Bag from "@/assets/bag.svg";
import Marquee from "react-fast-marquee";
import Github from "@/assets/github.svg";
import Analytics from "@/assets/analytics.svg";
import Binance from "@/assets/binance.svg";
import BNB from "@/assets/bnb.svg";
import Tether from "@/assets/tether.svg";
import Plus from "@/assets/plus.svg";
import Image from "next/image";
import { TitleAnim } from "@/modules/app/title-animation";
import { FadeIn } from "@/modules/app/fade-in";
import { cn } from "@/modules/utils";
import axios from "axios";

// https://buy.unilabs.finance/api/totalSold
// https://buy.unilabs.finance/api/usdtRaised
// https://buy.unilabs.finance/api/currentPrice
// https://buy.unilabs.finance/api/nextPrice

interface Stats {
  totalSold: number;
  usdtRaised: number;
  currentPrice: number;
  nextPrice: number;
}

interface TotalSoldResponse {
  totalSold: number;
  date: string;
}

interface UsdtRaisedResponse {
  usdtRaised: number;
  date: string;
}

interface CurrentPriceResponse {
  currentPrice: number;
  date: string;
}

interface NextPriceResponse {
  nextPrice: number;
  date: string;
}

export function Hero() {
  const progress = 0;
  const [selectedToken, setSelectedToken] = useState<"ETH" | "BNB" | "USDT">(
    "ETH"
  );
  const [amount, setAmount] = useState("");
  const [stats, setStats] = useState<Stats>({
    totalSold: 0,
    usdtRaised: 0,
    currentPrice: 0,
    nextPrice: 0,
  });

  useEffect(() => {
    console.log("useEffect called");
    const statsQuery = async () => {
      // const totalSoldResponse = await axios.get(
      //   "https://buy.unilabs.finance/api/totalSold"
      // );
      // console.log({ totalSoldResponse });
      // const totalSoldResponse = await fetch(
      //   "https://buy.unilabs.finance/api/totalSold"
      // );
      // const totalSoldData: TotalSoldResponse = await totalSoldResponse.json();
      // const usdtRaisedResponse = await fetch(
      //   "https://buy.unilabs.finance/api/usdtRaised"
      // );
      // const usdtRaisedData: UsdtRaisedResponse =
      //   await usdtRaisedResponse.json();
      // const currentPriceResponse = await fetch(
      //   "https://buy.unilabs.finance/api/currentPrice"
      // );
      // const currentPriceData: CurrentPriceResponse =
      //   await currentPriceResponse.json();
      // const nextPriceResponse = await fetch(
      //   "https://buy.unilabs.finance/api/nextPrice"
      // );
      // const nextPriceData: NextPriceResponse = await nextPriceResponse.json();
      // console.log({
      //   totalSoldResponse,
      //   usdtRaisedResponse,
      //   currentPriceResponse,
      //   nextPriceResponse,
      // });
      // console.log({
      //   totalSoldData,
      //   usdtRaisedData,
      //   currentPriceData,
      //   nextPriceData,
      // });
      // setStats({
      //   totalSold: totalSoldData.totalSold,
      //   usdtRaised: usdtRaisedData.usdtRaised,
      //   currentPrice: currentPriceData.currentPrice,
      //   nextPrice: nextPriceData.nextPrice,
      // });
    };

    statsQuery()
      .then(() => {
        console.log("Data fetched successfully");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const ETH_PRICE = 2027.84;
  const BNB_PRICE = 636.15;
  const USDT_PRICE = 1.0;

  const UNIL_PRICE = 0.004;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  useEffect(() => {
    setAmount("");
  }, [selectedToken]);

  const calculateUnilAmount = () => {
    if (!amount) return "";
    const inputAmount = parseFloat(amount);
    let tokenPriceInUsd = USDT_PRICE;
    if (selectedToken === "ETH") {
      tokenPriceInUsd = ETH_PRICE;
    } else if (selectedToken === "BNB") {
      tokenPriceInUsd = BNB_PRICE;
    }
    const usdAmount = inputAmount * tokenPriceInUsd;
    const unilAmount = usdAmount / UNIL_PRICE;
    return unilAmount.toFixed(2);
  };

  useEffect(() => {
    setAmount("");
  }, [selectedToken]);

  const titleStyles =
    "font-anybody uppercase text-white font-extrabold text-[50px] max-lg:text-3xl max-w-[80%] max-lg:max-w-full text-center leading-[140%] leading-0";

  return (
    <div className="relative min-h-screen h-full w-full mt-14  flex flex-col gap-10 max-lg:px-4">
      {/* Background Image */}
      <div className="absolute w-full h-full -z-10 flex items-center justify-center">
        <Image
          src={"/webp/hero-bg.webp"}
          alt="hero-bg"
          width={2000}
          height={2000}
          objectFit="cover"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute w-full  h-full  bg-gradient-to-b from-[#000000] to-[#000000] opacity-50 z-20" />
      <div className="absolute inset-0 -z-10">
        <HeroVector />
      </div>

      <div className="flex flex-col pt-[32px] items-center z-50">
        <div className="flex flex-col items-center max-lg:px-4">
          <TitleAnim delay={0}>
            <h1 className={titleStyles}>
              The World&apos;s first <br />
            </h1>
          </TitleAnim>
          <TitleAnim delay={0.2}>
            <h1 className="font-anybody uppercase font-extrabold text-[100px] max-lg:text-6xl max-md:text-5xl gradText leading-32 -my-2.5">
              AI-Backed
            </h1>
          </TitleAnim>
          <br />
          <TitleAnim delay={0.4}>
            <h1
              className={`${titleStyles} -mt-8 text-[2.5rem] max-w-[800px] leading-[1]`}
            >
              DeFi Asset Manager With Over $30M AUM
            </h1>
          </TitleAnim>
        </div>
        <div className="flex justify-between gap-10 mt-16 max-lg:mt-8 max-lg:flex-col lg:px-3">
          <FadeIn delay={0}>
            <p className="max-w-[318px] max-lg:max-w-full ">
              Unlock cutting-edge crypto opportunities with Unilabs—where
              Enterprise AI meets DeFi innovation. Our system tracks thousands
              of emerging projects, helping you invest early and confidently.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="max-w-[318px] max-lg:max-w-full lg:hidden ">
              Experience next-level transparency, significant returns, and
              unparalleled access to ventures once reserved for institutional
              players.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="flex items-center justify-center">
            <div className="border-[1px] border-[#FFFFFF1A] rounded-[17px] bg-[#00060F7A] backdrop-blur-[90px] lg:px-8 px-4 py-8 md:max-w-[562px] w-full">
              <div className="flex flex-col">
                <p className="font-bold text-[2rem] max-md:text-2xl text-center text-white font-anybody font-medium text-[32px]">
                  Buy Now
                </p>
                <p className=" text-center gradText text-[22px] font-semibold">
                  Before Price Rises
                </p>

                <Progress.Root
                  value={progress}
                  className="ProgressRoot mt-8 overflow-hidden !w-full relative"
                >
                  <motion.div
                    className="bg-gradient-to-r from-[#42BDDD] to-[#0FEDBE] h-full rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1 }}
                  />
                  <span className="absolute right-3 z-[1000] text-text top-1 text-xs">
                    {progress}% Sold
                  </span>
                </Progress.Root>
              </div>
              <div className="mt-8 text-[18px] text-center font-normal">
                <p>USDT RAISED: $0</p>
                <p className="gradText font-semibold text-[18px] mt-2">Tokens Sold: 0</p>
              </div>
              <div className="flex flex-col mt-6 gap-[14px]">
                <div className="rounded-[11px] bg-[#FFFFFF1A] py-[20px] text-text flex backdrop-blur-[90px] items-center px-5 border-[2px] border-[#04EEE2] w-full justify-between">
                  <p className=" text-[18px] font-figtree font-semibold max-md:text-xs">
                    1 $UNI = ${UNIL_PRICE}
                  </p>
                  <p className="font-bold text-[#00FFC8] text-[18px] font-semibold  font-figtree  max-md:text-xs">
                    Next Price: $0.0051
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full justify-center mt-8 max-md:flex-wrap">
                  {[
                    { id: "ETH", Icon: ETH },
                    { id: "BNB", Icon: BNB },
                    { id: "USDT", Icon: USDT },
                  ].map(({ id, Icon }) => (
                    <div
                      key={id}
                      onClick={() =>
                        setSelectedToken(id as "ETH" | "BNB" | "USDT")
                      }
                      className={cn(
                        "rounded-[11px] cursor-pointer gap-2.5 border text-text justify-center transition duration-300 ease-in-out h-12 backdrop-blur-[60px] flex items-center px-[35px] w-full",
                        selectedToken === id
                          ? "bg-gradient-to-r from-[#42BDDD] via-[#42BDDD] to-[#0FEDBE] text-black"
                          : "border-transparent bg-[#42BDDD2E] hover:border-border hover:bg-[#00FF99]/30"
                      )}
                    >
                      <Icon />
                      <p>{id}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center w-full gap-6 my-5 max-md:flex-col">
                  <div className="w-1/2 max-md:w-full">
                    <p className="text-center text-[#04EEE2]">
                      {selectedToken} You Pay:
                    </p>
                    <div className="w-full  flex items-center px-3 rounded-[11px] border-[2px]  border-[#2D4A57] mt-2.5 h-12">
                      <input
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder="200"
                        title="Amount to pay in selected token"
                        className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none h-11 outline-none p-2 w-[85%]"
                      />
                      <span className="flex items-center gap-2">
                        {selectedToken === "ETH" && <ETH />}
                        {selectedToken === "BNB" && <BNB />}
                        {selectedToken === "USDT" && <USDT />}
                        <p className="min-w-5">{selectedToken}</p>
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 max-md:w-full">
                    <p className="text-center text-[#04EEE2]">
                      $UNIL You Will Receive:
                    </p>
                    <div className="w-full  border-[#2D4A57]  flex items-center px-3  rounded-[11px] border-[2px] mt-2.5 h-12">
                      <input
                        type="number"
                        readOnly
                        value={calculateUnilAmount()}
                        title="Amount of UNIL tokens you will receive"
                        placeholder="0"
                        className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none text-right h-11 outline-none p-2 w-[85%]"
                      />

                      <p className="min-w-5">$UNIL</p>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    window.open(
                      "https://buy.unilabs.finance",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  className="border-[2px] border-[#04EEE2] rounded-3xl text-white font-bold"
                >
                  <Bag />
                  Buy Now
                </Button>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="max-w-[278px] max-lg:max-w-full max-lg:hidden text-center">
              Experience next-level transparency, significant returns, and
              unparalleled access to ventures once reserved for institutional
              players.
            </p>
          </FadeIn>
        </div>
      </div>
      <div className="mt-auto flex justify-center items-center flex-col gap-8 max-sm:gap-5 z-50 pb-9">
        <p className="text-[2rem] font-medium text-white font-anybody">
          Powered By
        </p>
        <MarqueeComponent />
      </div>
    </div>
  );
}

function MarqueeComponent() {
  const partnerLogos = [
    { id: "github", component: <Github /> },
    { id: "analytics", component: <Analytics /> },
    { id: "binance", component: <Binance /> },
    { id: "tether", component: <Tether /> },
  ];

  const logosWithPlus = partnerLogos.flatMap((logo) => [
    <span key={logo.id} className="flex items-center">
      {logo.component}
    </span>,
    <span key={`plus-${logo.id}`} className="flex items-center">
      <Plus />
    </span>,
  ]);

  const duplicatedLogos = [...logosWithPlus, ...logosWithPlus];

  return (
    <Marquee speed={50} gradient={false} className="-ml-[65px]">
      <div className="flex w-full min-w-[200vw] justify-evenly">
        {duplicatedLogos.map((item, index) => (
          <span key={`logo-${index}`} className="flex items-center gap-8">
            {item}
          </span>
        ))}
      </div>
    </Marquee>
  );
}
