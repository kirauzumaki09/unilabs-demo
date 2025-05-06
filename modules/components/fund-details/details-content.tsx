import { title } from 'process'
import React from 'react'
import DetailsCard from './details-card'
import Image from 'next/image'
import assets from '@/assets'
import Link from 'next/link'

const DetailsContent = () => {


  return (
    <>
        <div className='details-cont pt-[86px] pb-[86px]'>
            <div className='max-w-[1529px] mx-auto w-full pl-5 pr-5'>

                <div className='flex flex-wrap ml-[-12px] mr-[-12px]'>
                    <div className='w-[60%] pl-[12px] pr-[12px]'>
                        <div className='w-full max-w-[869px]'>
                            <span className='text-[18px] font-medium text-[#2DC4EC] block mb-[24px]'>30 Apr, 2025</span>
                            <h1 className='text-[50px] font-anybody font-semibold leading-[1.2] mb-[25px]'>Fund Update 1</h1>
                            <DetailsCard>
                                <p>
                                     Hello Unilabs Community,
                                </p>

                                <h2>Setting the Core Foundations</h2>

                                <p>
                                    Today, we are excited to share the very first steps in building Unilabs — the next-generation AI-powered DeFi asset manager. Our presale platform is already live, but now begins the full rollout of the autonomous systems that will define Unilabs over the next 90 days. Here’s what we did today.
                                </p>
                            </DetailsCard>

                        </div>
                    </div>
                    <div className='w-[40%] pl-[12px] pr-[12px]'>
                        <h3 className='text-[24px] font-bold leading-[1.2] mb-[36px]'>Recent Update</h3>

                        <div className='flex flex-wrap'>
                            <div className='w-[162px] h-[162px] overflow-hidden rounded-[14px]'>
                                <Link href='#' className='w-full h-full inline-block'>
                                    <Image className='w-full h-full object-cover' src={assets.FundUpdate1} width={162} height={162} alt='recent-update-image'/>
                                </Link>
                                
                            </div>
                            <div className='max-w-[calc(100%-162px)] pl-[32px] w-full'>
                                <span>1 May, 2025</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </>
  ) 
}

export default DetailsContent