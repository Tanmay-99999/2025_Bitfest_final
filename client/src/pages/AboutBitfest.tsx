import { pastHighlightsImages } from "@/lib/constants";

const AboutBitfest = () => {
  return (
    <section id="about-bitfest" className="py-16 bg-navy text-white clip-path-diagonal">
      <div className="container mx-auto px-4">
        <h2 className="font-pixel text-3xl text-center mb-12 text-[#f2c14e]">About Bitfest</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="relative h-64 md:h-auto order-2 lg:order-1">
            <img 
              src="https://pcacs.ac.in/wp-content/uploads/2016/08/bitfest-1.jpg"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 bg-[#f2c14e] text-navy px-4 py-2 font-pixel text-sm">
              Since 2016
            </div>
          </div>
          
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h3 className="font-pixel text-xl mb-4 text-[#f2c14e]">The Origins</h3>
            <p className="text-gray-300 mb-4">
              Bitfest began in 2016 as a small departmental gathering of Computer Science enthusiasts. Over the years, it has grown exponentially to become the second-largest technical festival at Pillai College of Arts, Commerce & Science.
            </p>
            <p className="text-gray-300 mb-6">
              What started with just 100 participants from our college now attracts over 2,000 students across Mumbai.
            </p>
            
            <h3 className="font-pixel text-xl mb-4 text-[#f2c14e]">Our Tagline</h3>
            <p className="text-gray-300">
              "Everything Starts with a Bit" reflects our philosophy that even the most complex technological innovations begin with the most fundamental unit of computing - a single bit. Just as a bit is the building block of all digital systems, Bitfest aims to be the foundation for students' journey into the world of technology and innovation.
            </p>
          </div>
        </div>
        
        <h3 className="font-pixel text-xl text-center mb-8 text-[#f2c14e]">Past Highlights</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {pastHighlightsImages.map((image, index) => (
            <div 
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={image} 
                alt={`Bitfest highlight ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBitfest;
