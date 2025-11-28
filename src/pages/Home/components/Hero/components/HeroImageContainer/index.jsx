import HoverableWithBall from "@/components/HoverableWithBall";
import Me from "@/assets/imgs/me.jpg";

const HeroImageContainer = () => {
  return (
    <div className="flex-3/5 flex justify-center items-center relative hidden md:flex ">
      <HoverableWithBall
        ballText="hero_image_cta"
        className="rounded-full w-2/3 pt-[65%]  relative"
      >
        <div className="absolute top-0 left-0 h-full w-full pointer-events-none">
          <div className="relative overflow-hidden h-full w-full rounded-full">
            <img src={Me} className="absolute top-0 left-0" />
          </div>
        </div>
      </HoverableWithBall>
    </div>
  );
};

export default HeroImageContainer;
