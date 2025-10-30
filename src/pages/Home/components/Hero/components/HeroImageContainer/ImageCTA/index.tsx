import { useTranslation } from "react-i18next";

interface ImageCTAProps {
  active: boolean,
  x: number,
  y: number
}

const ImageCTA = ({active, x, y} : ImageCTAProps) => {
  const { t } = useTranslation("hero");
  
  return (

    active ?
    <div
      className="rounded-full bg-yellow-300 text-black w-25 h-25 absolute flex justify-center items-center text-center leading-none pointer-events-none
       transition-all duration-400 ease-out"
      style={{"transform": `translate(${x - 50}px, ${y -50}px)`,"left": "0%", "top": `0%`}}
    >
      {t("hero_image_cta")}
    </div>
    :
    <></>
    
    
  );
};

export default ImageCTA;
