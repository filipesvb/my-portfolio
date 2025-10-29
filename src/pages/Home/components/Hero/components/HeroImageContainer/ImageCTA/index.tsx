
interface ImageCTAProps {
  active: boolean,
  x: number,
  y: number
}

const ImageCTA = ({active, x, y} : ImageCTAProps) => {
  return (

    active ?
    <div
      className="rounded-full bg-yellow-500 w-25 h-25 absolute flex justify-center items-center text-center pointer-events-none
       transition-all duration-400 ease-out"
      style={{"transform": `translate(${x - 50}px, ${y -50}px)`,"left": "0%", "top": `0%`}}
    >
      GET IN TOUCH
    </div>
    :
    <></>
    
    
  );
};

export default ImageCTA;
