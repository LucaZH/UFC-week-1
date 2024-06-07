import { useState } from "react";
import NavItem from "../types/NavItem";
import Btn from "./ui/Btn";

const navItems: NavItem[] = [
  { text: "Services", link: "#" },
  {
    text: "Pricing",
    link: "#",
    dropdownItems: [
      { text: "Option 1", link: "#" },
      { text: "Option 2", link: "#" },
    ],
  },
  { text: "Drones", link: "#" },
  { text: "Contact us", link: "#" },
  { text: "About us", link: "#" },
];

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {" "}
      <nav className="flex justify-between">
        <div className="basis-1/4">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 basis-1/4" />
          <p className="text-white font-black -ml-2">DRONE</p>
        </div>
        <div className="relative hidden items-center basis-1/2 justify-center sm:flex gap-8 ">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <a
                href={item.link}
                className="text-white font-semibold hover:text-neutral-400"
                onClick={() =>
                  item.dropdownItems && setIsDropdownOpen(!isDropdownOpen)
                }
              >
                {item.text}
                {item.dropdownItems && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-4 h-4 fill-white ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                )}
              </a>
              {isDropdownOpen && item.dropdownItems && (
                <div className="absolute top-full bg-white text-zinc-700 p-2 rounded-lg w-20">
                  {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                    <a
                      key={dropdownIndex}
                      href={dropdownItem.link}
                      className="block py-1"
                    >
                      {dropdownItem.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="relative hidden sm:flex gap-2 basis-1/4 justify-end ">
          <Btn text="Login" active={false} />
          <Btn text="Register" active={true} />
        </div>
        <button
          type="button"
          className="-my-1 -mr-1 ml-6 flex h-8 w-8 justify-end items-center lg:hidden md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            viewBox="0 0 24 24"
            className={`h-6 w-6 stroke-white ${isOpen ? "hidden" : "flex"}`}
          >
            <path
              d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
          </svg>
          <svg
            className={`h-4 w-6 stroke-white/85 ${isOpen ? "flex" : "hidden"}`}
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.7929 7.49998L1.14645 1.85353L1.85356 1.14642L7.50001 6.79287L13.1465 1.14642L13.8536 1.85353L8.20711 7.49998L13.8536 13.1464L13.1465 13.8535L7.50001 8.20708L1.85356 13.8535L1.14645 13.1464L6.7929 7.49998Z"
              fill="#000000"
            />
          </svg>
        </button>
      </nav>
      <div
        className={`absolute right-10 rounded-lg w-1/3 z-50 md:hidden items-center py-6 gap-2 ${
          isOpen
            ? "flex flex-col bg-white/50 backdrop-blur-md text-white"
            : "hidden"
        }`}
      >
        <div className="relative items-center basis-1/2 justify-center sm:flex gap-8 ">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <a
                href={item.link}
                className="text-white font-semibold hover:text-neutral-400"
                onClick={() =>
                  item.dropdownItems && setIsDropdownOpen(!isDropdownOpen)
                }
              >
                {item.text}
              </a>
            </div>
          ))}
        </div>
        <div className="relative hidden sm:flex gap-2 basis-1/4 justify-end ">
          <Btn text="Login" active={false} />
          <Btn text="Register" active={true} />
        </div>
      </div>
    </>
  );
}

export default NavBar;
