import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imgSlide from "../../data/slideshow";
import "./MyCarousel.css";

function MyCarousel() {
  return (
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        className="carousel-container"
      >
        {imgSlide.map((s) => (
          <div key={s.id} className="carousel-slide">
            <img
              src={s.src}
              alt={s.alt}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default MyCarousel;
