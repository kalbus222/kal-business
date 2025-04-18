import Image from "next/image";
import {
  ArrowRight,
  Package,
  FileText,
  Users,
  Laptop,
  Sparkles,
  TruckIcon,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ContactCTA } from "@/components/ContactCTA";

export default function GeneralTradingPage() {
  return (
    <main className="min-h-screen bg-background font-sofia-sans">
      {/* Page Header */}
      <PageHeader
        title="GENERAL"
        subtitle="TRADING"
        description="Specialized import and supply of office furniture, stationery, uniforms, electronics, and cleaning supplies."
      />

      {/* Overview Section */}
      <section className="py-16 px-4 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Quality Office
                <br />
                <span className="text-accent">Products & Supplies</span>
              </h2>
              <p className="font-mulish text-foreground/90 mb-6">
                Our General Trading division specializes in importing, producing
                and distributing high-quality office products and supplies. We
                offer a comprehensive range of office furniture, stationery,
                uniforms, electronics, and cleaning supplies to meet all your
                workplace needs.
              </p>
              <p className="font-mulish text-foreground/90 mb-6">
                With established relationships with leading manufacturers
                worldwide, we provide cost-effective solutions without
                compromising on quality. Whether you're furnishing a new office,
                restocking supplies, or outfitting your team, we deliver
                reliable products with exceptional service.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/images/shop.png"
                alt="Global trading operations"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-12 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Product
            <br />
            <span className="text-accent">Categories</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-primary p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Package className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Office Furniture
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Ergonomic desks, chairs, filing cabinets, and complete office
                setups designed for comfort and productivity.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-primary p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Stationery & Supplies
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Premium paper products, writing instruments, organizational
                tools, and essential office supplies.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-primary p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Corporate Uniforms
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Custom-designed corporate attire, branded workwear, and
                professional uniforms for all industries.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-primary p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Laptop className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Office Electronics
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Computers, printers, phones, and audiovisual equipment from
                trusted brands with warranty support.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-primary p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Cleaning Supplies
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Professional-grade cleaning products, equipment, and hygiene
                solutions for maintaining a pristine workplace.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-primary p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <TruckIcon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Bulk Ordering
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Customized bulk procurement solutions with competitive pricing
                and reliable delivery schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-16 px-4 md:px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Featured
            <br />
            <span className="text-accent">Products</span>
          </h2>

          {/* Office Furniture */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Package className="w-6 h-6 text-accent mr-2" />
              Office Furniture
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/chair.webp"
                    alt="Ergonomic Office Chair"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">
                    Ergonomic Office Chair
                  </h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    Premium adjustable chair with lumbar support
                  </p>
                </div>
              </div>
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/desk.jpg"
                    alt="Executive Desk"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">Executive Desk</h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    Spacious workspace with built-in cable management
                  </p>
                </div>
              </div>
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/cabinet.webp"
                    alt="Filing Cabinet"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">Filing Cabinet</h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    Secure storage with lock system and smooth drawers
                  </p>
                </div>
              </div>
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/conference.jpg"
                    alt="Conference Table"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">
                    Conference Table
                  </h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    Modern design with integrated power outlets
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stationery & Supplies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <FileText className="w-6 h-6 text-accent mr-2" />
              Stationery & Supplies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/notebook.webp"
                    alt="Premium Notebooks"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">
                    Premium Notebooks
                  </h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    High-quality paper with customizable covers
                  </p>
                </div>
              </div>
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/writing.jpeg"
                    alt="Executive Pen Set"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">
                    Writing Instruments
                  </h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    Elegant writing instruments for professionals
                  </p>
                </div>
              </div>
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/cutting.jpeg"
                    alt="Desk Organizers"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">Cutting Tools</h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    Rozor sharp tools that satisfy your cutting needs
                  </p>
                </div>
              </div>
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/paper.jpeg"
                    alt="Premium Paper"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">Premium Paper</h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    High-quality printing and presentation materials
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Uniforms */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Users className="w-6 h-6 text-accent mr-2" />
              Garment and Clothing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/security.jpeg"
                    alt="Executive Suits"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">
                    Security Uniforms
                  </h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    Tailored professional attire for security
                  </p>
                </div>
              </div>
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/shoes.webp"
                    alt="Corporate Shirts"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">Saftey Shoes</h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    Durable footwear designed to protect against workplace
                    hazards
                  </p>
                </div>
              </div>
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/headgear.jpeg"
                    alt="Service Uniforms"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">
                    Protective head gear
                  </h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    Durable head protection for various industrial applications
                  </p>
                </div>
              </div>
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/tailoring.jpeg"
                    alt="Safety Workwear"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">
                    Custom Tailoring
                  </h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    Order custom-fit uniforms and garments, and we deliver.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Electronics */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Laptop className="w-6 h-6 text-accent mr-2" />
              Electronics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/computers.webp"
                    alt="Business Laptops"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">
                    Laptops and Desktops
                  </h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    High-performance computers for professional use
                  </p>
                </div>
              </div>
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/printer.webp"
                    alt="Multifunction Printers"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">
                    Multifunction Printers
                  </h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    All-in-one printing, scanning, and copying solutions
                  </p>
                </div>
              </div>
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/accessory.jpg"
                    alt="Conference Systems"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">
                    Electronic Accessories
                  </h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    Essential electronic accessories for everyday office use.
                  </p>
                </div>
              </div>
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/cartridge.jpeg"
                    alt="Office Phones"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">
                    Printer Ink and Cartridge
                  </h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    High-quality ink and toner cartridges for crisp, clear
                    prints and reliable performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cleaning Supplies */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Sparkles className="w-6 h-6 text-accent mr-2" />
              Cleaning Supplies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/agents.jpg"
                    alt="Professional Cleaners"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">Cleaning Agents</h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    Industrial-grade cleaning agents for all surfaces
                  </p>
                </div>
              </div>
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/equipments.jpg"
                    alt="Cleaning Equipment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">
                    Cleaning Equipment
                  </h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    Professional tools for efficient workplace maintenance
                  </p>
                </div>
              </div>
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/hygiene.jpeg"
                    alt="Hygiene Products"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">
                    Hygiene Products
                  </h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    Hand sanitizers, soaps, and washroom supplies
                  </p>
                </div>
              </div>
              <div className="bg-primary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/bins.jpg"
                    alt="Waste Management"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent">
                    Waste Management
                  </h4>
                  <p className="font-mulish text-white/80 text-sm mt-1">
                    Bins, bags, and recycling solutions for offices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-12 bg-background">
        <div className="container mx-auto">
          <div className="bg-primary rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Why Choose
              <br />
              <span className="text-accent">Our Trading Services</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#051524] p-6 rounded-xl">
                <h3 className="text-accent font-semibold text-xl mb-4">
                  Quality Assurance
                </h3>
                <p className="font-mulish text-white/80">
                  All products undergo rigorous quality checks to ensure
                  durability, functionality, and value for money.
                </p>
              </div>

              <div className="bg-[#051524] p-6 rounded-xl">
                <h3 className="text-accent font-semibold text-xl mb-4">
                  Competitive Pricing
                </h3>
                <p className="font-mulish text-white/80">
                  Direct importing and bulk purchasing power allows us to offer
                  premium products at competitive prices.
                </p>
              </div>

              <div className="bg-[#051524] p-6 rounded-xl">
                <h3 className="text-accent font-semibold text-xl mb-4">
                  One-Stop Solution
                </h3>
                <p className="font-mulish text-white/80">
                  Simplify procurement with a single supplier for all your
                  office furniture, stationery, uniforms, electronics, and
                  cleaning needs.
                </p>
              </div>

              <div className="bg-[#051524] p-6 rounded-xl">
                <h3 className="text-accent font-semibold text-xl mb-4">
                  Fast Delivery
                </h3>
                <p className="font-mulish text-white/80">
                  Efficient logistics network ensuring prompt delivery with
                  real-time tracking and updates.
                </p>
              </div>

              <div className="bg-[#051524] p-6 rounded-xl">
                <h3 className="text-accent font-semibold text-xl mb-4">
                  Customization Options
                </h3>
                <p className="font-mulish text-white/80">
                  Tailor products to your specific requirements, including
                  custom branding, colors, and configurations.
                </p>
              </div>

              <div className="bg-[#051524] p-6 rounded-xl">
                <h3 className="text-accent font-semibold text-xl mb-4">
                  After-Sales Support
                </h3>
                <p className="font-mulish text-white/80">
                  Comprehensive warranty coverage and responsive customer
                  service for all products and services.
                </p>
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
