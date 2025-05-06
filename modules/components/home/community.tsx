"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Review {
  id: number;
  thumbnail: string;
  url: string;
}

const LeftArrrow: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 12H5M5 12L12 5M5 12L12 19"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const RightArrrow: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const reviews: Review[] = [
  {
    id: 1,
    thumbnail: "/webp/youtube1.png",
    url: "https://youtube.com/watch?v=xxx",
  },
  {
    id: 2,
    thumbnail: "/webp/youtube2.png",
    url: "https://youtube.com/watch?v=yyy",
  },
  {
    id: 3,
    thumbnail: "/webp/youtube3.png",
    url: "https://youtube.com/watch?v=zzz",
  },
  {
    id: 4,
    thumbnail: "/webp/youtube4.png",
    url: "https://youtube.com/watch?v=aaa",
  },
  {
    id: 5,
    thumbnail: "/webp/youtube2.png",
    url: "https://youtube.com/watch?v=bbb",
  },
];

const CommunityReviews: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "120px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="section reviewBg">
  
        <h2 className="text-[80px] text-center font-extrabold uppercase  text-white mb-[50px] font-anybody ">
          Community Reviews
        </h2>

      <div className="relative">
        <Slider ref={sliderRef} {...settings} className="reviewSlider">
          {reviews.map((review) => (
            <div key={review.id} className="px-2">
              <a href={review.url} target="_blank" rel="noopener noreferrer">
                <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={review.thumbnail}
                    alt={`Review ${review.id}`}
                    width={600}
                    height={338}
                    className="object-cover w-full "
                  />
                  <div className="absolute top-2 left-2 bg-red-600 p-1 rounded">
                    <FaYoutube className="text-white text-lg" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
        <div className="flex relative z-10 gap-4 justify-center mt-[60px]">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="size-[76px] border border-[#282F38] bg-[#061624] !cursor-pointer  p-2 rounded-full z-10 hover:opacity-75  flex items-center justify-center"
          >
            <LeftArrrow />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="size-[76px] border border-[#282F38] bg-[#061624] !cursor-pointer  p-2 rounded-full z-10 hover:opacity-75  flex items-center justify-center"
          >
            <RightArrrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityReviews;
