
import { MessageSquare, Globe, Book, Users } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: MessageSquare,
    title: "Digital Marketing & Branding",
    description: "We help maximise your reach to your target audience by developing and implementing sustainable digital strategies through Social Media, SEO, Email Marketing, Media buying.",
    details: "The digital space offers an avenue for businesses to transform at pace, create more brand visibility and increase lead generation. We help maximise your reach to your target audience by developing and implementing sustainable digital strategies for our clients through Social Media, SEO, Email Marketing, Media buying."
  },
  {
    icon: Globe,
    title: "Website & Mobile Development",
    description: "We back businesses with the right technology through development and maintenance of Websites & mobile applications with adequate web speed & SEO optimization.",
    details: "We back businesses with the right technology through development and maintenance of Websites & mobile applications to help streamline processes, increase the efficiency of systems, products and services using relevant technologies with adequate web speed & SEO optimization."
  },
  {
    icon: Book,
    title: "Business Registration & Certifications",
    description: "Whether you're registering a new business, seeking intellectual property protection or expanding into new markets, Harxplus is your dedicated partner.",
    details: "Whether you're embarking on the journey of registering or trademarking a new business in Nigeria, seeking robust intellectual property protection or envisioning expansion into the dynamic U.S market, Harxplus is your dedicated partner."
  },
  {
    icon: Users,
    title: "Business Planning & Training",
    description: "We power growth by providing insights, strategy, curating long term objectives, SMART goals and achievable milestones for your business.",
    details: "We power growth by providing insights, strategy, curating long term objectives, SMART goals and achievable milestones through, Business planning, Marketing plan development, Pitch deck development."
  }
];

export const Services = () => {
  const [activeService, setActiveService] = useState(0);
  
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="chip bg-primary text-primary-foreground mb-3">Our Services</span>
          <h2 className="heading-lg mb-4">We propel your vision & supercharge growth</h2>
          <p className="paragraph text-muted-foreground">
            We've got a deep understanding of selling in this digital age, and we provide service in core areas that help your business pick up speed in this fast paced digital world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "rounded-lg p-6 transition-all duration-300 cursor-pointer group",
                activeService === index 
                  ? "bg-white shadow-lg" 
                  : "bg-transparent hover:bg-white/50"
              )}
              onClick={() => setActiveService(index)}
            >
              <div className="mb-4">
                <div className={cn(
                  "w-12 h-12 rounded-md flex items-center justify-center transition-colors duration-300",
                  activeService === index 
                    ? "bg-primary text-white" 
                    : "bg-secondary-foreground/5 text-primary group-hover:bg-primary/10"
                )}>
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="heading-sm mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
              
              <div className="mt-6">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Talk to Us
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-lg p-8 shadow-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="heading-sm mb-4">{services[activeService].title}</h3>
          <p className="paragraph">{services[activeService].details}</p>
        </div>
      </div>
    </section>
  );
};
