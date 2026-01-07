import React from "react";
import useTheme from "@/hooks/useTheme";

const Loading = () => {
  const { isDark } = useTheme();
  return (
    <div
      className={`min-h-screen py-8 px-1 md:3 lg:px-8 transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden animate-pulse ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div
                className={`w-full h-48 ${
                  isDark ? "bg-gray-700" : "bg-gray-200"
                }`}
              ></div>
              <div className="p-6">
                <div
                  className={`h-6 rounded mb-3 ${
                    isDark ? "bg-gray-700" : "bg-gray-200"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
