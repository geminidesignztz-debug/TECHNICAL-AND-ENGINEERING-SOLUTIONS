'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Users, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useState } from 'react';

export function ContactsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+255 123 456 789', '+255 987 654 321'],
      description: 'Call us during business hours',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@tes.co.tz', 'support@tes.co.tz'],
      description: 'Send us your inquiries anytime',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Dar es Salaam, Tanzania'],
      description: 'Visit our modern facility',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
      description: 'Emergency services available 24/7',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const services = [
    'Infrared Thermography',
    'Vibration Analysis', 
    'Oil Analysis',
    'Motor Circuit Analysis',
    'Electrical Testing',
    'Consulting Services',
    'Other'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-corporate-blue via-corporate-blue-dark to-corporate-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-corporate-orange rounded-full filter blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-80 h-80 bg-corporate-orange-light rounded-full filter blur-2xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-lg backdrop-blur-sm mb-6">
                📞 Contact Us
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Get In Touch
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Ready to optimize your operations? Contact our expert team for professional engineering diagnostics and consultation services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-corporate-orange/10 text-corporate-orange border-corporate-orange/20 mb-4">
              Contact Information
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-6">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-corporate-grey-dark max-w-3xl mx-auto">
              Choose the communication method that works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover-lift interactive-card border-0 modern-shadow bg-white/90 backdrop-blur-sm relative overflow-hidden h-full">
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.color}`}></div>
                    
                    <CardHeader className="pb-4">
                      <motion.div 
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.color} group-hover:scale-110 transition-all duration-300 shadow-lg mb-4`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      <CardTitle className="text-xl text-corporate-blue group-hover:text-corporate-orange transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        {item.details.map((detail, detailIndex) => (
                          <motion.p 
                            key={detailIndex} 
                            className="text-corporate-grey-dark font-medium"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: detailIndex * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                          >
                            {detail}
                          </motion.p>
                        ))}
                      </div>
                      <CardDescription className="text-corporate-grey">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 modern-shadow bg-white/90 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-corporate-blue to-corporate-orange"></div>
                
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-corporate-orange to-corporate-orange-dark rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <MessageSquare className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-2xl text-corporate-blue">Send Us a Message</CardTitle>
                      <CardDescription className="text-corporate-grey-dark">
                        Fill out the form and we'll get back to you within 24 hours.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-corporate-blue mb-2">
                        First Name *
                      </label>
                      <Input 
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="border-gray-300 focus:border-corporate-orange focus:ring-corporate-orange transition-all duration-200"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-corporate-blue mb-2">
                        Last Name *
                      </label>
                      <Input 
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="border-gray-300 focus:border-corporate-orange focus:ring-corporate-orange transition-all duration-200"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-corporate-blue mb-2">
                      Email Address *
                    </label>
                    <Input 
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-gray-300 focus:border-corporate-orange focus:ring-corporate-orange transition-all duration-200"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-corporate-blue mb-2">
                      Phone Number
                    </label>
                    <Input 
                      type="tel"
                      placeholder="+255 123 456 789"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="border-gray-300 focus:border-corporate-orange focus:ring-corporate-orange transition-all duration-200"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-corporate-blue mb-2">
                      Service Interest
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="border-gray-300 focus:border-corporate-orange focus:ring-corporate-orange">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-corporate-blue mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project requirements, challenges, or how we can help you..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="border-gray-300 focus:border-corporate-orange focus:ring-corporate-orange transition-all duration-200"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Button 
                      className="w-full bg-corporate-orange hover:bg-corporate-orange-dark text-white py-4 text-lg orange-shadow-lg transition-all duration-200 group"
                      size="lg"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Interactive Map */}
              <Card className="overflow-hidden border-0 modern-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-10 h-10 bg-gradient-to-br from-corporate-blue to-corporate-blue-dark rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <MapPin className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-corporate-blue">Visit Our Location</CardTitle>
                      <CardDescription>Find us in the heart of Dar es Salaam</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <motion.div 
                    className="w-full h-64 bg-gradient-to-br from-corporate-blue to-corporate-blue-dark flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-8 h-8 bg-corporate-orange rounded-full animate-pulse"></div>
                      <div className="absolute top-12 right-8 w-4 h-4 bg-corporate-orange-light rounded-full animate-pulse delay-500"></div>
                      <div className="absolute bottom-8 left-12 w-6 h-6 bg-corporate-orange rounded-full animate-pulse delay-1000"></div>
                    </div>
                    <div className="text-center text-white z-10">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <MapPin className="w-16 h-16 mx-auto mb-4 text-corporate-orange" />
                      </motion.div>
                      <p className="text-xl font-medium">Interactive Map</p>
                      <p className="text-blue-200">Dar es Salaam, Tanzania</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6 hover-lift border-0 bg-gradient-to-br from-green-50 to-green-100">
                    <motion.div 
                      className="text-3xl font-bold text-green-600 mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      &lt;24hrs
                    </motion.div>
                    <p className="text-green-700 font-medium">Response Time</p>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6 hover-lift border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                    <motion.div 
                      className="text-3xl font-bold text-blue-600 mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      24/7
                    </motion.div>
                    <p className="text-blue-700 font-medium">Emergency Support</p>
                  </Card>
                </motion.div>
              </div>

              {/* Contact Methods */}
              <Card className="border-0 modern-shadow bg-gradient-to-br from-slate-50 to-white">
                <CardHeader>
                  <CardTitle className="text-corporate-blue flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Alternative Contact Methods
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div 
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-8 h-8 bg-corporate-orange rounded-full flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-corporate-blue">Emergency Line</p>
                      <p className="text-sm text-corporate-grey-dark">+255 700 000 000</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-8 h-8 bg-corporate-blue rounded-full flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-corporate-blue">Schedule Online</p>
                      <p className="text-sm text-corporate-grey-dark">Book consultation</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-corporate-blue to-corporate-blue-dark relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 50%, rgba(255,87,34,0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255,87,34,0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(255,87,34,0.4) 0%, transparent 50%)'
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
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              For urgent technical support or emergency diagnostics, our expert team is available 24/7. Don't let equipment failure disrupt your operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="bg-corporate-orange hover:bg-corporate-orange-dark text-white px-10 py-6 text-lg font-semibold border-0 shadow-lg group"
                >
                  <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Call Emergency Line
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-corporate-blue px-10 py-6 text-lg bg-transparent group"
                >
                  <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Schedule Consultation
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}