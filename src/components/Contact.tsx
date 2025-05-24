
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin, Send, MapPin, Clock, Terminal, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Transmitted!",
      description: "Your message has been sent successfully. I'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rahul.singh.rawat@example.com",
      action: () => window.open("mailto:rahul.singh.rawat@example.com"),
      description: "Direct communication"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dehradun, India",
      action: null,
      description: "Current base"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "< 24 hours",
      action: null,
      description: "Average reply time"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "#", color: "hover:text-neon-cyan" },
    { icon: Linkedin, label: "LinkedIn", url: "#", color: "hover:text-neon-blue" },
    { icon: Terminal, label: "Dev.to", url: "#", color: "hover:text-neon-purple" }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-neon-purple/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-neon-cyan/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full"
             style={{
               backgroundImage: 'linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)',
               backgroundSize: '100px 100px'
             }}>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-neon-cyan"></div>
            <MessageSquare className="w-8 h-8 text-neon-cyan animate-pulse-neon" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-neon-cyan"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black font-display mb-6">
            <span className="text-white">CON</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple animate-pulse-neon">TACT</span>
          </h2>
          
          <p className="text-gray-400 text-lg font-mono max-w-2xl mx-auto">
            > Let's collaborate and build something extraordinary together
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 animate-slide-up">
            <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:border-neon-cyan/30 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-display font-bold flex items-center gap-3">
                  <Terminal className="w-6 h-6 text-neon-cyan" />
                  Send Message
                </CardTitle>
                <p className="text-gray-400 font-mono text-sm">
                  > Initialize communication protocol
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-neon-cyan font-mono text-sm uppercase tracking-wider">Name</label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-500 focus:border-neon-cyan focus:ring-neon-cyan/20 rounded-lg h-12 font-mono transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-neon-cyan font-mono text-sm uppercase tracking-wider">Email</label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-500 focus:border-neon-cyan focus:ring-neon-cyan/20 rounded-lg h-12 font-mono transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-neon-cyan font-mono text-sm uppercase tracking-wider">Message</label>
                    <textarea
                      name="message"
                      placeholder="Describe your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 resize-none font-mono transition-all duration-300"
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-neon-cyan to-neon-blue hover:from-neon-blue hover:to-neon-purple text-black font-mono font-bold h-12 text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                  >
                    <Send className="w-5 h-5 mr-3" />
                    TRANSMIT_MESSAGE
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-6 animate-slide-left">
            
            {/* Quick Info */}
            <div className="bg-gray-900/30 border border-neon-cyan/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4 font-display">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 font-body">
                Ready to transform ideas into reality? I'm passionate about collaborating on 
                innovative projects that push the boundaries of technology.
              </p>
              
              <div className="flex items-center gap-2 text-neon-cyan font-mono text-sm">
                <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
                <span>Available for new opportunities</span>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className={`bg-gray-800/30 border border-gray-700/50 rounded-lg p-4 backdrop-blur-sm hover:border-neon-cyan/50 transition-all duration-300 ${info.action ? 'cursor-pointer hover:bg-gray-800/50' : ''} group`}
                  onClick={info.action || undefined}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-neon-cyan to-neon-blue p-3 rounded-lg group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm font-mono uppercase tracking-wider">
                        {info.label}
                      </p>
                      <p className="text-white font-semibold font-body">
                        {info.value}
                      </p>
                      <p className="text-gray-500 text-xs font-mono">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gray-900/30 border border-gray-700/30 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="text-lg font-bold text-white mb-4 font-display">
                Find Me Online
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className={`border-gray-600/50 text-gray-400 hover:border-neon-cyan ${social.color} hover:bg-neon-cyan/10 w-12 h-12 rounded-xl transition-all duration-300 group`}
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
