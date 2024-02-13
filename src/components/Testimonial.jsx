import React from "react";

export function Testimonial() {
  return (
    <div className="testimonial" id="testimonials-sec">
      <h1 className="testimonial-heading">Testimonials</h1>
      <div className="testimonial-card">
        <Card
          img="https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
          name={"Sara Smith"}
          designation={"This is one of the best agency"}
        />
        <Card
          img="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
          name={"Ellis Peterson"}
          designation={"This is one of the best agency"}
        />
        <Card
          img="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww"
          name={"Geetha Reddy"}
          designation={"This is one of the best agency"}
        />
      </div>
    </div>
  );
}

const Card = ({ img, name, designation }) => {
  return (
    <div className="card-testimonial cardStyle">
      <img src={img} className="testmonial-img" />
      <div className="card-info-testimonial">
        <h2 className="card-name-testimonial">{name}</h2>
        <p className="card-designation-testimonial">{designation}</p>
      </div>
    </div>
  );
};
