
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl floating-animation-delayed"></div>
        
        {/* Glass panels */}
        <div className="absolute top-20 right-20 w-32 h-32 glassmorphism rounded-3xl rotate-12 floating-animation opacity-60"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 glassmorphism rounded-2xl -rotate-12 floating-animation-delayed opacity-40"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-purple-400 rounded-full pulse-glow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-400 rounded-full pulse-glow" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center px-5 py-2.5 glassmorphism rounded-full text-sm font-medium text-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                ✨ Modern App Design
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                Beautiful Apps
                <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light">
                Create stunning, responsive applications with our modern design system. 
                <span className="block text-slate-500 mt-2">Clean, fast, and built for today's users.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 group transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-all duration-300" />
                </Button>
              </div>
            </div>

            {/* Right side - Enhanced App Screenshot */}
            <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative max-w-sm mx-auto lg:max-w-md">
                {/* Enhanced phone mockup with glassmorphism */}
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-2 shadow-2xl transform hover:scale-105 transition-all duration-700 hover:rotate-1">
                  <div className="w-full h-[600px] bg-white rounded-[2rem] overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&h=800&fit=crop"
                      alt="App interface preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
                    
                    {/* Glassmorphism overlay elements */}
                    <div className="absolute top-8 left-4 right-4 glassmorphism rounded-2xl p-4 mx-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full"></div>
                        <div className="flex-1">
                          <div className="h-2 bg-slate-300 rounded-full mb-2"></div>
                          <div className="h-2 bg-slate-200 rounded-full w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced phone details */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-slate-600 rounded-full"></div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-slate-600 rounded-full"></div>
                </div>
                
                {/* Enhanced floating elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-2xl rotate-12 floating-animation opacity-80"></div>
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-2xl floating-animation-delayed opacity-70"></div>
                <div className="absolute top-1/2 -right-4 w-8 h-8 glassmorphism rounded-2xl rotate-45 floating-animation"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
