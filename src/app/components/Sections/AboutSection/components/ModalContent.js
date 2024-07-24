import DocumentIcon from "../../../icons/DocumentIcon";
import BackspaceIcon from "../../../icons/BackspaceButton";
import Link from "next/link";
import { aboutMe } from "../../../../data";

const ModalContent = (props) => {
  return (
    <>
      {props.showBackspaceButton && (
        <div className="flex justify-end py-2">
          <Link href={`?modal=false`}>
            <BackspaceIcon></BackspaceIcon>
          </Link>
        </div>
      )}
      <p className="text-zinc-600 text-[0.8rem] pb-4 text-wrap">
        <span className="text-white text-lg">Hello,</span>
        <br />
        {aboutMe}
      </p>
      <p className="text-[0.8rem] py-2">
        Contact Me: <br />
        <span className="text-K-ASCENT">bhaveshverma2077@gmail.com</span>
      </p>
      <a
        href="/resume.pdf"
        className="cursor-pointer flex gap-2 hover:gap-3 transition-[gap,padding] items-center hover:bg-K-GREY-DARK py-1 hover:px-2"
      >
        <p className="text-K-ASCENT text-[0.8rem]">RESUME</p>
        <DocumentIcon></DocumentIcon>
      </a>
    </>
  );
};

export default ModalContent;
