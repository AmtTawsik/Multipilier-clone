import React from "react";
import picture from "../../Media/march.svg";

const Feature = () => {
  return (
    <div className="flex items-center flex-col-reverse md:flex-row justify-center w-10/12 mx-auto text-black h-full py-24">
      <div className="">
        <h2 className="text-4xl mb-5 text-primary-900 font-bold">Run payroll for your global workforce</h2>
        <div className="flex mb-5 text-lg">
          <p className="mr-2 text-primary-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </p>
          <p className="md:md:w-8/12 text-justify">
          Ensure a quick and timely payroll process—save costs by removing the need for multiple providers across different countries
          </p>
        </div>
        <div className="flex mb-5 text-lg">
          <p className="mr-2 text-primary-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </p>
          <p className="md:md:w-8/12 text-justify">
          Provide locally competitive, best-in-class, homogenous benefits, and insurance
          </p>
        </div>
        <div className="flex mb-5 text-lg">
          <p className="mr-2 text-primary-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </p>
          <p className="md:md:w-8/12 text-justify">
          Add freelancers to the platform, allow them to raise invoices and expenses through Multiplier and clear them in their preferred currencies in a matter of minutes
          </p>
        </div>
        <h3 className="text-2xl font-bold">Pay your freelancer invoices on the go</h3>
        <p className="text-xl text-gray-600 md:w-8/12 text-justify">Add freelancers to the platform and allow them to raise invoices and expenses, through Multiplier. Clear them all in their preferred currencies in a matter of minutes.</p>
      </div>
      <div className="">
        <img className="lg:w-[1000px]" src={picture} alt="" />
      </div>
    </div>
  );
};

export default Feature;
