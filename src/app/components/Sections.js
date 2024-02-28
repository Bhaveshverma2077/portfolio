"use client";

import { usePathname } from "next/navigation";
import ProjectsSection from "./ProjectsSection";
import SkillsAndExperienceSection from "./SkillsAndExperienceSection";
import AboutSection from "./AboutSection";

const Sections = () => {
  const path = usePathname();
  let section;
  if (path === "/my-projects") {
    section = <ProjectsSection></ProjectsSection>;
  } else if (path === "/skills-and-experience") {
    section = <SkillsAndExperienceSection></SkillsAndExperienceSection>;
  } else {
    section = <AboutSection></AboutSection>;
  }
  return section;
};

export default Sections;
