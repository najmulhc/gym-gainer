import React from "react";
import logo2 from "../../img/logofooter.png";

const Footer = () => {
    const now = new Date();
    const year = now.getFullYear();
  return (
    <footer className="footer-bg py-12">
      <div className="container md:container mx-auto">
        <div className="md:grid md:grid-cols-5">
          <img src={logo2} className="col-span-3 mx-auto md:mx-0 w-64" alt="" />
          <div className="mt-6 md:mt-0 md:text-left cursor-pointer">
            <p className="text-white py-1">About our service</p>
            <p className="text-white py-1">Read our blog </p>
          </div>
          <div className="mt-6 md:mt-0 md:text-left cursor-pointer">
            <p className="text-white py-1">Get help</p>
            <p className="text-white py-1">Read FAQs </p>
            <p className="text-white py-1">View all Gyms</p>
            <p className="text-white py-1">Gyms near me</p>
          </div>
        </div>
        <div className="md:flex md:flex-row-reverse items-center justify-between text-white opacity-50 mt-16">
          
            <ul className="md:flex gap-7 items-center">
                <li>Terms of condition</li>
                <li>Privacy policy</li>
                <li>Refund policy</li>
            </ul>
            <p className="text-white opacity-50 ">©GymGainer {year}. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
