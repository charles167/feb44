import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import { User, ClipboardList, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const About = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Story & Purpose
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Learn about the vision behind FEB24 Association and how you can be part of our growing community.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div 
            id="founder"
            data-animate
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible('founder') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-hero overflow-hidden shadow-elevated">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-accent/20 flex items-center justify-center">
                    <User className="w-16 h-16 text-accent" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-2xl -z-10" />
            </div>

            <div>
              <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-3 block">
                The Founder
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Vision & Leadership
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                FEB24 Association was founded with a clear vision: to create a community where 
                individuals come together to support, encourage, and uplift one another. Our founder 
                envisioned a platform where members could grow personally and professionally while 
                maintaining strong bonds of friendship and mutual respect.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The name "FEB24" commemorates the founding month and year of our association—February 2024. 
                Since then, we have grown from a small group of like-minded individuals to a thriving 
                community committed to excellence.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/members" className="flex items-center gap-2">
                  Meet Our Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Membership & Meetings */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Join Us"
            title="Membership & Meetings"
            description="Discover how to become a member and stay connected with our regular gatherings."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Membership Card */}
            <div 
              id="membership"
              data-animate
              className={`bg-card rounded-2xl p-8 shadow-card hover-lift transition-all duration-700 ${isVisible('membership') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                <ClipboardList className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Membership Registration
              </h3>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                  <span>Complete the membership application form</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                  <span>Pay the one-time registration fee</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                  <span>Attend the orientation meeting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                  <span>Receive your membership ID and welcome package</span>
                </li>
              </ul>
              <Button variant="default" className="w-full" asChild>
                <Link to="/contact">Apply Now</Link>
              </Button>
            </div>

            {/* Meetings Card */}
            <div 
              id="meetings"
              data-animate
              className={`bg-card rounded-2xl p-8 shadow-card hover-lift transition-all duration-700 delay-100 ${isVisible('meetings') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Meetings Schedule
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                  <Clock className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">Regular Meetings</div>
                    <div className="text-muted-foreground text-sm">Every first Saturday of the Month</div>
                    <div className="text-muted-foreground text-sm">12:00 PM - 2:00 PM</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                  <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">Meeting Venue</div>
                    <div className="text-muted-foreground text-sm">Community Center Hall</div>
                    <div className="text-muted-foreground text-sm">1,owoeba block, tomori estate off animashaun/fidson road sango otta, otta, ogun state, nigeria</div>
                  </div>
                </div>
              </div>
              <Button variant="accent" className="w-full" asChild>
                <Link to="/contact">Get Directions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
