import React from "react";

export function TeamMem() {
  return (
    <div className="team-intro">
      <h1 className="team-heading">Meet Our Team</h1>
      <div className="team">
        <Card
          backgroundImage="https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="John Doe"
          designation="CEO & Founder"
        />
        <Card
          backgroundImage="https://plus.unsplash.com/premium_photo-1675731939080-ce61998c8d38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGRpcmVjdG9yfGVufDB8fDB8fHww"
          name="Jane Smith"
          designation="Marketing Expert"
        />
        <Card
          backgroundImage="https://images.unsplash.com/photo-1637684666451-423047d6bf5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRpcmVjdG9yfGVufDB8fDB8fHww"
          name="Michael Brown"
          designation="Content Creator"
        />
        <Card
          backgroundImage="https://images.unsplash.com/photo-1495131796982-281014f71fbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHxkaXJlY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
          name="Adam Smith"
          designation="Director of Photography"
        />
        <Card
          backgroundImage="https://plus.unsplash.com/premium_photo-1675730351322-473b87c6b328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxkaXJlY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
          name="Emily Jhonson"
          designation="Creative Director"
        />
        <Card
          backgroundImage="https://plus.unsplash.com/premium_photo-1675730351462-260157477f22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxkaXJlY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
          name="Monica Ghatner"
          designation="Content Head"
        />
      </div>
    </div>
  );
}

const Card = ({ backgroundImage, name, designation }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="card teamCardStyle" style={cardStyle}>
      <div className="card-info">
        <h2 className="card-name">{name}</h2>
        <p className="card-designation">{designation}</p>
      </div>
    </div>
  );
};
