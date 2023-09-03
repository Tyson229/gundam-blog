import React from "react";
import { Link } from "react-scroll";
import { GUNDAMS } from "../lib/data";
export const Footer = () => {
  return (
    <footer className="flex w-full p-4 absolute bottom-0">
      <div className="flex flex-col gap-2">
        <div className="text-justify ">
          This is a website that you can keep updated about news about our new
          GUNDAM design. We thrive to give you the best possible design in a
          competitve price
        </div>
        <div className="text-sm">published by @Tyson</div>
        <div className="underline font-bold">Terms & Conditions</div>
      </div>
      <div className="w-full"></div>
      <ul className="w-full text-end">
        {GUNDAMS.map((gundam,i) => {
          return (
            <li key={i}>
              <Link activeClass="active complete" containerId={'container'} to={gundam.id} smooth={true} duration={100}>
                {gundam.name.toLocaleUpperCase()}
              </Link>
              {/* <a href={`#${gundam.id}`}>{gundam.name.toUpperCase()}</a> */}
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
