import SkillTile from "../SkillTile";
import SkillTilesWrapper from "../Wrappers/SkillTilesWrapper";

const AngularSkills = () => {
  return (
    <SkillTilesWrapper>
      <SkillTile imgUrl={"/images/angular.png"} name={"angular"}></SkillTile>
    </SkillTilesWrapper>
  );
};

export default AngularSkills;
