import React from "react";
import { Link } from "react-router-dom";
import heroBG from "../../Media/hero-bg.png";
import img from "../../Media/hero-right.png";
import leader from "../../Media/leader.svg";
import best from "../../Media/best.webp";
import fall from "../../Media/fall.svg";
import red from "../../Media/red.webp";

const Hero = () => {
  return (
    <div class="bg-dipBlue">
      <section style={{ background: `url(${heroBG})`,backgroundSize:'cover' }}>
        <div
          class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
        >
          <div class="hidden md:block mr-auto place-self-center lg:col-span-6">
            <h1 class="max-w-2xl mb-5 text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-4xl text-white md:pr-64">
            Provide Accurate Payroll, Localized Insurance and Benefits - Without a Local Entity
            </h1>
            
            <a
              href="#"
              class="inline-flex items-center mr-3 justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Watch a Video
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3  text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <div className="flex mt-10 -ml-5">
                <img className="w-[115px] h-[114px]" src={leader} alt="" />
                <img className="w-[115px] h-[114px]" src={best} alt="" />
                <img className="w-[115px] h-[114px]" src={fall} alt="" />
                <img className="w-[115px] h-[114px]" src={red} alt="" />
            </div>
          </div>
          <div class="lg:mt-0 lg:col-span-6 lg:flex">
            <img src={img} alt="mockup" />
          </div>

          <div class="block md:hidden mr-auto place-self-center lg:col-span-6 mt-5">
            <h1 class="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-4xl text-white md:pr-64">
            Provide Accurate Payroll, Localized Insurance and Benefits - Without a Local Entity
            </h1>
            
            <a
              href="#"
              class="inline-flex items-center mr-3 justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Watch a Video
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3  text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <div className="flex mt-10 -ml-5">
                <img className="w-[115px] h-[114px]" src={leader} alt="" />
                <img className="w-[115px] h-[114px]" src={best} alt="" />
                <img className="w-[115px] h-[114px]" src={fall} alt="" />
                <img className="w-[115px] h-[114px]" src={red} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
