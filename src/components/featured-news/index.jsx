import React from 'react'
import { featuredNewsData } from '../../constants'
import { FeaturedNewsCard } from './_component/FeaturedNewsCard'
import SquaredCrossIcon from "../../assets/featuere-news-square-cross.svg"

export const FeaturedNews = () => {
  return (
    <>
      <section className="relative w-full h-full font-dmSans pb-[8rem] bg-[#130A0A]">
        <div className="flex flex-col items-center pt-20">
            <h3 className="text-[#dad8d8] text-[2rem] font-medium">Featured News</h3>
            <p className="text-[#9a9796] text-[1rem]">Explore the latest blogs and news articles showcased by our press.</p>
        </div>
        <div className="grid grid-cols-3 gap-12 px-14 pt-[2.5rem] z-50">
            { featuredNewsData.map((featuredItem) => (
                <FeaturedNewsCard key={featuredItem.id} cardInfo={featuredItem} />
            ))}
        </div>
        <img src={SquaredCrossIcon} className="absolute top-0 right-0 z-40" alt="Cross boxes Icon" />
      </section>
    </>
  )
}
