
import { Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: "David Chima",
    position: "Managing Partner",
    image: "/placeholder.svg"
  },
  {
    name: "Cyrus Nnaji",
    position: "Lead Business Developer",
    image: "/placeholder.svg"
  },
  {
    name: "Dennis Ndubueze",
    position: "Marketing and Product Lead",
    image: "/placeholder.svg"
  },
  {
    name: "Ogunka Odilia",
    position: "Growth Lead",
    image: "/placeholder.svg"
  }
];

export const Team = () => {
  return (
    <section id="team" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="chip bg-primary text-primary-foreground mb-3">Our Team</span>
          <h2 className="heading-lg mb-4">Our Core Team</h2>
          <p className="paragraph text-muted-foreground">
            If you can think about it, We can bring it to reality.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="aspect-square bg-primary/5 relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{member.position}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-primary hover:text-primary/80">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
