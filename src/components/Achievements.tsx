
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "HackerRank Problem Solving (Intermediate) Certificate",
      description: "Demonstrated proficiency in algorithmic problem-solving and data structures",
      date: "2024",
      link: "https://www.hackerrank.com/certificates/0da78f04b60e"
    },
    {
      title: "HackerRank Problem Solving (Basic) Certificate",
      description: "Foundation skills in algorithmic problem-solving and programming logic",
      date: "2024",
      link: "https://www.hackerrank.com/certificates/0da78f04b60e"
    },
    {
      title: "400+ Problems Solved",
      description: "Successfully solved over 400 coding problems on platforms like LeetCode and HackerRank",
      date: "Ongoing",
      link: "#"
    }
  ];

  const certificates = [
    {
      name: "HackerRank Problem Solving (Intermediate)",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      link: "https://www.hackerrank.com/certificates/0da78f04b60e"
    },
    {
      name: "HackerRank Problem Solving (Basic)",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      link: "https://www.hackerrank.com/certificates/0da78f04b60e"
    },
    {
      name: "Coding Excellence",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      link: "#"
    },
    {
      name: "Algorithm Mastery",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      link: "#"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Achievements
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {achievement.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-400 font-semibold">{achievement.date}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                      onClick={() => window.open(achievement.link, '_blank')}
                    >
                      View Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certificate Gallery Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Certificate Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {certificates.map((cert, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 group overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="text-white font-semibold text-sm mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
                      {cert.name}
                    </h4>
                    <Button 
                      size="sm"
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs"
                      onClick={() => window.open(cert.link, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      VIEW
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
