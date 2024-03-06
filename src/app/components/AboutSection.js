import DecoratedProfileImage from "./DecoratedProfileImage";
import TalkButton from "./TalkButton";
import Modal from "./Modal";
import AboutSectionMainAnimation from "./AboutSectionMainAnimation";
import SocialLinks from "./SocialLinks";
import { useRouter, useSearchParams } from "next/navigation";

const AboutSection = () => {
  const searchParams = useSearchParams();

  const showModal = searchParams.get("modal")?.toLowerCase();
  return (
    <div className="relative m-12">
      <TalkButton></TalkButton>
      {showModal === "true" && <Modal></Modal>}
      <AboutSectionMainAnimation />
      <DecoratedProfileImage></DecoratedProfileImage>
      <p className="text-5xl text-K-GREY-LIGHT">
        HELLO THERE<span className="text-K-ASCENT">,</span>
      </p>
      <p className="text-3xl pb-4">MY NAME IS BHAVESH VERMA</p>
      <p className="text-6xl w-[60rem] pb-4">
        <span className="text-K-GREY-DARK"> I AM A</span>
        <br />
        FULL STACK DEVELOPER<span className="text-K-ASCENT">.</span>
      </p>
      <SocialLinks></SocialLinks>
    </div>
  );
};

export default AboutSection;
