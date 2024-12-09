import React from "react";
import Accordion from "../../components/Accordion";

function About({ children }) {
  return (
    <main>
      <div className="textMain2"></div>
      <div className="accordeon-pappros">
        <Accordion />
      </div>
    </main>
  );
}

export default About;
