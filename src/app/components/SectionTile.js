import Link from "next/link";

const SectionTile = ({ name, isActive, href }) => {
  return (
    <div className="h-1/3 w-[16rem] bg-pink-500 p-1">
      <Link
        href={href}
        className={`${
          isActive ? "bg-K-ASCENT" : ""
        } h-full w-full flex justify-center items-center`}
      >
        <p
          className={`font-semibold ${isActive ? "text-black" : "text-white"}`}
        >
          {name}
        </p>
      </Link>
    </div>
  );
};

export default SectionTile;
