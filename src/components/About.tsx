
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a third-year Computer Science Engineering student at GEHU, Dehradun, with a strong passion for software development. 
                I discovered my interest in building impactful applications through web development, and ever since, I've been creating 
                projects that merge functionality with thoughtful design.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                As a Software Developer, I focus on writing clean, efficient code to solve real-world problems. As a Full Stack Web Developer, 
                I aim to build responsive, user-friendly websites that are both visually appealing and technically sound.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I enjoy bringing ideas to life through both academic and personal projects, always striving to make technology more 
                accessible and intuitive.
              </p>
            </div>
            
            <div className="bg-gray-700 rounded-2xl p-8 border border-gray-600">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Location:</span>
                  <span className="text-white">Dehradun, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">University:</span>
                  <span className="text-white">GEHU, Dehradun</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Degree:</span>
                  <span className="text-white">B.Tech CSE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Year:</span>
                  <span className="text-white">3rd Year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">GPA:</span>
                  <span className="text-white">8.09</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
