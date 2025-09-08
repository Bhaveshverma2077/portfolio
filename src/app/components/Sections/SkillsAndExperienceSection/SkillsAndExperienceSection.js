import Skills from "./components/Skills";
import { skillData, experience } from "../../../data";

const Title = (props) => (
  <p className="text-lg tracking-[2px] pb-4">{props.name}</p>
);

const ExperienceItem = ({ title, company, duration, description }) => (
  <div className="mb-6 border-l-2 border-K-ASCENT pl-4">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="text-K-ASCENT text-sm">{company}</p>
    <p className="text-zinc-400 text-xs mb-2">{duration}</p>
    {Array.isArray(description) ? (
      <ul className="text-zinc-300 text-sm list-disc list-inside space-y-1">
        {description.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    ) : (
      <p className="text-zinc-300 text-sm">{description}</p>
    )}
  </div>
);

const SkillsAndExperienceSection = () => {
  return (
    <div className="overflow-y-scroll custom_scrollbar h-full w-full drag">
      <div className="p-6 md:p-12">
        <p className="text-K-ASCENT text-3xl tracking-[6px] pb-8 pt-12">EXPERIENCE</p>
        {experience.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            company={exp.company}
            duration={exp.duration}
            description={exp.description}
          />
        ))}
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
