import { Thermometer, Activity, Droplets, Zap, Settings, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function ServicesSection() {
  const services = [
    {
      icon: Thermometer,
      title: 'Infrared Thermography',
      description: 'Non-contact temperature measurement and thermal imaging for predictive maintenance and energy efficiency assessments.',
      features: ['Electrical system inspection', 'Mechanical equipment analysis', 'Building envelope assessment', 'Process monitoring']
    },
    {
      icon: Activity,
      title: 'Vibration Analysis',
      description: 'Comprehensive vibration monitoring and analysis to detect mechanical issues before they cause equipment failure.',
      features: ['Bearing condition monitoring', 'Shaft alignment verification', 'Balance assessment', 'Resonance analysis']
    },
    {
      icon: Droplets,
      title: 'Oil Analysis',
      description: 'Laboratory testing and analysis of lubricating oils to determine equipment health and optimize maintenance schedules.',
      features: ['Contamination detection', 'Wear particle analysis', 'Chemical property testing', 'Trend analysis reporting']
    },
    {
      icon: Zap,
      title: 'Motor Circuit Analysis',
      description: 'Electrical testing of motor circuits to identify developing problems in motor-driven equipment.',
      features: ['Insulation resistance testing', 'Power quality analysis', 'Motor efficiency testing', 'Control circuit verification']
    },
    {
      icon: Settings,
      title: 'Electrical Testing',
      description: 'Comprehensive electrical system testing and certification for safety and compliance requirements.',
      features: ['Power system analysis', 'Ground fault testing', 'Load bank testing', 'Relay protection testing']
    },
    {
      icon: Users,
      title: 'Consulting Services',
      description: 'Expert technical consulting and training services to help organizations implement effective maintenance strategies.',
      features: ['Maintenance program development', 'Technical training', 'Equipment specification', 'Reliability consulting']
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-4">
            Our Technical Services
          </h2>
          <p className="text-xl text-corporate-grey-dark max-w-3xl mx-auto">
            Comprehensive engineering diagnostics and condition monitoring solutions 
            designed to optimize your equipment performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-corporate-orange">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-corporate-orange to-corporate-orange-dark rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform orange-shadow">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-corporate-blue group-hover:text-corporate-orange transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-corporate-grey-dark">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-corporate-grey-dark">
                        <div className="w-2 h-2 bg-corporate-orange rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 corporate-shadow-lg border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-corporate-blue to-corporate-orange"></div>
            <h3 className="text-2xl font-bold text-corporate-blue mb-4">
              Need Custom Engineering Solutions?
            </h3>
            <p className="text-corporate-grey-dark mb-6 max-w-2xl mx-auto">
              Our team of experienced engineers can develop tailored solutions for your specific 
              technical challenges. Contact us to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-corporate-orange hover:bg-corporate-orange-dark text-white px-8 py-3 rounded-lg transition-all duration-200 orange-shadow">
                Request Consultation
              </button>
              <button className="border-2 border-corporate-blue text-corporate-blue hover:bg-corporate-blue hover:text-white px-8 py-3 rounded-lg transition-all duration-200">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}