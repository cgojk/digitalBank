
import logo from "../images/logo-light.svg";
import logodark from "../images/logo-dark.svg";


import { useEffect,useState } from "react";
import iconhamburguer from "../images/icon-hamburger.svg";

import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import React from "react";

export default function Navigation() {

const [menuOpen, setMenuOpen] = useState(false);

// useEffect(() => {
//   if (menuOpen) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "";
//   }

//   return () => {
//     document.body.style.overflow = "";
//   };
// }, [menuOpen]);

 function handleOverlayClick() {
    setMenuOpen(false);
  }

  return (
<>
<div className={` overlay ${menuOpen ? "active" : ""}`} 
onClick={handleOverlayClick}>

</div>
    <header className="header container">
      <div className="header__inner">

        <Link to="/home" className="nav-logo-link">
          <img src={logo} className="nav-logo" alt="Bank logo" />
        </Link>

        <nav
          className={`navigation ${menuOpen ? "open" : ""}`}
          aria-label="homepage Navigation"
        >

          <ul className="nav__list">

            <li className="nav__items">
              <NavLink to="/home" className="nav__items__links">
                Home
              </NavLink>
            </li>

            <li className="nav__items">
              <NavLink to="/about" className="nav__items__links">
                About Us
              </NavLink>
            </li>

            <li className="nav__items">
              <NavLink to="/recipes" className="nav__items__links">
              Contact
              </NavLink>
            </li>

            <li className="nav__items">
              <NavLink to="/recipes" className="nav__items__links">
             Blog
              </NavLink>
            </li>

            
            <li className="nav__items">
              <NavLink to="/recipes" className="nav__items__links">
          careers
              </NavLink>
            </li>

          </ul>

       
        </nav>

        <button
          className="menu-btn"
          aria-label="toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <img src={iconhamburguer} alt="Open menu" />}
        </button>

      </div>
    </header>
    </>

  );
}

