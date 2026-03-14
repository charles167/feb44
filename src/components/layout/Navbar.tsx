import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Members', path: '/members' },
  { name: 'Information', path: '/information' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass shadow-soft py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src="https://res.cloudinary.com/dspkz3qiq/image/upload/v1773500979/logo2_feb_chvan7.jpg" alt="FEB24 Logo" className="w-10 h-10 rounded-full object-cover shadow-card group-hover:scale-110 transition-transform duration-300" />
            <span className={cn(
              "font-serif font-bold text-xl transition-colors duration-300",
              isScrolled ? "text-primary" : "text-primary-foreground"
            )}>
              FEB24
            </span>
          </Link>

          {/* Center Marquee - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 max-w-md overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <span className={cn(
                "text-sm font-medium tracking-wide",
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"
              )}>
                FEB24 • • • We grow together. Together we grow. • • • FEB24 • • • We grow together. Together we grow. • • • 
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group",
                  location.pathname === link.path
                    ? isScrolled 
                      ? "text-secondary" 
                      : "text-accent"
                    : isScrolled 
                      ? "text-foreground hover:text-secondary" 
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-accent transition-all duration-300",
                  location.pathname === link.path ? "w-6" : "w-0 group-hover:w-6"
                )} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "md:hidden",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-primary z-40 transition-all duration-500 md:hidden",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-2xl font-serif font-medium transition-all duration-300",
                location.pathname === link.path
                  ? "text-accent"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              )}
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: isMobileMenuOpen ? 'fadeInUp 0.5s ease-out forwards' : 'none'
              }}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Slogan */}
          <p className="text-primary-foreground/60 text-sm text-center mt-8 max-w-xs">
            We grow together. Together we grow.
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
