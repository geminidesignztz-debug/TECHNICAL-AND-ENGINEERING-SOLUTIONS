import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Thermometer, Activity, Droplets, Zap, Settings, Users, CheckCircle, ArrowRight, Download, Calendar, Image as ImageIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Progress } from '../components/ui/progress';

export function ServicesPage() {
  const services = [
    {
      title: 'Infrared Thermography',
      image: '/src/assets/infrared-thermography.jpg',
      description: 'Using the Fluke Ti480-PRO 60 Hz high-resolution thermal camera, we provide detailed thermal imaging to identify hot spots.',
      features: [
        'Electrical system inspection',
        'Mechanical equipment analysis',
        'Building envelope assessment',
        'Process monitoring'
      ],
      benefits: [
        'Early fault detection',
        'Prevent equipment failures',
        'Energy efficiency optimization',
        'Predictive maintenance insights'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Power Quality Analysis',
      image: '/src/assets/power-quality.jpg',
      description: 'With the Fluke 1777 Power Quality Analyzer, we measure over 500 parameters, including harmonics, dips, swells, and transients.',
      features: [
        'Harmonics measurement',
        'Voltage fluctuation analysis',
        'Power factor monitoring',
        'Load analysis'
      ],
      benefits: [
        'Improved power reliability',
        'Reduced energy costs',
        'Equipment protection',
        'Compliance verification'
      ],
      color: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Advanced Vibration Analysis',
      image: '/src/assets/vibration-analysis.jpg',
      description: 'We detect unbalance, looseness, misalignment, and bearing failures in motors, fans, blowers, pumps, compressors, and gearboxes.',
      features: [
        'Equipment condition monitoring',
        'Bearing fault detection',
        'Alignment verification',
        'Dynamic balancing'
      ],
      benefits: [
        'Extended equipment life',
        'Reduced maintenance costs',
        'Prevented breakdowns',
        'Optimized performance'
      ],
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Battery Impedance Inspection',
      image: '/src/assets/battery-inspection.jpg',
      description: 'We conduct comprehensive performance tests on battery banks to ensure reliable power backup for critical systems.',
      features: [
        'Capacity testing',
        'Internal resistance measurement',
        'Connection integrity check',
        'Temperature monitoring'
      ],
      benefits: [
        'Reliable backup power',
        'Extended battery life',
        'Prevented failures',
        'Optimized maintenance'
      ],
      color: 'from-yellow-500 to-amber-600'
    },
    {
      title: 'Industrial Acoustic Imaging',
      image: '/src/assets/acoustic-imaging.jpg',
      description: 'Using the Fluke ii915 Acoustic Imager, we accurately locate and quantify air, gas, and vacuum leaks.',
      features: [
        'Compressed air leak detection',
        'Gas leak identification',
        'Vacuum system testing',
        'Ultrasonic analysis'
      ],
      benefits: [
        'Energy cost savings',
        'Safety improvement',
        'System efficiency',
        'Environmental compliance'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Non-Voltage & Current Measurement',
      image: '/src/assets/current-measurement.jpg',
      description: 'Our Fluke 378 FC True RMS Clamp Meter enables non-contact voltage and current measurements.',
      features: [
        'True RMS measurement',
        'Harmonic analysis',
        'Power factor testing',
        'Load monitoring'
      ],
      benefits: [
        'Safe measurements',
        'Accurate diagnostics',
        'Real-time monitoring',
        'Efficient troubleshooting'
      ],
      color: 'from-cyan-500 to-teal-600'
    },
    {
      title: 'Earth Resistance Measurement',
      image: '/src/assets/earth-resistance.jpg',
      description: 'We test earth ground loops and leakage currents, even in difficult-to-access areas, to ensure effective grounding and electrical safety.',
      features: [
        'Ground resistance testing',
        'Soil resistivity analysis',
        'Leakage current measurement',
        'Bonding verification'
      ],
      benefits: [
        'Enhanced safety',
        'Compliance assurance',
        'Lightning protection',
        'Equipment protection'
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Oil Condition Monitoring',
      image: '/src/assets/oil-monitoring.jpg',
      description: 'We perform detailed analysis of hydraulic and lubrication oil using advanced laboratory techniques.',
      features: [
        'Viscosity testing',
        'Contamination analysis',
        'Wear particle monitoring',
        'Chemical composition'
      ],
      benefits: [
        'Extended oil life',
        'Equipment protection',
        'Predictive maintenance',
        'Cost reduction'
      ],
      color: 'from-slate-600 to-gray-700'
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1 }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-corporate-blue/5 to-corporate-orange/5"
            animate={{
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-corporate-blue mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Cutting-Edge Solutions
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-corporate-grey-dark max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Explore our comprehensive range of specialized services designed to meet your industrial needs.
            </motion.p>


          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-corporate-blue/20 to-transparent"></div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {services.map((service, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <Card className="relative overflow-hidden group bg-white border border-slate-100 hover:border-transparent h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-300">
                    {/* Service Image Section with Modern Placeholder */}
                    <div className="relative w-full pt-[60%] overflow-hidden bg-slate-50">
                      {service.image ? (
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                          <div className="text-slate-300 flex flex-col items-center">
                            <motion.div
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <ImageIcon className="w-16 h-16" />
                            </motion.div>
                            <span className="text-sm mt-2">Image Coming Soon</span>
                          </div>
                        </div>
                      )}
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {/* Service Badge */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className={`bg-gradient-to-r ${service.color} text-white text-xs uppercase tracking-wider py-1 px-3 rounded-full inline-flex items-center`}
                        >
                          Premium Service
                        </motion.div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 flex flex-col p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-corporate-blue mb-2 group-hover:text-corporate-orange transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-corporate-grey-dark text-sm leading-relaxed line-clamp-3">
                          {service.description}
                        </p>
                      </div>
                    
                      <div className="flex-1">
                        <Tabs defaultValue="features" className="flex-1">
                          <TabsList className="grid w-full grid-cols-2 bg-slate-50">
                            <TabsTrigger value="features" className="text-sm">Features</TabsTrigger>
                            <TabsTrigger value="benefits" className="text-sm">Benefits</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="features" className="mt-4">
                            <ul className="space-y-2">
                              {service.features.slice(0, 3).map((feature, featureIndex) => (
                                <motion.li 
                                  key={featureIndex} 
                                  className="flex items-center text-sm text-corporate-grey-dark"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: featureIndex * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <div className={`w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 bg-gradient-to-r ${service.color}`}></div>
                                  <span className="line-clamp-1">{feature}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </TabsContent>
                          
                          <TabsContent value="benefits" className="mt-4">
                            <ul className="space-y-2">
                              {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                                <motion.li 
                                  key={benefitIndex} 
                                  className="flex items-center text-sm text-corporate-grey-dark"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: benefitIndex * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  <span className="line-clamp-1">{benefit}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </TabsContent>
                        </Tabs>
                      </div>

                      <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="mt-6">
                        <Button 
                          className="w-full bg-corporate-blue hover:bg-corporate-blue/90 text-white transition-all duration-300 group relative overflow-hidden"
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
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