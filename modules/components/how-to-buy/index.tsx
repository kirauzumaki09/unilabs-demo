"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Vector from "@/assets/buy-vector.svg";
import Line from "@/assets/Line.svg";
import { TitleAnim } from "@/modules/app/title-animation";
import { FadeIn } from "@/modules/app/fade-in";
import Blur1 from "@/assets/buy-blur1.svg";
import Blur2 from "@/assets/Buy-blur2.svg";
import Metamask from "@/assets/Metamask-icon 1.svg";
import Trust from "@/assets/Trust_Stacked Logo_Blue 1.svg";
import Circle from "@/assets/circle.svg";
import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import { SlideInOnScroll } from "@/modules/app/slide-in-on-scroll";

export function BuyPage() {

  const howToBuyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (howToBuyRef.current) {
      const height = howToBuyRef.current.offsetHeight + 150 ;
      setHeight(height );
    }
  }, []);

  return (
    <div className="w-full flex flex-col gap-8 relative pb-75 max-lg:pb-[80px]  ">

      <div className="w-full h-screen relative overflow-hidden how_buy_BG pt-[100px]"> 
      <div className="container">

        <div className="flex flex-col items-center max-lg:px-4 z-40 relative pt-16 ">
          <TitleAnim delay={0}>
            <h1 className="font-anybody uppercase text-white font-extrabold text-[50px] max-lg:text-[40px] max-md:text-[30px]  max-sm:text-[24px] text-center  !leading-[1]">
              Buy UNIL with
            </h1>
          </TitleAnim>
          <TitleAnim delay={0.2}>
            <h1 className="font-anybody uppercase font-extrabold !text-[80px] max-lg:!text-[60px] max-md:!text-[50px]  max-sm:!text-[40px] gradText !leading-[1]">
              ETH, BNB, USDT
            </h1>
          </TitleAnim>
          <TitleAnim delay={0.4}>
            <h1 className="font-anybody uppercase text-white font-extrabold !text-[80px] max-lg:!text-[50px] max-md:!text-[50px]  max-sm:!text-[40px] text-center  !leading-[1]">
              and MANY MORE
            </h1>
          </TitleAnim>

          <FadeIn delay={0.6} className="max-w-[405px] w-full">
            <button
              onClick={() => {
                window.open(
                  "https://buy.unilabs.finance",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="mt-8 tracking-[0.5em]  bg-tertiary border-[#2EC5ED] uppercase border py-4 h-[70px] max-md:h-[60px] w-full rounded-[11px] font-anybody font-semibold hover:bg-opacity-80 transition-all"
            >
              Buy UNIL
            </button>
          </FadeIn>
        </div>
      </div>

      </div>

      {/* Steps Section */}
      <div className="container">

      <div className="w-full flex flex-col items-center px-4 -mt-16 max-lg:mt-10 max-md:mt-4z-50 relative max-md:-mt-52 " ref={howToBuyRef}>
        <Blur2 className="absolute  top-0 w-[2000px]" />

        {/* Step 1 */}
        <div className="flex items-center justify-center flex-col gap-[40px] mb-9 mt-16 max-lg:mt-10 max-md:mt-4 relative z-10">
          <div className="absolute">
            <Blur1 className="absolute -z-10 -top-40 left-1/2" />
          </div>
          <FadeInOnScroll>
            <span className="py-4 px-8 bg-gradient-to-r from-accent-foreground to-primary-foreground text-primary rounded-xl font-anybody text-[23px] leading-[1.5] font-anybody font-semibold">
              STEP 01
            </span>
          </FadeInOnScroll>

          <div className="py-11.5 max-lg:py-5 max-lg:px-6 w-full px-20 backdrop-blur-[10px] bg-secondary z-40 rounded-[40px] border border-[#54708F] max-w-[1070px] text-center relative">
            <SlideInOnScroll>
              <h3 className="gradText text-[36px] max-md:text-[24px] max-sm:text-[20px] font-anybody font-semibold leading-[1]">
                Wallet Setup
              </h3>
            </SlideInOnScroll>
            <FadeInOnScroll>
              <p className="text-lg mt-5 text-sec-text">
                Welcome aboard! Start by getting MetaMask on your desktop
                browser or a Wallet Connect-compatible wallet like Trust Wallet
                for your mobile.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.4}>
              <p className="text-lg mt-9 max-lg:mt-2 text-sec-text">
                Desktop users, MetaMask is ideal for a smooth purchase process.
                Mobile users, Trust Wallet or MetaMask connected through Wallet
                Connect is your go-to.
              </p>
            </FadeInOnScroll>
            <div className="mt-10 w-full flex items-center justify-center">
              <div className="w-full flex items-center justify-between gap-4 max-w[716px] max-md:max-w-full">
                <FadeInOnScroll>
                  <div className="flex flex-col items-center">
                    <Metamask className="size-[130px]" />
                    <p className="font-anybody text-xl font-semibold mt-5">
                      Download METAMASK
                    </p>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <div className="flex flex-col items-center">
                    <Trust className="size-[130px]" />
                    <p className="font-anybody text-xl font-semibold mt-5">
                      Download TRUST
                    </p>
                  </div>
                </FadeInOnScroll>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-center justify-center flex-col gap-[40px] mb-9 mt-16 max-lg:mt-10 max-md:mt-4 relative z-10">
          <div className="absolute">
            <Blur1 className="absolute -z-10 -top-40 left-1/2" />
          </div>
          <FadeInOnScroll>
            <span className="py-4 px-8 bg-gradient-to-r from-accent-foreground to-primary-foreground text-primary rounded-xl font-anybody text-[23px] leading-[1.5] font-anybody font-semibold">
              STEP 02
            </span>
          </FadeInOnScroll>

          <div className="py-11.5 max-lg:py-5 max-lg:px-6  w-full px-20 backdrop-blur-[10px] bg-secondary z-40 rounded-[40px] border border-[#54708F] max-w-[1070px] text-center relative">
            <SlideInOnScroll>
              <h3 className="gradText text-[36px] max-md:text-[24px] max-sm:text-[20px] font-anybody font-semibold leading-[1]">
                Purchase Process
              </h3>
            </SlideInOnScroll>
            <FadeInOnScroll>
              <p className="text-lg mt-5 text-sec-text">
              Ready to invest? Simply pick your preferred currency on our site, input how many UNIL tokens you'd like, and hit 'Buy Now'. A prompt will pop up from your wallet for transaction confirmation, where you’ll also see the gas fees.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.4}>
              <p className="text-lg mt-9 max-lg:mt-2 text-sec-text">
              Note: Purchasing with USDT/USDC may involve two approvals—one to okay the contract and another for the actual payment.
              </p>
            </FadeInOnScroll>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-center justify-center flex-col gap-[40px] mb-9 mt-16 max-lg:mt-10 max-md:mt-4 relative z-10">

            <Blur1 className="absolute -z-10 -top-40 left-1/2" />
    
          <FadeInOnScroll>
            <span className="py-4 px-8 bg-gradient-to-r from-accent-foreground to-primary-foreground text-primary rounded-xl font-anybody text-[23px] leading-[1.5] font-anybody font-semibold">
              STEP 03
            </span>
          </FadeInOnScroll>

          <div className="py-11.5 max-lg:py-5 max-lg:px-6  w-full px-20 backdrop-blur-[10px] bg-secondary z-40 rounded-[40px] border border-[#54708F] max-w-[1070px] text-center relative">
            <SlideInOnScroll>
              <h3 className="gradText text-[36px] max-md:text-[24px] max-sm:text-[20px] font-anybody font-semibold leading-[1]">
                Token Reception
              </h3>
            </SlideInOnScroll>
            <FadeInOnScroll>
              <p className="text-lg mt-5 text-sec-text">
              Once our presale wraps up, you can collect your UNIL tokens through our website or wait for an airdrop straight to your wallet. Meanwhile, keep an eye on your investment and the token prices from your dashboard. Just connect your wallet to our website, and voilà—you’re there!
              </p>
            </FadeInOnScroll>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <FadeIn delay={0.6} className="flex items-center justify-center">
            <Circle className="absolute -top-28 z-[3]" />
          </FadeIn>
          <FadeInOnScroll className="flex items-center justify-center">
            <Circle className="absolute -bottom-39 z-50 z-[3]" />
          </FadeInOnScroll>
        </div>
        <FadeIn delay={0.8}>
          <div className={`absolute -top-15  w-[2px] activeBtn`}     style={{ height: `${height}px` }} />
        </FadeIn>
      </div>
      </div>
    </div>
  );
}
