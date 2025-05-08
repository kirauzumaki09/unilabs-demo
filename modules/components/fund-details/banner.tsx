import Image, { StaticImageData } from 'next/image';
import React from 'react';
import BannerIamge from '@/assets/fund-details-banner-image.png';
import BannerTopShape from '@/assets/banner-top-shape.png';
import BannerBottomShape from '@/assets/banner-bottom-shape.png';
import assets from '@/assets';


const BannerSection = ({image}:{image:StaticImageData}) => {
  return (
    <>
    <div className='relative h-[519px] mt-[129px]'>
      <Image className='w-full h-full object-cover' src={image} alt='banner-image'width={1920} height={519} />
      <Image className='w-full h-[161px] absolute top-0 left-0 right-0 obeject-cover' src={BannerTopShape} alt='banner-top-shape' width={1920} height={161} />
      <Image className='w-full h-[161px] absolute bottom-0 left-0 right-0 obeject-cover' src={BannerBottomShape} alt='banner-top-shape' width={1920} height={161} />
    </div>
    </>
  )
}

export default BannerSection