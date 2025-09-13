"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface SlideData {
  image: string;
}

interface StaticCardData {
  image1: string;
  image2: string;
  image3: string;
  title: string;
  description: string;
}

export default function HeroSwiper() {
  const section1: SlideData[] = [
    { image: "/slide1.jpg" },
    { image: "/slide2.jpg" },
    { image: "/slide3.jpg" },
    { image: "/slide4.jpg" },
    { image: "/slide5.jpg" },
  ];

  const section2: StaticCardData = {
    image1: "/layer1.jpg",
    image2: "/layer2.jpg",
    image3: "/layer3.jpg",
    title: "Open Source Model",
    description: "We're making the weights to our FLUX 1.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Images.",
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4 flex flex-col lg:flex-row gap-6">
      <div className="relative flex-grow h-[500px] rounded-3xl overflow-hidden shadow-md">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          loop={false}
          spaceBetween={1}
          slidesPerView={3}
          className="h-full rounded-3xl"
        >
          {section1.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 z-10">
          <span className="text-white/70 text-sm font-semibold mb-2">GENERATIVE MODEL</span>
          <h1 className="text-6xl font-bold text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            WAN 2.2
          </h1>
          <h2 className="text-2xl font-bold text-white">WAN 2.2 Image generation</h2>
          <p className="text-gray-200 mt-2 max-w-lg">
            Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.
          </p>
          <button className="mt-4 px-3 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors self-end">
            Try WAN 2.2
          </button>
        </div>
      </div>

      <div className="relative h-[500px] w-full lg:w-[400px] rounded-3xl overflow-hidden shadow-md shrink-0">
        <img
          src={section2.image3}
          alt="Open Source Model"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
          <span className="text-white/70 text-sm font-semibold mb-2">OPEN SOURCE MODEL</span>
          <h2 className="text-4xl font-bold text-white">FLUX 1.1 Krea</h2>
          <p className="text-gray-200 mt-2">{section2.description}</p>
        </div>
      </div>
    </div>
  );
}