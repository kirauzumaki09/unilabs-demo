import Image from "next/image";
import React from "react";

const updates = [
  {
    id: 1,
    img: '../../../assests/FundUpdate1.png',
    date: "30 Apr, 2025",
    title: "Fund Update 1",
    desc: "Today, we are excited to share the very first steps in building our next‐gen AI‑powered debt asset manager. Our presale platform is already live…",
  },
  {
    id: 2,
    img: '/assets/FundUpdate2.png',
    date: "1 May, 2025",
    title: "Fund Update 2",
    desc: "Our team is thrilled to share today’s progress on building the foundation of our AI‑powered debt asset management system. Every move we make is geared toward…",
  },
  {
    id: 3,
    img: '/assets/FundUpdate3.png',

    date: "2 May, 2025",
    title: "Fund Update 3",
    desc: "Today, our team made strong progress toward building the core systems that will manage illiquid fund strategies, each fund—whether it’s Bitcoin, alt…",
  },
  {
    id: 4,
    img: '/assets/FundUpdate4.png',

    date: "3 May, 2025",
    title: "Fund Update 4",
    desc: "Today, Midway is hosting an epic lan‑up for our team at Uniswap. We officially transitioned from theoretical modeling to live simulation testing for our AI‑powered defi…",
  },
];

const FundUpdates = () => {
  return (
    <section className="section fundUpadteBg py-16 px-4">
      <h2 className="text-[80px] text-center font-extrabold uppercase text-white mb-12">
        Fund Updates
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {updates.map((u) => (
          <div
            key={u.id}
            className="overflow-hidden shadow-lg flex flex-row align-center gap-4" 
          >
            <figure className="w-[328px] h-[328px] rounded-[30px] overflow-hidden">
            <Image
              src={u.img}
              alt={u.title}
              className="w-full h-full object-cover"
              width={328}
              height={328}
            />
            </figure>
            <div className="p-4">
              <div className="text-sm text-gray-400 mb-2">{u.date}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {u.title}
              </h3>
              <p className="text-gray-300 text-sm">{u.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full">
          View More
        </button>
      </div>
    </section>
  );
};

export default FundUpdates;
