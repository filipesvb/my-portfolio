import HoverableWithBall from "@/components/HoverableWithBall";

const HeroImageContainer = () => {
  return (
    <div className="flex-3/5 flex justify-center items-center relative hidden md:block">
      <HoverableWithBall
        ballText="hero_image_cta"
        className="rounded-full w-2/3 pt-[65%] border border-dotted relative"
      ></HoverableWithBall>
    </div>
  );
};

export default HeroImageContainer;
