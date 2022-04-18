import React from "react";

const WhyMe = () => {
  return (
    <section className="mt-8 container mx-auto">
      <h1 className="text-4xl text-center font-bold text-komola mb-4 ">
        Why me?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 shadow-md   bg-komola">
              <h1 className="text-[65px] font-bold text-white text-center">400+</h1>
              <h2 className="text-white text-center font-semibold text-[32px]">Happy customers</h2>
          </div>
          <div className="p-6 shadow-md   bg-komola ">
              <h1 className="text-[65px] font-bold text-white text-center">7+</h1>
              <h2 className="text-white text-center font-semibold text-[32px]">Years of experience</h2>
          </div>
          <div className="p-6 shadow-md   bg-komola">
              <h1 className="text-[65px] font-bold text-white text-center">20+</h1>
              <h2 className="text-white text-center font-semibold text-[32px]">Gyms worked with</h2>
          </div>
      </div>
    </section>
  );
};

export default WhyMe;
