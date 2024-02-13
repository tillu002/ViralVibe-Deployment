import React from "react";
import { useState } from "react";

export function Services() {
  return (
    <section className="services" id="service-sec">
      <div className="primary-services">
        <h1 className="heading-services">Our Services Include</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="6 -4 30 30"
          strokeWidth="1"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <FlashCards />
    </section>
  );
}

const services = [
  {
    id: 3457,
    question: "Professional Business Profiles",
    answer: "Professional Business Profiles",
  },
  {
    id: 7336,
    question: "Social Media Integrations",
    answer: "Social Media Integrations",
  },
  {
    id: 8832,
    question: "Cover All Social Media",
    answer: "Cover All Social Media",
  },
  {
    id: 1297,
    question: "Stratagic Contents",
    answer: "Stratagic Contents",
  },
  {
    id: 9103,
    question: "Premium Creatives",
    answer: "Premium Creatives",
  },
  {
    id: 2002,
    question: "Automation Setup",
    answer: "Automation Setup",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {services.map((question) => (
        <div
          key={question.id}
          //   onClick={() => handleClick(question.id)}
          onMouseEnter={() => handleClick(question.id)}
          onMouseLeave={() => handleClick(question.id)}
          //   onMouseOverCapture={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
