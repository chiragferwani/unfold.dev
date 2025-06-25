import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Heart, Share, MessageCircle, Camera, Music, ShoppingBag, MapPin, Calendar, Palette, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AppShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const appScreenshots = [
    {
      id: 1,
      title: "Dashboard Overview",
      description: "Explore live ideas and dev requests in one glance.",
      image: "/src/images/main_snaps/dash.png",
      color: "from-blue-500 to-purple-600",
      icon: Code
    },
    {
      id: 2,
      title: "Social Feed",
      description: "Scroll through bold ideas shared by creators.",
      image: "/src/images/main_snaps/iscroll.png",
      color: "from-pink-500 to-rose-500",
      icon: Heart
    },
    {
      id: 3,
      title: "Photo Gallery",
      description: "Stunning photo management with AI-powered organization and editing tools.",
      image: "/src/images/main_snaps/chatlist.png",
      color: "from-emerald-500 to-teal-500",
      icon: Camera
    },
    {
      id: 4,
      title: "unfold.dev",
      description: "Where ideas find builders.",
      image: "/src/images/main_snaps/splash.png",
      color: "from-orange-500 to-red-500",
      icon: Music
    },
    {
      id: 5,
      title: "Welcome Back",
      description: "Log in and continue building.",
      image: "/src/images/main_snaps/signin.png",
      color: "from-indigo-500 to-purple-500",
      icon: ShoppingBag
    },
    {
      id: 6,
      title: "What Brings You Here?",
      description: "Pitch an idea or find one to join.",
      image: "/src/images/main_snaps/devoridea.png",
      color: "from-green-500 to-emerald-500",
      icon: MapPin
    },
    {
      id: 7,
      title: "Explore Ideas",
      description: "Discover real-world ideas looking for makers.",
      image: "/src/images/main_snaps/iscroll.png",
      color: "from-cyan-500 to-blue-500",
      icon: Calendar
    },
    {
      id: 8,
      title: "Find Collaborators",
      description: "Browse developer roles across live projects.",
      image: "/src/images/main_snaps/wscroll.png",
      color: "from-violet-500 to-purple-500",
      icon: MessageCircle
    },
    {
      id: 9,
      title: "Share Your Idea",
      description: "Let the world know what you're building.",
      image: "/src/images/main_snaps/posti.png",
      color: "from-pink-500 to-purple-500",
      icon: Palette
    },
    {
      id: 10,
      title: "Request a Developer",
      description: "Post a role and get the right talent onboard.",
      image: "/src/images/main_snaps/postw.png",
      color: "from-slate-500 to-gray-600",
      icon: Star
    },
    {
      id: 11,
      title: "Your Space",
      description: "Track your ideas, collabs, and growth.",
      image: "/src/images/main_snaps/profile.png",
      color: "from-blue-500 to-cyan-500",
      icon: Share
    },
    {
      id: 12,
      title: "Prefrences",
      description: "Customize your experience the way you like.",
      image: "/src/images/main_snaps/editprofile.png",
      color: "from-blue-500 to-cyan-500",
      icon: Share
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(appScreenshots.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(appScreenshots.length / 3)) % Math.ceil(appScreenshots.length / 3));
  };

  const featuredApps = appScreenshots.slice(0, 3);
  const remainingApps = appScreenshots.slice(3);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 border border-slate-200/50 shadow-sm mb-6">
            📱 App Showcase
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Beautiful App Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Discover how Unfold turns ideas into action with a smooth, 
          swipe-first interface that makes collaboration effortless.
          </p>
        </div>

        {/* Featured Apps Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredApps.map((app, index) => (
            <Card key={app.id} className="group overflow-x-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Phone Mockup */}
                  <div className="relative mx-auto w-full max-w-xs sm:max-w-sm p-4 sm:p-8 bg-gradient-to-br from-slate-100 to-slate-200">
                    <div className="relative w-full h-[350px] sm:h-[420px] md:h-[520px] bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                      <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                        <img
                          src={app.image}
                          alt={app.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${app.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                      </div>
                    </div>
                    
                    {/* Floating Icon */}
                    <div className={`absolute top-2 -right-2 w-12 h-12 bg-gradient-to-br ${app.color} rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <app.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {app.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
              More App Screens
            </h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(remainingApps.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-6">
                    {remainingApps.slice(slideIndex * 3, slideIndex * 3 + 3).map((app) => (
                      <div key={app.id} className="group">
                        <div className="relative mb-4">
                          <div className="w-48 h-96 mx-auto bg-slate-900 rounded-[2rem] p-1.5 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                            <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                              <img
                                src={app.image}
                                alt={app.title}
                                className="w-full h-full object-cover"
                              />
                              <div className={`absolute inset-0 bg-gradient-to-t ${app.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                            </div>
                          </div>
                          
                          <div className={`absolute top-2 right-2 w-10 h-10 bg-gradient-to-br ${app.color} rounded-xl shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <app.icon className="h-5 w-5 text-white" />
                          </div>
                        </div>

                        <div className="text-center">
                          <h4 className="text-lg font-semibold text-slate-900 mb-2">
                            {app.title}
                          </h4>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {app.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(remainingApps.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-slate-900 w-6' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Create Something Amazing?
              </h3>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of developers who trust our platform to turn ideas to reality.
              </p>
              <a href="/unfold_dev.apk" download>
              <Button 
                size="lg" 
                
                className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download App Now
              </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
