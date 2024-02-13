import React, { useState } from "react";
// import { SideBar } from "./SideBar";
import Drawer from "@mui/material/Drawer";

export function NavButtons() {
  const handleScroolFooter = () => {
    const aboutUsSection = document.getElementById("footer-sec");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroolTestimonials = () => {
    const testimonial = document.getElementById("testimonials-sec");
    if (testimonial) {
      testimonial.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroolWorks = () => {
    const work = document.getElementById("work-sec");
    if (work) {
      work.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroolServices = () => {
    const service = document.getElementById("service-sec");
    if (service) {
      service.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isDrawerOpen, setDrawerOpen] = useState({ innerWidth });
  const [isToggle, setIsToggle] = useState(false);
  if (String(isDrawerOpen) < "600px") {
    setIsToggle(true);
  }

  function handleToggle() {
    setIsToggle(!isToggle);
    console.log(isToggle);
  }

  return (
    <article className="header-btn ">
      <button className="drawer-button" onClick={handleToggle}>
        {isToggle ? (
          <div>
            <SidebarIcon />
          </div>
        ) : (
          <div>
            <SidebarIcon />
          </div>
        )}
      </button>
      <article
      // className={`slider ${
      //   isDrawerOpen && isToggle ? "opened btns-class" : "closed "
      // }`}
      >
        <article className={isToggle ? `${"btns-class"}` : "closed"}>
          <a href="#" className="header-btns" onClick={handleScroolWorks}>
            WorkFolio
          </a>
          <a href="#" className="header-btns" onClick={handleScroolFooter}>
            About Us
          </a>
          <a href="#" className="header-btns" onClick={handleScroolServices}>
            Services
          </a>
          <a href="#" className="header-btns" onClick={handleScroolFooter}>
            Contact Us
          </a>
          <a
            href="#"
            className="header-btns testimonial-btn"
            onClick={handleScroolTestimonials}
          >
            Testimonials
          </a>
        </article>
      </article>
    </article>
  );
}

// import React from "react";

function SidebarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z" />
    </svg>
  );
}

export default SidebarIcon;
