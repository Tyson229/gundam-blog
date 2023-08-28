import React, { useRef, useEffect } from "react";
import { GUNDAMS } from "../lib/data";
import { GundamCard } from "../layouts/GundamCard";

export const BodyWrapper = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "transition",
            "opacity-100",
            "duration-200",
            "ease-in"
          );
          entry.target.classList.remove(
            "opacity-0"
          );
        } else {
          entry.target.classList.remove(
            "transition",
            "opacity-100",
            "duration-200",
            "ease-in"
          );
          entry.target.classList.add("opacity-0");
        }
      });
    }, {
      rootMargin: "-300px"
    });

    cardsRef.current.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const gundams = GUNDAMS;
  return (
    <div className="h-full w-full snap-y snap-mandatory overflow-y-auto scroll-smooth scroll-section">
      {gundams.map((gundam, index) => (
        <GundamCard
          key={index}
          props={gundam}
          cardRef={(el) => {
            cardsRef.current[index] = el;
          }}
        />
      ))}
    </div>
  );
};
