import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_CONFIG } from "@/lib/constants";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please provide a valid email address."),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      console.log("Form submission started with data:", data);

      // Send to both backend and Formspree
      const promises = [];

      // Send to backend for storage
      console.log("Sending to backend...");
      promises.push(
        apiRequest("POST", "/api/contact", data).then((res) => {
          console.log("Backend response:", res);
          return res.json();
        }),
      );

      // Send to Formspree for email delivery (only if configured)
      if (
        CONTACT_CONFIG.formspreeUrl &&
        !CONTACT_CONFIG.formspreeUrl.includes("https://formspree.io/f/xyzjqorkts")
      ) {
        console.log("Sending to Formspree:", CONTACT_CONFIG.formspreeUrl);
        promises.push(
          fetch(CONTACT_CONFIG.formspreeUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: data.name,
              email: data.email,
              subject: data.subject || "Contact Form Submission",
              message: data.message,
              _replyto: data.email,
            }),
          }).then((res) => {
            console.log("Formspree response:", res);
            if (!res.ok) {
              throw new Error(`Failed to send to Formspree: ${res.status}`);
            }
            return res.json();
          }),
        );
      } else {
        console.log("Formspree not configured or invalid URL");
      }

      // Wait for all requests to complete
      const results = await Promise.all(promises);
      console.log("All requests completed:", results);
      return results;
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description:
          "Thank you for your message. We will get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description:
          error.message ||
          "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    contactMutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-gray-700 mb-2">
                Your Name *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f2c14e]"
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
              <FormLabel className="block text-gray-700 mb-2">
                Email Address *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f2c14e]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-gray-700 mb-2">
                Subject
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f2c14e]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-gray-700 mb-2">
                Message *
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f2c14e]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <Button
            type="submit"
            className="bg-navy hover:bg-[#3a86ff] text-white font-bold py-3 px-6 rounded-sm transition-colors duration-300"
            disabled={contactMutation.isPending}
          >
            {contactMutation.isPending ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;

