import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-corporate-blue via-corporate-blue-dark to-corporate-black text-white overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-corporate-orange rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
          Engineering Precision,<br />
          <span className="text-corporate-orange">Monitoring with Insight.</span>
        </h1>

        <div className="flex gap-6 mt-8">
          <Link to="/services">
            <Button 
              size="lg" 
              className="bg-corporate-orange hover:bg-corporate-orange-dark text-white border-0 px-8 py-5 text-lg font-semibold shadow-lg transition-all duration-200"
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/contacts">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-corporate-blue px-8 py-5 text-lg font-semibold transition-all duration-200"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}