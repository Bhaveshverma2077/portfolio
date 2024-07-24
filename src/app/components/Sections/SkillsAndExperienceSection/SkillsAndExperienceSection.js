import Skills from "./components/Skills";
import { skillData } from "../../../data";

const Title = (props) => (
  <p className="text-lg tracking-[2px] pb-4">{props.name}</p>
);
const SkillsAndExperienceSection = () => {
  return (
    <div className="overflow-y-scroll custom_scrollbar h-full w-full drag">
      <div className="p-6 md:p-12">
        <p className="text-K-ASCENT text-3xl tracking-[6px] pb-8">SKILLS</p>
        {skillData.map((skills) => (
          <>
            <Title name={skills.heading}></Title>
            <Skills data={skills.data} />
          </>
        ))}
      </div>
    </div>
  );
};

export default SkillsAndExperienceSection;
