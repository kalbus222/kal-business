"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type CarouselSlide = {
  title: string;
  image: string;
  alt: string;
};

interface ProductCarouselProps {
  slides: CarouselSlide[];
  className?: string;
}

export function ProductCarousel({ slides, className }: ProductCarouselProps) {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className={cn(
        "w-full relative rounded-[2rem] overflow-hidden",
        className
      )}
      opts={{
        loop: true, // Enable looping
        align: "start",
      }}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="relative">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem]">
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-primary/50 z-10" />

              {/* Background image */}
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />

              {/* Content */}
              <div className="absolute top-8 left-8 md:bottom-8 md:left-16 z-20">
                <h2 className="text-white text-2xl md:text-3xl font-sofia-sans tracking-wide">
                  {slide.title.split(" ").map((word, i) => (
                    <React.Fragment key={i}>
                      {word}
                      {i < slide.title.split(" ").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h2>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Custom navigation dots */}
      <div className="absolute bottom-8 right-32 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "w-2 h-[5px] rounded-full transition-all",
              current === index ? "w-8 bg-[#52acdc]" : "bg-secondary"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Custom next button */}
      <div className="absolute bottom-6 right-8 z-20">
        <button
          onClick={() => api?.scrollNext()}
          className="w-18 h-10 rounded-full border border-white flex px-2 items-center justify-end"
          aria-label="Next slide"
        >
          <ArrowRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </Carousel>
  );
}
