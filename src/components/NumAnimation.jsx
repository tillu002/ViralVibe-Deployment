import React, { useState, useEffect, useRef } from "react";

const NumberAnimation = () => {
  const [number, setNumber] = useState(0);
  const numberRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(numberRef.current);

    return () => observer.disconnect();
  }, []);

  const startAnimation = () => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => {
        if (prevNumber < 350) {
          return prevNumber + 1;
        } else {
          clearInterval(interval);
          return "350"; // Ensure number stops at 250
        }
      });
    }, 10);

    return () => clearInterval(interval);
  };

  return (
    <div className="happy-heading" ref={numberRef}>
      {number}+ Happy Clients🙂
    </div>
  );
};

export default NumberAnimation;
