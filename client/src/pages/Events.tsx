import { events } from "@/lib/constants";
import EventCard from "@/components/ui/event-card";

const Events = () => {
  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-pixel text-3xl text-center mb-12 text-navy">Events & Competitions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard 
              key={event.id}
              title={event.title}
              category={event.category}
              fee={event.fee}
              description={event.description}
              rules={event.rules}
              prizes={event.prizes}
              paymentLink={event.paymentLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
