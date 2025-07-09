import { Mail, MapPin, Phone, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import ContactForm from "@/components/ui/contact-form";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-pixel text-3xl text-center mb-12 text-navy">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <h3 className="font-pixel text-xl mb-6 text-navy">Send Us a Message</h3>
            <ContactForm />
          </div>
          
          {/* Contact Information and Map */}
          <div>
            <h3 className="font-pixel text-xl mb-6 text-navy">Find Us</h3>
            
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <MapPin className="text-[#f2c14e] h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy">Address</h4>
                  <p className="text-gray-700">
                    Pillai College of Arts, Commerce & Science,<br />
                    Dr. K. M. Vasudevan Pillai Campus,<br />
                    Plot No. 10, Sector 16,<br />
                    New Panvel, Navi Mumbai - 410206
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Mail className="text-[#f2c14e] h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy">Email</h4>
                  <p className="text-gray-700">
                    <a href="mailto:computerassociationsocials@gmail.com" className="hover:text-[#3a86ff]">computerassociationsocials@gmail.com</a><br />
                   
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-[#f2c14e] h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy">Phone</h4>
                  <p className="text-gray-700">
                    +91 95944 94354<br />
                    
                  </p>
                </div>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="h-64 bg-gray-200 rounded overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.803126245228!2d73.1012974!3d19.0230015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e82aca822341%3A0x1b8e4adcd10b14fe!2sDr.%20K.%20M.%20Vasudevan%20Pillai%20Campus%2C%20New%20Panvel!5e0!3m2!1sen!2sin!4v1655989075916!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Pillai College of Arts, Commerce & Science map"
              ></iframe>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="font-semibold text-navy mb-3">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-navy text-white hover:bg-[#3a86ff] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-navy text-white hover:bg-[#3a86ff] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-navy text-white hover:bg-[#3a86ff] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Youtube size={20} />
                </a>
                <a href="#" className="bg-navy text-white hover:bg-[#3a86ff] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
