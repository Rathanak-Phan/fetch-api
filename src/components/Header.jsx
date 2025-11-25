import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full p-5 md:px-[50px] bg-gray-500">
      <div className="flex justify-between items-center">
        <div className="text-3xl">Website</div>
        <div>
          <ul className="hidden md:flex gap-[30px] text-2xl">
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Contect us</li>
          </ul>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-3xl flex md:hidden"
        >
          {open ? <FaTimes /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="p-5 md:px-[50px] bg-gray-500">
          <nav className="text-2xl list-none">
            <li className="py-3 bg-gray-500">Home</li>
            <li className="py-3 bg-gray-500">Service</li>
            <li className="py-3 bg-gray-500">About</li>
            <li className="py-3 bg-gray-500">Contect us</li>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
