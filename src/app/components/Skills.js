import SkillTile from "./SkillTile";

const Skills = () => {
  return (
    <>
      <SkillTile imgUrl={"/images/reactjs.png"} name={"react js"}></SkillTile>
      <SkillTile imgUrl={"/images/css.png"} name={"css"}></SkillTile>
      <SkillTile imgUrl={"/images/flutter.png"} name={"flutter"}></SkillTile>
      <SkillTile imgUrl={"/images/html5.png"} name={"html5"}></SkillTile>
      <SkillTile
        imgUrl={"/images/javascript.png"}
        name={"javascript"}
      ></SkillTile>
      <SkillTile imgUrl={"/images/mongodb.png"} name={"mongodb"}></SkillTile>
      <SkillTile imgUrl={"/images/nextjs.png"} name={"nextjs"}></SkillTile>
      <SkillTile imgUrl={"/images/nodejs.png"} name={"nodejs"}></SkillTile>
      <SkillTile imgUrl={"/images/redux.png"} name={"redux"}></SkillTile>
      <SkillTile imgUrl={"/images/tailwind.png"} name={"tailwind"}></SkillTile>
      <SkillTile
        imgUrl={"/images/typescript.png"}
        name={"typescript"}
      ></SkillTile>
    </>
  );
};

export default Skills;
