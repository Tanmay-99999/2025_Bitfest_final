import { events } from "@/lib/constants";
import EventCard from "@/components/ui/event-card";
import { Crown, Trophy, Sparkles } from "lucide-react";

const Events = () => {
  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-pixel text-3xl text-center mb-12 text-navy">Events & Competitions</h2>
        
        {/* Special Announcement */}
        <div className="mb-16 relative overflow-hidden">
          <div className="bg-gradient-to-r from-[#0a0a23] via-[#1a1a3e] to-[#0a0a23] rounded-xl p-8 border-4 border-[#f2c14e] shadow-2xl animate-glow">
            <div className="absolute inset-0 bg-gradient-to-45 from-[#f2c14e]/5 via-transparent to-[#f2c14e]/5 animate-float"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Crown className="h-8 w-8 text-[#f2c14e] mr-3 animate-bounce" />
                <h3 className="font-pixel text-2xl text-[#f2c14e] text-center">
                  🎉 EXCLUSIVE OPPORTUNITY 🎉
                </h3>
                <Crown className="h-8 w-8 text-[#f2c14e] ml-3 animate-bounce" />
              </div>
              
              <div className="text-center text-white space-y-4">
                <p className="text-lg font-semibold">
                  <Sparkles className="inline h-5 w-5 text-[#f2c14e] mr-2 animate-sparkle" />
                  Think you've got what it takes to be the ultimate Bitfest champion?
                  <Sparkles className="inline h-5 w-5 text-[#f2c14e] ml-2 animate-sparkle" style={{animationDelay: '0.5s'}} />
                </p>
                
                <div className="bg-black/30 rounded-lg p-6 border-2 border-[#f2c14e]/30">
                  <p className="text-xl font-bold text-[#f2c14e] mb-3">
                    🏆 MR & MISS BITFEST 2025 🏆
                  </p>
                  <p className="text-base leading-relaxed">
                    Participate in <span className="font-bold text-[#f2c14e]">3+ Events</span> (excluding workshops) and 
                    win <span className="font-bold text-[#f2c14e]">minimum 3 competitions</span> to unlock your exclusive entry to the prestigious 
                    <span className="font-bold text-[#f2c14e]"> Mr & Miss Bitfest</span> competition!
                  </p>
                </div>
                
                <div className="flex justify-center items-center space-x-8 mt-6">
                  <div className="text-center">
                    <Trophy className="h-8 w-8 text-[#f2c14e] mx-auto mb-2 animate-pulse" />
                    <p className="font-bold text-[#f2c14e] text-lg">Mr Bitfest</p>
                    <p className="text-white font-semibold">₹1,000</p>
                  </div>
                  <div className="text-4xl text-[#f2c14e] animate-pulse">+</div>
                  <div className="text-center">
                    <Trophy className="h-8 w-8 text-[#f2c14e] mx-auto mb-2 animate-pulse" />
                    <p className="font-bold text-[#f2c14e] text-lg">Miss Bitfest</p>
                    <p className="text-white font-semibold">₹1,000</p>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-[#f2c14e]/20 rounded-lg border border-[#f2c14e]/50">
                  <p className="text-sm text-[#f2c14e] font-semibold">
                    💫 NO ENTRY FEE • BY INVITATION ONLY • PROVE YOUR EXCELLENCE 💫
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
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

