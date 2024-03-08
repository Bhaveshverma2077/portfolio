import Link from "next/link";
import CloseIcon from "../../../icons/CloseIcon";
import DocumentIcon from "../../../icons/DocumentIcon";

import { useSearchParams } from "next/navigation";

const Modal = () => {
  const searchParams = useSearchParams();
  const showModal = searchParams.get("modal")?.toLowerCase();

  return (
    <div
      className={`${
        showModal === "true"
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 translate-y-6 invisible"
      } transition-[opacity,visibility,transform] duration-500 absolute z-10 bg-black top-0 right-0 border-K-ASCENT border-2 p-6`}
    >
      <Link
        href={"?modal=false"}
        className="transition-transform hover:scale-[1.1] hover:text-black hover:bg-K-ASCENT absolute bg-black -left-4 -top-4 border-2 border-K-ASCENT h-10 w-10 flex items-center justify-center"
      >
        <CloseIcon></CloseIcon>
      </Link>
      <div className="items-start flex flex-col w-96">
        <p className="text-zinc-600 text-[0.8rem] pb-4">
          <span className="text-white text-lg">Hello,</span>
          <br />
          As someone who is passionate about User Interface, I thoroughly enjoy
          crafting and building web designs. My creations are not only visually
          appealing but also highly interactive, delivering a seamless
          experience. I hope my work resonates with you.
        </p>
        <p className="text-[0.8rem] py-2">
          Contact Me:{" "}
          <span className="text-K-ASCENT">bhaveshverma2077@gmail.com</span>
        </p>
        <div className="cursor-pointer flex gap-2 hover:gap-3 transition-[gap,padding] items-center hover:bg-K-GREY-DARK py-1 hover:px-2">
          <p className="text-K-ASCENT text-[0.8rem]">RESUME</p>
          <DocumentIcon></DocumentIcon>
        </div>
      </div>
    </div>
  );
};

export default Modal;
