import { skillList } from "../data/skill-list";

export default function SkillBar() {
  return (
      <div className="skill-bar">
        {skillList.map((skill) => (
          <div key={skill.name}>
            <img src={skill.srcSkill} alt={skill.name} title={skill.name}/>
          </div>
        ))}
      </div>
  );
}
