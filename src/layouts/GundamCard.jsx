import React, { useEffect, useRef, useState } from "react";

export const GundamCard = ({ props, rootParent }) => {
  const cardRef = useRef(null);
  const [isBackgroundChanged, setIsBackGroundChanged] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          //entry.target.classList.add("animate-fade-up");
          rootParent.current.classList.add(props.background);
        } else {
          rootParent.current.classList.remove(props.background);
        }
        setIsBackGroundChanged((value) => (value = true));
      },
      {
        root: rootParent.current,
        threshold: 1,
      }
    );

    observer.observe(cardRef.current);

    return () => {
      observer.unobserve(cardRef.current);
    };
  }, []);

  useEffect(() => {
    cardRef.current.classList.add("animate-fade-up");
    setIsBackGroundChanged((value) => (value = false));
  }, [rootParent]);

  return (
    <div
      id={props.name}
      ref={cardRef}
      className={`flex h-full justify-center items-center snap-start `}
    >
      <div className="h-2/3 aspect-square flex justify-center items-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 ease-linear">
        <div className={`w-1/4 ${props.textColor} flex flex-col p-4 box-border bg-stone-900 h-full relative `}>
          <div className="font-bold text-[4em] relative left-18 grow">{props.name.toUpperCase()}</div>
          <div className="font-semibold text-[2em] ">{props.modelNumber}</div>
          <div className="">{props.description}</div>
        </div>

        <img
          src={props.image}
          className="w-3/4 p-4 box-border"
        />
      </div>
    </div>
  );
};
