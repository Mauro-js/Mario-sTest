'use client'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-w-full mx-auto">
      <div className="w-96 flex text-xl">
      Test 1
        <button
          type="button"
          className="flex"
          onClick={toggleDropdown}
        >
          {isOpen ? <IoIosArrowDown className="my-auto" size={20} /> : <IoIosArrowForward className="my-auto" size={20} />}
        </button>
      </div>
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
