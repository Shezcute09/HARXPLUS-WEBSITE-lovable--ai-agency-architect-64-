
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="African Business Landscape" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-primary/70 mix-blend-multiply"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center stagger-animation">
          <div className="mb-6 inline-block">
            <span className="chip bg-primary text-white">Digital Marketing Agency</span>
          </div>
          
          <h1 className="heading-xl mb-6 text-balance text-white">
            Bold Strategies. Powerful Growth. Unmatched Results.
          </h1>
          
          <p className="paragraph text-white/90 mb-10 max-w-2xl mx-auto">
            We help drive growth for your business through marketing, branding, tech development, strategy and planning.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-pulse-light">
        <a href="#services" className="flex flex-col items-center">
          <span className="text-sm font-medium mb-2 text-white">Scroll to explore</span>
          <div className="w-6 h-9 border-2 border-white rounded-full flex justify-center pt-1">
            <div className="w-1 h-1.5 bg-white rounded-full animate-float"></div>
          </div>
        </a>
      </div>
    </section>
  );
};
