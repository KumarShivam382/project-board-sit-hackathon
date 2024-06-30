import React from "react";

import CardOwners from "./CardOwners";
import CardFrameworks from "./CardFrameworks";

export default function Card({ title, owners, frameworks, rating, reviews }) {
  return (
    <div className="mb-5">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="">
          <div className="m-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white">
            {title}
          </div>
          <div className="flex justify-center">
            <div className="mr-1">Owners:</div>
            <div>
              <CardOwners owners={owners} />
            </div>
          </div>
          <div className="flex flex-wrap m-3 p-2 space-x-2">
            {frameworks.map((framework, index) => (
              <CardFrameworks key={index} FrameworkTitle={framework} />
            ))}
          </div>

          <div className="flex items-center justify-between mt-3 mb-5">
            <span className="flex items-center text-black-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              <h6 className="mr-2 font-semibold text-md">{rating}</h6>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </span>
            <a href="#" className="flex underline">
              <h6 className="mr-1 font-md text-sm">{reviews}</h6>
              <h6 className="mr-1 font-md text-sm">Reviews</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
