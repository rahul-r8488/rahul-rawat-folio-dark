
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Portfolio = () => {
  const projects = [
    {
      title: "Text to Speech and Speech to Text for Indian Languages",
      description: "Enables Hindi and other Indian language support for seamless conversion between speech and text, improving accessibility and usability.",
      technologies: ["Python", "Speech Recognition APIs"],
      github: "#",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "E-Commerce Website",
      description: "A full-stack shopping platform with user authentication, product listings, cart management, and Firebase integration.",
      technologies: ["ReactJS", "Firebase", "Node.js", "MongoDB"],
      github: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Crypto Website",
      description: "A responsive site showing live cryptocurrency data with filtering and search capabilities.",
      technologies: ["ReactJS", "REST API", "Tailwind CSS"],
      github: "#",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Portfolio
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-blue-500 transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  View Project
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
