'use client'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useState } from 'react';

const Dropdown = ({test}) => {
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
            <h1 className="no-select">{test.name}</h1>
            {isOpen ? <IoIosArrowDropdownCircle className="listIcon" size={30} /> : <IoIosArrowDroprightCircle className="listIcon" size={30} />}
          </div>
        <br/>
      {isOpen && (
        <div
          className="optionsContent"
        >
          {
            test.tests.map(part => <div className="no-select">{part.name}</div>)
          }
        </div>
      )}
    </>
  );
};

export default Dropdown;
