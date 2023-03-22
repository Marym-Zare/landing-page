import React from "react";
import brand from "../assets/svgs/brand.svg";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex sm:px-20 px-4 sm:py-6 pt-9 pb-6 justify-between items-center border-b border-solid border-[#FFFFFFCC]">
      <button className="sm:h-[54px] h-11 rounded-[36px] text-white sm:text-lg text-sm font-normal border border-solid border-[#FFFFFF] pb-1 px-6 mt-1">
        {t("header.login")}
      </button>
      <img
        className="sm:w-[45.94px] w-[26.67px] sm:h-[54px] h-8"
        src={brand}
        alt=""
      />
      <button className="sm:h-[54px] h-11 rounded-[64px] text-white sm:text-lg text-sm font-normal border border-solid border-[#FFFFFF] pb-1 px-6 mt-1">
        {t("header.order-fire-monitor")}
      </button>
    </div>
  );
};

export default Header;
