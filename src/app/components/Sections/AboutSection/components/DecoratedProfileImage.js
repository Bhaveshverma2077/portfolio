import Image from "next/image";
import DecoratedLines from "./DecoratedLines";

const IMGURL =
  "https://images.unsplash.com/photo-1707343848723-bd87dea7b118?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const DecoratedProfileImage = () => {
  return (
    <div className="scale-[80%] md:scale-100 origin-left mb-6 md:mb-12 mt-12 md:mt-20 relative">
      <DecoratedLines></DecoratedLines>
      <Image
        className="h-44 w-44 object-cover  hover:scale-110 transition-transform"
        src={IMGURL}
        priority
        loading="eager"
        width={300}
        height={300}
        alt=""
      ></Image>
    </div>
  );
};
export default DecoratedProfileImage;
