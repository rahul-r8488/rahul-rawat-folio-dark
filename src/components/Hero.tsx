
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Rahul Singh Rawat
          </h1>
          <div className="text-xl md:text-2xl mb-8 text-gray-300">
            <span className="block mb-2">Software Developer</span>
            <span className="text-blue-400">|</span>
            <span className="block mt-2">Full Stack Web Developer</span>
          </div>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Third-year Computer Science Engineering student at GEHU, Dehradun, passionate about 
            creating impactful applications that merge functionality with thoughtful design.
          </p>
          <Button
            onClick={scrollToAbout}
            variant="outline"
            size="lg"
            className="group border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
          >
            Explore My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
