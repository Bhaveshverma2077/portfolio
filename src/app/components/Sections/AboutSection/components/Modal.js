import Link from "next/link";
import CloseIcon from "../../../icons/CloseIcon";
import ModalContent from "./ModalContent";

import { useSearchParams } from "next/navigation";

const Modal = () => {
  const searchParams = useSearchParams();
  const showModal = searchParams.get("modal")?.toLowerCase();

  return (
    <>
      <div
        className={`${
          showModal === "true"
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-6 invisible"
        } hidden md:block w-full md:w-auto transition-[opacity,visibility,transform] duration-500 absolute z-10 bg-black top-0 right-0 border-K-ASCENT border-2 p-6`}
      >
        <Link
          href={"?modal=false"}
          className="transition-transform hover:scale-[1.1] hover:text-black hover:bg-K-ASCENT absolute bg-black -left-4 -top-4 border-2 border-K-ASCENT h-10 w-10 flex items-center justify-center"
        >
          <CloseIcon></CloseIcon>
        </Link>
        <div className="items-start flex flex-col w-96">
          <ModalContent></ModalContent>
        </div>
      </div>
    </>
  );
};

export default Modal;
