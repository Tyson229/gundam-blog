import React, { useEffect, useRef, useState } from "react";



export const GundamCard = ({ props, rootParent }) => {
  const cardRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {

          console.log(entry);
          setIsIntersecting((value) => (value = true));
          // cardRef.current.classList.add('animate-fade-up')
          rootParent.current.classList.add(props.background);
        } else {


          rootParent.current.classList.remove(props.background);
          setIsIntersecting((value) => (value = true));
        }
      },
      {
        root: rootParent.current,
        threshold: 0.25,
      }
    );

    observer.observe(cardRef.current);

    return () => {
      observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      id={props.id}
      name={props.id}
      ref={cardRef}
      className={`flex section h-full justify-center items-center snap-start`}
    >
      <div className="h-fit lg:h-[60%] aspect-square flex justify-center items-center shadow-2xl ">
        <div
          className={`w-1/4 ${props.textColor} flex flex-col p-4 box-border bg-red-500 h-full relative `}
        >
          <div className="font-bold text-[4em] relative left-18 grow">
            {props.name.toUpperCase()}
          </div>
          <div className="font-semibold text-[2em] ">{props.modelNumber}</div>
          <div className="">{props.description}</div>
        </div>

        <img src={props.image} className="w-3/4 p-4 box-border" />
      </div>
    </div>
  );
};
