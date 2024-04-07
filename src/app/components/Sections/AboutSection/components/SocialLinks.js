import SocialLinkTile from "./SocialLinkTile";
import GithubIcon from "../../../icons/GithubIcon";
import LinkedinIcon from "../../../icons/LinkedInIcon";
import EmailIcon from "../../../icons/EmailIcon";

const SocialLinks = () => {
  return (
    <div className="flex flex-col">
      <SocialLinkTile
        icon={<GithubIcon />}
        name={"GITHUB"}
        href={"https://github.com/Bhaveshverma2077"}
      ></SocialLinkTile>
      <SocialLinkTile
        icon={<LinkedinIcon />}
        name={"Linkedin"}
        href={"https://www.linkedin.com/in/bhavesh-verma-737a762b9/"}
      ></SocialLinkTile>
      <SocialLinkTile
        icon={<EmailIcon />}
        name={"Email"}
        href={"mailto:bhaveshverma2077@gmail.com"}
        text={"bhaveshverma2077@gmail.com"}
      ></SocialLinkTile>
    </div>
  );
};

export default SocialLinks;
