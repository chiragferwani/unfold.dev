
import { GalleryHorizontalEnd, Blocks, Users, Lightbulb, Clapperboard, Shrub } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: GalleryHorizontalEnd,
      title: "Swipe",
      description: "Discover ideas & people that match your vibe."
    },
    {
      icon: Lightbulb,
      title: "Pitch",
      description: "Share your vision with the right builders."
    },
    {
      icon: Users,
      title: "Pair",
      description: "Find developers, designers, and thinkers."
    },
    {
      icon: Blocks,
      title: "Build",
      description: "Work together with tasks, chat, and updates."
    },
    {
      icon: Clapperboard,
      title: "Showcase",
      description: "Launch and share what you’ve built."
    },
    {
      icon: Shrub,
      title: "Grow",
      description: "Earn credibility. Track your journey."
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-white via-slate-50/50 to-purple-50/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-100/40 to-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 glassmorphism rounded-full text-sm font-medium text-slate-700 shadow-lg mb-8">
            ⚡ Core Features
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Why Choose Our Platform
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
          Everything you need to turn your ideas into reality 
            <span className="block text-slate-500">— discover collaborators, chat instantly, and build side-projects together.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/50 hover:border-purple-200/50 hover:bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-900 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
