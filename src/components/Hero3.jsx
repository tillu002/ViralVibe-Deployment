import React, { useRef, useState, useEffect } from "react";

// export const Hero = () => {
//   const heroRef = useRef(null);

//     useEffect(() => {
//       const heroObserver = new IntersectionObserver(
//         (entries) => {
//           const [entry] = entries;
//           if (entry.isIntersecting) {
//             entry.target.classList.remove("section-hidden");
//           }
//         },
//         {
//           root: null,
//           threshold: 0,
//         }
//       );

//       if (heroRef.current) {
//         heroObserver.observe(heroRef.current);
//       }

//       return () => {
//         if (heroRef.current) {
//           heroObserver.unobserve(heroRef.current);
//         }
//       };
//     }, []);

export function Hero() {
  return (
    <article className="section-hero ">
      <article className="hero">
        <article className="hero-text-box">
          <h1 className="heading-primary">
            Elevate Your Online Presence with Viral Vibe
          </h1>
          <p className="hero-description">
            "Viral Vibe: Crafting dynamic social media strategies for
            unparalleled brand growth. From strategic planning to influencer
            collaborations, we maximize your online presence, engagement, and
            impact in today's competitive landscape."
          </p>
          <article className="cta-btns">
            <button className="cta cta-main"> Book An Appointment</button>
            <button className="cta cta-secondary">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </button>
          </article>
        </article>
        <article>
          <a href="https://ibb.co/ZLQLDCL">
            <img
              src="https://i.ibb.co/1vCvWxv/istockphoto-1346575545-2048x2048-transformed.jpg"
              alt="istockphoto-1346575545-2048x2048-transformed"
              border="0"
              className="hero-img"
            />
          </a>
        </article>
      </article>
    </article>
  );
}
