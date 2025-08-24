import { motion } from 'motion/react';
import { Thermometer, Activity, Droplets, Zap, Settings, Users, CheckCircle, ArrowRight, Download, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Progress } from '../../components/ui/progress';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: Thermometer,
      title: 'Infrared Thermography',
      description: 'Non-contact temperature measurement and thermal imaging for predictive maintenance and energy efficiency assessments.',
      features: ['Electrical system inspection', 'Mechanical equipment analysis', 'Building envelope assessment', 'Process monitoring'],
      benefits: ['Early fault detection', 'Energy savings up to 20%', 'Reduced fire risk', 'Compliance monitoring'],
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: Activity,
      title: 'Vibration Analysis',
      description: 'Comprehensive vibration monitoring and analysis to detect mechanical issues before they cause equipment failure.',
      features: ['Bearing condition monitoring', 'Shaft alignment verification', 'Balance assessment', 'Resonance analysis'],
      benefits: ['Prevent catastrophic failures', 'Extend equipment life', 'Optimize maintenance schedules', 'Reduce unplanned downtime'],
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Droplets,
      title: 'Oil Analysis',
      description: 'Laboratory testing and analysis of lubricating oils to determine equipment health and optimize maintenance schedules.',
      features: ['Contamination detection', 'Wear particle analysis', 'Chemical property testing', 'Trend analysis reporting'],
      benefits: ['Optimize oil change intervals', 'Detect internal wear', 'Prevent component failure', 'Reduce maintenance costs'],
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Zap,
      title: 'Motor Circuit Analysis',
      description: 'Electrical testing of motor circuits to identify developing problems in motor-driven equipment.',
      features: ['Insulation resistance testing', 'Power quality analysis', 'Motor efficiency testing', 'Control circuit verification'],
      benefits: ['Improve motor efficiency', 'Prevent electrical failures', 'Ensure safety compliance', 'Reduce energy costs'],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Settings,
      title: 'Electrical Testing',
      description: 'Comprehensive electrical system testing and certification for safety and compliance requirements.',
      features: ['Power system analysis', 'Ground fault testing', 'Load bank testing', 'Relay protection testing'],
      benefits: ['Ensure electrical safety', 'Regulatory compliance', 'System optimization', 'Risk mitigation'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Users,
      title: 'Consulting Services',
      description: 'Expert technical consulting and training services to help organizations implement effective maintenance strategies.',
      features: ['Maintenance program development', 'Technical training', 'Equipment specification', 'Reliability consulting'],
      benefits: ['Strategic planning support', 'Knowledge transfer', 'Best practice implementation', 'Long-term partnerships'],
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    }
  ];

  const serviceProcess = [
    { step: 1, title: 'Consultation', description: 'Initial assessment and requirement analysis' },
    { step: 2, title: 'Planning', description: 'Detailed service plan and methodology' },
    { step: 3, title: 'Execution', description: 'Professional service delivery on-site' },
    { step: 4, title: 'Analysis', description: 'Comprehensive data analysis and interpretation' },
    { step: 5, title: 'Reporting', description: 'Detailed findings and recommendations' },
    { step: 6, title: 'Follow-up', description: 'Ongoing support and monitoring' }
  ];

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
                🔧 Our Services
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Engineering Excellence
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Comprehensive engineering diagnostics and condition monitoring solutions designed to optimize your equipment performance, reduce costs, and maximize operational reliability.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Service Portfolio
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-6">
              Cutting-Edge Solutions
            </h2>
            <p className="text-xl text-corporate-grey-dark max-w-3xl mx-auto">
              Explore our comprehensive range of specialized services designed to meet your industrial needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              // ...existing code...
              // Only link the Battery Impedance Inspection card (first card) to the new page
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover-lift interactive-card border-0 modern-shadow bg-white/90 backdrop-blur-sm relative overflow-hidden h-full">
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${service.color}`}></div>
                    <CardHeader className="pb-6">
                      <div className="flex items-start space-x-4">
                        <motion.div 
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} group-hover:scale-110 transition-all duration-300 shadow-lg`}
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-xl text-corporate-blue group-hover:text-corporate-orange transition-colors mb-2">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-corporate-grey-dark leading-relaxed">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <Tabs defaultValue="features" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="features">Features</TabsTrigger>
                          <TabsTrigger value="benefits">Benefits</TabsTrigger>
                        </TabsList>
                        <TabsContent value="features" className="mt-4">
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <motion.li 
                                key={featureIndex} 
                                className="flex items-center text-sm text-corporate-grey-dark"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1, duration: 0.4 }}
                                viewport={{ once: true }}
                              >
                                <div className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 bg-gradient-to-r ${service.color}`}></div>
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </TabsContent>
                        <TabsContent value="benefits" className="mt-4">
                          <ul className="space-y-3">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <motion.li 
                                key={benefitIndex} 
                                className="flex items-center text-sm text-corporate-grey-dark"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: benefitIndex * 0.1, duration: 0.4 }}
                                viewport={{ once: true }}
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                                {benefit}
                              </motion.li>
                            ))}
                          </ul>
                        </TabsContent>
                      </Tabs>
                      <motion.div 
                        className="pt-4 border-t border-gray-100"
                        whileHover={{ x: 5 }}
                      >
                        {(() => {
                          const serviceLinks = [
                            '/services/monitoring-with-insight',
                            '/services/infrared-thermography',
                            '/services/vibration-analysis',
                            '/services/oil-analysis',
                            '/services/motor-circuit-analysis',
                            '/services/electrical-testing',
                            '/services/consulting-services'
                          ];
                          // Only show link if index is within the serviceLinks array
                          if (serviceLinks[index]) {
                            return (
                              <Link href={serviceLinks[index]} passHref legacyBehavior>
                                <Button 
                                  as="a"
                                  variant="ghost" 
                                  className="text-corporate-orange hover:text-corporate-orange-dark p-0 h-auto group"
                                >
                                  Learn More About This Service
                                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                              </Link>
                            );
                          } else {
                            return (
                              <Button 
                                variant="ghost" 
                                className="text-corporate-orange hover:text-corporate-orange-dark p-0 h-auto group"
                              >
                                Learn More About This Service
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            );
                          }
                        })()}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-corporate-blue/10 text-corporate-blue border-corporate-blue/20 mb-4">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-6">
              How We Deliver Excellence
            </h2>
            <p className="text-xl text-corporate-grey-dark max-w-3xl mx-auto">
              Our systematic approach ensures consistent, high-quality results for every project.
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-corporate-blue via-corporate-orange to-corporate-blue-dark transform -translate-y-1/2 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {serviceProcess.map((process, index) => (
                <motion.div
                  key={index}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="relative z-10 w-16 h-16 bg-gradient-to-br from-corporate-orange to-corporate-orange-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover-lift"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-bold text-corporate-blue mb-2">{process.title}</h3>
                    <p className="text-sm text-corporate-grey-dark leading-relaxed">{process.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <Badge className="bg-corporate-orange/10 text-corporate-orange border-corporate-orange/20 mb-4">
                  Why Choose Us
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-6">
                  Advanced Technology & Expertise
                </h2>
                <p className="text-corporate-grey-dark leading-relaxed mb-8">
                  Our state-of-the-art equipment combined with years of experience ensures accurate diagnostics and reliable results for all your industrial needs.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-corporate-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-corporate-blue mb-1">Latest Equipment</h3>
                    <p className="text-corporate-grey-dark">State-of-the-art diagnostic tools and monitoring equipment</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-corporate-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-corporate-blue mb-1">Certified Professionals</h3>
                    <p className="text-corporate-grey-dark">Highly trained engineers with international certifications</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-corporate-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-corporate-blue mb-1">24/7 Support</h3>
                    <p className="text-corporate-grey-dark">Round-the-clock emergency support and consultation</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-corporate-blue to-corporate-orange rounded-3xl opacity-20 blur-lg"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <Card className="relative bg-white/90 backdrop-blur-sm border-0 modern-shadow p-8">
                  <h3 className="text-2xl font-bold text-corporate-blue mb-6">Service Capabilities</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-corporate-grey-dark font-medium">Diagnostic Accuracy</span>
                        <span className="text-corporate-orange font-bold">99.5%</span>
                      </div>
                      <Progress value={99.5} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-corporate-grey-dark font-medium">Response Time</span>
                        <span className="text-corporate-orange font-bold">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-corporate-grey-dark font-medium">Client Satisfaction</span>
                        <span className="text-corporate-orange font-bold">98%</span>
                      </div>
                      <Progress value={98} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-corporate-grey-dark font-medium">Equipment Coverage</span>
                        <span className="text-corporate-orange font-bold">100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
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
              Let our expert team help you implement cutting-edge diagnostic solutions that will transform your maintenance strategy and maximize equipment performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="bg-white text-corporate-orange hover:bg-gray-100 px-10 py-6 text-lg font-semibold border-0 shadow-lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-corporate-orange px-10 py-6 text-lg bg-transparent"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}