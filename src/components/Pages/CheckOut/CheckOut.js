import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const location = useLocation();
  const data = location.state?.ser;
  console.log(data);
  const navigate = useNavigate();
  const thankYou = () => {
   navigate("/thanks")
  };
  if (data) {
    return (
      <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:my-12 mb-12 ">
        <img src={data.img} className="w-full " alt="" />
        <div className="px-8 my-auto flex flex-col justify-start">
          <h1 className="text-komola text-left text-4xl font-bold mb-4">
            {data.name}
          </h1>
          <h3 className="text-grey font-mono text-2xl font-semibold text-left">
            ${data.price}
          </h3>
          <p className="text-gray-800 font-normal text-md text-left mt-4 md:pr-20">
            {data.description}
          </p>
          <button
            className="text-white py-2 bg-komola px-6  mt-12 text-2xl w-full"
            onClick={thankYou}
          >
            <Link to="/">Save a spot</Link>
          </button>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <h1 className="text-komola text-5xl text-center font-bold my-12">
          Add something to the cart to check that out :)
        </h1>
      </main>
    );
  }
};

export default CheckOut;
