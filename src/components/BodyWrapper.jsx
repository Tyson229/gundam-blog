import { GUNDAMS } from "../lib/data";
import { GundamCard } from "../layouts/GundamCard";
import React, { useEffect, useRef, useState } from "react";

export const BodyWrapper = () => {
  const gundams = GUNDAMS;
  const listRef = useRef(null);

  return (
    <div ref={listRef} className="h-full w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth scroll-section transition-colors duration-300 ease-linear">
      {gundams.map((gundam, index) => (
        <GundamCard
          key={index}
          props={gundam}
          rootParent = {listRef}
        />
      ))}
    </div>
  );
};
