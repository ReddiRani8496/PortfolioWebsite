import reactLogo from "../assets/react.svg";

function TechStack() {
  return (
    <section id="tech-stack">
      <h2>Tech Stack</h2>

      <div className="stack-container">
        <img src={reactLogo} alt="React" className="react-icon" />
      </div>
    </section>
  );
}

export default TechStack;
