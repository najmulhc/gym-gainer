import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const location = useLocation();
  const data = location.state?.ser;
  console.log(data);
  if (data) {
    return (
      <div className="container mx-auto flex my-12 ">
        <img src={data.img} className="w-1/2  " alt="" />
        <div className="pl-8 my-auto">
          <h1 className="text-komola text-left text-4xl font-bold mb-4">{data.name}</h1>
          <h3 className="text-grey font-mono text-2xl font-semibold text-left">${data.price}</h3>
            <p className="text-gray-800 font-normal text-md text-left mt-4 pr-20">{data.description}</p>
            <button className="text-white p-2 bg-komola w-full mt-12 text-2xl ">
                <Link to="/" >
                  Place Order
                </Link>
              </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-komola text-5xl text-center font-bold my-12">
          Add something to the cart to check that out :)
        </h1>
      </div>
    );
  }
};

export default CheckOut;
