
import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeType = 'dark' | 'light' | 'cyberpunk';
export type ColorScheme = 'blue' | 'purple' | 'green' | 'orange' | 'pink';
export type AnimationLevel = 'minimal' | 'standard' | 'enhanced';

interface AlternativeThemeContextType {
  theme: ThemeType;
  colorScheme: ColorScheme;
  animationLevel: AnimationLevel;
  setTheme: (theme: ThemeType) => void;
  setColorScheme: (scheme: ColorScheme) => void;
  setAnimationLevel: (level: AnimationLevel) => void;
}

const AlternativeThemeContext = createContext<AlternativeThemeContextType | undefined>(undefined);

export const AlternativeThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('dark');
  const [colorScheme, setColorScheme] = useState<ColorScheme>('blue');
  const [animationLevel, setAnimationLevel] = useState<AnimationLevel>('standard');

  useEffect(() => {
    const savedTheme = localStorage.getItem('alt-theme') as ThemeType;
    const savedColor = localStorage.getItem('alt-color') as ColorScheme;
    const savedAnimation = localStorage.getItem('alt-animation') as AnimationLevel;
    
    if (savedTheme) setTheme(savedTheme);
    if (savedColor) setColorScheme(savedColor);
    if (savedAnimation) setAnimationLevel(savedAnimation);
  }, []);

  useEffect(() => {
    localStorage.setItem('alt-theme', theme);
    document.documentElement.className = `theme-${theme} color-${colorScheme} animation-${animationLevel}`;
  }, [theme, colorScheme, animationLevel]);

  const handleSetTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
  };

  const handleSetColorScheme = (scheme: ColorScheme) => {
    setColorScheme(scheme);
    localStorage.setItem('alt-color', scheme);
  };

  const handleSetAnimationLevel = (level: AnimationLevel) => {
    setAnimationLevel(level);
    localStorage.setItem('alt-animation', level);
  };

  return (
    <AlternativeThemeContext.Provider 
      value={{ 
        theme, 
        colorScheme, 
        animationLevel, 
        setTheme: handleSetTheme, 
        setColorScheme: handleSetColorScheme, 
        setAnimationLevel: handleSetAnimationLevel 
      }}
    >
      {children}
    </AlternativeThemeContext.Provider>
  );
};

export const useAlternativeTheme = () => {
  const context = useContext(AlternativeThemeContext);
  if (context === undefined) {
    throw new Error('useAlternativeTheme must be used within an AlternativeThemeProvider');
  }
  return context;
};
