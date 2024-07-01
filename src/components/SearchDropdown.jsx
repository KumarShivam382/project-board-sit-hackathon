import React, { useState } from "react";

const frameworks = [
  "React",
  "Vue",
  "Angular",
  "Svelte",
  "Next",
  "Gatsby",
  "Nuxt",
  "Ember",
  "Backbone",
];

function SearchDropdown({ selectedFrameworks, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (framework) => {
    onSelect(framework);
  };

  return (
    <div className="relative">
      <button
        id="dropdownCheckboxButton"
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Select Framework
        <svg
          className={`w-2.5 h-2.5 ml-3 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownDefaultCheckbox"
        className={`${
          isOpen ? "block" : "hidden"
        } absolute z-10 right-0 mt-1 w-full sm:w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600`}
      >
        <ul
          className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownCheckboxButton"
        >
          {frameworks.map((framework) => (
            <li key={framework}>
              <div className="flex items-center">
                <input
                  id={`checkbox-${framework}`}
                  type="checkbox"
                  checked={selectedFrameworks.includes(framework)}
                  onChange={() => handleSelect(framework)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor={`checkbox-${framework}`}
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {framework}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchDropdown;
