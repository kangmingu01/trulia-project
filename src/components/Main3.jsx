import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

const Main3 = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold">See how Trulia can help</h2>
      <div className="flex justify-center items-center place-items-center mb-10">
        <div className="w-[300px] mx-4">
          <img
            src="assets/BuyAHome.svg"
            alt="#"
            className="w-[128px] mx-auto"
          />
          <h3 className="text-2xl">Buy a home</h3>
          <p className="w-[250px]">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </p>
          <button className="bg-teal-600 w-[180px] text-white p-2 mt-2 rounded-lg">
            Find a home
          </button>
        </div>
        <div className="w-[300px]  mx-4">
          <img
            src="assets/RentAHome.svg"
            alt="#"
            className="w-[128px] mx-auto"
          />
          <h3 className="text-2xl">Buy a home</h3>
          <p className="w-[250px]">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </p>
          <button className="bg-teal-600 w-[180px] text-white p-2 mt-2 rounded-lg">
            Find a home
          </button>
        </div>
        <div className="w-[300px]  mx-4">
          <img
            src="assets/Neighborhoods.svg"
            alt="#"
            className="w-[128px] mx-auto"
          />
          <h3 className="text-2xl">Buy a home</h3>
          <p className="w-[250px]">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </p>
          <button className="bg-teal-600 w-[180px] text-white p-2 mt-2 rounded-lg">
            Find a home
          </button>
        </div>
      </div>

      <div className="p-7 max-w-[960px] mx-auto">
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

export default Main3;
