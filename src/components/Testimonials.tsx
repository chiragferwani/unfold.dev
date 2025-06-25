
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e11905?w=100&h=100&fit=crop&crop=face",
      content: "This template saved us weeks of development time. The code quality is exceptional and the design is exactly what we needed for our SaaS platform.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "StartupLab",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Outstanding quality and attention to detail. The responsive design works flawlessly across all devices. Highly recommend for any modern web project.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "UI/UX Designer",
      company: "DesignStudio",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Beautiful, clean design with great customization options. The Tailwind CSS implementation is top-notch and very easy to work with.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
