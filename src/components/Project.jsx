import { useState } from "react";

const Project = ({ projectName, category, link, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="child"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? color : "#27272a", // Change color on hover
      }}
    >
      <div className="project_specs">
        <p className="project_name">{projectName}</p>
        <p className="category">{category}</p>
      </div>
      <div id="button_cont">
        <a href={link} target="_blank">
          <button
            onMouseEnter={() => setIsHovered(true)}
            style={{
              backgroundColor: isHovered ? color : "white", // Change color on hover
            }}
          >
            Visit
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
