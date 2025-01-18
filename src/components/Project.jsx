const Project = ({ projectName, category, link }) => {
  return (
    <div className="child">
      <div className="project_specs">
        <p className="project_name">{projectName}</p>
        <p className="category">{category}</p>
      </div>
      <div id="button_cont">
        <a href={link} target="_blank">
          <button>Visit</button>
        </a>
      </div>
    </div>
  );
};

export default Project;
