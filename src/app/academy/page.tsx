import Image from "next/image";
import {
  ArrowRight,
  PenLine,
  Clapperboard,
  Drama,
  Camera,
  Scissors,
  Palette,
  GraduationCap,
  BellRing,
  Sparkles,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ContactCTA } from "@/components/ContactCTA";

const courses = [
  {
    icon: PenLine,
    title: "Script Writing",
    description:
      "Craft compelling stories, develop memorable characters, and master the structure of screenplays that captivate audiences.",
    image: "/images/writing.jpeg",
  },
  {
    icon: Clapperboard,
    title: "Directing",
    description:
      "Learn the art of guiding a vision from page to screen, leading cast and crew to bring stories to life.",
    image: "/images/concept.png",
  },
  {
    icon: Drama,
    title: "Acting",
    description:
      "Develop your craft in front of the camera through performance technique, emotional range, and on-set confidence.",
    image: "/images/photo-content.png",
  },
  {
    icon: Camera,
    title: "Cinematography",
    description:
      "Master camera work, lighting, and composition to create the striking visuals that define great cinema.",
    image: "/images/film1.jpg",
  },
  {
    icon: Scissors,
    title: "Film Editing",
    description:
      "Shape raw footage into a polished narrative with pacing, rhythm, and storytelling through the cut.",
    image: "/images/editing.png",
  },
  {
    icon: Palette,
    title: "Graphics Design",
    description:
      "Create posters, titles, and motion graphics that give every production its distinctive visual identity.",
    image: "/images/plan.png",
  },
];

export default function FilmAcademyPage() {
  return (
    <main className="min-h-screen bg-background font-sofia-sans">
      {/* Page Header */}
      <PageHeader
        title="YEM FILM"
        subtitle="ACADEMY"
        description="Where the next generation of storytellers is born. Learn the craft of filmmaking from script to screen through hands-on training across every discipline of the industry."
      />

      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[60vh] relative">
          <Image
            src="/images/filmmaker.png"
            alt="Film academy students on set"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="container mx-auto px-4 md:px-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
                  LEARN THE CRAFT
                  <br />
                  <span className="text-accent">MASTER THE ART</span>
                </h2>
                <p className="font-mulish text-white/90 text-lg mb-8">
                  Six disciplines. One immersive program. Build the skills to
                  tell stories that move the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 md:px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
            What You&apos;ll
            <br />
            <span className="text-accent">Study</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.title}
                  className="group bg-primary rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {course.title}
                    </h3>
                    <p className="font-mulish text-white/80">
                      {course.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why YEM Section */}
      <section className="py-16 px-4 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Learn From a Working
                <br />
                <span className="text-accent">Production House</span>
              </h2>
              <p className="font-mulish text-foreground/80 mb-6">
                YEM Film Academy is powered by the team behind Kalwood&apos;s
                film productions. That means you don&apos;t just study theory;
                you train on real sets, with real equipment, alongside
                professionals who are actively making films.
              </p>
              <p className="font-mulish text-foreground/80 mb-6">
                Our program blends classroom fundamentals with hands-on practice
                across every department, so you graduate with a portfolio and
                the experience to step straight onto a production.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-mulish">
                  Hands-on Training
                </span>
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-mulish">
                  Industry Mentors
                </span>
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-mulish">
                  Real Productions
                </span>
              </div>
            </div>
            <div className="order-1 lg:order-2 rounded-3xl overflow-hidden">
              <Image
                src="/images/clapper.png"
                alt="Students learning filmmaking"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registration Coming Soon Section */}
      <section className="py-16 px-4 md:px-12">
        <div className="container mx-auto">
          <div className="relative bg-primary rounded-3xl overflow-hidden p-10 md:p-16 text-center">
            {/* Decorative glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-mulish mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Enrollment Opening Soon</span>
              </div>

              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-accent" />
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
                Registration
                <br />
                <span className="text-accent">Coming Soon</span>
              </h2>
              <p className="font-mulish text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Our first cohort is just around the corner. Leave your details
                below and we&apos;ll be the first to let you know when
                applications open.
              </p>

              <a
                href="#contact-section"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-[#aa883e] transition-colors"
              >
                <BellRing className="w-5 h-5" />
                <span>Notify Me</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA />
    </main>
  );
}
