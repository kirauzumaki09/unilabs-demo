import React from "react";
import StackedCoins from "@/assets/otherpages/stacked-coin.svg";
import Blur from "@/assets/otherpages/banner-blur.svg";
import Blur2 from "@/assets/otherpages/banner-blur2.svg";
import Cube from "@/assets/otherpages/cube.svg";
import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import CTAIcon from "@/assets/otherpages/banner.svg";
import Button from "@/modules/app/button";
import CoinIcon from "@/ui/icons/CoinIcon";
import Image from "next/image";
import assets from "@/assets";

type BannerProps = {
  title: string;
  paragraph: string;
  sub: string;
};
export function Banner({ title, paragraph, sub }: BannerProps) {
  return (
    <section className=" relative section">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 relative px-14 max-lg:px-5">
        <div className="w-full relative  z-[10] max-md:flex-col bg-white/10 backdrop-blur-[50px] rounded-xxl border-t border-t-sec-border border-b border-b-black/5  px-[90px] py-[60px] max-lg:p-6 flex gap-[95px] max-xl:gap-10 max-md:gap-4 items-center">
          <div className="w-[224px] h-[250px]  flex-shrink-0 relative inline-flex items-center  ">
            <Image
              src={assets.coinImage}
              width={224}
              height={250}
              alt="coinimg"
              className="w-full h-full object-contain flex-shrink 0"
            />
          </div>
          <div>
            <p className="gradText text-[36px] font-semibold font-anybody">
              {title}
            </p>
            <p className="text-[18px] font-inter pt-4 pb-3 text-white">
              {paragraph}
            </p>
            <p className="text-base font-semibold text-[20px] gradText font-anybody">
              {sub}
            </p>
            <Button className="h-[70px] min-w-[275px] mt-5 font-semibold text-[18px] max-md:h-[60px]">
              <CoinIcon /> Invest Now
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
