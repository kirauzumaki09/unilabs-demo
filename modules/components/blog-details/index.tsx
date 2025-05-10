"use client";

import { StaticImageData } from "next/image";
import React from "react";
import BannerSection from "../fund-details/banner";
import DetailsCard from "../fund-details/details-card";
import { FadeInOnScroll } from "@/modules/app/fadein-scroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/modules/app/accordion";
import { SlideInOnScroll } from "@/modules/app/slide-in-on-scroll";
import { Title } from "@/modules/app/title";

interface FundDetailsPageProps {
  title: string;

  children: React.ReactNode;
  image: StaticImageData;
}
const data = [
  {
    title:
      "What should I do if I get a nudge letter from HMRC regarding crypto income?",
    desc: "Review your crypto transactions and check for any undeclared income. If needed, amend your self-assessment or use HMRC's digital disclosure service to report the income voluntarily.",
  },
  {
    title: "Where does HMRC get information about my crypto activity?",
    desc: "HMRC gathers data from UK-based and international crypto exchanges, through tax treaties and global information-sharing agreements.",
  },
  {
    title: "Do I pay tax on every crypto transaction?",
    desc: "Not all transactions are taxable, but many are. Selling, trading, swapping, gifting, or receiving crypto income may all trigger tax obligations.",
  },
  {
    title: "Will I get penalized if I make a mistake?",
    desc: "Mistakes corrected quickly are usually treated leniently. However, hiding information or delaying corrections can result in harsh penalties.",
  },
  {
    title:
      "Do I have to declare cryptocurrency held in a wallet if it has never been sold?",
    desc: "No, just holding crypto isn’t taxable. But selling, spending, or swapping it usually is.",
  },
  {
    title: "Can I use loss from crypto against my tax?",
    desc: "Yes. Declared capital losses can offset capital gains. You must still report the losses to HMRC.",
  },
  {
    title: "How far back can HMRC check my crypto records?",
    desc: "HMRC can go back 6 years for negligence and up to 20 years in cases of deliberate misreporting.",
  },
  {
    title: "Is staking income taxed differently from gains of trading?",
    desc: "Yes. Staking rewards are typically taxed as income, while trading profits are subject to Capital Gains Tax. Some cases may involve both.",
  },
  {
    title: "How do I keep things clear on my crypto taxes from now on?",
    desc: "Maintain detailed records, use crypto tax software, save all reports, and stay updated with HMRC's guidance.",
  },
  {
    title: "Where can one learn more about crypto tax in the UK?",
    desc: "Visit HMRC’s official website on crypto tax or consult a qualified tax advisor experienced in cryptocurrency.",
  },
];

const BlogDetails = ({
  children,

  title,
  image,
}: FundDetailsPageProps) => {
  return (
    <>
      <BannerSection image={image} />
      <div className="details-cont py-[86px] max-lg:py-[40px] blogBG">
        <div className="max-w-[1529px] mx-auto w-full pl-5 pr-5 relative z-50">
          <div className="flex flex-wrap ml-[-12px] mr-[-12px]">
            <div className="w-full max-lg:w-full pl-[12px] pr-[12px]">
              <div className="w-full">
              
                <h1 className="text-[50px] max-lg:text-[40px] max-md:text-[32px] font-anybody font-semibold leading-[1.2] mb-[25px] max-lg:mb-[16px]">
                  {title}
                </h1>
                <DetailsCard>{children}</DetailsCard>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[1200px] pt-10">
              <div className="mb-8">
                <SlideInOnScroll>
                  <Title
                    text="Frequently"
                    sub
                    className="max-lg:text-6xl max-sm:text-[40px] text-[50px]"
                  />
                </SlideInOnScroll>
                <SlideInOnScroll delay={0.2}>
                  <Title
                    text="Asked Questions"
                    sub
                    className="sm:!leading-[60px] max-lg:text-6xl max-sm:text-4xl"
                  />
                </SlideInOnScroll>
              </div>
              <div className="w-full max-w-[1200px]  flex flex-col gap-2">
                {data.map((faq, index) => (
                  <FadeInOnScroll key={faq.title} delay={index * 0.4}>
                    <Accordion  className="w-full max-w-full" type="single" collapsible>
                      <AccordionItem
                        value={`item-${index}`}
                        className="w-full max-w-full z-50"
                      >
                        <AccordionTrigger>{faq.title}</AccordionTrigger>
                        <AccordionContent>
                          <div className="pt-[35px] pb-[40px] px-[45px] max-md:!p-3 text-[#DBDBDB] font-inter">
                            <p className="!font-normal text-[18px] max-md:text-[16px]">
                              {faq.desc}
                            </p>
                            
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </FadeInOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
