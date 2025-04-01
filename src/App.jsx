import "./App.css";
import Project from "./components/Project";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div>
      <div
        className="about_me"
        style={{
          display: "flex",
        }}
      >
        <div>
          <p id="about_me_text">
            Hi,
            <br />I am Chetan
          </p>
          <p className="speciality">Full Stack Developer</p>
        </div>
        <div className="links">
          <a href="https://github.com/chetan-sharma-exe" target="_blank">
            <button
              style={{
                marginBottom: "10px",
              }}
              className="github_b"
            >
              <FaGithub className="li_text" size={25} />
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/chetan-sharma-ab9558280"
            target="_blank"
          >
            <button className="linkedin_b">
              <CiLinkedin className="li_text" size={25} />
            </button>
          </a>
        </div>
      </div>
      <p id="heading">My Projects</p>
      <div className="project_container">
        <Project
          projectName={"Zoogram"}
          category={"Social media"}
          link={"https://zoogram-chi.vercel.app"}
          color={"#c3c0b4"}
        />
        <Project
          projectName={"Helium"}
          category={"Ai chatbot"}
          link={"https://helium-kappa.vercel.app"}
          color={"#dcbe3d"}
        />
        <Project
          projectName={"Gcalculator"}
          category={"Calculator"}
          link={"https://gcalculator-eta.vercel.app"}
          color={"#59b928"}
        />
      </div>
    </div>
  );
}

export default App;
