import { useSearchParams } from "next/navigation";
import ModalContent from "./ModalContent";

const SmallScreenModal = () => {
  const searchParams = useSearchParams();
  const showModal = searchParams.get("modal")?.toLowerCase();
  return (
    <div
      className={`${
        showModal === "true" ? "visible opacity-100" : "invisible opacity-0"
      } md:hidden p-4 absolute w-full h-full z-10 bg-black`}
    >
      <ModalContent showBackspaceButton></ModalContent>
    </div>
  );
};

export default SmallScreenModal;
