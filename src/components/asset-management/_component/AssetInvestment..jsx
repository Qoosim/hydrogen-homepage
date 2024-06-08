import React from "react";

export const AssetInvestmentCard = ({ cardInfo }) => {
  return (
    <>
      <section>
        <div className="flex justify-between items-center w-full">
          <div className="w-[25%]">
            <img src={cardInfo.squareLeftImg} alt="Square Cross Logo" />
          </div>
          <div className="flex flex-col items-center mb-3 w-[50%]">
            <span className="text-[#646160] text-[0.8rem] lg:text-[1rem] mb-3 uppercase">
              {cardInfo.assetTitleTop}
            </span>
            <span className="text-[#f0f1f0] text-[1.3rem] lg:text-[2rem] -mb-1">
              {cardInfo.assetTitleBtw}
            </span>
            <span className="text-[#848181] text-[1.2rem] lg:text-[2rem]">
              {cardInfo.assetTitleBelow}
            </span>
          </div>
          <div className="w-[25%]">
            <img src={cardInfo.squareRightImg} alt="Square Cross Logo" />
          </div>
        </div>

        <div className="flex justify-between items-end pl-14 w-full mb-[7rem]">
          <div className="flex items-end gap-[1.5rem]">
            <div className="w-[80%]">
              <img
                src={cardInfo.transCard}
                alt="Transaction Card"
                className=""
              />
            </div>
            <div className="">
              <div className="w-[70%]">
                <p className="text-[#f0f1f0] text-[0.9rem] lg:text-[1.25rem]">
                  {cardInfo.transCardTopText}
                </p>
                <p className="text-[#848181] text-[0.875rem]">
                  {cardInfo.transCardBottomText}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[20rem]">
            <img src={cardInfo.paymentCard} alt="Payment Card" className="" />
          </div>
        </div>
      </section>
    </>
  );
};
