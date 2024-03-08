import SkillTilesWrapper from "../Wrappers/SkillTilesWrapper";
import SkillTile from "../SkillTile";

const BasicSkills = () => {
  return (
    <SkillTilesWrapper>
      <SkillTile imgUrl={"/images/html5.png"} name={"html5"}></SkillTile>
      <SkillTile imgUrl={"/images/css.png"} name={"css"}></SkillTile>
      <SkillTile
        imgUrl={"/images/javascript.png"}
        name={"javascript"}
      ></SkillTile>
      <SkillTile
        imgUrl={"/images/typescript.png"}
        name={"typescript"}
      ></SkillTile>
      <SkillTile imgUrl={"/images/flutter.png"} name={"flutter"}></SkillTile>
    </SkillTilesWrapper>
  );
};

export default BasicSkills;
