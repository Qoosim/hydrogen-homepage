import React from 'react'
import ArrowRightRed from "../../assets/arrow-right-red.svg"
import PhoneImg from "../../assets/phone-img.svg"
import RedBoxArrow from "../../assets/red-box-arrow.svg"
import OrangeBoxArrow from "../../assets/orange-box-arrow.svg"

export const PortfolioManagement = () => {
  return (
    <>
      <section className="w-full h-full font-dmSans bg-[#130A0A]">
        <div className='flex justify-between gap-32 px-14'>
            <div className='flex-1 flex flex-col items-start gap-6 pt-[3rem]'>
                <span className="text-[1.5rem] font-semibold text-[#e2d9d8]">Portfolio Management</span>
                <p className="text-[0.8rem] text-slate-300">Managing investment portfolio for clients, which affords them the opportunity of enjoying the returns and benefits of both the capital and money markets. It cuts across Equities Investment in blue-chip quoted/unquoted companies...</p>
                <button className='flex items-center gap-1 bg-[#fefffe] w-fit py-1 px-4 rounded-sm'>
                    <span className='text-[#f16f72] text-sm font-medium'>Learn More</span>
                    <img src={ArrowRightRed} className='' alt="Arrow Right" />
                </button>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex items-center gap-1.5'>
                        <div className='size-1.5 rounded-full bg-red-600'></div>
                        <div className='size-1.5 rounded-full bg-white'></div>
                        <div className='size-1.5 rounded-full bg-white'></div>
                        <div className='size-1.5 rounded-full bg-white'></div>
                        <div className='size-1.5 rounded-full bg-white'></div>
                        <div className='size-1.5 rounded-full bg-white'></div>
                        <div className='size-1.5 rounded-full bg-white'></div>
                        <div className='size-1.5 rounded-full bg-white'></div>
                        <div className='size-1.5 rounded-full bg-white'></div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={OrangeBoxArrow} className="cursor-pointer" alt="Orange Box Arrow" />
                        <img src={RedBoxArrow} className="cursor-pointer" alt="Red Box Arrow" />
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                <img src={PhoneImg} alt="Phone" />
            </div>
        </div>
      </section>
    </>
  )
}
