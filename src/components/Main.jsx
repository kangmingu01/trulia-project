import React from "react";
import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";

const Main = () => {
  // 버튼 호버 스타일 변경
  const [hover, setHover] = useState(true);
  const handleBtn = () => {
    setHover(!hover);
  };

  const [btnTab] = useState(["Buy", "Rent", "Sold"]);

  return (
    <div className="m-3 text-center relative ">
      <div className="absolute inset-x-0 top-1/4 ">
        <h1 className="text-5xl font-bold text-white drop-shadow-md shadow-black">
          Discover a place
        </h1>
        <h1 className="text-5xl font-bold text-white drop-shadow-lg shadow-black">
          you'll love to live
        </h1>
        <div className="inline-flex rounded-lg mt-10 border-2" role="group">
          {btnTab.map((btnTab, i) => {
            return (
              <button
                key={i}
                type="button"
                className="py-2 px-4 text-lg font-medium  text-white hover:text-teal-600 hover:bg-white"
              >
                {btnTab}
              </button>
            );
          })}
        </div>

        <div className="flex justify-center justify-items-center items-center m-3">
          <input
            className="w-96 h-14 p-4 bg-slate-100 rounded-l-xl"
            type="text"
            value="Wanju, 45"
          />
          <div
            className="bg-red-500 w-14 h-14 border-2 rounded-r-xl"
            type="submit"
          >
            <AiOutlineSearch className="w-14 h-14 text-white" />
          </div>
        </div>
      </div>
      <img
        src="assets/extraLarge.jpg"
        alt="#"
        className="mt-16 bg-cover bg-no-repeat rounded w-full "
      />
    </div>
  );
};

export default Main;
