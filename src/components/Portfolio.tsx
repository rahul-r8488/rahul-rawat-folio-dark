
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Text to Speech and Speech to Text for Indian Languages",
      description: "Enables Hindi and other Indian language support for seamless conversion between speech and text, improving accessibility and usability.",
      technologies: ["Python", "Speech Recognition APIs"],
      github: "#",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "E-Commerce Website",
      description: "A full-stack shopping platform with user authentication, product listings, cart management, and Firebase integration.",
      technologies: ["ReactJS", "Firebase", "Node.js", "MongoDB"],
      github: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Crypto Website",
      description: "A responsive site showing live cryptocurrency data with filtering and search capabilities.",
      technologies: ["ReactJS", "REST API", "Tailwind CSS"],
      github: "#",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      gradient: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-900/80 border-gray-700/50 hover:border-gray-600 transition-all duration-500 group backdrop-blur-sm overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                
                {/* Floating tech badges */}
                <div className="absolute top-4 right-4 flex flex-wrap gap-1 max-w-[150px]">
                  {project.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-black/30 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1 border-blue-400/50 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
