
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Showcase", href: "#showcase" },
      { name: "Documentation", href: "#" }
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#contact" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Community", href: "#" },
      { name: "Status", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/Atharva1903/" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/chiragferwani" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/chiragferwani/" },
    { name: "Email", icon: Mail, href: "mailto:chiragferwani@gmail.com" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl shadow-lg"></div>
              <span className="text-2xl font-bold">unfold.dev</span>
            </div>
            <p className="text-slate-300 mb-8 max-w-sm leading-relaxed text-lg">
            Unfold is where your ideas meet the right people — swipe, connect, and start building together.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 glassmorphism-dark rounded-2xl flex items-center justify-center hover:bg-slate-700/50 transition-all duration-300 group hover:scale-110"
                >
                  <social.icon className="h-5 w-5 group-hover:text-purple-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-6 text-white text-lg">Product</h3>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-white text-lg">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-white text-lg">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="glassmorphism-dark rounded-2xl mt-16 p-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-300 text-lg">
            © 2025 Unfold.{"{dev}"} All rights reserved.
          </p>
          <p className="text-slate-300 text-lg mt-4 md:mt-0">
            Made with <span className="text-red-400 animate-pulse">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
