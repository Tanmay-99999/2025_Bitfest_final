import { workshops } from "@/lib/constants";
import WorkshopCard from "@/components/ui/workshop-card";

const Workshops = () => {
  return (
    <section id="workshops" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-pixel text-3xl text-center mb-12 text-navy">Workshops & Sessions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <WorkshopCard 
              key={workshop.id}
              title={workshop.title}
              date={workshop.date}
              fee={workshop.fee}
              description={workshop.description}
              participants={workshop.participants}
              image={workshop.image}
              paymentLink={workshop.paymentLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
