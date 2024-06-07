import React from 'react'
import ArrowRight from "../../assets/arrow-right.svg"
import PhoneImg from "../../assets/phone-img.svg"
import RedBoxArrow from "../../assets/red-box-arrow.svg"
import OrangeBoxArrow from "../../assets/orange-box-arrow.svg"

export const PortfolioManagement = () => {
  return (
    <>
      <section className="w-full h-full font-dmSans pb-[3rem] bg-[#130A0A]">
        <div>
            <div>
                <h3>Portfolio Management</h3>
                <p>Managing investment portfolio for clients, which affords them the opportunity of enjoying the returns and benefits of both the capital and money markets. It cuts across Equities Investment in blue-chip quoted/unquoted companies...</p>
                <button>
                    <span>Learn More</span>
                    <img src={ArrowRight} className='' alt="Arrow Right" />
                </button>
                <div>
                    <div className='flex items-center gap-1'>
                        <div className='size-8 rounded-full'></div>
                        <div className='size-8 rounded-full'></div>
                        <div className='size-8 rounded-full'></div>
                        <div className='size-8 rounded-full'></div>
                        <div className='size-8 rounded-full'></div>
                        <div className='size-8 rounded-full'></div>
                        <div className='size-8 rounded-full'></div>
                        <div className='size-8 rounded-full'></div>
                        <div className='size-8 rounded-full'></div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={OrangeBoxArrow} alt="Orange Box Arrow" />
                        <img src={RedBoxArrow} alt="Red Box Arrow" />
                    </div>
                </div>
            </div>
            <div>
                <img src={PhoneImg} alt="Phone" />
            </div>
        </div>
      </section>
    </>
  )
}
