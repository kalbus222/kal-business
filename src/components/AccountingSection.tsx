import {
  ArrowDown,
  BarChart3,
  FileText,
  LineChart,
  PieChart,
  Percent,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface FinancialServiceProps {
  className?: string;
}

export function FinancialServices({ className }: FinancialServiceProps) {
  return (
    <section
      className={cn("w-full py-12 px-5 md:px-12 font-sofia-sans", className)}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main panel */}
          <div className="lg:col-span-5 bg-primary rounded-3xl p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
                EXPERT
                <br />
                ACCOUNTING
                <br />
                AND{" "}
                <span className="text-accent">
                  FINANCIAL
                  <br />
                  COUNSEL
                </span>
              </h2>
            </div>
            <div className="mt-8">
              <Link
                href="/financial"
                className="group w-10 h-10 rounded-full border border-accent flex items-center px-2 justify-center hover:justify-end hover:w-18 transition-all ease-in"
              >
                <ArrowDown className="w-5 h-5 text-accent -rotate-45 group-hover:-rotate-90 transition-all ease-in" />
              </Link>
            </div>
          </div>

          {/* Services grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Tax Planning */}
            <div className="bg-primary rounded-3xl p-6 lg:p-8 flex flex-col">
              <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center mb-6">
                <BarChart3 className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-medium text-white">
                Tax Planning &<br />
                Compliance
              </h3>
            </div>

            {/* Business Budgeting */}
            <div className="bg-primary rounded-3xl p-6 lg:p-8 flex flex-col">
              <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center mb-6">
                <PieChart className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-medium text-white">
                Business Budgeting
              </h3>
            </div>

            {/* Financial Advisory */}
            <div className="bg-primary rounded-3xl p-6 lg:p-8 flex flex-col">
              <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center mb-6">
                <LineChart className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-medium text-white">
                Financial Advisory
              </h3>
            </div>

            {/* Cost Reduction */}
            <div className="bg-primary rounded-3xl p-6 lg:p-8 flex flex-col">
              <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center mb-6">
                <Percent className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-medium text-white">
                Cost Reduction
                <br />
                Strategies
              </h3>
            </div>

            {/* Bookkeeping - spans full width on mobile, half width on larger screens */}
            <div className="sm:col-span-2 md:col-span-1 bg-primary rounded-3xl p-6 lg:p-8 flex flex-col">
              <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center mb-6">
                <FileText className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-medium text-white">Bookkeeping</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
