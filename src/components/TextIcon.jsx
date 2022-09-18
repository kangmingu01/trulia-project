import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const TextIcon = () => {
  return (
    <div>
      <div className="p-7 max-w-[960px] mx-auto text-center">
        <h2 className="font-bold text-xl">Check out a neighborhood</h2>
        <div className="flex justify-center items-center">
          <div className="flex justify-center justify-items-center items-center m-3">
            <input
              className="w-96 h-14 p-4 bg-slate-100 rounded-l-xl"
              type="text"
              placeholder="Search for City, Neighborhood, Zip, Country, Scho"
            />
            <div
              className="bg-red-500 w-14 h-14 border-2 rounded-r-xl"
              type="submit"
            >
              <AiOutlineSearch className="w-10 h-10 text-white m-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row text-xl my-8 justify-center items-center py-8 h-8 text-blue-800 font-bold">
        <div>discover</div>
        <img src="/assets/area.svg" alt="" className="w-8 " />
        <div>a place</div>
        <img src="/assets/house.svg" alt="" className="w-8" />
        <div>you'll love</div>
        <img src="/assets/love.svg" alt="" className="w-8" />
        to live
      </div>
    </div>
  );
};

export default TextIcon;
