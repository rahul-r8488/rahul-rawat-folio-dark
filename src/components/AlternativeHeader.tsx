
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAlternativeTheme } from "@/contexts/AlternativeThemeContext";

const AlternativeHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { animationLevel } = useAlternativeTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = ["About", "Work", "Skills", "Contact"];

  const getAnimationClass = (baseClass: string) => {
    if (animationLevel === 'minimal') return '';
    return baseClass;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? "bg-primary-900/90 backdrop-blur-md border-b border-accent-400/30 shadow-lg shadow-accent-400/10" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className={`flex items-center gap-3 group cursor-pointer ${getAnimationClass('hover:scale-105')} transition-all duration-300`}>
            <Sparkles className={`w-6 h-6 text-accent-400 ${animationLevel === 'enhanced' ? 'group-hover:animate-spin' : 'group-hover:animate-pulse'} transition-all duration-300`} />
            <span className="font-mono text-accent-400 text-lg font-bold tracking-wider group-hover:text-accent-300 transition-colors duration-300">
              DEV.STUDIO
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative group px-6 py-3 font-mono text-sm tracking-wider text-primary-200 hover:text-accent-400 transition-all duration-300 ${getAnimationClass('hover:scale-105')}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.toUpperCase()}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-400/10 to-accent-300/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-accent-400 to-accent-300 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-accent-400 hover:bg-accent-400/10 border border-accent-400/30 hover:border-accent-400 transition-all duration-300 hover:scale-105"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className={`md:hidden mt-4 bg-primary-900/95 backdrop-blur-md rounded-xl border border-accent-400/30 p-4 ${getAnimationClass('animate-slide-up')}`}>
            {menuItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left font-mono text-primary-200 hover:text-accent-400 py-4 px-4 rounded-lg hover:bg-accent-400/10 transition-all duration-300 border-l-2 border-transparent hover:border-accent-400 ${getAnimationClass('hover:scale-105')}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default AlternativeHeader;
