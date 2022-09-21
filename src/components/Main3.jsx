import React, { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";

const Main3 = () => {
  const [input, setInput] = useState("");

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const cards = [
    {
      img: "assets/BuyAHome.svg",
      descripton:
        "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
      btn: "Find a Home",
    },
    {
      img: "assets/RentAHome.svg",
      descripton:
        "With 35+ filters and custom keyword search, Trulia can help you easily find a home or apartment for rent that you'll love.",
      btn: "Find a rental",
    },
    {
      img: "assets/Neighborhoods.svg",
      descripton:
        "With more neighborhood insights than any other real estate website, we've captured the color and diversity of communities.",
      btn: "Learn more",
    },
  ];

  return (
    // 동적인 UI 만드는 법
    <div className="text-center mt-20 ">
      <h2 className="text-4xl font-bold mx-auto md:max-w-[260px] ">
        See how Trulia can help
      </h2>
      <div className="flex lg:justify-around justify-center  items-center place-items-center mb-10 md:flex-col">
        {cards.map((cards, i) => {
          return (
            <div
              className="w-[300px] mx-4 md:mt-6 lg:w-[225px] md:w-[255px]"
              key={i}
            >
              <img src={cards.img} alt="#" className="w-[128px] mx-auto" />
              <h3 className="text-2xl">Buy a home</h3>
              <p className="w-[260px] lg:w-[225px] md:w-[255px] mx-auto">
                {cards.descripton}
              </p>
              <button className="bg-teal-600 w-[180px] text-white p-2 mt-2 rounded-lg">
                {cards.btn}
              </button>
            </div>
          );
        })}
      </div>

      <div className="p-7 max-w-[960px] mx-auto">
        <h2 className="font-bold text-xl">Check out a neighborhood</h2>
        <div className="flex justify-center items-center">
          <div className="flex justify-center justify-items-center items-center m-3">
            <input
              className="w-96 h-14 p-4 bg-slate-100 rounded-l-xl"
              type="text"
              value={input}
              onChange={inputChange}
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

      <div className="flex text-2xl gap-x-0.5 my-8 justify-center items-center text-blue-800 font-bold">
        <div>discover</div>
        <img src="/assets/location.png" alt="" className="w-10 " />
        <div>a place</div>
        <img src="/assets/house.png" alt="" className="w-10" />
        <div>you'll love</div>
        <img src="/assets/heart.png" alt="" className="w-10" />
        <div>to live</div>
      </div>
    </div>
  );
};

export default Main3;
