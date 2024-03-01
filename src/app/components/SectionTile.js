import Link from "next/link";

const SectionTile = ({ name, isActive, href }) => {
  return (
    <Link
      href={href}
      className={`${
        isActive ? "bg-K-ASCENT" : ""
      } h-full w-full flex justify-center items-center`}
    >
      <p className={`font-semibold ${isActive ? "text-black" : "text-white"}`}>
        {name}
      </p>
    </Link>
  );
};

export default SectionTile;
