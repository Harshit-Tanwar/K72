import React, { useState } from "react";
import { createContext } from "react";

export const NavbarContext = createContext();
const NavContext = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <NavbarContext.Provider value={[navOpen, setNavOpen]}>
      <div>{children}</div>
    </NavbarContext.Provider>
  );
};

export default NavContext;
