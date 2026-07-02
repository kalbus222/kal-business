import Image from "next/image";
import videoClip from "../../public/images/videoClip.png";
import { ArrowDown } from "lucide-react";
import {
  AdvancedCarousel,
  type CarouselItem,
} from "@/components/ui/AdvancedCarousel";

import Link from "next/link";

const productionItems: CarouselItem[] = [
  {
    id: 1,
    title: "YEM FILM",
    subtitle: "PRODUCTION",
    description:
      "YemFilm Production is a creative hub dedicated to bringing captivating stories to life. We specialize in producing high-quality films, with a focus on innovative storytelling and cinematic excellence.",
    youtubeLink: "https://www.youtube.com/@YemFilmProduction",
  },
  {
    id: 2,
    title: "TAFACHOCHU LIJOCH",
    subtitle: "KIDS PRODUCTION",
    description:
      "create fun and exciting videos for kids, filled with games, songs, challenges, crafts, and more! Whether you want to learn something new or just have a blast, you’re in the right place. Join us for loads of laughter, creativity, and adventures — don’t forget to hit subscribe and never miss the fun!",
    youtubeLink: "https://www.youtube.com/@tafachochu_lijoch",
  },
  {
    id: 3,
    title: "YE-WAN PRODUCTION",
    subtitle: "FILM CHANNEL",
    description:
      "Ye-wan Production shares film content, behind-the-scenes moments, and creative work that expands the studio's production lineup.",
    youtubeLink: "https://www.youtube.com/@Ye_wan_Production",
  },
  {
    id: 4,
    title: "YE-WAN PRODUCTION 2",
    subtitle: "FILM CHANNEL",
    description:
      "A second Ye-wan production channel featuring more projects, updates, and film-related content.",
    youtubeLink: "https://www.youtube.com/@kal222-d5c",
  },
  {
    id: 5,
    title: "YEM FILM ACADEMY",
    subtitle: "TRAINING CHANNEL",
    description:
      "YEM Film Academy focuses on training, learning, and the creative process behind filmmaking and visual storytelling.",
    youtubeLink: "https://www.youtube.com/@YemFilmAcademy-p8t",
  },
];

export function FilmSection() {
  return (
    <>
      <div className="md:hidden px-10 space-y-4 my-6">
        <h2 className="font-sofia-sans text-4xl text-foreground">
          FROM SCRIPT <br /> <span className="text-accent">TO SCREEN</span>
        </h2>
        <video
          src="/videos/output.webm"
          className="w-full h-full object-cover rounded-3xl"
          autoPlay
          loop
          muted
        />
      </div>
      <section className="w-full h-fit md:py-12 px-4 md:px-12">
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 grid-rows-1 place-items-center">
          <div className="hidden md:block relative h-fit col-start-1 row-start-1 w-full">
            <h2 className="absolute right-0 font-sofia-sans text-5xl text-foreground">
              FROM SCRIPT <br /> <span className="text-accent">TO SCREEN</span>
            </h2>
            <video
              src="/videos/output.webm"
              className="w-full h-full object-cover [mask-image:url('/images/videoClip.png')] [mask-size:contain] [mask-repeat:no-repeat]"
              autoPlay
              loop
              muted
            />
          </div>
          <div className="bg-primary w-full rounded-3xl p-6 md:p-12 space-y-4 col-start-1 row-start-1 z-10 mt-4 md:mt-96">
            <div className="flex justify-between">
              <h2 className="font-sofia-sans text-3xl text-white">
                SOME OF OUR <br />{" "}
                <span className="text-accent">PRODUCTIONS</span>
              </h2>
              <Link
                href="/film"
                className="group w-10 h-10 rounded-full border border-accent flex items-center px-2 justify-center hover:justify-end hover:w-18 transition-all ease-in"
              >
                <ArrowDown className="w-5 h-5 text-accent -rotate-45 group-hover:-rotate-90 transition-all ease-in" />
              </Link>
            </div>
            <AdvancedCarousel
              items={productionItems}
              showArrows={false}
              autoPlay={true}
            />
          </div>
        </div>
      </section>
    </>
  );
}
