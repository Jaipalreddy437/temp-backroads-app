import React from "react";

const Links = ({ title, path, className }) => {
  return (
    <li>
      <a href={path} className={className}>
        {title}
      </a>
    </li>
  );
};

export default Links;
