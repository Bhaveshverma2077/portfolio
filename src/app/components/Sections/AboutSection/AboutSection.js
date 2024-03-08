import DecoratedProfileImage from "./components/DecoratedProfileImage";
import TalkButton from "./components/TalkButton";
import Modal from "./components/Modal";
import AboutSectionMainAnimation from "./components/AboutSectionMainAnimation";
import SocialLinks from "./components/SocialLinks";

const AboutSection = () => {
  return (
    <div className="overflow-hidden h-full w-full">
      <div className="relative m-12 animate-fade_translate">
        <TalkButton></TalkButton>
        <Modal></Modal>
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
    </div>
  );
};

export default AboutSection;
