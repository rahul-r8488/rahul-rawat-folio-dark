
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Achievements = () => {
  const achievements = [
    {
      title: "HackerRank Problem Solving (Intermediate) Certificate",
      description: "Demonstrated proficiency in algorithmic problem-solving and data structures",
      date: "2024",
      link: "#"
    },
    {
      title: "400+ Problems Solved",
      description: "Successfully solved over 400 coding problems on platforms like LeetCode and HackerRank",
      date: "Ongoing",
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
                      className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((cert, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-colors duration-300 cursor-pointer">
                  <div className="aspect-square bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Certificate {cert}</span>
                  </div>
                  <p className="text-sm text-gray-400">Certificate {cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
