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

  return (
    <div className="flex justify-between">
      <img src="/vite.svg" alt="Logo" className="w-8 h-8" />
      <div className="relative hidden items-center sm:flex gap-10">
        {navItems.map((item, index) => (
          <div key={index} className="relative">
            <a
              href={item.link}
              className="text-white"
              onClick={() =>
                item.dropdownItems && setIsDropdownOpen(!isDropdownOpen)
              }
            >
              {item.text}
            </a>
            {isDropdownOpen && item.dropdownItems && (
              <div className="absolute top-full bg-white text-black p-2 rounded-lg w-20">
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
      <div className="relative hidden sm:flex gap-2">
        <Btn text="Login" active={false} />
        <Btn text="Register" active={true} />
      </div>
      <button
        type="button"
        className="-my-1 -mr-1 ml-6 flex h-8 w-8 items-center justify-center lg:hidden"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-slate-900">
          <path
            d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default NavBar;
