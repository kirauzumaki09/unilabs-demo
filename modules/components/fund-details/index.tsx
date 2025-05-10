"use client";
import assets from "@/assets";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import BannerSection from "./banner";
import DetailsCard from "./details-card";
import { fundList } from "../fund-main/fundlist.mock";

interface FundDetailsPageProps {
  title: string;
  date: string;
  children: React.ReactNode;
  image: StaticImageData;
}

const FundDetailsPage = ({
  children,
  date,
  title,
  image,
}: FundDetailsPageProps) => {
  return (
    <>
      <BannerSection image={image} />
      <div className="details-cont py-[86px] max-lg:py-[40px]">
        <div className="container mx-auto w-full pl-5 pr-5">
          <div className="flex flex-wrap ml-[-12px] mr-[-12px]">
            <div className="w-[60%] max-lg:w-full pl-[12px] pr-[12px]">
              <div className="w-full max-w-[869px]">
                <span className="text-[18px] font-medium text-[#2DC4EC] block mb-[24px] max-lg:mb-[16px] max-md:text-[16px]">
                  {date}
                </span>
                <h1 className="text-[50px] max-lg:text-[40px] max-md:text-[32px] font-anybody font-semibold leading-[1.2] mb-[25px] max-lg:mb-[16px]">
                  {title}
                </h1>
                <DetailsCard>{children}</DetailsCard>
              </div>
            </div>

            <div className="w-[40%] max-lg:w-full  pl-[12px] pr-[12px]">
              <h3 className="text-[24px] font-bold leading-[1.2] mb-[36px]">
                Recent Update
              </h3>
              <div className="flex flex-col gap-[40px]">
                {fundList.reverse()
                  .filter((item) => item.title !== title)
                  .map((item, index) => (
                    <div className="flex  gap-[32px] max-sm:flex-col" key={index}>
                      <div className="w-[162px] max-sm:w-full flex-shrink-0 h-[162px] overflow-hidden rounded-[14px]">
                        <Link href={item.link} className="w-full linkImage h-full inline-block">
                          <Image
                            className="w-full h-full object-cover"
                            src={item.image}
                            width={1920}
                            height={500}
                            alt="recent-update-image"
                          />
                        </Link>
                      </div>
                      <div className="">
                        <p className="text-[18px] max-sm:text[16px] font-medium text-[#2DC4EC] leading-[1.2] mb-[16px] max-sm:mb-2">
                          {item.date}
                        </p>
                        <h3 className="text-[24px] max-sm:text[20px] font-semibold mb-[16px] max-sm:mb-2 font-anybody capitalize">
                          <Link className="inline-block hover:text-[#2DC4EC]" href={item.link}  >
                            {item.title}
                          </Link>
                        </h3>
                        <p className="text-[18px] max-sm:text[16px] leading-[1.8] capitalize lineclamp2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundDetailsPage;
