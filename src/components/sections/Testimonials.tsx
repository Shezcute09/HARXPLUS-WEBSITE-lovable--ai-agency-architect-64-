
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "The AI solutions provided by this team have transformed our customer service capabilities. Our response times have decreased by 60% while customer satisfaction has increased significantly.",
    author: "Sarah Johnson",
    position: "CTO, TechVision Inc.",
    company: "TechVision Inc."
  },
  {
    quote: "Working with this agency has been a game-changer for our content strategy. Their AI-powered content generation tools have allowed us to scale our output while maintaining quality and brand voice.",
    author: "Mark Reynolds",
    position: "Marketing Director",
    company: "Growth Media"
  },
  {
    quote: "The predictive analytics solution they developed has given us unprecedented insights into market trends, allowing us to stay ahead of the competition and adjust our strategy proactively.",
    author: "Elena Cortez",
    position: "CEO",
    company: "Insight Analytics"
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
  
  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="chip bg-primary text-primary-foreground mb-3">Testimonials</span>
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="paragraph text-muted-foreground">
            Discover how our AI solutions have helped businesses across different industries achieve their goals.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="mb-6">
              <Quote className="h-12 w-12 text-primary/20" />
            </div>
            
            <div className="min-h-[180px] mb-8">
              <p className="paragraph italic mb-8">
                "{testimonials[activeIndex].quote}"
              </p>
              <div>
                <p className="font-semibold">{testimonials[activeIndex].author}</p>
                <p className="text-sm text-muted-foreground">{testimonials[activeIndex].position}, {testimonials[activeIndex].company}</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-3 h-3 rounded-full transition-colors",
                      index === activeIndex ? "bg-primary" : "bg-secondary"
                    )}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-3">
                <button
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                  onClick={goToPrevious}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                  onClick={goToNext}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
