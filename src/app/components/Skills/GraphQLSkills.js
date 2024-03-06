import SkillTile from "../SkillTile";
import SkillTilesWrapper from "../Wrappers/SkillTilesWrapper";

const GraphQLSkills = () => {
  return (
    <SkillTilesWrapper>
      <SkillTile
        imgUrl={"/images/apollo.png"}
        name={"apollo server and client"}
      ></SkillTile>
      <SkillTile name={"relay"}></SkillTile>
    </SkillTilesWrapper>
  );
};

export default GraphQLSkills;
