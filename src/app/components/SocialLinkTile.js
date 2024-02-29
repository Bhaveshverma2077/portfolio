import Link from "next/link";

const SocialLinkTile = ({ icon, name, href }) => {
  return (
    <div className="flex gap-6 items-center group">
      <Link href={href} className="flex items-center">
        <div className="h-8 w-8 rounded-full flex items-center justify-center">
          <div className="scale-[0.2]">{icon}</div>
        </div>
        <p className="text-sm">{name}</p>
      </Link>
      <p className="text-K-ASCENT text-[0.8rem] hidden group-hover:block">
        {href}
      </p>
    </div>
  );
};
export default SocialLinkTile;
