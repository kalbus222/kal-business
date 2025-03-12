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
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <PageHeader
        title="GENERAL"
        subtitle="TRADING"
        description="Specialized import and supply of office furniture, stationery, uniforms, electronics, and cleaning supplies."
      />

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#101724] mb-6">
                Quality Office
                <br />
                <span className="text-[#52acdc]">Products & Supplies</span>
              </h2>
              <p className="text-gray-700 mb-6">
                Our General Trading division specializes in importing and
                distributing high-quality office products and supplies. We offer
                a comprehensive range of office furniture, stationery, uniforms,
                electronics, and cleaning supplies to meet all your workplace
                needs.
              </p>
              <p className="text-gray-700 mb-6">
                With established relationships with leading manufacturers
                worldwide, we provide cost-effective solutions without
                compromising on quality. Whether you're furnishing a new office,
                restocking supplies, or outfitting your team, we deliver
                reliable products with exceptional service.
              </p>
              <button className="bg-[#101724] hover:bg-[#1a2536] text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-colors">
                Our Products <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#101724] mb-12 text-center">
            Our Product
            <br />
            <span className="text-[#52acdc]">Categories</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#52acdc]/10 flex items-center justify-center mb-6">
                <Package className="w-6 h-6 text-[#52acdc]" />
              </div>
              <h3 className="text-xl font-bold text-[#101724] mb-4">
                Office Furniture
              </h3>
              <p className="text-gray-700 mb-4">
                Ergonomic desks, chairs, filing cabinets, and complete office
                setups designed for comfort and productivity.
              </p>
              <p className="text-gray-700 italic">
                Premium selection available
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#52acdc]/10 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-[#52acdc]" />
              </div>
              <h3 className="text-xl font-bold text-[#101724] mb-4">
                Stationery & Supplies
              </h3>
              <p className="text-gray-700 mb-4">
                Premium paper products, writing instruments, organizational
                tools, and essential office supplies.
              </p>
              <p className="text-gray-700 italic">
                Premium selection available
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#52acdc]/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#52acdc]" />
              </div>
              <h3 className="text-xl font-bold text-[#101724] mb-4">
                Corporate Uniforms
              </h3>
              <p className="text-gray-700 mb-4">
                Custom-designed corporate attire, branded workwear, and
                professional uniforms for all industries.
              </p>
              <p className="text-gray-700 italic">
                Premium selection available
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#52acdc]/10 flex items-center justify-center mb-6">
                <Laptop className="w-6 h-6 text-[#52acdc]" />
              </div>
              <h3 className="text-xl font-bold text-[#101724] mb-4">
                Office Electronics
              </h3>
              <p className="text-gray-700 mb-4">
                Computers, printers, phones, and audiovisual equipment from
                trusted brands with warranty support.
              </p>
              <p className="text-gray-700 italic">
                Premium selection available
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#52acdc]/10 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-[#52acdc]" />
              </div>
              <h3 className="text-xl font-bold text-[#101724] mb-4">
                Cleaning Supplies
              </h3>
              <p className="text-gray-700 mb-4">
                Professional-grade cleaning products, equipment, and hygiene
                solutions for maintaining a pristine workplace.
              </p>
              <p className="text-gray-700 italic">
                Premium selection available
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#52acdc]/10 flex items-center justify-center mb-6">
                <TruckIcon className="w-6 h-6 text-[#52acdc]" />
              </div>
              <h3 className="text-xl font-bold text-[#101724] mb-4">
                Bulk Ordering
              </h3>
              <p className="text-gray-700 mb-4">
                Customized bulk procurement solutions with competitive pricing
                and reliable delivery schedules.
              </p>
              <p className="text-gray-700 italic">
                Premium selection available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#101724] mb-12 text-center">
            Featured
            <br />
            <span className="text-[#52acdc]">Products</span>
          </h2>

          {/* Office Furniture */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#101724] mb-6 flex items-center">
              <Package className="w-6 h-6 text-[#52acdc] mr-2" />
              Office Furniture
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Ergonomic Office Chair"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Ergonomic Office Chair
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Premium adjustable chair with lumbar support
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Executive Desk"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Executive Desk
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Spacious workspace with built-in cable management
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Filing Cabinet"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Filing Cabinet
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Secure storage with lock system and smooth drawers
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Conference Table"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Conference Table
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Modern design with integrated power outlets
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stationery & Supplies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#101724] mb-6 flex items-center">
              <FileText className="w-6 h-6 text-[#52acdc] mr-2" />
              Stationery & Supplies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Premium Notebooks"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Premium Notebooks
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    High-quality paper with customizable covers
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Executive Pen Set"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Executive Pen Set
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Elegant writing instruments for professionals
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Desk Organizers"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Desk Organizers
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Stylish solutions for keeping workspaces tidy
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Premium Paper"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Premium Paper
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    High-quality printing and presentation materials
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Uniforms */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#101724] mb-6 flex items-center">
              <Users className="w-6 h-6 text-[#52acdc] mr-2" />
              Corporate Uniforms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Executive Suits"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Executive Suits
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Tailored professional attire for management
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Corporate Shirts"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Corporate Shirts
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Branded shirts with custom embroidery options
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Service Uniforms"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Service Uniforms
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Durable and comfortable attire for service staff
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Safety Workwear"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Safety Workwear
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Compliant protective clothing for industrial settings
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Electronics */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#101724] mb-6 flex items-center">
              <Laptop className="w-6 h-6 text-[#52acdc] mr-2" />
              Office Electronics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Business Laptops"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Business Laptops
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    High-performance computers for professional use
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Multifunction Printers"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Multifunction Printers
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    All-in-one printing, scanning, and copying solutions
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Conference Systems"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Conference Systems
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Audio and video equipment for meeting rooms
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Office Phones"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Office Phones
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Advanced communication systems for businesses
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cleaning Supplies */}
          <div>
            <h3 className="text-2xl font-bold text-[#101724] mb-6 flex items-center">
              <Sparkles className="w-6 h-6 text-[#52acdc] mr-2" />
              Cleaning Supplies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Professional Cleaners"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Professional Cleaners
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Industrial-grade cleaning solutions for all surfaces
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Cleaning Equipment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Cleaning Equipment
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Professional tools for efficient workplace maintenance
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Hygiene Products"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Hygiene Products
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Hand sanitizers, soaps, and washroom supplies
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Waste Management"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#101724]">
                    Waste Management
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Bins, bags, and recycling solutions for offices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="bg-[#101724] rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Why Choose
              <br />
              <span className="text-[#52acdc]">Our Trading Services</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#0e1c2a] p-6 rounded-xl">
                <h3 className="text-[#52acdc] font-semibold text-xl mb-4">
                  Quality Assurance
                </h3>
                <p className="text-white/80">
                  All products undergo rigorous quality checks to ensure
                  durability, functionality, and value for money.
                </p>
              </div>

              <div className="bg-[#0e1c2a] p-6 rounded-xl">
                <h3 className="text-[#52acdc] font-semibold text-xl mb-4">
                  Competitive Pricing
                </h3>
                <p className="text-white/80">
                  Direct importing and bulk purchasing power allows us to offer
                  premium products at competitive prices.
                </p>
              </div>

              <div className="bg-[#0e1c2a] p-6 rounded-xl">
                <h3 className="text-[#52acdc] font-semibold text-xl mb-4">
                  One-Stop Solution
                </h3>
                <p className="text-white/80">
                  Simplify procurement with a single supplier for all your
                  office furniture, stationery, uniforms, electronics, and
                  cleaning needs.
                </p>
              </div>

              <div className="bg-[#0e1c2a] p-6 rounded-xl">
                <h3 className="text-[#52acdc] font-semibold text-xl mb-4">
                  Fast Delivery
                </h3>
                <p className="text-white/80">
                  Efficient logistics network ensuring prompt delivery with
                  real-time tracking and updates.
                </p>
              </div>

              <div className="bg-[#0e1c2a] p-6 rounded-xl">
                <h3 className="text-[#52acdc] font-semibold text-xl mb-4">
                  Customization Options
                </h3>
                <p className="text-white/80">
                  Tailor products to your specific requirements, including
                  custom branding, colors, and configurations.
                </p>
              </div>

              <div className="bg-[#0e1c2a] p-6 rounded-xl">
                <h3 className="text-[#52acdc] font-semibold text-xl mb-4">
                  After-Sales Support
                </h3>
                <p className="text-white/80">
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
