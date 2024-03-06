import Sections from "../components/Sections";
import SectionTiles from "../components/SectionTiles";

export const generateStaticParams = () => {
  return [
    { section: ["my-projects"] },
    { section: [""] },
    { section: ["skills-and-experience"] },
  ];
};

export default function Home() {
  return (
    <div className="font-semibold p-2 w-[100vw] h-[100vh]">
      <div className="w-full h-full flex justify-between">
        <Sections></Sections>
        <div className="text-black">
          <SectionTiles></SectionTiles>
        </div>
      </div>
    </div>
  );
}
