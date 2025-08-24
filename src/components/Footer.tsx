import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoImage from '../assets/footer.png';

export function Footer() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Objectives', href: '/objectives' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Teams', href: '/teams' },
    { name: 'Contact', href: '/contacts' },
  ];

  return (
    <footer className="bg-corporate-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-corporate-orange rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-corporate-orange-light rounded-full filter blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <img 
                src={logoImage} 
                alt="T&ES Logo" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-none">
                  TECHNICAL & ENGINEERING
                </span>
                <span className="text-lg font-bold text-corporate-orange leading-none">
                  SOLUTIONS
                </span>
              </div>
            </div>
            <p className="text-blue-200 mb-6 max-w-md leading-relaxed">
              Minimizing Downtime, Maximizing Uptime. We provide comprehensive engineering diagnostics 
              and condition-based monitoring solutions across Tanzania and beyond.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-8 h-8 bg-corporate-orange rounded-full flex items-center justify-center group-hover:bg-corporate-orange-dark transition-colors duration-300">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-blue-200 group-hover:text-white transition-colors duration-300">
                  +255 123 456 789
                </span>
              </div>
              <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-8 h-8 bg-corporate-orange rounded-full flex items-center justify-center group-hover:bg-corporate-orange-dark transition-colors duration-300">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-blue-200 group-hover:text-white transition-colors duration-300">
                  info@tes.co.tz
                </span>
              </div>
              <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-8 h-8 bg-corporate-orange rounded-full flex items-center justify-center group-hover:bg-corporate-orange-dark transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-blue-200 group-hover:text-white transition-colors duration-300">
                  Dar es Salaam, Tanzania
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-blue-200 hover:text-corporate-orange transition-colors duration-200 hover:underline hover:translate-x-1 inline-block transform transition-transform"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li className="hover:text-corporate-orange transition-colors duration-200 cursor-pointer hover:translate-x-1 transform transition-transform">
                Infrared Thermography
              </li>
              <li className="hover:text-corporate-orange transition-colors duration-200 cursor-pointer hover:translate-x-1 transform transition-transform">
                Vibration Analysis
              </li>
              <li className="hover:text-corporate-orange transition-colors duration-200 cursor-pointer hover:translate-x-1 transform transition-transform">
                Oil Analysis
              </li>
              <li className="hover:text-corporate-orange transition-colors duration-200 cursor-pointer hover:translate-x-1 transform transition-transform">
                Motor Circuit Analysis
              </li>
              <li className="hover:text-corporate-orange transition-colors duration-200 cursor-pointer hover:translate-x-1 transform transition-transform">
                Electrical Testing
              </li>
              <li className="hover:text-corporate-orange transition-colors duration-200 cursor-pointer hover:translate-x-1 transform transition-transform">
                Consulting Services
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-600/50 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 Technical & Engineering Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}