"use client";

import type React from "react";
import Image from "next/image";
import { IProps } from "./types";

export const MaterialTile: React.FC<IProps> = ({
  title,
  subtitle,
  imageURL,
  cardType = "mobile",
}) => {
  const getBackgroundGradient = () => {
    switch (cardType) {
      case "shapes":
      case "chart":
      default:
        return "dark:bg-[#1c1b1d] bg-[#F8F1F6]";
    }
  };

  return (
    <div
      className={`group rounded-2xl h-[380px] sm:h-[420px] md:h-[392px] overflow-hidden transition-all duration-300 cursor-pointer hover:bg-[#DBDBF5] dark:hover:bg-[#45455a] ${getBackgroundGradient()}`}
    >
      <div className="relative w-full h-60 overflow-hidden">
        {imageURL ? (
          <Image
            src={imageURL}
            alt={title || "Tile image"}
            className="w-full max-h-[200px] object-cover transition-transform duration-300 rounded-b-[24px]"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-[24px] text-gray-300 dark:text-white/20">
              📱
            </div>
          </div>
        )}
      </div>
      <div className="px-4 sm:px-6">
        <h2 className="text-[24px] font-medium mt-[-22px] sm:mt-[-18px] leading-tight mb-2 text-gray-900 dark:text-white transition-colors duration-300">
          {title || "Default Title"}
        </h2>
        <p className="text-[14px] sm:text-[16px] leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          {subtitle ||
            "Default subtitle description that provides more context about the content."}
        </p>
      </div>
    </div>
  );
};
