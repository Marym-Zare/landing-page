import React from "react";
import brand from "../assets/svgs/brand.svg"

const Footer = () => {
  return (
    <div className="px-20 pb-20">
      <div className="mt-[180px]">
        <div className="py-16 px-[70px] bg-[#FFFFFF] rounded-[2616px] flex items-center text-right justify-between text-[#000000]">
          <div className="flex">
            <i className="text-[#000000] text-3xl pr-4 bi bi-instagram"></i>
            <i className="text-[#000000] text-3xl pr-4 bi bi-telegram"></i>
            <i className="text-[#000000] text-3xl pr-4 bi bi-whatsapp"></i>
          </div>
          <p className="text-2xl font-semibold pl-4">
            سیستم هوشمند اعلان حریق،یک اقدام کوچک اما با اهمیت بزرگ یک اقدام
          </p>
          <div className="border-l-2 text-black h-24"></div>
          <img className="w-[84.21px] h-[100px] pl-4" src={brand} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
