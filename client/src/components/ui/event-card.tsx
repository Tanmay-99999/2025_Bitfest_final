import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface EventCardProps {
  title: string;
  category: string;
  fee: number;
  description: string;
  rules: string[];
  prizes: string;
  paymentLink?: string;
}

const EventCard = ({ title, category, fee, description, rules, prizes, paymentLink }: EventCardProps) => {
  return (
    <div
      className="
        bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md
        transition-all duration-300 transform
        hover:scale-105
        hover:shadow-2xl
        hover:bg-gradient-to-r hover:from-[#F7EF8A] hover:to-[#D2AC47]
      "
    >
      <div className="bg-navy p-4 text-white">
        <h3 className="font-pixel text-xl" style={{ color: '#f2c14c' }}>
        {title}</h3>

        <div className="mt-2 flex justify-between items-center">
          <span className="bg-[#f2c14e] text-navy text-sm font-bold px-3 py-1">₹{fee}</span>
          <span className="text-xs text-gray-300">{category}</span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 mb-4">
          {description}
        </p>
        <div className="mb-4">
          <h4 className="text-navy font-semibold mb-2">Rules:</h4>
          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
            {rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-navy font-semibold mb-2">Prizes:</h4>
          <p className="text-sm text-gray-600">
            {prizes}
          </p>
        </div>
        {paymentLink ? (
          <a href={paymentLink} target="_blank" rel="noopener noreferrer">
            <Button className="mt-6 w-full bg-navy hover:bg-[#3a86ff] text-white font-bold py-2 px-4 transition-colors duration-300">
              Register Now
            </Button>
          </a>
        ) : (
          <Link href="/schedule">
            <Button className="mt-6 w-full bg-navy hover:bg-[#3a86ff] text-white font-bold py-2 px-4 transition-colors duration-300">
              Register Now
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default EventCard;
