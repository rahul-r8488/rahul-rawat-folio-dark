
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Code2, Database, Globe } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Text to Speech & Speech to Text for Indian Languages",
      description: "AI-powered language processing system enabling seamless conversion between speech and text for Hindi and regional Indian languages.",
      technologies: ["Python", "Speech APIs", "AI/ML", "NLP"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop",
      category: "AI/ML",
      icon: Code2,
      gradient: "from-neon-cyan via-neon-blue to-neon-purple"
    },
    {
      title: "Full-Stack E-Commerce Platform",
      description: "Complete shopping ecosystem with real-time inventory, secure payments, user authentication, and advanced analytics dashboard.",
      technologies: ["ReactJS", "Firebase", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      category: "Web App",
      icon: Database,
      gradient: "from-neon-purple via-neon-pink to-neon-cyan"
    },
    {
      title: "Real-Time Crypto Analytics Dashboard",
      description: "Advanced cryptocurrency tracking platform with live data visualization, portfolio management, and market trend analysis.",
      technologies: ["ReactJS", "WebSocket", "Chart.js", "REST API", "Tailwind"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1642790595256-3426fb9bd4d7?w=800&h=600&fit=crop",
      category: "Dashboard",
      icon: Globe,
      gradient: "from-neon-blue via-neon-cyan to-neon-green"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-neon-cyan"></div>
            <Code2 className="w-8 h-8 text-neon-cyan animate-pulse-neon" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-neon-cyan"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black font-display mb-6">
            <span className="text-white">PORT</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple animate-pulse-neon">FOLIO</span>
          </h2>
          
          <p className="text-gray-400 text-lg font-mono max-w-2xl mx-auto">
            {'>'} Showcasing innovative solutions and cutting-edge technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-gray-900/50 border-gray-700/50 hover:border-neon-cyan/50 transition-all duration-500 backdrop-blur-sm overflow-hidden relative animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-neon-cyan/30">
                    <project.icon className="w-4 h-4 text-neon-cyan" />
                    <span className="text-neon-cyan text-xs font-mono font-bold">{project.category}</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black font-mono"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      CODE
                    </Button>
                    <Button
                      size="sm"
                      className="bg-neon-cyan text-black hover:bg-neon-blue font-mono"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      LIVE
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardHeader className="space-y-3">
                <CardTitle className="text-white group-hover:text-neon-cyan transition-colors duration-300 font-display text-xl leading-tight">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-800/50 border border-neon-cyan/20 text-neon-cyan px-3 py-1 rounded-full text-xs font-mono hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3 pt-0">
                <Button 
                  variant="outline" 
                  className="flex-1 border-gray-600 text-gray-300 hover:border-neon-cyan hover:text-neon-cyan hover:bg-neon-cyan/10 font-mono text-xs transition-all duration-300"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  SOURCE
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-neon-cyan to-neon-blue hover:from-neon-blue hover:to-neon-purple text-black font-mono text-xs font-bold transition-all duration-300"
                  onClick={() => window.open(project.live, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  DEPLOY
                </Button>
              </CardFooter>

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-purple/5 rounded-lg"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black font-mono font-bold px-8 py-4 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300"
          >
            VIEW_ALL_PROJECTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
