import React, { useState } from "react";
import ArrowRightRed from "../../assets/arrow-right-red.svg";
import NextBtnArrow from "../../assets/next-btn-arrow.svg";
import PrevBtnArrow from "../../assets/prev-btn-arrow.svg";
import { products } from "../../constants";

export const PortfolioManagement = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextBtn = () => {
    if (activeIndex < products.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
    // setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrevBtn = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
    // setActiveIndex(
    //   (prevIndex) => (prevIndex - 1 + products.length) % products.length
    // );
  };

  const activeProduct = products[activeIndex];

  return (
    <>
      <section className="w-full h-full font-dmSans bg-[#130A0A] pt-[6rem]">
        <div className="flex justify-between gap-32 px-14">
          <div className="flex-1 flex flex-col items-start gap-6 pt-[3rem]">
            <span className="text-[1.563rem] font-semibold text-[#e2d9d8] whitespace-nowrap">
              {activeProduct.title}
            </span>
            <p className="text-[0.875rem] text-slate-300">
              {activeProduct.text}
            </p>
            <button className="flex items-center gap-1 bg-[#fefffe] w-fit py-1.5 px-5 rounded-[0.25rem]">
              <span className="text-red-500 text-sm font-medium">
                {activeProduct.learMore}
              </span>
              <img src={ArrowRightRed} alt="Arrow Right" />
            </button>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-1.5">
                {products.map((_, index) => (
                  <div
                    key={index}
                    className={`size-1.5 rounded-full ${
                      index === activeIndex ? "bg-red-600" : "bg-white"
                    }`}
                  ></div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`size-10 flex justify-center items-center rounded-full bg-[#eb2329] border cursor-pointer ${
                    activeIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handlePrevBtn}
                >
                  <img src={PrevBtnArrow} alt="Previous Arrow Button" />
                </div>
                <div
                  className={`size-10 flex justify-center items-center rounded-full bg-[#eb2329] border cursor-pointer ${
                    activeIndex === products.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handleNextBtn}
                >
                  <img src={NextBtnArrow} alt="Next Arrow Button" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <img src={activeProduct.img} alt="Phone" />
          </div>
        </div>
      </section>
    </>
  );
};
