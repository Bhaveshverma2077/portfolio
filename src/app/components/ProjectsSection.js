import ProjectTile from "./ProjectTile";

const ProjectsSection = () => {
  return (
    <div className="p-12 text-[0.8rem] w-full font-normal flex flex-wrap overflow-x-auto h-full gap-2">
      <ProjectTile
        name={"project name"}
        deployLink={"/something"}
        githubRepoLink={"/some%20other%20thing"}
      ></ProjectTile>
    </div>
  );
};

export default ProjectsSection;
