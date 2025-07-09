import { Link } from "wouter";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0 bg-navy">
        {/* Background image with overlay */}
        <img 
          src="https://t3.ftcdn.net/jpg/10/34/13/52/360_F_1034135202_w5wVDd7L6VpLrOPzFoCQmfs1VtWwOZ9c.jpg" 
          alt="Tech fest background" 
          className="object-cover w-full h-full opacity-50"
        />
      </div>
      
      {/* Pixel overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 to-navy/90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvc3ZnPg==')]"></div>

      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-center">
        {/* Logo placeholder for main hero BitFest logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-48 h-16 flex items-center justify-center">
            <h1 className="text-white font-pixel text-2xl md:text-4xl tracking-wider">
              <span className="block text-[#f2c14e]">Bitfest 2025</span>
            </h1>
          </div>
        </div>
        <h2 className="text-white font-pixel text-xl md:text-2xl tracking-wider">
          Everything Starts with a Bit
        </h2>
        
        <p className="text-white text-base md:text-lg max-w-xl mx-auto my-8">
          Join us for the most anticipated tech fest at Pillai College of Arts, Commerce & Science
        </p>
        
        <Link href="/schedule" className="bg-[#f2c14e] hover:bg-yellow-400 text-navy font-bold text-lg py-3 px-8 rounded-none pixel-border animate-pixel-pulse inline-block">
          Register Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
