const AboutSectionMainAnimation = () => {
  return (
    <div className="-z-10 absolute -bottom-60 right-[38rem]">
      {Array.from({ length: 50 }).map((_, i) => {
        return (
          <div
            style={{
              animation: `flow 6s ease-in-out ${40 * i}ms infinite`,
            }}
            className="animate-flow absolute bg-K-GREY-DARK w-[125rem] h-[2px]"
          ></div>
        );
      })}
      {Array.from({ length: 50 }).map((_, i) => {
        return (
          <div
            style={{
              animation: `flow 6s ease-in-out ${1500 + 40 * i}ms infinite`,
            }}
            className="animate-flow absolute bg-K-GREY-DARK w-[125rem] h-[2px]"
          ></div>
        );
      })}
      {Array.from({ length: 50 }).map((_, i) => {
        return (
          <div
            style={{
              animation: `flow 6s ease-in-out ${3000 + 40 * i}ms infinite`,
            }}
            className="animate-flow absolute bg-K-GREY-DARK w-[125rem] h-[2px]"
          ></div>
        );
      })}
      {Array.from({ length: 50 }).map((_, i) => {
        return (
          <div
            style={{
              animation: `flow 6s ease-in-out ${4500 + 40 * i}ms infinite`,
            }}
            className="animate-flow absolute bg-K-GREY-DARK w-[125rem] h-[2px]"
          ></div>
        );
      })}
    </div>
  );
};

export default AboutSectionMainAnimation;
