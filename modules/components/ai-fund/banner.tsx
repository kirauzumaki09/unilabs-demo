import React from "react";
import StackedCoins from "@/assets/otherpages/stacked-coin.svg";
import Blur from "@/assets/otherpages/banner-blur.svg";
import Blur2 from "@/assets/otherpages/banner-blur2.svg";
import Cube from "@/assets/otherpages/cube.svg";
import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import CTAIcon from "@/assets/otherpages/banner.svg";
import Button from "@/modules/app/button";

type BannerProps = {
  title: string;
  paragraph: string;
  sub: string;
};
export function Banner({ title, paragraph, sub }: BannerProps) {
  return (
    <section className="!pt-0 relative">
      <div className="max-w-[1529px] mx-auto flex flex-col items-center justify-center gap-8 relative px-14 max-lg:px-5">
        <div className="min-2xl:max-w-[75%] max-md:flex-col bg-white/10 backdrop-blur-[50px] rounded-xxl border-t border-t-sec-border border-b border-b-black/5 md:p-20 p-12 flex gap-16">
          <div className="size-24 min-w-24 relative">
            <FadeInOnScroll className="size-24 min-w-24">
              <StackedCoins />
            </FadeInOnScroll>
            <div className="size-12 absolute top-[95%] left-[65%]">
              <FadeInOnScroll>
                <Cube />
              </FadeInOnScroll>
            </div>
            <div className="size-8 absolute top-[95%] left-[65%]">
              <FadeInOnScroll>
                <Cube />
              </FadeInOnScroll>
            </div>
          </div>
          <div>
            <p className="gradText text-xl font-semibold font-anybody">{title}</p>
            <p className="text-sm pt-4 pb-3">{paragraph}</p>
            <p className="text-base font-semibold gradText font-anybody">{sub}</p>
            <Button className="h-12 mt-5">
              <CTAIcon /> Invest Now
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute w-[55%] right-0 -top-[125%]">
        <Blur2 />
      </div>
      <div className="absolute w-[65%] left-0 -top-[125%]">
        <Blur />
      </div>
    </section>
  );
}
