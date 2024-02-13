// import React, { useState } from "react";
// import { NavButtons } from "./NavButtons";

// export function Header() {
//   return (
//     <section className="container">
//       <div className="header">
//         <div className="logo">
//           <a href="https://imgbb.com/">
//             <img
//               src="https://i.ibb.co/bW4b3Xs/Untitled-1.png"
//               alt="Untitled-1"
//               className="agency-logo"
//             />
//           </a>
//         </div>

//         <article>
//           <NavButtons />
//         </article>
//       </div>
//     </section>
//   );
// }

//Heading Sticky Navigation Header

import React, { useState, useEffect } from "react";
import { NavButtons } from "./NavButtons";

export function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const isStickyNow = offset > 0;
      setIsSticky(isStickyNow);
      setScrollY(offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoHeight = isSticky ? 70 : 100; // Adjust logo height based on sticky state
  const headerHeight = isSticky ? 70 : 100; // Adjust header height based on sticky state

  return (
    <section className={`container ${isSticky ? "sticky" : ""}`}>
      <div className="header" style={{ height: `${headerHeight}px` }}>
        <div className="logo" style={{ height: `${logoHeight}px` }}>
          <a href="https://imgbb.com/">
            <img
              src="https://i.ibb.co/bW4b3Xs/Untitled-1.png"
              alt="Untitled-1"
              className="agency-logo"
              style={{ height: `${logoHeight}px`, width: "auto" }}
            />
          </a>
        </div>

        <article>
          <NavButtons />
        </article>
      </div>
    </section>
  );
}
