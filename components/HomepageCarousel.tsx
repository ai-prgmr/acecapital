"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const carouselImages = [
  "/acecapital/images/homepage-carousel/slide-1.png",
  "/acecapital/images/homepage-carousel/slide-2.png",
  "/acecapital/images/homepage-carousel/slide-3.png",
  "/acecapital/images/homepage-carousel/slide-4.png",
  "/acecapital/images/homepage-carousel/slide-5.png",
]

export function HomepageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )

  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent>
          {carouselImages.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full aspect-[21/9] md:aspect-[21/7] max-h-[600px]">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  draggable={false}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-8" />
          <CarouselNext className="right-8" />
        </div>
      </Carousel>
    </div>
  )
}
