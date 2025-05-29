
import { AlternativeThemeProvider } from "@/contexts/AlternativeThemeContext";
import AlternativeHeader from "@/components/AlternativeHeader";
import AlternativeHero from "@/components/AlternativeHero";
import AlternativePortfolio from "@/components/AlternativePortfolio";
import ThemeCustomizer from "@/components/ThemeCustomizer";

const Alternative = () => {
  return (
    <AlternativeThemeProvider>
      <div className="min-h-screen transition-all duration-500">
        <ThemeCustomizer />
        <AlternativeHeader />
        <AlternativeHero />
        <AlternativePortfolio />
      </div>
    </AlternativeThemeProvider>
  );
};

export default Alternative;
