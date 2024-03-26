"use client";

import { usePathname } from "next/navigation";
import SectionTile from "./SectionTile";

const SectionTiles = () => {
  const path = usePathname();
  return (
    <>
      <div className="border-x-4 border-t-4 h-1/3 w-[3rem] md:w-[16rem] border-K-BLACK">
        <SectionTile
          name={"MY PROJECTS"}
          isActive={path === "/my-projects"}
          href={"/my-projects"}
        ></SectionTile>
      </div>
      <div className="border-4 h-1/3 w-[3rem] md:w-[16rem] border-K-BLACK">
        <SectionTile
          name={"ABOUT ME"}
          isActive={path === "/"}
          href={"/"}
        ></SectionTile>
      </div>
      <div className="border-x-4 border-b-4 h-1/3 w-[3rem] md:w-[16rem] border-K-BLACK">
        <SectionTile
          name={"SKILLS AND EXPERIENCE"}
          isActive={path === "/skills-and-experience"}
          href={"/skills-and-experience"}
        ></SectionTile>
      </div>
    </>
  );
};

export default SectionTiles;
