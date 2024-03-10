import MyCarousel from "./HomeComponents/Carousel";
import Registerpage from "./HomeComponents/Prime";

function HomePage() {
  return (
    <div>
      <div className="flex flex-col justify-center absolute w-full h-screen z-10">
        <Registerpage/>
      </div>

      <div>
        <MyCarousel/>
      </div>
    </div>
  )
}

export default HomePage
