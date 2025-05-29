
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Star, Layers } from "lucide-react";
import { useAlternativeTheme } from "@/contexts/AlternativeThemeContext";

const AlternativePortfolio = () => {
  const { animationLevel } = useAlternativeTheme();

  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization with machine learning insights",
      technologies: ["React", "Python", "TensorFlow", "D3.js"],
      github: "#",
      live: "#",
      featured: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform using blockchain",
      technologies: ["Solidity", "Web3", "React", "Node.js"],
      github: "#",
      live: "#",
      featured: false,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop"
    },
    {
      title: "Smart IoT Ecosystem",
      description: "Connected devices management with real-time monitoring",
      technologies: ["Arduino", "React", "Firebase", "MQTT"],
      github: "#",
      live: "#",
      featured: true,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    },
    {
      title: "AR Shopping Experience",
      description: "Augmented reality e-commerce platform",
      technologies: ["React Native", "ARKit", "Three.js", "Node.js"],
      github: "#",
      live: "#",
      featured: false,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
    }
  ];

  const getAnimationClass = (baseClass: string) => {
    if (animationLevel === 'minimal') return '';
    return baseClass;
  };

  return (
    <section id="work" className="py-24 pt-40 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 relative overflow-hidden">
      {/* Background Effects */}
      {animationLevel !== 'minimal' && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 ${getAnimationClass('animate-fade-in')}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-accent-400"></div>
            <Layers className="w-8 h-8 text-accent-400" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-accent-400"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black font-display mb-6">
            <span className="text-primary-100">FEATURED</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">PROJECTS</span>
          </h2>
          
          <p className="text-primary-300 text-lg font-mono max-w-2xl mx-auto">
            {'{>'} Innovative solutions that push the boundaries of technology
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group bg-primary-800/50 border-primary-700/50 hover:border-accent-400/50 transition-all duration-500 backdrop-blur-sm overflow-hidden relative ${getAnimationClass('animate-slide-up hover:scale-105')}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-accent-400 text-primary-900 px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  FEATURED
                </div>
              )}

              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-full object-cover ${animationLevel !== 'minimal' ? 'group-hover:scale-110' : ''} transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent group-hover:from-primary-900/60 transition-all duration-300"></div>
              </div>
              
              {/* Project Content */}
              <CardHeader className="pb-4">
                <CardTitle className={`text-primary-100 group-hover:text-accent-400 transition-colors duration-300 font-display text-xl leading-tight`}>
                  {project.title}
                </CardTitle>
                <p className="text-primary-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-accent-400/10 text-accent-400 px-3 py-1 rounded-full text-xs font-mono border border-accent-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-primary-600 text-primary-200 bg-primary-800/50 hover:border-accent-400 hover:text-accent-400 hover:bg-accent-400/10 font-mono text-xs transition-all duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    CODE
                  </Button>
                  <Button 
                    className="flex-1 bg-gradient-to-r from-accent-400 to-accent-300 text-primary-900 hover:from-accent-300 hover:to-accent-400 font-mono text-xs font-bold transition-all duration-300"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    LIVE
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlternativePortfolio;
