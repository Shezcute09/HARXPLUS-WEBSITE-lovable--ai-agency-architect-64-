
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "py-4 backdrop-blur-lg bg-white/80 shadow-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight flex items-center">
            <img 
              src="/lovable-uploads/51fbd084-fe7b-4195-8dd2-5a83922ec489.png" 
              alt="Harxplus Logo" 
              className="h-8 mr-2"
            />
            <span className="inline-flex items-center">
              Harx<span className="text-primary">plus</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium hover:opacity-80 transition-opacity">
              Services
            </a>
            <a href="#about" className="text-sm font-medium hover:opacity-80 transition-opacity">
              About
            </a>
            <a href="#team" className="text-sm font-medium hover:opacity-80 transition-opacity">
              Team
            </a>
            <a 
              href="#contact" 
              className="px-5 py-2 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Talk to Us
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out pt-24",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-8 p-8">
          <a 
            href="#services" 
            className="text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#about" 
            className="text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#team" 
            className="text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Team
          </a>
          <a 
            href="#contact" 
            className="w-full px-5 py-3 rounded-md bg-primary text-white text-lg font-medium text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Talk to Us
          </a>
        </nav>
      </div>
    </header>
  );
};
