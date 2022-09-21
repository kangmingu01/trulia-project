import React from "react";
import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";

const Main = () => {
  // input
  const [input, setInput] = useState("");

  // 랜덤으로 나오게 -> 나중에 ㄱ
  // const [input, setInput] = useState([
  //   "Wanju, 45",
  //   "San Francisco, CA",
  //   "Boston, MA",
  //   "Atlanta, GA",
  //   "Scottsdale, AZ",
  //   "Oakland, CA",
  // ])

  // function shuffleArray(array) {
  //   array.sort(() => Math.random() - 0.5);
  //   console.log(array);
  // }

  // shuffleArray(input);

  const inputChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const [btnTab] = useState(["Buy", "Rent", "Sold"]);

  return (
    <div className="m-3 text-center relative ">
      <div className="absolute inset-x-0 top-1/4 ">
        <h1
          style={{ textShadow: "0 0px 10px rgb(0 0 0)" }}
          className="text-5xl font-bold text-white  md:text-4xl"
        >
          Discover a place
        </h1>
        <h1
          style={{ textShadow: "0 0px 10px rgb(0 0 0)" }}
          className="text-5xl font-bold text-white  md:text-4xl"
        >
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
            // value="Wanju, 45"
            value={input}
            onChange={inputChange}
          />
          <div
            className="bg-red-500 w-14 h-14 border-2 rounded-r-xl"
            type="submit"
          >
            <AiOutlineSearch className="w-14 h-14 text-white" />
          </div>
        </div>
      </div>

      {/* 이미지가 반응형에 따라 늘어나고 줄어들고 해야하는데 모르겠다 */}
      <div className="w-full mt-16 bg-cover">
        <img
          src="assets/extraLarge.jpg"
          alt="#"
          className=" bg-center object-cover  lg:object-[left_center]
          w-full rounded  max-h-[800px] lg:h-[512px] md:h-[485px] sm:h-[442px]"
        />
      </div>
    </div>
  );
};

export default Main;
