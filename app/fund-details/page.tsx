import FundDetailsPage from '@/modules/components/fund-details'
import React from 'react'

const FundDetails = () => {
  return (
    <div className="flex justify-center min-h-screen gap-16 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col w-full">
        <FundDetailsPage/>
      </main>
    </div>
  )
}

export default FundDetails