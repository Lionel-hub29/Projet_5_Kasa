import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const CollapseDetail = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const toggleCollapse = () => setOpen(!open);

  return (
    <div className="collapse-container">
      <button
        className={`collapsible ${open ? "active" : ""}`}
        onClick={toggleCollapse}
      >
        {title}
        <FontAwesomeIcon
          icon={open ? faChevronUp : faChevronDown}
          className="icon"
        />
      </button>
      <div className="content" style={{ maxHeight: open ? "350px" : "0px" }}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CollapseDetail;
