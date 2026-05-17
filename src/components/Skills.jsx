import reactIcon from "../assets/react-skill.svg";
import nextIcon from "../assets/nextdotjs.svg";
import reduxIcon from "../assets/redux.svg";
import jsIcon from "../assets/javascript.svg";
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import tailwindIcon from "../assets/tailwindcss.svg";
import springIcon from "../assets/springboot.svg";
import mysqlIcon from "../assets/mysql.svg";
import gitIcon from "../assets/git.svg";

const skills = [
  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "Next.js",
    icon: nextIcon,
  },
  {
    name: "Redux",
    icon: reduxIcon,
  },
  {
    name: "JavaScript",
    icon: jsIcon,
  },
  {
    name: "HTML",
    icon: htmlIcon,
  },
  {
    name: "CSS",
    icon: cssIcon,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
  },
  {
    name: "Spring Boot",
    icon: springIcon,
  },
  {
    name: "MySQL",
    icon: mysqlIcon,
  },
  {
    name: "Git/GitHub",
    icon: gitIcon,
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="skills-header">
        <h1>Skills</h1>
        <p>My technical level</p>
      </div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />

            <h3>{skill.name}</h3>
          </div>
        ))}

        {/* Java icon using devicon */}
        <div className="skill-card">
          <i className="devicon-java-plain colored java-icon"></i>
          <h3>Java</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;
