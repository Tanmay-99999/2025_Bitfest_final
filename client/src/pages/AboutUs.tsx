import { teamMembers } from "@/lib/constants";
import TeamMember from "@/components/ui/team-member";

const AboutUs = () => {
  return (
    <section id="about-us" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-pixel text-3xl text-center mb-12 text-navy">About Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="font-pixel text-xl mb-4 text-navy">Our Mission & Vision</h3>
            <p className="text-gray-700 mb-4">
              The Computer Association at Pillai College is dedicated to cultivating technical excellence and innovation among students across Computer Science, Information Technology, BCA, and AI/ML departments.
            </p>
            <p className="text-gray-700">
              Our mission is to bridge the gap between academic learning and industry needs by providing platforms like Bitfest for students to showcase their talents, build professional networks, and explore cutting-edge technologies through practical experience.
            </p>
          </div>
          
          <div className="relative h-64 md:h-auto">
            <img 
              src="https://pcacs.ac.in/wp-content/uploads/2019/07/value-added-activities-7.jpg" 
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute bottom-0 right-0 bg-[#f2c14e] text-navy px-4 py-2 font-pixel text-sm">
              Est. 2002
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default AboutUs;
