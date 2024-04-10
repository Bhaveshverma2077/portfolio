import SkillTile from "../SkillTile";
import SkillTilesWrapper from "../Wrappers/SkillTilesWrapper";

const GraphQLSkills = () => {
  return (
    <SkillTilesWrapper>
      <SkillTile imgUrl={"/images/db.png"} name={"mongodb"}></SkillTile>
      <SkillTile imgUrl={"/images/db.png"} name={"postgres"}></SkillTile>
      {/* <SkillTile imgUrl={"/images/redis.png"} name={"redis"}></SkillTile> */}
    </SkillTilesWrapper>
  );
};

export default GraphQLSkills;
