import { cn } from '@/lib/utils';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

const SectionTitle = ({ 
  subtitle, 
  title, 
  description, 
  centered = true, 
  light = false,
  className 
}: SectionTitleProps) => {
  return (
    <div className={cn(
      "max-w-3xl mb-12",
      centered && "mx-auto text-center",
      className
    )}>
      {subtitle && (
        <span className={cn(
          "inline-block text-sm font-semibold tracking-wider uppercase mb-3",
          light ? "text-accent" : "text-secondary"
        )}>
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
        light ? "text-primary-foreground" : "text-foreground"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg leading-relaxed",
          light ? "text-primary-foreground/70" : "text-muted-foreground"
        )}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
