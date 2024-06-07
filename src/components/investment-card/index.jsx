import React from 'react'
import ArrowRight from "../../assets/arrow-right.svg"

export const InvestmentCard = ({ cardInfo }) => {
  return (
    <article className='bg-[#2a2021] p-4 rounded-xl flex flex-col items-start gap-3'>
      <img src={cardInfo.logo} alt="Card Logo" />
      <h3 className={`${cardInfo.color === "red" ?  "text-[#c03233]" : "text-[#cecbcb]"} text-sm font-semibold`}>{cardInfo.title}</h3>
      <p className='text-[#817d7d] text-xs'>{cardInfo.text}</p>
      <button className='flex items-center gap-2 bg-[#342e2e] py-2 px-4 text-[#fff] text-sm rounded-lg mt-[1.5rem]'>
        <span className="whitespace-nowrap">Start Investing</span>
        <img src={ArrowRight} alt="Arrow Right" />
      </button>
    </article>
  )
}
