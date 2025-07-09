import ScheduleTabs from "@/components/ui/schedule-tabs";
import RegistrationForm from "@/components/ui/registration-form";

const Schedule = () => {
  return (
    <section id="schedule" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-pixel text-3xl text-center mb-12 text-navy">Schedule & Registration</h2>
        
        {/* Schedule Tabs */}
        <ScheduleTabs />
        
        {/* Registration Form */}
        
      </div>
    </section>
  );
};

export default Schedule;
