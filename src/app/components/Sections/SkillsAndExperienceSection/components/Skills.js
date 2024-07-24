import SkillTile from "./SkillTile";

const Skills = (props) => {
  return (
    <div className="flex flex-wrap pb-8">
      {props.data.map((skill) => (
        <SkillTile
          key={skill.imgUrl}
          imgUrl={skill.imgUrl}
          name={skill.name}
        ></SkillTile>
      ))}
    </div>
  );
};

export default Skills;
