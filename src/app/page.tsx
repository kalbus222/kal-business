import Image from "next/image";
import sector1 from "../../public/images/sector1.jpg";
import sector2 from "../../public/images/sector2.jpg";
import sector3 from "../../public/images/sector3.jpg";
import bgShape from "../../public/images/bg-shape.png";
import { SourcingSection } from "@/components/ProductSection";
import { FinancialServices } from "@/components/AccountingSection";
import { FilmSection } from "@/components/FilmSection";
import { ContactCTA } from "@/components/ContactCTA";
import { ArrowDown } from "lucide-react";
import { AutoImageCarousel } from "@/components/ImageSlider";
import Link from "next/link";

const carouselImages = [
  {
    src: "/images/filmmaker.png",
    alt: "Film production scene with camera operator wearing a red mask",
  },
  {
    src: "/images/trading.png",
    alt: "Film production scene with camera operator wearing a red mask",
  },
  {
    src: "/images/accounting.png",
    alt: "Film production scene with camera operator wearing a red mask",
  },
];

export default function Home() {
  return (
    <div>
      <section className="pt-32 px-6 md:px-12 space-y-6 md:space-y-0">
        <div className="rounded-[40px] space-y-6 md:space-y-0">
          <div className="grid grid-cols-1 grid-rows-1 gap-6">
            <svg
              viewBox="0 0 1310 495"
              fill="none"
              className="hidden md:inline w-full col-start-1 row-start-1"
            >
              <path
                d="M655 40C655 17.9086 637.091 0 615 0H40C17.9086 0 0 17.9086 0 40V495H1310V405C1310 382.909 1292.09 365 1270 365H695C672.909 365 655 347.091 655 325V40Z"
                fill="#001F3F"
              />
            </svg>

            <div className="hidden md:flex flex-col w-1/2 z-10 col-start-1 row-start-1 justify-self-start lg:p-12 md:p-8">
              <h1 className="font-sofia-sans text-3xl lg:text-6xl text-white">
                YOUR ONE-STOP <br /> SOLUTION FOR <br />{" "}
                <span className="text-accent">BUSINESS</span>{" "}
              </h1>
              <Link
                href="#contact-section"
                className="group w-10 h-10 rounded-full border border-accent flex items-center px-2 justify-center hover:justify-end hover:w-18 transition-all ease-in"
              >
                <ArrowDown className="w-5 h-5 text-accent -rotate-45 group-hover:-rotate-90 transition-all ease-in" />
              </Link>
            </div>
            <div className="w-full md:w-[45%] z-10 col-start-1 row-start-1 justify-self-end">
              <AutoImageCarousel
                images={carouselImages}
                transitionEffect={"fade"}
                interval={2000}
              />
            </div>
          </div>
          <div className="bg-primary flex flex-col md:flex-row w-full  px-6 py-10 md:pt-0 rounded-3xl md:rounded-t-none md:px-24">
            <div className="md:hidden flex flex-col items-center w-full text-center mb-6">
              <h1 className="font-sofia-sans text-white text-3xl">
                YOUR ONE-STOP <br /> SOLUTION FOR <br />{" "}
                <span className="text-accent">BUSINESS</span>{" "}
              </h1>
              <button className="group w-10 h-10 rounded-full border border-accent flex items-center px-2 justify-center hover:justify-end hover:w-18 transition-all ease-in">
                <ArrowDown className="w-5 h-5 text-accent -rotate-45 group-hover:-rotate-90 transition-all ease-in" />
              </button>
            </div>
            <div className="text-center md:text-start flex flex-col gap-3 md:gap-6 basis-full rounded-4xl  rounded-bl-none md:rounded-tr-none border-[0.5px] border-accent/50 p-6">
              <Image
                src={sector1}
                className="object-cover h-24 rounded-full"
                alt="sector"
              />
              <h2 className="font-sofia-sans text-xl text-accent">
                General Trading
              </h2>
              <p className="text-secondary text-sm font-mulish font-light">
                Reliable sourcing and supply chain solutions tailored to your
                needs.
              </p>
            </div>
            <div className="text-center md:text-start flex flex-col gap-3 md:gap-6 basis-full rounded-4xl rounded-tl-none rounded-br-none md:rounded-tl-none md:rounded-br-none border-[0.5px] border-accent/50 p-6">
              <Image
                src={sector2}
                className="object-cover h-24 rounded-full"
                alt="sector"
              />
              <h2 className="font-sofia-sans text-xl text-accent">
                General Accounting & Consultancy
              </h2>
              <p className="text-secondary text-sm font-mulish font-light">
                Financial strategies that drive business success.
              </p>
            </div>
            <div className="text-center md:text-start flex flex-col gap-3 md:gap-6 basis-full rounded-4xl rounded-tr-none md:rounded-bl-none border-[0.5px] border-accent/50 p-6">
              <Image
                src={sector3}
                className="object-cover h-24 rounded-full"
                alt="sector"
              />
              <h2 className="font-sofia-sans text-xl text-accent">
                Film Production
              </h2>
              <p className="text-secondary text-sm font-mulish font-light">
                Transforming ideas into visual masterpieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SourcingSection />
      <FinancialServices />
      <FilmSection />
      <ContactCTA />
    </div>
  );
}
