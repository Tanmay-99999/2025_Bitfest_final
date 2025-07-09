import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { Link } from "wouter";

interface WorkshopCardProps {
  title: string;
  date: string;
  fee: number;
  description: string;
  participants: string;
  image: string;
  paymentLink?: string;
}

const WorkshopCard = ({ title, date, fee, description, participants, image, paymentLink }: WorkshopCardProps) => {
  return (
    <div
      className="
        bg-white rounded-lg overflow-hidden shadow-lg border-b-4 border-[#3a86ff]
        transform transition-all duration-300
        hover:-translate-y-2 hover:scale-105 hover:shadow-2xl
        hover:bg-gradient-to-r hover:from-[#F7EF8A] hover:to-[#D2AC47]
      "
    >
      <div className="h-48 bg-navy relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="font-pixel text-xl text-white text-center px-4">{title}</h3>
        </div>
        <div className="absolute bottom-0 right-0 bg-[#f2c14e] text-navy m-4 px-3 py-1 text-sm font-bold">
          ₹{fee}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Clock className="text-gray-500 mr-2 h-4 w-4" />
          <span className="text-gray-600 text-sm">{date}</span>
        </div>
        
        <p className="text-gray-700 mb-6">
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{participants}</span>
          {paymentLink ? (
            <a href={paymentLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-navy hover:bg-[#3a86ff] text-white font-bold py-2 px-4 rounded-sm transition-colors duration-300">
                Register
              </Button>
            </a>
          ) : (
            <Link href="/schedule">
              <Button className="bg-navy hover:bg-[#3a86ff] text-white font-bold py-2 px-4 rounded-sm transition-colors duration-300">
                Register
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;

