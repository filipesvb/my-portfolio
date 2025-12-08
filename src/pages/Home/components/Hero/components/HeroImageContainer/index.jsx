import HoverableWithBall from "@/components/HoverableWithBall";
import Me from "@/assets/imgs/me.jpg";
import { Link } from "react-router";

const HeroImageContainer = () => {
  return (
    <div className="flex-3/5 relative flex hidden items-center justify-center md:flex">
      <Link to={"/contato"} className="h-full w-2/3 rounded-full">
        <HoverableWithBall
          ballText="hero_image_cta"
          className="relative h-full w-full rounded-full"
        >
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <img src={Me} className="absolute left-0 top-0" />
            </div>
          </div>
        </HoverableWithBall>
      </Link>
    </div>
  );
};

export default HeroImageContainer;
