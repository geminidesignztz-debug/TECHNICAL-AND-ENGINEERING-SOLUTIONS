import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-corporate-blue via-corporate-blue-dark to-corporate-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-corporate-orange rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-corporate-blue-light rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-corporate-orange-light rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="block text-white">TECHNICAL &</span>
              <span className="block text-white">ENGINEERING</span>
              <span className="block bg-corporate-orange px-6 py-2 rounded-lg inline-block mt-4 text-white orange-shadow-lg">
                SOLUTIONS
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-corporate-orange-light mt-8">
              Minimizing Downtime, Maximizing Uptime
            </p>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Leading provider of comprehensive engineering diagnostics and condition-based monitoring 
              solutions across Tanzania and beyond. We deliver cutting-edge technical expertise to 
              keep your operations running at peak performance.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/services">
              <Button 
                size="lg" 
                className="bg-corporate-orange hover:bg-corporate-orange-dark text-white border-0 px-8 py-6 text-lg orange-shadow-lg transition-all duration-200"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contacts">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-corporate-blue px-8 py-6 text-lg transition-all duration-200"
              >
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-600">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-corporate-orange rounded-full mx-auto mb-4 orange-shadow">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
              <p className="text-gray-300">Reliability Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-corporate-orange rounded-full mx-auto mb-4 orange-shadow">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
              <p className="text-gray-300">Support Available</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-corporate-orange rounded-full mx-auto mb-4 orange-shadow">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-corporate-orange rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}