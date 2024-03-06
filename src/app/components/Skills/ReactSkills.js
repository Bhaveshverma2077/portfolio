import SkillTile from "../SkillTile";
import SkillTilesWrapper from "../Wrappers/SkillTilesWrapper";

const ReactSkills = () => {
  return (
    <SkillTilesWrapper>
      <SkillTile imgUrl={"/images/reactjs.png"} name={"react js"}></SkillTile>
      <SkillTile imgUrl={"/images/redux.png"} name={"redux"}></SkillTile>
      <SkillTile imgUrl={"/images/nextjs.png"} name={"nextjs"}></SkillTile>
    </SkillTilesWrapper>
  );
};

export default ReactSkills;
