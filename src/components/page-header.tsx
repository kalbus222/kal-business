import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  description,
  className,
}: PageHeaderProps) {
  return (
    <section className={cn("bg-[#101724] py-16 px-4 pt-32", className)}>
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
            {title}
            <br />
            <span className="text-[#52acdc]">{subtitle}</span>
          </h1>
          {description && (
            <p className="text-white/80 text-lg md:text-xl font-mulish">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
