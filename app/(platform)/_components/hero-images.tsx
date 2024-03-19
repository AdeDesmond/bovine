"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRef } from "react";

const cowImages = [
  {
    id: "dasdadasdedade",
    cow: "/images/hero/cow1.jpg",
  },
  {
    id: "dsdede2390dfi2we",
    cow: "/images/hero/cow2.jpg",
  },
  {
    id: "fwofwo23409ad",
    cow: "/images/hero/cow3.jpg",
  },
  {
    id: "fweifw324092e203",
    cow: "/images/hero/cow4.jpg",
  },
];

export const DisplayCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full z-10"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full">
        {cowImages.map((product) => (
          <CarouselItem key={product.id} className="w-full h-full pl-0">
            <div className="w-full h-[60vh] relative ">
              <Image
                src={product.cow}
                alt="image"
                fill
                className="object-cover "
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};
