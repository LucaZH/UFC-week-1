import { useState } from "react";
import NavItem from "../../types/NavItem";
import Btn from "./Btn";

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
    <div className="flex justify-between p-5">
      <img src="/vite.svg" alt="Logo" className="w-8 h-8" />
      <div className="relative flex gap-10 items-center">
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
      <div className="flex gap-2">
        <Btn text="Login" active={false} />
        <Btn text="Register" active={true} />
      </div>
    </div>
  );
}

export default NavBar;
