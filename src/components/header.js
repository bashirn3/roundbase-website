import React from "react";
import { Link } from "gatsby";

// import Logo from "../images/logos/logo-dark.svg";
import Button from "./button";

const Header = () => {
  const navigation = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Completed Projects", href: "#works" },
  ];
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex py-5 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link to="/">
              {/* <img className="h-8 w-auto" src={Logo} alt="Logo" /> */}
              <p className="text-body-xl">Roundbase Software</p>
            </Link>
          </div>
          <div className="flex flex-row gap-6">
            <div className="md:flex hidden flex-row gap-4 items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-body-sm font-medium text-neutral-700 hover:text-[#506770] px-4">
                  {item.name}
                </a>
              ))}
            </div>
            <Button label="CONTACT US" link="#footer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
