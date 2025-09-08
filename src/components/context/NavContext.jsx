import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useLocation } from "react-router-dom";

export const NavbarContext = createContext();
export const NavbarColorContext = createContext();
const NavContext = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [navColor, setnavColor] = useState("white");

  const location = useLocation().pathname;
  useEffect(() => {    
    if (location == "/projects" || location == "/agence") {
      setnavColor("black");
    } else {
      setnavColor("white");
    }
  }, [location])
  return (
    <NavbarContext.Provider value={[navOpen, setNavOpen]}>
      <NavbarColorContext value={[navColor, setnavColor]}>
        {children}
      </NavbarColorContext>
    </NavbarContext.Provider>
  );
};

export default NavContext;
