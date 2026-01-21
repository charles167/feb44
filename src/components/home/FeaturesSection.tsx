import { useEffect, useRef, useState } from 'react';
import { Target, Heart, Shield, TrendingUp } from 'lucide-react';
import SectionTitle from '@/components/shared/SectionTitle';
import FeatureCard from '@/components/shared/FeatureCard';

const features = [
  {
    icon: <Target className="w-7 h-7" />,
    title: 'Our Mission',
    description: 'To foster unity and mutual growth among members, creating a supportive network that empowers individuals to achieve their personal and collective goals.',
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: 'Our Vision',
    description: 'To be a leading association that nurtures leadership, promotes excellence, and builds lasting relationships within our community and beyond.',
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Our Values',
    description: 'Integrity, discipline, respect, and commitment form the foundation of everything we do. We hold ourselves to the highest standards of conduct.',
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: 'Key Achievements',
    description: 'Successfully organized community projects, established a strong membership base, and created meaningful impact in the lives of our members.',
  },
];

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          subtitle="Why Join Us"
          title="Building a Strong Community"
          description="FEB24 Association is more than just a group—it's a family committed to growth, unity, and making a positive impact."
        />

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
