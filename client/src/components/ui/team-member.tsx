import { Linkedin, Instagram } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  instagram: string;
}

const TeamMember = ({ name, role, image, linkedin, instagram }: TeamMemberProps) => {
  return (
    <div className="text-center p-4 hover:shadow-md transition-all duration-300">
      <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden mb-4">
        <img 
          src={image} 
          alt={`${name} - ${role}`} 
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="font-semibold text-navy">{name}</h4>
      <p className="text-sm text-gray-600 mb-2">{role}</p>
      <div className="flex justify-center space-x-2">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-navy hover:text-[#3a86ff]">
          <Linkedin size={18} />
        </a>
        <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-navy hover:text-[#ff006e]">
          <Instagram size={18} />
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
