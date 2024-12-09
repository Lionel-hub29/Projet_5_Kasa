import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import "./collapse.css"; // Importation du fichier CSS

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="collapse-container">
      <button
        className={`collapsible ${isOpen ? "active" : ""}`}
        onClick={toggleCollapse}
      >
        {title}
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="icon"
        />
      </button>
      <div className="content" style={{ maxHeight: isOpen ? "200px" : "0px" }}>
        <p>{content}</p>
      </div>
    </div>
  );
};
export default Collapse;
