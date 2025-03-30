import Image from "next/image";
import {
  ArrowRight,
  Film,
  Video,
  Camera,
  Edit,
  Music,
  Users,
  Youtube,
  Play,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ContactCTA } from "@/components/ContactCTA";

export default function FilmProductionPage() {
  return (
    <main className="min-h-screen bg-background font-sofia-sans">
      {/* Page Header */}
      <PageHeader
        title="KALWOOD"
        subtitle="FILM INDUSTRY"
        description="Our name combines the two amharic words 'Kal', meaning pledge, and 'Wood', meaning precious. Together, it symbolizes a precious commitment; a dedication to storytelling, creativity, and excellence in filmmaking."
      />

      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[60vh] relative">
          <Image
            src="/images/film.jpg"
            alt="Film production scene"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="container mx-auto px-4 md:px-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
                  FROM SCRIPT
                  <br />
                  <span className="text-accent">TO SCREEN</span>
                </h2>
                <p className="font-mulish text-white/90 text-lg mb-8">
                  We bring stories to life through captivating visuals,
                  compelling narratives, and technical excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
            Our Production
            <br />
            <span className="text-accent">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-primary p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <Film className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Feature Films
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Full-length cinematic productions with compelling storytelling
                and high production value.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-primary p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <Video className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Documentaries
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Thought-provoking non-fiction storytelling that captures
                real-world subjects and events.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-primary p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <Camera className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Commercial Production
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                High-impact advertising content that showcases your brand and
                engages your audience.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-primary p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <Edit className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Post-Production
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Expert editing, color grading, visual effects, and sound design
                to perfect your production.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-primary p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <Music className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Sound Design
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Immersive audio experiences including original music, sound
                effects, and audio mixing.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-primary p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Talent Management
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Access to a network of skilled actors, directors, and production
                professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Partner Channels Section */}
      <section className="py-16 px-6 md:px-12 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
            Our YouTube
            <br />
            <span className="text-accent">Channels</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Yem Productions */}
            <div className="bg-primary rounded-3xl overflow-hidden shadow-md">
              <div className="aspect-video relative">
                <Image
                  src="/images/yem.png"
                  alt="Yem Productions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Youtube className="w-20 h-20 text-[#ff0000]" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-accent">
                    Yem Productions
                  </h3>
                  <a
                    href="https://youtube.com/channel/yemproductions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#ff0000] text-white px-4 py-2 rounded-full hover:bg-[#cc0000] transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                    <span>Subscribe</span>
                  </a>
                </div>
                <p className="font-mulish text-white/50 mb-4">
                  Yem Productions specializes in creating thought-provoking
                  documentaries and short films that explore cultural identities
                  and social issues. With a focus on authentic storytelling,
                  their channel has garnered recognition for its compelling
                  narratives and cinematic quality.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-sm">
                    Cultural Films
                  </span>
                  <span className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-sm">
                    Social Impact
                  </span>
                </div>
              </div>
            </div>

            {/* The Sweet Children Production */}
            <div className="bg-primary rounded-3xl overflow-hidden shadow-md">
              <div className="aspect-video relative">
                <Image
                  src="/images/scp1.png"
                  alt="The Sweet Children Production"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Youtube className="w-20 h-20 text-[#ff0000]" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-accent">
                    The Sweet Children Production
                  </h3>
                  <a
                    href="https://youtube.com/channel/sweetchildrenproduction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#ff0000] text-white px-4 py-2 rounded-full hover:bg-[#cc0000] transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                    <span>Subscribe</span>
                  </a>
                </div>
                <p className="font-mulish text-white/70 mb-4">
                  The Sweet Children Production creates heartwarming content
                  focused on children's stories and educational entertainment.
                  Their channel features a mix of animated shorts, educational
                  series, and family-friendly documentaries that inspire young
                  minds while entertaining viewers of all ages.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-sm">
                    Children's Content
                  </span>
                  <span className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-sm">
                    Educational
                  </span>
                  <span className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-sm">
                    Family-Friendly
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center space-y-4">
            <p className="font-mulish text-foreground">
              Watch our latest works with these amazing production houses on
              their YouTube channels.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://youtube.com/channel/yemproductions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full hover:bg-foreground/60 transition-colors"
              >
                <Play className="w-5 h-5" />
                <span>Yem Productions</span>
              </a>
              <a
                href="https://youtube.com/channel/sweetchildrenproduction"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full hover:bg-foreground/60 transition-colors"
              >
                <Play className="w-5 h-5" />
                <span>Sweet Children</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 md:px-12 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
            Our Production
            <br />
            <span className="text-accent">Process</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-accent/20 transform -translate-x-1/2"></div>

            <div className="space-y-12 md:space-y-0">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-2xl font-semibold text-accent mb-4">
                    Concept Development
                  </h3>
                  <p className="font-mulish text-foreground mb-4">
                    We work closely with you to understand your vision and
                    develop a compelling concept that aligns with your goals.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 top-6 w-8 h-8 rounded-full bg-accent transform -translate-x-1/2"></div>
                <div className="mt-4 md:mt-0 md:pl-12">
                  <Image
                    src="/images/concept.png"
                    alt="Concept development"
                    width={400}
                    height={300}
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="md:order-2 md:pl-12">
                  <h3 className="text-2xl font-semibold text-accent mb-4">
                    Pre-Production
                  </h3>
                  <p className="font-mulish text-foreground mb-4">
                    Meticulous planning including scriptwriting, storyboarding,
                    location scouting, and casting to ensure a smooth production
                    process.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 top-6 w-8 h-8 rounded-full bg-accent transform -translate-x-1/2"></div>
                <div className="mt-4 md:mt-0 md:order-1 md:text-right md:pr-12">
                  <Image
                    src="/images/plan.png"
                    alt="Pre-production"
                    width={400}
                    height={300}
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </div>

              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-2xl font-semibold text-accent mb-4">
                    Production
                  </h3>
                  <p className="font-mulish text-foreground mb-4">
                    Professional filming with state-of-the-art equipment and
                    experienced crew to capture high-quality footage.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 top-6 w-8 h-8 rounded-full bg-accent transform -translate-x-1/2"></div>
                <div className="mt-4 md:mt-0 md:pl-12">
                  <Image
                    src="/images/clapper.png"
                    alt="Production"
                    width={400}
                    height={300}
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="md:order-2 md:pl-12">
                  <h3 className="text-2xl font-semibold text-accent mb-4">
                    Post-Production
                  </h3>
                  <p className="font-mulish text-foreground mb-4">
                    Expert editing, color grading, sound design, and visual
                    effects to transform raw footage into a polished final
                    product.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 top-6 w-8 h-8 rounded-full bg-accent transform -translate-x-1/2"></div>
                <div className="mt-4 md:mt-0 md:order-1 md:text-right md:pr-12">
                  <Image
                    src="/images/editing.png"
                    alt="Post-production"
                    width={400}
                    height={300}
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4 md:px-12 bg-primary">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 text-center">
            Featured
            <br />
            <span className="text-accent">Productions</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <div className="group relative rounded-3xl overflow-hidden">
              <Image
                src="/images/yetefaw.jpg"
                alt="Featured production 1"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {"የጠፈዉ ገፅ (yetefew gets) "}
                </h3>
                <p className="font-mulish text-white/80">Short Film</p>
                <a
                  href="https://www.youtube.com/watch?v=uTAhT0EACuw"
                  target="_blank"
                  className="mt-4 bg-accent hover:bg-accent text-white font-semibold py-2 px-4 rounded-full flex items-center gap-2 transition-colors w-fit"
                >
                  Watch <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="group relative rounded-3xl overflow-hidden">
              <Image
                src="/images/tilk.jpg"
                alt="Featured production 2"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {"ጥልቅ ፍቅር (Tilk Fikir)"}
                </h3>
                <p className="font-mulish text-white/80">Short Film</p>
                <a
                  href="https://www.youtube.com/watch?v=9oghSUwuObk"
                  target="_blank"
                  className="mt-4 bg-accent hover:bg-accent text-white font-semibold py-2 px-4 rounded-full flex items-center gap-2 transition-colors w-fit"
                >
                  Watch <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="group relative rounded-3xl overflow-hidden">
              <Image
                src="/images/kibir.jpg"
                alt="Featured production 3"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {"ክ-ብር (ke-birr)"}
                </h3>
                <p className="font-mulish text-white/80">Short Film</p>
                <a
                  href="https://www.youtube.com/watch?v=oZFh8cW4Zxo&t=32s"
                  target="_blank"
                  className="mt-4 bg-accent hover:bg-accent text-white font-semibold py-2 px-4 rounded-full flex items-center gap-2 transition-colors w-fit"
                >
                  Watch <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA />
    </main>
  );
}
