import React from "react";
import picture from "../../Media/march.png";

const Every = () => {
  return (
    <div className="text-4xl  pb-24 bg-purple-200">
      <h2 className="text-primary-900 font-bold text-center mt-5">
        Everything you need to run a <br /> unified and accurate payroll
      </h2>
      <div className="flex items-center flex-col-reverse md:flex-row justify-center w-10/12 mx-auto text-black h-full">

        <div className="my-10">
        <div className="flex mb-10 bg-white md:w-9/12 px-2 py-4 shadow-lg border rounded-lg">
          <p className="h-full px-2 py-2 rounded-full bg-primary-800 text-white mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </p>
          <div>
            <h3 className="text-xl font-bold ">
              Zero-error multi-country payroll in a single click
            </h3>
            <p className="text-lg ">
              A platform to manage reimbursements, view payslips, track expenses
              and offer benefits.
            </p>
          </div>
        </div>


        <div className="flex mb-10">
          <p className="h-full px-2 py-2 rounded-full bg-primary-800 text-white mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </p>
          <div>
            <h3 className="text-xl font-bold md:w-8/12">
              Zero-error multi-country payroll in a single click
            </h3>
            <p className="text-lg md:w-8/12">
              A platform to manage reimbursements, view payslips, track expenses
              and offer benefits.
            </p>
          </div>
        </div>


        <div className="flex mb-10">
          <p className="h-full px-2 py-2 rounded-full bg-primary-800 text-white mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </p>
          <div>
            <h3 className="text-xl font-bold md:w-8/12">
              Zero-error multi-country payroll in a single click
            </h3>
            <p className="text-lg md:w-8/12">
              A platform to manage reimbursements, view payslips, track expenses
              and offer benefits.
            </p>
          </div>
        </div>


        <div className="flex mb-10">
          <p className="h-full px-2 py-2 rounded-full bg-primary-800 text-white mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </p>
          <div>
            <h3 className="text-xl font-bold md:w-8/12">
              Zero-error multi-country payroll in a single click
            </h3>
            <p className="text-lg md:w-8/12">
              A platform to manage reimbursements, view payslips, track expenses
              and offer benefits.
            </p>
          </div>
        </div>
        </div>

        <div className="">
          <img className="lg:w-[1000px]" src={picture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Every;
