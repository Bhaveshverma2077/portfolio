import ProjectTile from "./components/ProjectTile";

const ProjectsSection = () => {
  return (
    <div className="p-6 md:p-12 text-[0.8rem] w-full font-normal flex flex-wrap overflow-x-auto h-full gap-2 custom_scrollbar">
      <ProjectTile
        name={"movies app"}
        imageUrl={"/images/projects/movies_app.png"}
        deployLink={"/something"}
        githubRepoLink={"https://github.com/Bhaveshverma2077/Movies-App"}
      ></ProjectTile>
      <ProjectTile
        name={"shopping app"}
        imageUrl={"/images/projects/shopping_app.png"}
        deployLink={"/something"}
        githubRepoLink={"https://github.com/Bhaveshverma2077/shopping-app"}
      ></ProjectTile>
      <ProjectTile
        name={"portfolio"}
        imageUrl={"/images/projects/portfolio.png"}
        deployLink={"/something"}
        githubRepoLink={"https://github.com/Bhaveshverma2077/portfolio"}
      ></ProjectTile>
    </div>
  );
};

export default ProjectsSection;
