import Image from "next/image";

const SkillTile = ({ imgUrl, name }) => {
  return (
    <div className="px-2 gap-2 w-1/3 h-12  flex items-center">
      <Image
        className="w-8 h-8"
        src={imgUrl}
        alt={`${name} icon`}
        height={60}
        width={60}
      />
      <div className="w-1 h-1 bg-K-ASCENT rounded-full"></div>
      <p className="text-K-ASCENT text-[0.8rem]">{name.toUpperCase()}</p>
    </div>
  );
};

export default SkillTile;
