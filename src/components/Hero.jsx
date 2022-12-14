import React from "react";
import Lottie from "lottie-react";
import Learning from "../lottie-json/learning.json";
import Markets from "./Markets";

const Hero = () => {
  return (
    <div>
      <section className="min-h-60 relative bg-hero-background bg-cover lg:px-6 bg-gray-700">
        <div className=" mx-auto max-w-7xl p-1 lg:p-2 flex lg:justify-between flex-col-reverse lg:flex-row items-center">
          <div className="text-center lg:text-left max-w-lg w-full">
            <h1 className="text-3xl lg:text-4xl font-semibold mb-6 text-gray-300">
              <span className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-teal-500">
                Dev Tools
              </span>
              <br /> for developer's to solve their Problems
            </h1>

            <p className="font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-gray-500">
              Here you find many kinds of Navbar, Cards and Images for developer
              uses. Here you get all source code for develop an navbar, cards
              and much more. Don't just copy and past those codes, But also try
              to understand those codes.
            </p>

            <button className="transition ease-in hover:-translate-y-1 hover:scale-110 duration-150 px-8 py-2 mt-8 font-bold text-1xl rounded-full text-pink-50 tracking-wide bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
              Join Slack
            </button>
          </div>
          <div className="w-full">
            <Lottie animationData={Learning} />
          </div>
        </div>
      </section>
      <Markets />
    </div>
  );
};

export default Hero;
