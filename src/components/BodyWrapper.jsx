import { GUNDAMS } from "../lib/data";
import { GundamCard } from "../layouts/GundamCard";
import React, { useRef } from "react";

export const BodyWrapper = () => {
  const gundams = GUNDAMS;
  const listRef = useRef(null);
  return (
    <div
      id="container"
      ref={listRef}
      className="h-screen w-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth scroll-section transition-colors duration-300 ease-linear "
    >
      {gundams.map((gundam, index) => (
        <GundamCard key={index} props={gundam} rootParent={listRef} />
      ))}
    </div>
  );
};
