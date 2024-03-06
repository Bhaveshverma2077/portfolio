import BasicSkills from "./Skills/BasicSkills";
import ServerSkills from "./Skills/ServerSkills";
import DatabaseSkills from "./Skills/DatabaseSkills";
import GraphQLSkills from "./Skills/GraphQLSkills";
import ReactSkills from "./Skills/ReactSkills";
import AngularSkills from "./Skills/AngularSkills";
import AwsSkills from "./Skills/AwsSkills";

const Title = (props) => (
  <p className="text-K-ASCENT text-lg tracking-[2px] pb-4">{props.name}</p>
);
const SkillsAndExperienceSection = () => {
  return (
    <div className="p-12">
      <Title name={"Basic"}></Title>
      <BasicSkills />
      <Title name={"Server Skills"}></Title>
      <ServerSkills />
      <Title name={"Database Skills"}></Title>
      <DatabaseSkills />
      <Title name={"React Skills"}></Title>
      <ReactSkills />
      <Title name={"Angular Skills"}></Title>
      <AngularSkills />
      <Title name={"GraphQl Skills"}></Title>
      <GraphQLSkills />
      <Title name={"AWS Skills"}></Title>
      <AwsSkills />
    </div>
  );
};

export default SkillsAndExperienceSection;
