import { useState } from "react";
import { scheduleData } from "@/lib/constants";

interface ScheduleDay {
  time: string;
  event: string;
  venue: string;
  category: string;
}

interface ScheduleTabsProps {
  onDayChange?: (day: string) => void;
}

const ScheduleTabs = ({ onDayChange }: ScheduleTabsProps) => {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");

  const handleDayChange = (day: "day1" | "day2") => {
    setActiveDay(day);
    if (onDayChange) {
      onDayChange(day);
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "Technical":
        return "bg-[#3a86ff]/20 text-[#3a86ff]";
      case "Non-Technical":
        return "bg-[#ff006e]/20 text-[#ff006e]";
      default:
        return "bg-[#f2c14e]/20 text-navy";
    }
  };

  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          className={`px-6 py-3 font-medium ${
            activeDay === "day1" ? "bg-navy text-white" : "bg-gray-200 text-navy"
          }`}
          onClick={() => handleDayChange("day1")}
          aria-pressed={activeDay === "day1"}
        >
          Day 1 (July 24)
        </button>
        <button
          className={`px-6 py-3 font-medium ${
            activeDay === "day2" ? "bg-navy text-white" : "bg-gray-200 text-navy"
          }`}
          onClick={() => handleDayChange("day2")}
          aria-pressed={activeDay === "day2"}
        >
          Day 2 (July 25)
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-navy text-white">
            <tr>
              <th className="px-4 py-3 text-left">Time</th>
              <th className="px-4 py-3 text-left">Event</th>
              <th className="px-4 py-3 text-left">Venue</th>
              <th className="px-4 py-3 text-left">Category</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {scheduleData[activeDay].map((item: ScheduleDay, index: number) => (
              <tr
                key={index}
                className={`${
                  index !== scheduleData[activeDay].length - 1
                    ? "border-b border-gray-200"
                    : ""
                } hover:bg-gray-50`}
              >
                <td className="px-4 py-3">{item.time}</td>
                <td className="px-4 py-3 font-medium">{item.event}</td>
                <td className="px-4 py-3">{item.venue}</td>
                <td className="px-4 py-3">
                  <span
                    className={`${getCategoryBadgeClass(item.category)} px-2 py-1 text-xs rounded-full`}
                  >
                    {item.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleTabs;

