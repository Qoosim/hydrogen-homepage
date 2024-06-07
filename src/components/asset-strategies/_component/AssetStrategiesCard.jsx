import React from "react";

export const AssetStrategiesCard = ({ cardInfo }) => {
  return (
    <>
      <section>
        <div className="flex justify-between items-center w-full">
          <div className="w-[25%]">
            <img src={cardInfo.squareLeftImg} alt="Square Cross Logo" />
          </div>
          <div className="flex flex-col items-center gap-3 w-[50%]">
            <span className="text-[#646160] text-[0.9rem] uppercase">
              {cardInfo.assetTitleTop}
            </span>
            <span className="text-[#f0f1f0] text-[1.8rem]">
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
                <p className="text-[#f0f1f0] text-[1.2rem]">
                  {cardInfo.transCardTopText}
                </p>
                <p className="text-[#848181] text-[0.8rem]">
                  {cardInfo.transCardBottomText}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[20rem]">
            <img src={cardInfo.paymentCard} alt="Payment Card" className="" />
          </div>
        </div>
      </section>
    </>
  );
};