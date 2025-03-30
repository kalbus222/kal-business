import Image from "next/image";
import {
  ArrowRight,
  Calculator,
  FileText,
  TrendingUp,
  PieChart,
  DollarSign,
  Shield,
  BarChart,
  Receipt,
  Briefcase,
  FolderCheck,
  WalletCards,
  Settings,
  Scale,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ContactCTA } from "@/components/ContactCTA";

export default function AccountingConsultingPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] font-sofia-sans">
      {/* Page Header */}
      <PageHeader
        title="ACCOUNTING &"
        subtitle="FINANCIAL CONSULTING"
        description="Expert financial strategies and solutions to drive your business success."
      />

      {/* Overview Section */}
      <section className="py-16 px-4 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-3xl overflow-hidden">
              <Image
                src="/images/consult.png"
                alt="Financial consulting services"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Strategic Financial
                <br />
                <span className="text-[var(--color-accent)]">Guidance</span>
              </h2>
              <p className="font-mulish text-foreground/80 mb-6">
                Our Accounting and Financial Consulting services provide
                comprehensive financial solutions designed to optimize your
                business performance. From day-to-day accounting to strategic
                financial planning, our expert team delivers insights and
                strategies that drive growth and profitability.
              </p>
              <p className="font-mulish text-foreground/80 mb-6">
                We work closely with businesses of all sizes to understand their
                unique challenges and objectives, developing tailored financial
                strategies that align with both short-term needs and long-term
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Financial
            <br />
            <span className="text-[var(--color-accent)]">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-primary p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <Calculator className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Tax Planning & Compliance
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Preparation and submission of monthly VAT, withholding, and TOT
                reports, ensuring regulatory compliance and accurate financial
                documentation.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-primary p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <PieChart className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Business Budgeting
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Comprehensive budgeting and forecasting to help you plan
                effectively and allocate resources efficiently.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-primary p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Financial Advisory
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Expert guidance on financial decisions, investment
                opportunities, and strategic planning for growth.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-primary p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Cost Reduction Strategies
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Identify opportunities to optimize expenses and improve
                profitability without compromising quality.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-primary p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Bookkeeping
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Accurate and timely recording of financial transactions to
                maintain organized and compliant records.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-primary p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Risk Management
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Identify and mitigate financial risks through comprehensive
                analysis and strategic planning.
              </p>
            </div>

            {/* Service 7 */}
            <div className="bg-primary p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Project Marketability Analysis
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                A comprehensive evaluation of a project's potential success,
                assessing target audience appeal, competitive positioning, and
                commercial viability.
              </p>
            </div>

            {/* Service 8 */}
            <div className="bg-primary p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <Receipt className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Annual Financial Statements
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Preparation of accurate and compliant annual financial
                statements, providing a clear overview of a company's financial
                performance and position.
              </p>
            </div>

            {/* Service 10 */}
            <div className="bg-primary p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <FolderCheck className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Pre-Audit Preparation
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Systematic organization of financial records and documentation
                to ensure a smooth and efficient audit process.
              </p>
            </div>
            {/* Service 12 */}
            <div className="bg-primary p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <WalletCards className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Payroll & Tax Administration
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Accurate preparation and reporting of monthly employee salaries,
                employment taxes, and pension contributions, ensuring compliance
                and timely disbursement.
              </p>
            </div>
            {/* Service 13 */}
            <div className="bg-primary p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Software Accounting System Setup
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Implementation and training of a software-based accounting
                system, enabling efficient financial management and streamlined
                processes.
              </p>
            </div>
            {/* Service 14 */}
            <div className="bg-primary p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <Scale className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Tax Dispute Resolution
              </h3>
              <p className="font-mulish text-white/80 mb-4">
                Preparation and submission of tax appeals and complaints,
                ensuring proper documentation and representation in resolving
                tax-related issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Financial
            <br />
            <span className="text-[var(--color-accent)]">
              Consulting Process
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] text-[var(--color-accent-foreground)] text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">Assessment</h3>
              <p className="font-mulish text-foreground/80">
                Comprehensive evaluation of your current financial situation,
                processes, and objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] text-[var(--color-accent-foreground)] text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Strategy Development
              </h3>
              <p className="font-mulish text-foreground/80">
                Creation of tailored financial strategies aligned with your
                business goals and market conditions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] text-[var(--color-accent-foreground)] text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Implementation
              </h3>
              <p className="font-mulish text-foreground/80">
                Execution of financial strategies with clear milestones,
                timelines, and performance metrics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] text-[var(--color-accent-foreground)] text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                Monitoring & Optimization
              </h3>
              <p className="font-mulish text-foreground/80">
                Ongoing analysis and refinement of strategies to ensure optimal
                financial performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 bg-[var(--color-primary)]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What Our
            <br />
            <span className="text-[var(--color-accent)]">Clients Say</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#0e1c2a] p-8 rounded-3xl">
              <p className="font-mulish text-secondary mb-6 italic">
                "Their financial consulting services transformed our business
                operations. We've seen an increase in profitability since
                implementing their strategies."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/20 mr-4"></div>
                <div>
                  <h4 className="text-white font-semibold">Kibrom Takele</h4>
                  <p className="font-mulish text-[var(--color-accent)]">
                    at BM Solutions
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0e1c2a] p-8 rounded-3xl">
              <p className="font-mulish text-secondary mb-6 italic">
                "The tax planning strategies they implemented saved us thousands
                in unnecessary expenses. Their team is knowledgeable,
                responsive, and truly cares about our success."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/20 mr-4"></div>
                <div>
                  <h4 className="text-white font-semibold">Felege Yohannes</h4>
                  <p className="font-mulish text-[var(--color-accent)]">
                    at DFY P.L.C
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0e1c2a] p-8 rounded-3xl">
              <p className="font-mulish text-secondary mb-6 italic">
                "As a small business owner, I was overwhelmed by financial
                management. Their team provided clear guidance and practical
                solutions that helped us grow confidently."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/20 mr-4"></div>
                <div>
                  <h4 className="text-white font-semibold">
                    Enderasu Gezahegn
                  </h4>
                  <p className="font-mulish text-[var(--color-accent)]">
                    at Andeab Productions
                  </p>
                </div>
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
