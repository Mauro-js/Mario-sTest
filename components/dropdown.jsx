'use client'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-w-full">
        <button
          type="button"
          className="flex w-1/2 mx-auto justify-between font-blod bg-cyan-700 rounded-lg "
          onClick={toggleDropdown}
        >
          <span className="font-blod mx-auto my-auto text-3xl">Test 1</span>
          {isOpen ? <IoIosArrowDropdownCircle className="my-auto mx-4" size={20} /> : <IoIosArrowDroprightCircle className="my-auto" size={20} />}
        </button>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1 flex flex-col" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-lg hover:bg-gray-100"
              role="menuitem"
            >
              Opción 1
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
            >
              Opción 2
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
            >
              Opción 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
