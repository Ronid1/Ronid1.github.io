import SkillContainer from "./SkillContainer";
import {skills} from "../data/skillsData"

function Skills() {
  return (
    <div class="section">
      <h1>Things I bring</h1>
      <div class="container text-center">
        <div class="row justify-content-md-center">
          {skills.map((skill, i) => <SkillContainer key = {i} name={skill.name} description={skill.description}/>)}
        </div>
      </div>
    </div>
  );
}

export default Skills;
