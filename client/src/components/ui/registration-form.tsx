import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { events, workshops } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters."),
  email: z.string().email("Please provide a valid email address."),
  rollNo: z.string().min(1, "Please enter your roll number."),
  college: z.string().min(3, "Please enter your college name."),
  department: z.string().min(1, "Please select your department."),
  year: z.string().min(1, "Please select your year of study."),
  events: z.array(z.string()).optional(),
  totalFee: z.number().min(0),
});

type FormValues = z.infer<typeof formSchema>;

const RegistrationForm = () => {
  const [selectedEvents, setSelectedEvents] = useState<{ [key: string]: boolean }>({});
  const [totalFee, setTotalFee] = useState(0);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      rollNo: "",
      college: "",
      department: "",
      year: "",
      events: [],
      totalFee: 0,
    },
  });

  // Calculate total fee whenever selectedEvents changes
  useEffect(() => {
    let fee = 0;
    
    // Add up event fees
    events.forEach(event => {
      if (selectedEvents[event.id]) {
        fee += event.fee;
      }
    });
    
    // Add up workshop fees
    workshops.forEach(workshop => {
      if (selectedEvents[workshop.id]) {
        fee += workshop.fee;
      }
    });
    
    setTotalFee(fee);
    form.setValue("totalFee", fee);
  }, [selectedEvents, form]);

  // Update form.events whenever selectedEvents changes
  useEffect(() => {
    const selectedEventsList = Object.keys(selectedEvents).filter(
      (eventId) => selectedEvents[eventId]
    );
    form.setValue("events", selectedEventsList);
  }, [selectedEvents, form]);

  const handleEventChange = (eventId: string, checked: boolean) => {
    setSelectedEvents(prev => ({
      ...prev,
      [eventId]: checked
    }));
  };

  const registerMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const res = await apiRequest("POST", "/api/register", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Registration successful!",
        description: "Thank you for registering for Bitfest 2025. Please complete the bank transfer and contact the CA Instagram (@ca_pcacs) with your details to get your physical receipt.",
      });
      form.reset();
      setSelectedEvents({});
    },
    onError: (error) => {
      toast({
        title: "Registration failed",
        description: error.message || "Failed to process registration. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    registerMutation.mutate(data);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="font-pixel text-xl text-center mb-8 text-navy">Register Now</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          {/* Personal Information */}
          <div className="mb-6">
            <h4 className="text-navy font-semibold mb-4 pb-2 border-b border-gray-200">Personal Information</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Full Name *</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f2c14e]" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Email Address *</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="email" 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f2c14e]" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="rollNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Roll Number *</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f2c14e]" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Department *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f2c14e]">
                          <SelectValue placeholder="Select Department" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="it">Information Technology</SelectItem>
                        <SelectItem value="bca">BCA</SelectItem>
                        <SelectItem value="aiml">AI/ML</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Year of Study *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f2c14e]">
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">First Year</SelectItem>
                        <SelectItem value="2">Second Year</SelectItem>
                        <SelectItem value="3">Third Year</SelectItem>
                        <SelectItem value="4">Fourth Year</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="college"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel className="text-gray-700">College/Institution *</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f2c14e]" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          {/* Event Selection */}
          <div className="mb-6">
            <h4 className="text-navy font-semibold mb-4 pb-2 border-b border-gray-200">Select Events & Workshops</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-navy mb-2">Events</p>
                <div className="space-y-2">
                  {events.map(event => (
                    <label key={event.id} className="flex items-center">
                      <Checkbox 
                        className="mr-2" 
                        checked={selectedEvents[event.id] || false}
                        onCheckedChange={(checked) => handleEventChange(event.id, !!checked)}
                      /> 
                      {event.title} (₹{event.fee})
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="font-medium text-navy mb-2">Workshops</p>
                <div className="space-y-2">
                  {workshops.map(workshop => (
                    <label key={workshop.id} className="flex items-center">
                      <Checkbox 
                        className="mr-2" 
                        checked={selectedEvents[workshop.id] || false}
                        onCheckedChange={(checked) => handleEventChange(workshop.id, !!checked)}
                      /> 
                      {workshop.title} (₹{workshop.fee})
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Total Fee Calculation */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Total Fee:</span>
              <span className="font-pixel text-lg text-navy">₹{totalFee}</span>
            </div>
            
            {/* Payment Instructions */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <h5 className="font-semibold text-navy mb-3">Payment Instructions</h5>
              <p className="text-sm text-gray-700 mb-4">Please transfer the total amount to the Computer Association's bank account:</p>
              
              <div className="bg-white p-4 border border-dashed border-gray-300 rounded mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="font-medium block">Account Name:</span>
                    <span className="text-gray-700">Computer Association PCACS</span>
                  </div>
                  <div>
                    <span className="font-medium block">Account Number:</span>
                    <span className="text-gray-700">123456789012345</span>
                  </div>
                  <div>
                    <span className="font-medium block">Bank Name:</span>
                    <span className="text-gray-700">State Bank of India</span>
                  </div>
                  <div>
                    <span className="font-medium block">IFSC Code:</span>
                    <span className="text-gray-700">SBIN0012345</span>
                  </div>
                  <div>
                    <span className="font-medium block">Branch:</span>
                    <span className="text-gray-700">New Panvel</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 border-l-4 border-[#f2c14e] text-sm">
                <p className="font-medium text-navy mb-1">Important:</p>
                <p className="text-gray-700">After completing the bank transfer, please share your Name, Email, Roll No., and Department to the official Instagram account of CA (@ca_pcacs) to get your physical receipt.</p>
              </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="text-center">
            <Button 
              type="submit" 
              className="bg-[#f2c14e] hover:bg-yellow-400 text-navy font-bold py-3 px-8 rounded-none pixel-border transition-colors duration-300"
              disabled={registerMutation.isPending}
            >
              {registerMutation.isPending ? "Processing..." : "Register Now"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RegistrationForm;
