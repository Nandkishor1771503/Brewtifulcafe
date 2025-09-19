import React from "react";
import latte from "../images/Latte.png";
import espresso from "../images/Esspreso.png";
function Hero() {
  return (
    <>
      <div className="mobiledesign md:hidden p-8 bg-[#cc9f78] text-[#063d52]">
        <div className="flex items-center justify-center">
          <img
            src={latte}
            alt=""
            className=" w-[60%] md:p-14 p-5 rounded-4xl shadow-2xl"
          />
          <h1 className="text-3xl font-bold ml-8 mt-16"> Fueling Your Day </h1>
        </div>
        <div className="flex items-center justify-center gap-10 my-5">
          <h1 className="text-3xl leading-relaxed font-thin my-2 ml-7 ">
            {" "}
            In A Brewtiful Way{" "}
          </h1>

          <img
            src={espresso}
            alt=""
            className=" w-[60%] md:p-14 p-5 rounded-4xl shadow-2xl"
          />
        </div>
      </div>

      {/* laptop design */}

      <div className="relative hidden md:flex md:flex-row flex-col gap-[35%] p-5 pl-10 w-full h-[75vh] bg-[#cc9f78] text-[#063d52]">
        <img
          src={latte}
          alt=""
          className=" w-[30%] p-14 rounded-4xl shadow-2xl"
        />
        <div className="absolute top-44 right-[39.4%]">
          <h1 className="text-5xl font-bold my-2 mr-4"> Fueling Your Day </h1>
          <h1 className="text-5xl font-thin my-2 ml-10 -mr-10">
            {" "}
            In A Brewtiful Way{" "}
          </h1>
        </div>
        <img
          src={espresso}
          alt=""
          className=" w-[30%] p-14 rounded-4xl shadow-2xl"
        />
      </div>
    </>
  );
}

export default Hero;
