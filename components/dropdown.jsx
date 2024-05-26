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
    <>
          <div
            className="listButton"
            onClick={toggleDropdown}
          >
            <h1>Test 1</h1>
            {isOpen ? <IoIosArrowDropdownCircle className="listIcon" size={30} /> : <IoIosArrowDroprightCircle className="listIcon" size={30} />}
          </div>
        <br/>
      {isOpen && (
        <div
          className="optionsContent"
        >
            <div>
              Opción 1
            </div>
            <div>
              Opción 2
            </div>
            <div>
              Opción 3
            </div>
        </div>
      )}
    </>
  );
};

export default Dropdown;
