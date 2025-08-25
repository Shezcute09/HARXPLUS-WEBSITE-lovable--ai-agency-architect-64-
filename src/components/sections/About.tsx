
import { Check } from 'lucide-react';

const values = [
  "Creativity",
  "Excellence",
  "Collaboration",
  "Results-driven"
];

export const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <span className="chip bg-secondary text-primary-foreground mb-3">About Us</span>
            <h2 className="heading-lg mb-4">Creativity, Excellence, Collaboration & Results drives Us….</h2>
            <p className="paragraph text-muted-foreground mb-6">
              Our mission at Harxplus is to partner with new and growing brands to scale and grow successfully, providing tailored solutions and innovative ideas that transcend borders and drive prosperity.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic mb-6">
              "The important thing about outsourcing or global sourcing is that it becomes a very powerful tool to leverage talent, improve productivity and reduce work cycles." 
              <footer className="text-sm mt-2 text-muted-foreground">– Azim Premji, Chairman of Wipro Limited</footer>
            </blockquote>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Talk to Us
            </a>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-secondary overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full h-full p-8">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="rounded-full w-20 h-20 mx-auto mb-4 bg-white flex items-center justify-center shadow-md">
                          <span className="text-2xl font-bold">H+</span>
                        </div>
                        <h3 className="heading-sm mb-2">Our Mission</h3>
                        <p className="text-sm text-muted-foreground">
                          To partner with new and growing brands to scale and grow successfully, providing tailored solutions and innovative ideas that transcend borders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-primary/10 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-primary/5 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
