"use client";

import Button from "@/modules/app/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { fundList } from "../fund-main/fundlist.mock";

const FundUpdates = () => {
  const router = useRouter();

  return (
    <section className="section fundUpadteBg py-16 px-4">
      <div className="container mx-auto flex flex-col w-full px-14 max-lg:px-5 tiersSliderWrap">
        <h2 className="text-[80px]  max-lg:text-[60px] max-md:text-[50px] max-sm:text-[40px] text-center font-extrabold uppercase text-white mb-12">
          Fund Updates
        </h2>

        <div className="grid gap-8 grid-cols-2 max-xl:grid-cols-1 ">
          {fundList
            .reverse()
            .slice(0, 4)
            .map((u, index) => (
              <div
                key={index}
                className="flex flex-row align-center gap-4 funCard max-md:flex-col"
              >
                <Link
                  href={u.link}
                  className="w-[300px] linkImage flex-shrink-0 max-xl:w-[200px] h-[328px] rounded-[30px] overflow-hidden fundUpdteFiugure"
                >
                  <Image
                    src={u.image}
                    alt={u.title}
                    className="w-full h-full object-cover rounded-[30px] "
                    width={1920}
                    height={500}
                  />
                </Link>
                <div className="w-auto h-fit flex flex-col justify-center funCardRight">
                  <p className="text-[18px] text-[#2DC4EC]  mb-2">{u.date}</p>

                  <h3 className="text-[24px] font-semibold  mb-2">
                    <Link
                      href={u.link}
                      className="text-white hover:text-[#2DC4EC]"
                    >
                      {u.title}
                    </Link>
                  </h3>

                  <p className="text-[#DBDBDB]-400 text-[18px] mt-2 leading-8  lineclamp4">
                    {u.description}
                  </p>
                  <Link
                    href={u.link}
                    className="text-[#2DC4EC] hover:text-white mt-1"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            className="hover:opacity-60"
            onClick={() => router.push("/fund-updates")}
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FundUpdates;
