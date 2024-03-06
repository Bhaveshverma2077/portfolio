import DecoratedProfileImage from "./DecoratedProfileImage";
import TalkButton from "./TalkButton";
import SocialLinkTile from "./SocialLinkTile";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedInIcon";
import Modal from "./Modal";
import AboutSectionMainAnimation from "./AboutSectionMainAnimation";
import { useRouter, useSearchParams } from "next/navigation";

const AboutSection = () => {
  const searchParams = useSearchParams();

  const showModal = searchParams.get("modal")?.toLowerCase();
  return (
    <div className="relative overflow-hidden">
      <TalkButton></TalkButton>
      {showModal === "true" && <Modal></Modal>}
      <AboutSectionMainAnimation />
      <DecoratedProfileImage></DecoratedProfileImage>
      <p className="text-5xl text-K-GREY-LIGHT">
        HELLO THERE<span className="text-K-ASCENT">,</span>
      </p>
      <p className="text-3xl pb-4">MY NAME IS XXX</p>
      <p className="text-6xl w-[60rem] pb-4">
        <span className="text-K-GREY-DARK"> I AM A</span> UI/UX DESIGNER AND
        FULL STACK DEVELOPER<span className="text-K-ASCENT">.</span>
      </p>
      <div className="flex flex-col">
        <SocialLinkTile
          icon={<GithubIcon />}
          name={"GITHUB"}
          href={"#"}
        ></SocialLinkTile>
        <SocialLinkTile
          icon={<LinkedinIcon />}
          name={"Linkedin"}
          href={"#"}
        ></SocialLinkTile>
        <SocialLinkTile
          icon={<LinkedinIcon />}
          name={"Email"}
          href={"#"}
        ></SocialLinkTile>
      </div>
    </div>
  );
};

export default AboutSection;
