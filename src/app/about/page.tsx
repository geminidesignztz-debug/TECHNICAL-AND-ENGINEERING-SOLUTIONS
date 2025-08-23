import { motion } from 'motion/react';
import { Award, Target, Users, Lightbulb, MapPin, Phone, Mail, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering superior quality and reliable results that exceed expectations.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Our technical expertise ensures precise diagnostics and accurate condition monitoring for optimal results.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build lasting relationships with our clients through trust, collaboration, and shared success.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and innovative approaches to solve complex engineering challenges.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'Started with a vision to transform maintenance practices' },
    { year: '2020', title: 'First 100 Projects', description: 'Achieved significant milestone in project delivery' },
    { year: '2022', title: 'Regional Expansion', description: 'Extended services across East Africa' },
    { year: '2024', title: 'Technology Innovation', description: 'Launched advanced AI-powered diagnostics' }
  ];

  const stats = [
    { label: 'Years of Experience', value: 6, suffix: '+' },
    { label: 'Projects Completed', value: 500, suffix: '+' },
    { label: 'Client Satisfaction', value: 99, suffix: '%' },
    { label: 'Team Members', value: 25, suffix: '+' }
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
            className="text-center mb-16"
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
                🏢 About Our Company
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Technical & Engineering Solutions
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Your trusted partner for comprehensive engineering diagnostics and condition-based monitoring solutions across Tanzania and beyond.
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center glass-card p-6 hover-lift"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-corporate-orange mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 + index * 0.1 }}
                  >
                    {stat.value}{stat.suffix}
                  </motion.span>
                </motion.div>
                <p className="text-blue-200 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
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
                  Our Story
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-6">
                  Transforming Industrial Maintenance
                </h2>
              </div>
              
              <div className="space-y-6">
                <motion.p 
                  className="text-corporate-grey-dark leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Founded with a vision to transform industrial maintenance practices across Tanzania and beyond, 
                  Technical & Engineering Solutions has established itself as a leader in engineering diagnostics 
                  and condition-based monitoring.
                </motion.p>
                
                <motion.p 
                  className="text-corporate-grey-dark leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Our team of skilled engineers and technicians brings decades of combined experience in 
                  predictive maintenance technologies, helping organizations minimize downtime and maximize 
                  operational efficiency through innovative diagnostic solutions.
                </motion.p>
              </div>

              <motion.div 
                className="bg-gradient-to-r from-corporate-orange to-corporate-orange-dark rounded-2xl p-8 text-white relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p className="text-orange-100 leading-relaxed">
                    To empower industries with advanced diagnostic solutions that ensure optimal equipment 
                    performance, reduce operational costs, and enhance safety standards across all operations.
                  </p>
                </div>
              </motion.div>
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
                <Card className="relative bg-white/80 backdrop-blur-sm border-0 modern-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-corporate-blue to-corporate-blue-dark rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Users className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-2xl text-corporate-blue">Mary William Mwanukuzi</CardTitle>
                        <CardDescription className="text-corporate-orange font-semibold text-lg">
                          Chief Executive Officer & Lead Engineer
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-corporate-grey-dark leading-relaxed">
                      With over 15 years of experience in engineering diagnostics and industrial maintenance, 
                      Mary leads our organization with a commitment to technical excellence and innovation.
                    </p>
                    
                    <div className="space-y-3">
                      <motion.div 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-3 h-3 bg-corporate-orange rounded-full"></div>
                        <span className="text-corporate-grey-dark">M.Eng in Mechanical Engineering</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-3 h-3 bg-corporate-orange rounded-full"></div>
                        <span className="text-corporate-grey-dark">Certified Vibration Analyst (ISO 18436)</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-3 h-3 bg-corporate-orange rounded-full"></div>
                        <span className="text-corporate-grey-dark">Thermography Level III Certified</span>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-corporate-grey-dark max-w-3xl mx-auto">
              Our core values shape every decision we make and every solution we deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover-lift interactive-card border-0 modern-shadow bg-white/80 backdrop-blur-sm relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.color}`}></div>
                    <CardHeader className="pb-4">
                      <div className="flex items-start space-x-4">
                        <motion.div 
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${value.color} group-hover:scale-110 transition-all duration-300 shadow-lg`}
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-xl text-corporate-blue group-hover:text-corporate-orange transition-colors mb-2">
                            {value.title}
                          </CardTitle>
                          <CardDescription className="text-corporate-grey-dark leading-relaxed">
                            {value.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-corporate-blue rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-corporate-orange rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-corporate-orange/10 text-corporate-orange border-corporate-orange/20 mb-4">
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-6">
              Milestones & Achievements
            </h2>
            <p className="text-xl text-corporate-grey-dark max-w-3xl mx-auto">
              A timeline of our growth and major accomplishments over the years.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-corporate-blue to-corporate-orange rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover-lift bg-white/80 backdrop-blur-sm border-0 modern-shadow">
                      <CardContent className="p-6">
                        <motion.div 
                          className="text-2xl font-bold text-corporate-orange mb-2"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                          viewport={{ once: true }}
                        >
                          {milestone.year}
                        </motion.div>
                        <h3 className="text-xl font-bold text-corporate-blue mb-2">{milestone.title}</h3>
                        <p className="text-corporate-grey-dark">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Node */}
                  <motion.div 
                    className="relative z-10 w-6 h-6 bg-corporate-orange rounded-full border-4 border-white shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.2, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.3 }}
                  />
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
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
              Partner With Industry Leaders
            </h2>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              Join our growing family of satisfied clients and discover how we can help optimize your operations with cutting-edge engineering solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="bg-corporate-orange hover:bg-corporate-orange-dark text-white px-10 py-6 text-lg font-semibold border-0 shadow-lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Our Team
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-corporate-blue px-10 py-6 text-lg bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
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