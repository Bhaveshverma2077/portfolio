import Skills from "./Skills";

const SkillsAndExperienceSection = () => {
  return (
    <div className="p-12">
      <p className="text-K-ASCENT text-lg tracking-[2px] pb-8">{"SKILLS"}</p>
      <div className=" flex flex-wrap">
        <Skills />
      </div>
    </div>
  );
};

export default SkillsAndExperienceSection;
