const AboutSectionMainAnimation = () => {
  return (
    <div className="-z-10 absolute -bottom-60 right-[38rem]">
      {Array.from({ length: 4 }).map((_, index) => {
        return Array.from({ length: 50 }).map((_, i) => {
          return (
            <div
              key={`MAIN_ANIMATION_${index}_${i}`}
              style={{
                animation: `flow 6s ease-in-out ${
                  1500 * index + 40 * i
                }ms infinite`,
              }}
              className="animate-flow absolute bg-K-GREY-DARK w-[125rem] h-[2px]"
            ></div>
          );
        });
      })}
    </div>
  );
};

export default AboutSectionMainAnimation;
