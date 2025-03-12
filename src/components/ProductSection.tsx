import { ArrowDown } from "lucide-react";
import { ProductCarousel } from "@/components/ProductCarousel";
import { cn } from "@/lib/utils";

interface SourcingSectionProps {
  className?: string;
}

const carouselSlides = [
  {
    title: "STATIONERY PRODUCTS",
    image: "/images/stationery.png",
    alt: "Various stationery items including pens, folders and papers",
  },
  {
    title: "OFFICE FURNITURE",
    image: "/images/officefurniture.png",
    alt: "Office supplies and equipment",
  },
  {
    title: "CLEANING SUPPLIES",
    image: "/images/cleaningsupplies.png",
    alt: "Professional printing materials",
  },
  {
    title: "ELECTRONICS",
    image: "/images/electronics.png",
    alt: "Electronics",
  },
  {
    title: "UNIFORMS",
    image: "/images/uniform.png",
    alt: "uniform",
  },
];

export function SourcingSection({ className }: SourcingSectionProps) {
  return (
    <section className={cn("w-full py-12 px-5 md:px-12", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="flex flex-col space-y-6">
            {/* Top panel */}
            <div className="bg-[#101724] rounded-3xl p-8 flex flex-col justify-between min-h-[200px]">
              <h2 className="text-[#52acdc] text-3xl md:text-4xl font-sofia-sans leading-tight">
                SEAMLESS SOURCING
                <br />& SUPPLY SOLUTIONS
              </h2>
              <div className="mt-6">
                <button className="group w-10 h-10 rounded-full border border-[#52acdc] flex items-center px-2 justify-center hover:justify-end hover:w-18 transition-all ease-in">
                  <ArrowDown className="w-5 h-5 text-[#52acdc] -rotate-45 group-hover:-rotate-90 transition-all ease-in" />
                </button>
              </div>
            </div>

            {/* Carousel */}
            <div className="w-full">
              <ProductCarousel slides={carouselSlides} />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-center lg:pl-8 mt-8 lg:mt-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sofia-sans font-semibold text-foreground leading-tight mb-8">
              QUALITY
              <br />
              PRODUCTS,
              <br />
              RELIABLE
              <br />
              DELIVERY.
            </h2>
            <p className="text-[#52acdc] font-mulish text-xl leading-relaxed">
              We source and supply high-quality goods efficiently, so you can
              focus on growing your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
