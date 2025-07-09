import { Code, Lightbulb, Building } from "lucide-react";

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-pixel text-2xl md:text-3xl mb-6 text-navy">Welcome to <span className="text-[#f2c14e]">Bitfest</span></h2>
          <p className="text-lg text-gray-700">
            The Computer Association of Pillai College presents its flagship annual tech fest, fostering innovation and technical excellence. Bitfest brings together brilliant minds to compete, collaborate, and celebrate the world of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#3a86ff] text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-[#3a86ff]/10 rounded-full w-16 h-20 flex items-center justify-center mx-auto mb-4">
              <Code className="text-[#3a86ff] h-8 w-8" />
            </div>
            <h3 className="font-pixel text-navy text-lg mb-3">Technology Rivalry</h3>
            <p className="text-gray-600">Hackathons, coding duels, AI challenges, and competitive programming to test your skills</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#ff006e] text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-[#ff006e]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="text-[#ff006e] h-8 w-8" />
            </div>
            <h3 className="font-pixel text-navy text-lg mb-3">Creativity & Fun</h3>
            <p className="text-gray-600">Design sprints, art jams, debates, and interactive gaming zones to spark innovation</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#f2c14e] text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-[#f2c14e]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Building className="text-[#f2c14e] h-8 w-8" />
            </div>
            <h3 className="font-pixel text-navy text-lg mb-3">Industry Insights</h3>
            <p className="text-gray-600">Workshops, panel discussions, and networking opportunities with industry professionals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
