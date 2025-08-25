
import { useState } from 'react';
import { Send, CheckCircle, Calendar } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="chip bg-secondary text-primary-foreground mb-3">Contact Us</span>
            <h2 className="heading-lg mb-4">Book a 30mins Strategy session</h2>
            <p className="paragraph text-muted-foreground mb-8">
              Have questions or are you ready to embark on your business journey? Our team at Harxplus is here to provide expert guidance and support. Reach out to us through the channels below. Book a free 30 mins consultation session with us.
            </p>
            
            <a 
              href="https://calendly.com/harxplus/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors mb-8"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </a>
            
            <a 
              href="#" 
              className="block text-primary hover:underline mb-8"
            >
              View Resources (blog)
            </a>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email Us</h3>
                  <p className="text-muted-foreground">info@harxplus.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-8">
                  <CheckCircle className="h-16 w-16 text-primary mb-4" />
                  <h3 className="heading-sm mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition resize-none"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Talk to Us
                          <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
