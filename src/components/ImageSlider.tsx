"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AutoImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  interval?: number;
  className?: string;
  transitionEffect?: "fade" | "slide" | "zoom" | "blur" | "split";
  showIndicators?: boolean;
}

export function AutoImageCarousel({
  images,
  interval = 5000,
  className,
  transitionEffect = "fade",
  showIndicators = true,
}: AutoImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Reset the timeout when index changes
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // Duration of transition animation
    }, interval);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, interval, images.length]);

  // Effects classes for transitions
  const getTransitionClasses = (index: number) => {
    const isActive = index === currentIndex;

    const baseClasses =
      "absolute inset-0 w-full h-full transition-all duration-500";

    if (transitionEffect === "fade") {
      return cn(baseClasses, isActive ? "opacity-100" : "opacity-0");
    }

    if (transitionEffect === "slide") {
      return cn(
        baseClasses,
        isActive
          ? "translate-x-0 opacity-100"
          : index < currentIndex
          ? "-translate-x-full opacity-0"
          : "translate-x-full opacity-0"
      );
    }

    if (transitionEffect === "zoom") {
      return cn(
        baseClasses,
        isActive ? "scale-100 opacity-100" : "scale-110 opacity-0"
      );
    }

    if (transitionEffect === "blur") {
      return cn(
        baseClasses,
        isActive ? "blur-0 opacity-100" : "blur-md opacity-0"
      );
    }

    if (transitionEffect === "split") {
      return cn(
        baseClasses,
        "grid grid-cols-3",
        isActive
          ? "opacity-100 [&>div]:translate-y-0"
          : "opacity-0 [&>div:nth-child(1)]:-translate-y-full [&>div:nth-child(2)]:translate-y-0 [&>div:nth-child(3)]:translate-y-full"
      );
    }

    return baseClasses;
  };

  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-3xl", className)}
      style={{ aspectRatio: "16/9" }}
    >
      {images.map((image, index) => {
        if (transitionEffect === "split") {
          // Special handling for split effect
          return (
            <div key={index} className={getTransitionClasses(index)}>
              <div className="h-full overflow-hidden transition-transform duration-700 delay-100">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover object-left"
                />
              </div>
              <div className="h-full overflow-hidden transition-transform duration-700 delay-200">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="h-full overflow-hidden transition-transform duration-700 delay-300">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover object-right"
                />
              </div>
            </div>
          );
        } else {
          // Standard effects
          return (
            <div key={index} className={getTransitionClasses(index)}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover [mask-image:url('/images/photo-content.png')] [mask-size:contain] [mask-repeat:no-repeat]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          );
        }
      })}

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentIndex ? "w-8 bg-[#52acdc]" : "bg-white/50"
              )}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
