
import { Sparkles, Code2, Palette, Settings } from "lucide-react";
import { useAlternativeTheme } from "@/contexts/AlternativeThemeContext";

const AlternativeHero = () => {
  const { animationLevel } = useAlternativeTheme();

  const getAnimationClass = (baseClass: string) => {
    if (animationLevel === 'minimal') return '';
    if (animationLevel === 'enhanced') return `${baseClass} animate-bounce`;
    return baseClass;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        {animationLevel !== 'minimal' && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-accent-400 rounded-full ${getAnimationClass('animate-float')}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className={`mb-8 ${getAnimationClass('animate-fade-in')}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-accent-400" />
            <span className="font-mono text-accent-400 text-lg tracking-wider">PORTFOLIO_2.0</span>
            <Sparkles className="w-8 h-8 text-accent-400" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black font-display leading-none mb-6">
            <span className="block text-primary-100 hover:text-accent-400 transition-colors duration-500">
              CREATIVE
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-accent-300 to-accent-500">
              DEVELOPER
            </span>
          </h1>
        </div>

        <div className={`space-y-6 ${getAnimationClass('animate-slide-up')}`} style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center justify-center gap-3">
            <Code2 className="w-6 h-6 text-accent-400" />
            <span className="font-mono text-accent-400 text-xl tracking-wide">FULL_STACK_ARTIST</span>
          </div>
          
          <p className="text-primary-200 text-xl max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with <span className="text-accent-400 font-semibold">passion</span>, 
            <span className="text-accent-300 font-semibold"> precision</span>, and 
            <span className="text-accent-500 font-semibold"> purpose</span>.
          </p>
        </div>

        {/* Feature Icons */}
        <div className={`mt-16 flex justify-center gap-8 ${getAnimationClass('animate-slide-up')}`} style={{ animationDelay: '0.6s' }}>
          {[
            { icon: Code2, label: "Code" },
            { icon: Palette, label: "Design" },
            { icon: Settings, label: "Configure" }
          ].map((item, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center gap-2 p-4 rounded-lg bg-primary-800/30 backdrop-blur-sm border border-accent-400/20 hover:border-accent-400/40 transition-all duration-300 hover:scale-105"
            >
              <item.icon className="w-8 h-8 text-accent-400 group-hover:text-accent-300 transition-colors" />
              <span className="text-primary-200 font-mono text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      {animationLevel !== 'minimal' && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AlternativeHero;
