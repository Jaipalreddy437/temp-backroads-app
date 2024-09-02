import React from "react";
import Logo from "../images/logo.svg";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLinks className="nav-links" id="nav-links" navLink="nav-link" />
        {/* <SocialLink className="nav-icons" anchorClass="nav-icon" /> */}
        <ul className="nav-icons">
          {socialLinks.map((links) => {
            return <SocialLink className="nav-icon" id={links.id} {...links} />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
