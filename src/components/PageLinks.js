import React from "react";
import { pageLinks } from "../data";

const PageLinks = ({ className, id, navLink }) => {
  return (
    <ul className={className} id={id}>
      {pageLinks.map((list) => (
        <li key={list.id}>
          <a className={navLink} href={list.href}>
            {list.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PageLinks;
