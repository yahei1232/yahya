import "./Skills.scss";
import { skills } from "../../skills.js";

export default function Skills() {
  return (
    <div className="skills" id="portfolio">
      <h1>Skills</h1>
      <div className="container">
        {skills?.map((d) => (
          <div className="item" key={d?.id}>
            <img src={d?.img} alt="" />
            <h3>{d?.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
