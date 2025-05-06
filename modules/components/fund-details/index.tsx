import React from "react";
import BannerSection from "./banner";
import DetailsContent from "./details-content";
import DetailsCard from "./details-card";
import { StaticImageData } from "next/image";

interface FundDetailsPageProps {
  title: string;
  date: string;
  children: React.ReactNode;
  image:StaticImageData
}

const FundDetailsPage = ({ children, date, title ,image}: FundDetailsPageProps) => {
  return (
    <>
      <BannerSection image={image} />
      <div className="details-cont py-[86px] max-lg:py-[40px]">
        <div className="max-w-[1529px] mx-auto w-full pl-5 pr-5">
          <div className="flex flex-wrap ml-[-12px] mr-[-12px]">
            <div className="w-[60%] max-lg:w-full pl-[12px] pr-[12px]">
              <div className="w-full max-w-[869px]">
                <span className="text-[18px] font-medium text-[#2DC4EC] block mb-[24px]">
                  {date}
                </span>
                <h1 className="text-[50px] max-lg:text-[40px] max-md:text-[32px] font-anybody font-semibold leading-[1.2] mb-[25px]">
                  {title}
                </h1>
                <DetailsCard>{children}</DetailsCard>
              </div>
            </div>
            <div className="w-[40%] pl-[12px] pr-[12px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundDetailsPage;
