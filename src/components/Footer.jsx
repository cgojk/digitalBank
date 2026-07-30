
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logolight from "../images/logo-light.svg";
import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

export default function Footer() {
  return (
<>
    <section className="footer container">
        <div className="wrapper__socialmedia__logo">
            <img src={logolight} className="nav-logo" alt="Bank logo" />
        </div>
        <div className="socialmedia__icons">
                <div className="facebook">
                    <img src={facebook} alt="Facebook" />
                </div>
                <div className="youtube">
                    <img src={youtube} alt="YouTube" />
                </div>
                <div className="twitter">
                    <img src={twitter} alt="Twitter" />
                </div>
                <div className="pinterest">
                    <img src={pinterest} alt="Pinterest" />
                </div>
                <div className="instagram">
                    <img src={instagram} alt="Instagram" />
               </div>

        </div>
      <div className="footer__inner">

          <ul className="footer__list">

            <li className="footer__items">
              <NavLink to="/home" className="footer__items__links">
                Home
              </NavLink>
            </li>

            <li className="footer__items">
              <NavLink to="/about" className="footer__items__links">
                About Us
              </NavLink>
            </li>

            <li className="footer__items">
              <NavLink to="/recipes" className="footer__items__links">
              Contact
              </NavLink>
            </li>

            <li className="footer__items">
              <NavLink to="/recipes" className="footer__items__links">
             Blog
              </NavLink>
            </li>

            
            <li className="footer__items">
              <NavLink to="/recipes" className="footer__items__links">
          careers
              </NavLink>
            </li>

     
        </ul>

      </div>
          <div className="wrapper__linkbutton--copyright">
            <p>&copy; 2023 Bank. All rights reserved.</p>
         
      <Link to="/home" className="footer__button-link">
            <button className="btn btn--primary">
            Request Invite
            </button>
          </Link>
      </div>
    </section>
    </>

  );
}

