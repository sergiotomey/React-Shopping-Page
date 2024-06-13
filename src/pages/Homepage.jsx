import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
function Homepage() {
  return (
    <div className="homepage h-full">
      <div className="text-center mt-5 mb-5">
        <h1 className="font-bold text-lg">Welcome to My Store</h1>
        <h3>Home of Exceptional Quality and Unbeatable Prices</h3>
        <p className="font-bold">Check out some of our best sellers</p>
      </div>
      <div className="carousel">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <img
                className="carousel-item"
                src="/assets/81fPKd-2AYL._AC_SL1500_.jpg"
                alt=""
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="carousel-item"
                src="/assets/71YXzeOuslL._AC_UY879_.jpg"
                alt=""
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="carousel-item"
                src="/assets/71li-ujtlUL._AC_UX679_.jpg"
                alt=""
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="carousel-item"
                src="/assets/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
                alt=""
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="carousel-item"
                src="/assets/51Y5NI-I5jL._AC_UX679_.jpg"
                alt=""
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="footer">
        <p className="text-center mt-5">
          Made by Sergio Tomey using ReactJS, Shadcn and FakeStoreAPI
        </p>
      </div>
    </div>
  );
}

export default Homepage;
