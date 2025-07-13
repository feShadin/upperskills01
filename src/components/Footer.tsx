import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple backdrop-blur-md border-t border-purple/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="/Upper Skills.png" 
                  alt="UpperSkills Logo" 
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                UpperSkills
              </span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Next-generation EdTech platform powered by AI. Transform your learning experience with cutting-edge technology and personalized education paths.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><Link to="/interactive" className="text-white/80 hover:text-white transition-colors duration-200">Interactive Learning</Link></li>
              <li><Link to="/analytics" className="text-white/80 hover:text-white transition-colors duration-200">AI Analytics</Link></li>
              <li><Link to="/labs" className="text-white/80 hover:text-white transition-colors duration-200">Virtual Labs</Link></li>
              <li><Link to="/live" className="text-white/80 hover:text-white transition-colors duration-200">Live Classes</Link></li>
              <li><Link to="/progress" className="text-white/80 hover:text-white transition-colors duration-200">Progress Tracking</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/individual" className="text-white/80 hover:text-white transition-colors duration-200">For Individuals</Link></li>
              <li><Link to="/teams" className="text-white/80 hover:text-white transition-colors duration-200">For Teams</Link></li>
              <li><Link to="/enterprise" className="text-white/80 hover:text-white transition-colors duration-200">For Enterprise</Link></li>
              <li><Link to="/institutions" className="text-white/80 hover:text-white transition-colors duration-200">For Institutions</Link></li>
              <li><Link to="/api" className="text-white/80 hover:text-white transition-colors duration-200">API Access</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white" />
                <span className="text-white/80 text-sm">hello@upperskills.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-white" />
                <span className="text-white/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-white" />
                <span className="text-white/80 text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">
              © 2025 UpperSkills. All rights reserved.
            </p>
            <p className="text-white/80 text-sm mt-2 md:mt-0">
              Powered by AI • Built for the Future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;