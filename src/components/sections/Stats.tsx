
export const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-md mb-6">You envision, We brainstorm and Create!</h2>
          <p className="paragraph text-muted-foreground">
            We help elevate your brand's visibility with digital solutions that help you stay ahead of the curve. We craft the best strategies to provide the best results – One that smashes your goal and lets you focus on what matters.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
            <p className="text-muted-foreground">Brands Served</p>
          </div>
          
          <div className="p-6 text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">70%</h3>
            <p className="text-muted-foreground">Avg Surge in Sales</p>
          </div>
          
          <div className="p-6 text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">5</h3>
            <p className="text-muted-foreground">Countries</p>
          </div>
          
          <div className="p-6 text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">+500K</h3>
            <p className="text-muted-foreground">Leads Generated</p>
          </div>
        </div>
      </div>
    </section>
  );
};
