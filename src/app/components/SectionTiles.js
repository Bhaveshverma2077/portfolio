"use client";

import { usePathname } from "next/navigation";
import SectionTile from "./SectionTile";

const SectionTiles = () => {
  const path = usePathname();
  return (
    <>
      <SectionTile
        name={"MY PROJECTS"}
        isActive={path === "/my-projects"}
        href={"/my-projects"}
      ></SectionTile>
      <SectionTile
        name={"ABOUT ME"}
        isActive={path === "/"}
        href={"/"}
      ></SectionTile>
      <SectionTile
        name={"SKILLS AND EXPERIENCE"}
        isActive={path === "/skills-and-experience"}
        href={"/skills-and-experience"}
      ></SectionTile>
    </>
  );
};

export default SectionTiles;
