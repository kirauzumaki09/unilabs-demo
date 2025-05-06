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
        <div className="max-w-[1529px] mx-auto w-full pl-5 pr-5">
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

            <div className="w-[40%] pl-[12px] pr-[12px]">
              <h3 className="text-[24px] font-bold leading-[1.2] mb-[36px]">
                Recent Update
              </h3>
              <div className="flex flex-col gap-[40px]">
                {fundList
                  .filter((item) => item.title !== title)
                  .map((item, index) => (
                    <div className="flex flex-wrap" key={index}>
                      <div className="w-[162px] h-[162px] overflow-hidden rounded-[14px]">
                        <Link href="#" className="w-full h-full inline-block">
                          <Image
                            className="w-full h-full object-cover"
                            src={item.image}
                            width={162}
                            height={162}
                            alt="recent-update-image"
                          />
                        </Link>
                      </div>
                      <div className="max-w-[calc(100%-162px)] pl-[32px] w-full">
                        <p className="text-[18px] font-medium text-[#2DC4EC] leading-[1.2] mb-[16px]">
                          {item.date}
                        </p>
                        <h3 className="text-[24px] font-semibold mb-[16px] font-anybody capitalize">
                          <Link className="inline-block" href="#">
                            {item.title}
                          </Link>
                        </h3>
                        <p className="text-[18px] leading-[1.8] capitalize lineclamp2">
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
