import "./App.css";
import Project from "./components/Project";

function App() {
  return (
    <div>
      <p id="heading">My Projects</p>
      <div className="project_container">
        <Project
          projectName={"Zoogram"}
          category={"Social media"}
          link={"https://zoogram-chi.vercel.app"}
        />
        <Project projectName={"Helium"} category={"Ai chatbot"} />
        <Project
          projectName={"Gcalculator"}
          category={"Calculator"}
          link={"https://gcalculator-eta.vercel.app"}
        />
      </div>
    </div>
  );
}

export default App;
