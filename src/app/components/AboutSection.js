import Image from "next/image";

const AboutSection = () => {
  const imgUrl =
    "https://images.unsplash.com/photo-1707343848723-bd87dea7b118?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="p-12">
      <Image
        className="h-48 w-48 object-cover"
        src={imgUrl}
        width={300}
        height={300}
        alt=""
      ></Image>
      <p className="text-5xl text-K-GREY-LIGHT">HELLO THERE,</p>
      <p className="text-3xl pb-4">MY NAME IS XXX,</p>
      <p className="text-6xl w-[60rem] pb-4">
        <span className="text-K-GREY-DARK"> I AM A</span> UI/UX DESIGNER AND
        FULL STACK DEVELOPER<span className="text-K-ASCENT">.</span>
      </p>
      <div className="">
        <p>GITHUB</p>
        <p>LINKEDIN</p>
        <p>EMAIL</p>
      </div>
    </div>
  );
};

export default AboutSection;
