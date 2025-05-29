
import { useState } from 'react';
import { Settings, Palette, Zap, Moon, Sun, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAlternativeTheme, ThemeType, ColorScheme, AnimationLevel } from '@/contexts/AlternativeThemeContext';

const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, colorScheme, animationLevel, setTheme, setColorScheme, setAnimationLevel } = useAlternativeTheme();

  const themes: { value: ThemeType; label: string; icon: React.ReactNode }[] = [
    { value: 'dark', label: 'Dark', icon: <Moon className="w-4 h-4" /> },
    { value: 'light', label: 'Light', icon: <Sun className="w-4 h-4" /> },
    { value: 'cyberpunk', label: 'Cyber', icon: <Cpu className="w-4 h-4" /> }
  ];

  const colors: { value: ColorScheme; label: string; color: string }[] = [
    { value: 'blue', label: 'Ocean', color: 'bg-blue-500' },
    { value: 'purple', label: 'Cosmic', color: 'bg-purple-500' },
    { value: 'green', label: 'Forest', color: 'bg-green-500' },
    { value: 'orange', label: 'Sunset', color: 'bg-orange-500' },
    { value: 'pink', label: 'Cherry', color: 'bg-pink-500' }
  ];

  const animations: { value: AnimationLevel; label: string; icon: React.ReactNode }[] = [
    { value: 'minimal', label: 'Minimal', icon: <div className="w-2 h-2 bg-current rounded-full" /> },
    { value: 'standard', label: 'Standard', icon: <Zap className="w-4 h-4" /> },
    { value: 'enhanced', label: 'Enhanced', icon: <Sparkles className="w-4 h-4" /> }
  ];

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="fixed top-4 right-4 z-50 bg-primary-800 border border-accent-400/30 text-accent-400 hover:bg-accent-400 hover:text-primary-900 transition-all duration-300"
      >
        <Settings className="w-5 h-5" />
      </Button>

      {/* Customizer Panel */}
      {isOpen && (
        <div className="fixed top-16 right-4 z-40 bg-primary-900/95 backdrop-blur-md border border-accent-400/30 rounded-lg p-6 w-80 animate-slide-left">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Palette className="w-5 h-5 text-accent-400" />
              <h3 className="text-primary-100 font-semibold">Customize</h3>
            </div>

            {/* Theme Selection */}
            <div>
              <label className="text-primary-200 text-sm font-medium mb-3 block">Theme</label>
              <div className="grid grid-cols-3 gap-2">
                {themes.map((t) => (
                  <Button
                    key={t.value}
                    onClick={() => setTheme(t.value)}
                    variant={theme === t.value ? "default" : "outline"}
                    size="sm"
                    className={`flex flex-col gap-1 h-auto py-3 ${
                      theme === t.value 
                        ? 'bg-accent-400 text-primary-900' 
                        : 'bg-primary-800 border-accent-400/30 text-primary-200 hover:bg-accent-400/10'
                    }`}
                  >
                    {t.icon}
                    <span className="text-xs">{t.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Scheme */}
            <div>
              <label className="text-primary-200 text-sm font-medium mb-3 block">Color Scheme</label>
              <div className="grid grid-cols-5 gap-2">
                {colors.map((c) => (
                  <Button
                    key={c.value}
                    onClick={() => setColorScheme(c.value)}
                    size="sm"
                    className={`h-10 p-0 rounded-lg border-2 transition-all duration-300 ${
                      colorScheme === c.value 
                        ? 'border-accent-400 scale-110' 
                        : 'border-primary-600 hover:border-accent-400/50'
                    } ${c.color}`}
                    title={c.label}
                  />
                ))}
              </div>
            </div>

            {/* Animation Level */}
            <div>
              <label className="text-primary-200 text-sm font-medium mb-3 block">Animations</label>
              <div className="grid grid-cols-3 gap-2">
                {animations.map((a) => (
                  <Button
                    key={a.value}
                    onClick={() => setAnimationLevel(a.value)}
                    variant={animationLevel === a.value ? "default" : "outline"}
                    size="sm"
                    className={`flex flex-col gap-1 h-auto py-3 ${
                      animationLevel === a.value 
                        ? 'bg-accent-400 text-primary-900' 
                        : 'bg-primary-800 border-accent-400/30 text-primary-200 hover:bg-accent-400/10'
                    }`}
                  >
                    {a.icon}
                    <span className="text-xs">{a.label}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Sparkles = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L14.59 7.41L22 10L14.59 12.59L12 20L9.41 12.59L2 10L9.41 7.41L12 0Z" />
  </svg>
);

export default ThemeCustomizer;
