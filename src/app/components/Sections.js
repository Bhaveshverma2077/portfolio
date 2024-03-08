"use client";

import { usePathname } from "next/navigation";
import ProjectsSection from "./Sections/ProjectsSection/ProjectsSection";
import SkillsAndExperienceSection from "./Sections/SkillsAndExperienceSection/SkillsAndExperienceSection";
import AboutSection from "./Sections/AboutSection/AboutSection";

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
  return (
    <div className="w-full border-y-4 border-l-4 border-K-BLACK">{section}</div>
  );
};

export default Sections;
