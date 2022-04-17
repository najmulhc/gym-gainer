import React from "react";
import trainer from "../../../img/trainer.png";
import topbanner from "../../../img/topbanner.jpg";
const Topbanner = () => {
  return (
    <div className="relative">
      <img src={topbanner} alt="" />
      <div className="bg-orange-600 bg-opacity-20 absolute top-0  w-full left-0">
        <div className="grid grid-cols-1 md:grid-cols-2 container gap-4 mx-auto  md:h-[664px]  ">
          <div className="flex flex-col justify-center md:items-start items-center">
            <h1 className="text-5xl md:text-7xl font-bold text-grey  m-0 p-0 md:text-left">
              Get the best trainer for your muscle.
            </h1>
            <button className="bg-komola text-white py-4 px-8 text-xl font-semibold mt-8  ">
              View services
            </button>
          </div>
          <div className="h-[334px] md:h-[664px] px-4  mx-auto md:mx-0">
            <img src={trainer} className="ml-auto h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbanner;
