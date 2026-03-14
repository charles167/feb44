import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Target, Award } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://res.cloudinary.com/dspkz3qiq/image/upload/v1773496398/feb_image_bcyegb.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {/* <span className="text-primary-foreground/90 text-sm font-medium">Est. February 2024</span> */}
          </div>

          {/* Main Heading */}
          <h1 
            className={`font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Welcome to{' '}
            <span className="text-gradient">FEB24</span>{' '}
            Association
          </h1>

          {/* Subtitle */}
          <p 
            className={`text-xl md:text-2xl text-primary-foreground/80 mb-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Together we grow, we achieve, we succeed.
          </p>

          {/* Slogan */}
          <p 
            className={`text-lg text-primary-foreground/60 mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Building a community of unity, discipline, and excellence
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/about" className="flex items-center gap-2">
                Join Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/information">Learn More</Link>
            </Button>
          </div>

          {/* Stats */}
          <div 
            className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {[
              { icon: Users, value: '50+', label: 'Members' },
              { icon: Target, value: '12+', label: 'Projects' },
              { icon: Award, value: '2+', label: 'Years Strong' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="font-serif text-3xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/60 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
