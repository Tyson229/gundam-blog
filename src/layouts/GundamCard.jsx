import React from "react";
// import { useState, useRef, useEffect } from "react";

export const GundamCard = ({ props, cardRef }) => {
//   const [isIntersecting, setIsIntersecting] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsIntersecting(entry.isIntersecting);
//       },
//       { rootMargin: "0px" }
//     );
//     observer.observe(ref.current);
//     console.log(isIntersecting);

//     return () => observer.disconnect();
//   }, []);
//   useEffect(() => {
//     if(isIntersecting)
//     console.log(true);
//   }, [isIntersecting]);

  return (
    <div
     ref={cardRef}
      className={`card flex flex-col h-full justify-center items-center snap-always snap-center opacity-0 ${props.background}`}
    >
      <div className="flex flex-col w-fit items-center border p-4">
        <img src={props.image} width={600} />
        <div>{props.name.toUpperCase()}</div>
        <div>{props.modelNumber}</div>
        <div className="w-1/2">{props.description}</div>
      </div>
    </div>
  );
};
