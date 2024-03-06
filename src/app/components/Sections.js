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
  return (
    <div className="overflow-hidden w-full border-y-4 border-l-4 border-K-BLACK">
      {section}
    </div>
  );
};

export default Sections;
