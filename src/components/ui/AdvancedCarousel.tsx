"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import { ArrowRight, ArrowLeft, Play, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export type CarouselItem = {
  id: string | number;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  video?: string;
  youtubeLink?: string;
  content?: ReactNode;
};

interface AdvancedCarouselProps {
  items: CarouselItem[];
  className?: string;
  showArrows?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  transitionDuration?: number;
  loop?: boolean;
  initialIndex?: number;
  renderItem?: (
    item: CarouselItem,
    index: number,
    isActive: boolean
  ) => ReactNode;
  onSlideChange?: (currentIndex: number) => void;
  cardStyle?: "split" | "full" | "overlay";
  arrowStyle?: "circle" | "square" | "minimal";
  dotStyle?: "line" | "dot" | "pill";
}

export function AdvancedCarousel({
  items,
  className,
  showArrows = true,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  transitionDuration = 300,
  loop = true,
  initialIndex = 0,
  renderItem,
  onSlideChange,
  cardStyle = "split",
  arrowStyle = "circle",
  dotStyle = "pill",
}: AdvancedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // Handle slide navigation
  const goToSlide = (index: number) => {
    if (isTransitioning) return;

    let newIndex = index;
    if (index < 0) {
      newIndex = loop ? items.length - 1 : 0;
    } else if (index >= items.length) {
      newIndex = loop ? 0 : items.length - 1;
    }

    if (newIndex !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(newIndex);
      onSlideChange?.(newIndex);
    }
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  // Handle autoplay
  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(nextSlide, autoPlayInterval);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, currentIndex]);

  // Reset transition state after animation completes
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, transitionDuration]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Open YouTube link in a new tab
  const openYoutubeLink = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  // Default item renderer
  const defaultRenderItem = (
    item: CarouselItem,
    index: number,
    isActive: boolean
  ) => {
    if (cardStyle === "split") {
      return (
        <div
          className={cn(
            "bg-primary grid grid-cols-1 md:grid-cols-2 border border-accent/30 rounded-3xl overflow-hidden transition-opacity",
            isActive
              ? "opacity-100"
              : "opacity-0 absolute top-0 left-0 pointer-events-none"
          )}
          style={{
            transition: `opacity ${transitionDuration}ms ease-in-out`,
          }}
        >
          {/* Left side */}
          <div className="p-8 md:p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-accent/20">
            <h3 className="text-center text-3xl font-bold">
              {item.title && <span className="text-accent">{item.title}</span>}
              {item.subtitle && (
                <>
                  <br />
                  <span className="text-white">{item.subtitle}</span>
                </>
              )}
            </h3>
          </div>

          {/* Right side */}
          <div className="p-8 md:p-12 flex flex-col justify-between">
            {item.description && (
              <p className="text-white/80 mb-8">{item.description}</p>
            )}

            {item.video && (
              <div className="relative mb-8 rounded-lg overflow-hidden">
                <video
                  ref={(el) => {
                    videoRefs.current[item.id.toString()] = el;
                  }}
                  className="w-full h-auto"
                  controls={false}
                  muted
                  loop
                >
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                  onClick={() => {
                    const video = videoRefs.current[item.id.toString()];
                    if (video) {
                      if (video.paused) {
                        video.play();
                      } else {
                        video.pause();
                      }
                    }
                  }}
                >
                  <Play className="w-12 h-12 text-white" />
                </button>
              </div>
            )}

            {item.image && !item.video && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title || "Carousel image"}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            <div>
              {item.youtubeLink ? (
                <button
                  onClick={() => openYoutubeLink(item.youtubeLink)}
                  className={cn(
                    "flex items-center justify-center text-accent",
                    arrowStyle === "circle" &&
                      "w-12 h-12 rounded-full border border-accent",
                    arrowStyle === "square" &&
                      "w-12 h-12 rounded-md border border-accent",
                    arrowStyle === "minimal" && "w-auto h-auto"
                  )}
                  aria-label="Watch on YouTube"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={nextSlide}
                  className={cn(
                    "flex items-center justify-center text-accent",
                    arrowStyle === "circle" &&
                      "w-12 h-12 rounded-full border border-accent",
                    arrowStyle === "square" &&
                      "w-12 h-12 rounded-md border border-accent",
                    arrowStyle === "minimal" && "w-auto h-auto"
                  )}
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    if (cardStyle === "full") {
      return (
        <div
          className={cn(
            "border border-accent/20 rounded-3xl overflow-hidden p-8 transition-opacity",
            isActive
              ? "opacity-100"
              : "opacity-0 absolute top-0 left-0 pointer-events-none"
          )}
          style={{
            transition: `opacity ${transitionDuration}ms ease-in-out`,
          }}
        >
          {item.title && (
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-accent">{item.title}</span>
              {item.subtitle && (
                <span className="text-white"> {item.subtitle}</span>
              )}
            </h3>
          )}

          {item.description && (
            <p className="text-white/80 mb-6">{item.description}</p>
          )}

          {item.image && (
            <div className="mb-6 rounded-lg overflow-hidden">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title || "Carousel image"}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {item.content && <div className="mb-6">{item.content}</div>}

          {item.youtubeLink && (
            <button
              onClick={() => openYoutubeLink(item.youtubeLink)}
              className="flex items-center gap-2 text-accent"
              aria-label="Watch on YouTube"
            >
              Watch on YouTube <ExternalLink className="w-4 h-4" />
            </button>
          )}
        </div>
      );
    }

    // Overlay style
    return (
      <div
        className={cn(
          "relative rounded-3xl overflow-hidden transition-opacity",
          isActive
            ? "opacity-100"
            : "opacity-0 absolute top-0 left-0 pointer-events-none"
        )}
        style={{
          transition: `opacity ${transitionDuration}ms ease-in-out`,
        }}
      >
        {item.image && (
          <div className="relative aspect-video">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title || "Carousel image"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-8">
          {item.title && (
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-accent">{item.title}</span>
              {item.subtitle && (
                <>
                  <br />
                  <span className="text-white">{item.subtitle}</span>
                </>
              )}
            </h3>
          )}

          {item.description && (
            <p className="text-white/80 mb-4">{item.description}</p>
          )}

          {item.youtubeLink && (
            <button
              onClick={() => openYoutubeLink(item.youtubeLink)}
              className="flex items-center gap-2 text-accent"
              aria-label="Watch on YouTube"
            >
              Watch on YouTube <ExternalLink className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={cn("relative", className)}>
      <div className="relative overflow-hidden">
        {/* Carousel items */}
        <div className="relative">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "w-full",
                index !== currentIndex && "hidden md:block"
              )}
            >
              {renderItem
                ? renderItem(item, index, index === currentIndex)
                : defaultRenderItem(item, index, index === currentIndex)}
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {showArrows && items.length > 1 && (
          <div className="hidden md:block">
            <button
              onClick={prevSlide}
              className={cn(
                "absolute top-1/2 left-4 transform -translate-y-1/2 z-10 text-accent",
                arrowStyle === "circle" &&
                  "w-10 h-10 rounded-full border border-accent flex items-center justify-center bg-primary/80",
                arrowStyle === "square" &&
                  "w-10 h-10 rounded-md border border-accent flex items-center justify-center bg-primary/80",
                arrowStyle === "minimal" && "w-auto h-auto"
              )}
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className={cn(
                "absolute top-1/2 right-4 transform -translate-y-1/2 z-10 text-accent",
                arrowStyle === "circle" &&
                  "w-10 h-10 rounded-full border border-accent flex items-center justify-center bg-primary/80",
                arrowStyle === "square" &&
                  "w-10 h-10 rounded-md border border-accent flex items-center justify-center bg-primary/80",
                arrowStyle === "minimal" && "w-auto h-auto"
              )}
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Navigation dots */}
      {showDots && items.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "transition-all",
                dotStyle === "dot" && "w-3 h-3 rounded-full",
                dotStyle === "pill" && "h-2 rounded-full",
                dotStyle === "line" && "h-1 rounded-none",
                index === currentIndex
                  ? cn(
                      "bg-accent",
                      dotStyle === "pill" && "w-8",
                      dotStyle === "line" && "w-8"
                    )
                  : cn(
                      "bg-white/30",
                      dotStyle === "pill" && "w-2",
                      dotStyle === "line" && "w-4"
                    )
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
