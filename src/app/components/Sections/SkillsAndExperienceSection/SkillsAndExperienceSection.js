import BasicSkills from "./components/Skills/BasicSkills";
import ServerSkills from "./components/Skills/ServerSkills";
import DatabaseSkills from "./components/Skills/DatabaseSkills";
import GraphQLSkills from "./components/Skills/GraphQLSkills";
import ReactSkills from "./components/Skills/ReactSkills";
import AngularSkills from "./components/Skills/AngularSkills";
import AwsSkills from "./components/Skills/AwsSkills";

const Title = (props) => (
  <p className="text-lg tracking-[2px] pb-4">{props.name}</p>
);
const SkillsAndExperienceSection = () => {
  return (
    <div className="overflow-y-scroll custom_scrollbar h-full w-full drag">
      <div className="p-6 md:p-12">
        <p className="text-K-ASCENT text-3xl tracking-[6px] pb-8">SKILLS</p>
        <Title name={"Basic"}></Title>
        <BasicSkills />
        <Title name={"Server"}></Title>
        <ServerSkills />
        <Title name={"Database"}></Title>
        <DatabaseSkills />
        <Title name={"React"}></Title>
        <ReactSkills />
        <Title name={"Angular"}></Title>
        <AngularSkills />
        <Title name={"GraphQl"}></Title>
        <GraphQLSkills />
        <Title name={"AWS"}></Title>
        <AwsSkills />
      </div>
    </div>
  );
};

export default SkillsAndExperienceSection;
