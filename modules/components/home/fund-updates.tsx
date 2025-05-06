import assets from "@/assets";
import Image from "next/image";

const updates = [
  {
    id: 1,
    img: assets.FundUpdate1,
    date: "30 Apr, 2025",
    title: "Fund Update 1",
    desc: "Today, we are excited to share the very first steps in building our next‐gen AI‑powered debt asset manager. Our presale platform is already live…",
  },
  {
    id: 2,
    img: assets.FundUpdate2,
    date: "1 May, 2025",
    title: "Fund Update 2",
    desc: "Our team is thrilled to share today’s progress on building the foundation of our AI‑powered debt asset management system. Every move we make is geared toward…",
  },
  {
    id: 3,
    img: assets.FundUpdate3,

    date: "2 May, 2025",
    title: "Fund Update 3",
    desc: "Today, our team made strong progress toward building the core systems that will manage illiquid fund strategies, each fund—whether it’s Bitcoin, alt…",
  },
  {
    id: 4,
    img: assets.FundUpdate4,

    date: "3 May, 2025",
    title: "Fund Update 4",
    desc: "Today, Midway is hosting an epic lan‑up for our team at Uniswap. We officially transitioned from theoretical modeling to live simulation testing for our AI‑powered defi…",
  },
];

const FundUpdates = () => {
  return (
    <section className="section fundUpadteBg py-16 px-4">
      <div className="container mx-auto flex flex-col w-full px-14 max-lg:px-5 tiersSliderWrap">
        <h2 className="text-[80px] text-center font-extrabold uppercase text-white mb-12">
          Fund Updates
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {updates.map((u) => (
            <div
              key={u.id}
              className="flex flex-row align-center gap-4 funCard"
            >
              {/* <figure className="!min‑w-[300px] h-[328px] rounded-[30px] overflow-hidden fundUpdteFiugure"> */}
              <Image
                src={u.img}
                alt={u.title}
                className="w-full h-full object-cover rounded-[30px] "
                width={328}
                height={328}
              />
              {/* </figure> */}
              <div className="w-auto h-fit flex flex-col justify-center funCardRight">
                <p className="text-[18px] text-[#2DC4EC]  mb-2">{u.date}</p>
                <h3 className="text-[24px] font-semibold text-white mb-2">
                  {u.title}
                </h3>
                <p className="text-[#DBDBDB]-400 text-[18px] mt-2 leading-8">
                  {u.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            className="flex flex-row justify-center items-center 
    py-[18px] px-[40px] 
    bg-[linear-gradient(109.14deg,#42BDDD_44.18%,#0FEDBE_103.21%)] 
    rounded-[11px] text-[16px] font-medium text-[#04111B] hover:opacity-50 cursor-pointer"
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FundUpdates;
