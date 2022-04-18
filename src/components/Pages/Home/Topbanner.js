import React from "react";
import trainer from "../../../img/trainer.png";
import { Link } from "react-router-dom";
import topbanner from "../../../img/topbanner.jpg";
const Topbanner = () => {
  return (
    <div className="relative">
      <img src={topbanner} className="h-full " alt="" />
      <div className="bg-orange-600 bg-opacity-20 absolute top-0  w-full left-0 h-full">
        <div className="grid md:grid-cols-2 container gap-4 mx-auto h-full ">
          <div className="flex flex-col justify-center md:items-start h-full my-auto items-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white m-0 p-0 md:text-left">
              Get the best trainer for your muscle.
            </h1>
            <button className="bg-komola text-white py-4 px-8 text-xl font-semibold mt-8 ">
             <Link to='#service'> View services</Link>
            </button>
          </div>
          <div className="px-4 hidden md:block mx-auto md:mx-0">
            <img src={trainer} className="ml-auto h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbanner;
