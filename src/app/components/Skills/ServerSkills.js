import SkillTile from "../SkillTile";
import SkillTilesWrapper from "../Wrappers/SkillTilesWrapper";

const ServerSkills = () => {
  return (
    <SkillTilesWrapper>
      <SkillTile imgUrl={"/images/nodejs.png"} name={"nodejs"}></SkillTile>
    </SkillTilesWrapper>
  );
};

export default ServerSkills;
