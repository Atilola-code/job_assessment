"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

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
    <div className="w-full max-w-7xl mx-auto mt-4 px-4">
      <div className="flex flex-col lg:flex-row gap-6 h-fit">
        
        <div className="relative flex-1 h-[300px] rounded-3xl overflow-hidden shadow-md">
          <Swiper
            modules={[Pagination, Navigation, Mousewheel]}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active'
            }}
            mousewheel={{forceToAxis:true}}
            loop={true}
            spaceBetween={0}
            slidesPerView={2.7}
            className="h-full w-full"
            style={{
              '--swiper-pagination-color': '#ffffff',
              '--swiper-navigation-color': '#ffffff',
              '--swiper-pagination-bottom': '20px'
            } as React.CSSProperties & Record<string, string>}
          >
            {section1.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="w-full h-full object-cover" 
                    priority={index === 0}/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 pointer-events-none">
            <div className="h-full flex flex-col p-6">
              <div className="flex-shrink-0">
                <span className="text-white/70 text-sm font-semibold">GENERATIVE MODEL</span>
              </div>
              
              <div className="flex-1 flex items-center justify-center">
                <h1 className="text-5xl lg:text-6xl font-bold text-white text-center mt-12 leading-tight">
                  WAN 2.2
                </h1>
              </div>
              
              <div className="flex items-center justify-between mt-2 gap-4">
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-white text-sm mb-1">WAN 2.2 Image generation</h2>
                  <p className="text-gray-200 text-xs leading-tight max-w-md"> 
                    Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.
                  </p>
                </div>
                  <button className="px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors cursor-pointer">
                    Try WAN 2.2
                  </button>
            
                </div>
            </div>
          </div>
        </div>

        <div className="relative h-[300px] w-full lg:w-[400px] rounded-3xl overflow-hidden shadow-md shrink-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={section2.image1}
              alt="First layered image"
              width={300}
              height={300}
              className="absolute top-0 left-8 w-4/5 h-5/5 object-cover rounded-2xl shadow-lg z-20"
            />
            <Image
              src={section2.image2}
              alt="Second layered image"
              width={300}
              height={300}
              className="absolute top-2 left-16 w-3/5 h-5/5 object-cover rounded-2xl shadow-lg z-30"
            />
            <Image
              src={section2.image3}
              alt="Third layered image"
              width={300}
              height={300}
              className="absolute top-0 left-24 w-8/10 h-5/5 object-cover rounded-2xl shadow-lg z-40"/>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-50">
          <div className=" absolute top-1 left-1">
            <span className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-white/80 text-xs font-semibold">
                {section2.title.toUpperCase()}
            </span>
          </div>
          <div className="flex flex-col items-end justify-center">
            <h2 className="text-5xl font-semibold text-white leading-tight text-center mt-24">Open Sour</h2>
          </div>
            <div className="absolute bottom-4 left-0 right-0 px-6">
              <h2 className="text-3xl lg:text-xl font-bold text-white mb-1 leading-tight">FLUX 1.1 Krea</h2>
              <p className="text-gray-200 text-xs leading-tight">{section2.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 