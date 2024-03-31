import Link from "next/link";
import CheronRightIcon from "../../../icons/ChevronRightIcon";
import GithubIcon from "../../../icons/GithubIcon";
import Image from "next/image";

const ProjectTile = ({ name, githubRepoLink, deployLink, imageUrl }) => {
  return (
    <div className="w-full md:w-80 flex flex-col gap-2">
      <div className="border border-K-GREY-LIGHT w-full h-64 relative overflow-hidden">
        <Image
          className="object-cover origin-left hover:scale-110 transition-transform"
          src={imageUrl}
          fill
        ></Image>
      </div>
      <div className="flex gap-2">
        <div className="border border-K-GREY-LIGHT w-1/2 h-12 flex items-center justify-center">
          <p>{name.toUpperCase()}</p>
        </div>
        <Link
          href={githubRepoLink}
          className="hover:bg-K-GREY-DARK border border-K-GREY-LIGHT w-1/4 h-12 flex items-center justify-center"
        >
          <div className="scale-[0.3] ">
            <GithubIcon></GithubIcon>
          </div>
        </Link>
        <Link
          href={deployLink}
          className="hover:bg-K-GREY-DARK border border-K-GREY-LIGHT w-1/4 h-12 flex items-center justify-center"
        >
          <CheronRightIcon></CheronRightIcon>
        </Link>
      </div>
    </div>
  );
};

export default ProjectTile;
