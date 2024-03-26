import Link from "next/link";

const SectionTile = ({ name, isActive, href }) => {
  return (
    <Link
      href={href}
      className={`${
        isActive ? "bg-K-ASCENT" : ""
      } h-full w-full flex justify-center items-center`}
    >
      <p
        className={`text-[0.7rem] text-nowrap font-semibold ${
          isActive ? "text-black" : "text-white"
        } rotate-90 md:rotate-0`}
      >
        {name}
      </p>
    </Link>
  );
};

export default SectionTile;
