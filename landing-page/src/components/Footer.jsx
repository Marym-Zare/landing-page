import React from "react";
import brand from "../assets/svgs/brand.svg"

const Footer = () => {
  return (
    <div className="sm:px-20 px-[16px] sm:pb-20 pb-8">
      <div className="sm:mt-[180px]">
        <div className="sm:py-16 py-[16px] sm:px-[70px] px-[16px] bg-[#FFFFFF] rounded-[2616px] flex flex-col-reverse sm:flex-row items-center text-center sm:text-right justify-between text-[#000000]">
          <div className="flex">
            <i className="text-[#000000] text-base sm:text-3xl pr-4 bi bi-instagram"></i>
            <i className="text-[#000000] text-base sm:text-3xl pr-4 bi bi-telegram"></i>
            <i className="text-[#000000] text-base sm:text-3xl pr-4 bi bi-whatsapp"></i>
          </div>
          <p className="sm:text-2xl text-xs font-semibold pl-4 sm:my-0 my-[16px]"> 
            سیستم هوشمند اعلان حریق،یک اقدام کوچک اما با اهمیت بزرگ یک اقدام
          </p>
          <div className="border-l-2 border-black h-24 hidden sm:block"></div>
          <div className="border-b-[1px] border-black h-2 w-10 sm:hidden block"></div>
          <img className="w-[20px] h-[24px] sm:w-[84.21px] sm:h-[100px] sm:pl-4" src={brand} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
