import { Target, TrendingUp, Shield, Clock, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function ObjectivesSection() {
  const objectives = [
    {
      icon: Target,
      title: 'Precision Diagnostics',
      description: 'Deliver accurate and reliable engineering diagnostics using state-of-the-art equipment and proven methodologies.',
    },
    {
      icon: TrendingUp,
      title: 'Operational Excellence',
      description: 'Help organizations achieve peak operational performance through strategic maintenance planning and optimization.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Ensure the highest safety standards in all operations while maintaining equipment integrity and compliance.',
    },
    {
      icon: Clock,
      title: 'Minimize Downtime',
      description: 'Reduce unplanned equipment failures and maintenance costs through proactive condition monitoring.',
    },
    {
      icon: Users,
      title: 'Knowledge Transfer',
      description: 'Empower client teams with technical training and knowledge sharing for sustainable maintenance practices.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Leadership',
      description: 'Stay at the forefront of diagnostic technologies and continuously improve our service offerings.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-4">
            Our Strategic Objectives
          </h2>
          <p className="text-xl text-corporate-grey-dark max-w-3xl mx-auto">
            Driving excellence in engineering diagnostics through clear objectives and measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {objectives.map((objective, index) => {
            const IconComponent = objective.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-corporate-orange relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-corporate-orange opacity-5 rounded-bl-full"></div>
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-corporate-orange to-corporate-orange-dark rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 orange-shadow">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-corporate-blue group-hover:text-corporate-orange transition-colors">
                    {objective.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-corporate-grey-dark leading-relaxed">
                    {objective.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-corporate-blue to-corporate-blue-dark rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Our Mission Statement
          </h3>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-blue-100 max-w-4xl mx-auto">
            "To be Tanzania's leading provider of engineering diagnostic solutions, empowering industries 
            with innovative technologies and expert knowledge that ensure optimal equipment performance, 
            minimize operational risks, and maximize productivity."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-corporate-orange hover:bg-corporate-orange-dark text-white px-8 py-3 rounded-lg transition-all duration-200 orange-shadow font-medium">
              Learn About Our Services
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-corporate-blue px-8 py-3 rounded-lg transition-all duration-200 font-medium">
              Contact Our Team
            </button>
          </div>
        </div>

        {/* Key Performance Indicators */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-corporate-blue text-center mb-12">
            Our Performance Commitment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg border-l-4 border-l-corporate-orange">
              <div className="text-3xl font-bold text-corporate-orange mb-2">99.9%</div>
              <p className="text-corporate-grey-dark">Service Reliability</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border-l-4 border-l-corporate-orange">
              <div className="text-3xl font-bold text-corporate-orange mb-2">24/7</div>
              <p className="text-corporate-grey-dark">Technical Support</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border-l-4 border-l-corporate-orange">
              <div className="text-3xl font-bold text-corporate-orange mb-2">48hrs</div>
              <p className="text-corporate-grey-dark">Response Time</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border-l-4 border-l-corporate-orange">
              <div className="text-3xl font-bold text-corporate-orange mb-2">500+</div>
              <p className="text-corporate-grey-dark">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}