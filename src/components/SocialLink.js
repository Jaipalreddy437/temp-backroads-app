import React from "react";

const SocialLink = ({ href, className, icon }) => {
  return (
    <li>
      <a href={href} className={className} rel="noreferrer" target="_blanck">
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
