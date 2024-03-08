import SkillTile from "../SkillTile";
import SkillTilesWrapper from "../Wrappers/SkillTilesWrapper";

const AwsSkills = () => {
  return (
    <SkillTilesWrapper>
      <SkillTile name={"EC2"}></SkillTile>
      <SkillTile name={"S3"}></SkillTile>
    </SkillTilesWrapper>
  );
};

export default AwsSkills;
