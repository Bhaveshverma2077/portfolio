import DecoratedProfileImage from "./components/DecoratedProfileImage";
import TalkButton from "./components/TalkButton";
import Modal from "./components/Modal";
import AboutSectionMainAnimation from "./components/AboutSectionMainAnimation";
import SocialLinks from "./components/SocialLinks";
import BottomTalkButton from "./components/BottomTalkButton";
import SmallScreenModal from "./components/SmallScreenModal";

const AboutSection = () => {
  return (
    <div className="relative overflow-hidden h-full w-full">
      <SmallScreenModal></SmallScreenModal>
      <div className="relative m-6 md:m-12 animate-fade_translate">
        <TalkButton></TalkButton>
        <Modal></Modal>
        <AboutSectionMainAnimation />
        <DecoratedProfileImage></DecoratedProfileImage>
        <p className="text-[5vw] md:text-5xl text-K-GREY-LIGHT">
          HELLO THERE<span className="text-K-ASCENT">,</span>
        </p>
        <p className="text-[4vw] md:text-3xl pb-4 text-nowrap">
          MY NAME IS BHAVESH VERMA
        </p>
        <p className="text-[6vw] md:text-6xl pb-4">
          <span className="text-K-GREY-DARK"> I AM A</span>
          <br />
          FULL STACK DEVELOPER<span className="text-K-ASCENT">.</span>
        </p>
        <SocialLinks></SocialLinks>
        <BottomTalkButton></BottomTalkButton>
      </div>
    </div>
  );
};

export default AboutSection;
