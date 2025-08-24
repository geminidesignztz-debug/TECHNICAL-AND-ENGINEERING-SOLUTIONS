
'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Shield, Clock, Users, Zap, CheckCircle, Star, Award, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import EngineeringShowcase from '../components/EngineeringShowcase';

export function HomePage() {
  const stats = [
    { icon: Shield, value: '99.9%', label: 'Reliability Rate', color: 'text-green-500' },
    { icon: Clock, value: '24/7', label: 'Support Available', color: 'text-blue-500' },
    { icon: Users, value: '500+', label: 'Projects Completed', color: 'text-purple-500' },
    { icon: Zap, value: '48hrs', label: 'Response Time', color: 'text-orange-500' }
  ];

  const services = [
    {
      title: 'Infrared Thermography',
      description: 'Using the Fluke Ti480-PRO 60 Hz high-resolution thermal camera, we provide detailed thermal imaging to identify hot spots.',
      image: '../assets/infrared-thermography.jpg',
      gradient: 'from-red-500 to-orange-500',
      features: ['High-resolution thermal imaging', 'Hot spot identification', 'Equipment diagnostics', 'Energy loss detection'],
      route: '/services/infrared-thermography'
    },
    {
      title: 'Power Quality Analysis',
      description: 'With the Fluke 1777 Power Quality Analyzer, we measure over 500 parameters, including harmonics, dips, swells, and transients.',
      image: '../assets/power-quality-analysis.jpg',
      gradient: 'from-blue-600 to-indigo-600',
      features: ['Harmonics measurement', 'Voltage dips & swells', 'Transient detection', 'Power factor analysis'],
      route: '/services/power-quality-analysis'
    },
    {
      title: 'Advanced Vibration Analysis',
      description: 'We detect unbalance, looseness, misalignment, and bearing failures in motors, fans, blowers, pumps, compressors, and gearboxes.',
      image: '../assets/vibration-analysis.jpg',
      gradient: 'from-purple-500 to-violet-600',
      features: ['Motor & pump diagnostics', 'Bearing failure detection', 'Misalignment analysis', 'Unbalance identification'],
      route: '/services/vibration-analysis'
    },
    {
      title: 'Battery Impedance Inspection',
      description: 'We conduct comprehensive performance tests on battery banks to ensure reliable power backup for critical systems.',
      image: '../assets/battery-inspection.jpg',
      gradient: 'from-yellow-500 to-amber-600',
      features: ['Battery bank testing', 'Performance analysis', 'Backup system verification', 'Reliability assessment'],
      route: '/services/battery-inspection'
    },
    {
      title: 'Industrial Acoustic Imaging',
      description: 'Using the Fluke ii915 Acoustic Imager, we accurately locate and quantify air, gas, and vacuum leaks.',
      image: '../assets/acoustic-imaging.jpg',
      gradient: 'from-green-500 to-emerald-600',
      features: ['Leak detection', 'Air system analysis', 'Gas leak quantification', 'Vacuum system testing'],
      route: '/services/acoustic-imaging'
    },
    {
      title: 'Non-Voltage & Current Measurement',
      description: 'Our Fluke 378 FC True RMS Clamp Meter enables non-contact voltage and current measurements.',
      image: '../assets/current-measurement.jpg',
      gradient: 'from-cyan-500 to-teal-600',
      features: ['Non-contact measurement', 'True RMS analysis', 'Current monitoring', 'Voltage verification'],
      route: '/services/current-measurement'
    },
    {
      title: 'Earth Resistance Measurement',
      description: 'We test earth ground loops and leakage currents, even in difficult-to-access areas, to ensure effective grounding and electrical safety.',
      image: '../assets/earth-resistance.jpg',
      gradient: 'from-orange-500 to-red-600',
      features: ['Ground loop testing', 'Leakage current analysis', 'Safety verification', 'Grounding assessment'],
      route: '/services/earth-resistance'
    },
    {
      title: 'Oil Condition Monitoring',
      description: 'We perform detailed analysis of hydraulic and lubrication oil using advanced laboratory techniques.',
      image: '../assets/oil-monitoring.jpg',
      gradient: 'from-slate-600 to-gray-700',
      features: ['Oil analysis', 'Contamination testing', 'Viscosity measurement', 'Wear particle detection'],
      route: '/services/oil-monitoring'
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      company: 'Manufacturing Corp',
      text: 'Outstanding service and expertise. They helped us reduce downtime by 70%.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'Industrial Solutions',
      text: 'Professional team with cutting-edge technology. Highly recommended!',
      rating: 5
    }
  ];

  // Import images for slideshow
  const slideshowImages = [
    '../assets/homepage1.webp',
    '../assets/homepage2.webp',
    '../assets/homepage3.webp',
    '../assets/homepage4.webp',
    '../assets/homepage5.webp',
    '../assets/homepage6.webp',
    '../assets/homepage7.webp'
  ].map(path => new URL(path, import.meta.url).href);

  const [currentSlide, setCurrentSlide] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0 w-full h-full">
          {slideshowImages.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt={`Slideshow ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentSlide === idx ? 'opacity-100' : 'opacity-0'}`}
              style={{zIndex: 0}}
            />
          ))}
          {/* Enhanced gradient overlay for better contrast */}
          <div 
            className="absolute inset-0" 
            style={{
              zIndex: 1,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)',
              backdropFilter: 'brightness(0.8) contrast(1.2)'
            }} 
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-lg backdrop-blur-sm">
                Leading Engineering Solutions in Tanzania
              </Badge>
            </motion.div>

            {/* Main Heading with Staggered Animation */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <span className="block text-white">TECHNICAL &</span>
                <span className="block text-white">ENGINEERING</span>
                <motion.span 
                  className="block bg-corporate-orange px-8 py-4 rounded-2xl inline-block mt-6 text-white relative overflow-hidden hover-lift"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: [-100, 300] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  SOLUTIONS
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl sm:text-2xl md:text-3xl font-medium text-corporate-orange-light mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Minimizing Downtime, Maximizing Uptime
              </motion.p>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <p className="text-xl text-gray-100 leading-relaxed">
                Transform your operations with cutting-edge engineering diagnostics and condition-based monitoring. 
                We deliver innovative solutions that ensure peak performance and maximum reliability for your critical assets.
              </p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <Link to="/services">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="btn-modern text-lg px-10 py-6 hover-glow group"
                  >
                    Explore Our Services
                    <motion.div
                      className="ml-3"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/60 text-white hover:bg-white hover:text-corporate-blue px-10 py-6 text-lg backdrop-blur-sm bg-white/10 group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div 
              className="w-1 h-3 bg-corporate-orange rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-blue-50 opacity-50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover-lift interactive-card border-0 glass-card">
                    <CardContent className="pt-8 pb-6">
                      <motion.div 
                        className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${stat.color} bg-gradient-to-br from-current to-current/80`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      <motion.h3 
                        className="text-4xl font-bold text-corporate-blue mb-2"
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                        viewport={{ once: true }}
                      >
                        {stat.value}
                      </motion.h3>
                      <p className="text-corporate-grey-dark font-medium">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Engineering Showcase */}
      <EngineeringShowcase />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block">
              <Shield className="h-16 w-16 text-corporate-blue mx-auto mb-4" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-4">
              Why Choose Technical & Engineering Solutions
            </h2>
            <p className="text-xl text-corporate-grey-dark max-w-3xl mx-auto">
              Our commitment to legal compliance and professional standards ensures reliable, trustworthy service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <CheckCircle className="h-10 w-10 text-corporate-blue" />
              </div>
              <h4 className="text-xl font-bold text-corporate-blue mb-3">Fully Licensed</h4>
              <p className="text-corporate-grey-dark">All required business and professional licenses</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Award className="h-10 w-10 text-corporate-blue" />
              </div>
              <h4 className="text-xl font-bold text-corporate-blue mb-3">Certified Quality</h4>
              <p className="text-corporate-grey-dark">ISO 9001:2015 quality management certification</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Shield className="h-10 w-10 text-corporate-blue" />
              </div>
              <h4 className="text-xl font-bold text-corporate-blue mb-3">Insured & Protected</h4>
              <p className="text-corporate-grey-dark">Comprehensive insurance coverage</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Globe className="h-10 w-10 text-corporate-blue" />
              </div>
              <h4 className="text-xl font-bold text-corporate-blue mb-3">International Standards</h4>
              <p className="text-corporate-grey-dark">Compliant with global best practices</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-corporate-orange/10 text-corporate-orange border-corporate-orange/20 mb-4">
              Our Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-corporate-blue mb-6">
              Cutting-Edge Solutions
            </h2>
            <p className="text-xl text-corporate-grey-dark max-w-3xl mx-auto">
              Discover our comprehensive range of engineering diagnostic services designed to optimize your operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="relative overflow-hidden hover-lift border-0 bg-white/80 backdrop-blur-sm modern-shadow group h-full">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}></div>
                  
                  {/* Service Image */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <CardHeader className="pb-4">
                    <div>
                      <CardTitle className="text-xl text-corporate-blue group-hover:text-corporate-orange transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <CardDescription className="text-corporate-grey-dark">
                      {service.description}
                    </CardDescription>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-corporate-orange" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link to={service.route}>
                      <Button 
                        className="w-full mt-4 bg-corporate-blue hover:bg-corporate-orange transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/services">
              <Button className="btn-modern text-lg px-8 py-4">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-corporate-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Trusted by industry leaders across Tanzania and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-white/20 hover-lift">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 + 1, duration: 0.3 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-white mb-4 text-lg leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t border-white/20 pt-4">
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-blue-200">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/services">
              <Button 
                className="bg-corporate-orange hover:bg-corporate-orange-dark text-white px-8 py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-corporate-orange to-corporate-orange-dark relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Join hundreds of satisfied clients who have transformed their maintenance strategies with our expert solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contacts">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg"
                    className="bg-white text-corporate-orange hover:bg-gray-100 px-10 py-6 text-lg font-semibold border-0 shadow-lg"
                  >
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Get Started Today
                  </Button>
                </motion.div>
              </Link>
              
              <Link to="/about">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-corporate-orange px-10 py-6 text-lg bg-transparent"
                  >
                    Learn More About Us
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}