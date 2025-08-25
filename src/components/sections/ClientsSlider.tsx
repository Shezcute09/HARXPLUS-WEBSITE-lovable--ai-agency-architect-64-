
import { useState, useEffect } from 'react';

// Client objects with names and images
const clients = [
  { 
    name: "Kapci", 
    logo: "/lovable-uploads/67f063ba-7668-484c-bba1-9d3dc9a1d555.png",
    showNameWithLogo: false
  },
  { 
    name: "GIZ", 
    logo: "/lovable-uploads/8db22295-4ce7-4399-83a5-560d8ca7d9dd.png",
    showNameWithLogo: false 
  },
  { 
    name: "Teeka4", 
    logo: "/lovable-uploads/25c56ccb-1aa6-4c8d-8bf4-206519e96df2.png",
    showNameWithLogo: false 
  },
  { 
    name: "Kuraway", 
    logo: "/lovable-uploads/e397aea9-bd12-421f-a9cd-f6116743a3b6.png",
    showNameWithLogo: false 
  },
  { 
    name: "Earlz Kitchen", 
    logo: "/lovable-uploads/75d9a6f5-218d-4560-8a44-3ca496023fd1.png",
    showNameWithLogo: false 
  },
  { name: "Bondly", logo: null },
  { name: "Brandzoos", logo: null },
  { name: "Fidel Associates", logo: null }
];

export const ClientsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === Math.ceil(clients.length / 4) - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="heading-md mb-6">We power growth for global clients</h2>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <span className="flex items-center">
              <img src="/country-flags/uk.svg" alt="UK Flag" className="w-5 h-5 mr-1" /> UK
            </span>
            <span className="flex items-center">
              <img src="/country-flags/us.svg" alt="US Flag" className="w-5 h-5 mr-1" /> US
            </span>
            <span className="flex items-center">
              <img src="/country-flags/australia.svg" alt="Australia Flag" className="w-5 h-5 mr-1" /> Australia
            </span>
            <span className="flex items-center">
              <img src="/country-flags/ghana.svg" alt="Ghana Flag" className="w-5 h-5 mr-1" /> Ghana
            </span>
            <span className="flex items-center">
              <img src="/country-flags/nigeria.svg" alt="Nigeria Flag" className="w-5 h-5 mr-1" /> Nigeria
            </span>
          </p>
        </div>
        
        <div className="overflow-hidden relative">
          <div 
            className="flex items-center transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {clients.map((client, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-4 flex-shrink-0">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-24 flex items-center justify-center">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={`${client.name} Logo`} 
                      className="h-16 max-w-full object-contain" 
                    />
                  ) : (
                    <span className="font-medium text-lg">{client.name}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {Array.from({ length: Math.ceil(clients.length / 4) }).map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full mx-1 ${
                  currentIndex === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
