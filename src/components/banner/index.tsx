import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselImage1 from "../../assets/images/honda-1.png";
import carouselImage2 from "../../assets/images/tvs_tricycle.jpg";
import carouselImage3 from "../../assets/images/daylong-tri.jpg";
const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={true}
        interval={5000}
      >
        <div className="w-full mx-auto bg-blue-50">
          <div className="w-80 mx-auto">
            <Image
              src={carouselImage1}
              width={700}
              height={700}
              className="object-contain w-full"
              alt="Honda photo"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full mx-auto bg-yellow-50">
          <div className="w-80 mx-auto">
            <Image
              src={carouselImage2}
              width={1000}
              height={1000}
              className="object-contain w-full"
              alt="Honda photo"
              loading="lazy"
            />
          </div>
        </div>
        <div className="w-full mx-auto bg-orange-50">
          <div className="w-80 mx-auto">
            <Image
              src={carouselImage3}
              width={1000}
              height={1000}
              className="object-contain w-full "
              alt="Honda photo"
              loading="lazy"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
