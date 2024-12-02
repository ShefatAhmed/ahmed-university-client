import { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="bg-blue-900 py-4">
      <div className="flex justify-between text-white px-6 md:px-20 items-center">
        <div>
          <a href="/" className="font-bold">AH University</a>
        </div>
        <div className="space-x-4 items-center justify-center hidden md:block">
          <a href="" className="hover:bg-blue-600 py-1.5 px-4">
            Contact
          </a>
          <a href="" className="hover:bg-blue-600 py-1.5 px-4">
            About
          </a>
        </div>
        <span
          className={`${isActive ? "hidden" : "block"} md:hidden text-2xl`}
          onClick={() => setIsActive(true)}
        >
          <FiAlignJustify />
        </span>
        <span
          className={`${isActive ? "block" : "hidden"} md:hidden text-2xl`}
          onClick={() => setIsActive(false)}
        >
          <FiX />
        </span>
      </div>
      {isActive && (
        <div className="md:hidden flex flex-col space-y-4 text-white mt-4">
          <a href="" className="hover:bg-blue-600 py-1.5 px-4">
            Home
          </a>
          <a href="" className="hover:bg-blue-600 py-1.5 px-4">
            Contact
          </a>
          <a href="" className="hover:bg-blue-600 py-1.5 px-4">
            About
          </a>
          <a href="" className="hover:bg-blue-600 py-1.5 px-4">
            Gallary
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
