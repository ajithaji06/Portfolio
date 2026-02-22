import { Menu, X } from "lucide-react";
import React, { useState } from "react";
 import BlackWhite from "./BlackWhite";
const NavItems = [
  { name: "HOME", href: "#hero" },
  { name: "ABOUT", href: "#about" },
  { name: "PROJECTS", href: "#project" },
  { name: "SKILLS", href: "#skills" },
  { name: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [ismenu, setismenu] = useState(false);

  return (
    
    <nav className="w-full fixed top-0 left-0 z-20 bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo / Brand */}
        <a
          href="#hero"
          className="flex flex-col text-primary font-bold md:text-3xl text-lg leading-tight"
        >
          <span className="text-glow text-foreground animate-pulse">AJITH TS</span>
          <span className="text-sm md:text-base text-muted-foreground">
          SOFTWARE DEVELOPER
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {NavItems.map((item, index) => (
            <a
              href={item.href}
              key={index}
              className="font-medium underline hover:text-primary text-glow transition-all duration-200"
            >
              {item.name}
            </a> 
          ))}
        </div>
    
        <div>
            <BlackWhite className="m-3 ml-2 p-4"/>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50"
          onClick={() => setismenu(!ismenu)}
        >
          {ismenu ? <X size={34} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen  bg-primary text-foreground  flex flex-col justify-center items-center gap-6 z-40 transform transition-transform duration-300 ${
          ismenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {NavItems.map((item, index) => (
          <a
            href={item.href}
            key={index}
            onClick={() => setismenu(false)}
            className="text-3xl underline  font-semibold hover:text-foreground transition-colors"
          >
            {item.name}
          </a>
        ))}
          <BlackWhite className="m-3 ml-2 p-4"/>
      </div>
    
    </nav>
  );
};

export default Navbar;
