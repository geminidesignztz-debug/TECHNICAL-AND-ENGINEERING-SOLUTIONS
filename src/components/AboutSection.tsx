import { Award, Target, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function AboutSection() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering superior quality and reliable results.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Our technical expertise ensures precise diagnostics and accurate condition monitoring.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build lasting relationships with our clients through trust and collaborative solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and innovative approaches to solve complex challenges.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-4">
            About Technical & Engineering Solutions
          </h2>
          <p className="text-xl text-corporate-grey-dark max-w-3xl mx-auto">
            Your trusted partner for comprehensive engineering diagnostics and condition-based monitoring solutions.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-corporate-blue">Our Story</h3>
            <p className="text-corporate-grey-dark leading-relaxed">
              Founded with a vision to transform industrial maintenance practices across Tanzania and beyond, 
              Technical & Engineering Solutions has established itself as a leader in engineering diagnostics 
              and condition-based monitoring.
            </p>
            <p className="text-corporate-grey-dark leading-relaxed">
              Our team of skilled engineers and technicians brings decades of combined experience in 
              predictive maintenance technologies, helping organizations minimize downtime and maximize 
              operational efficiency.
            </p>
            <div className="bg-corporate-orange rounded-lg p-6 text-white">
              <h4 className="font-bold text-lg mb-2">Our Mission</h4>
              <p className="text-orange-100">
                To empower industries with advanced diagnostic solutions that ensure optimal equipment 
                performance, reduce operational costs, and enhance safety standards.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-corporate-blue">Leadership Profile</h3>
            <Card className="border-l-4 border-l-corporate-orange">
              <CardHeader>
                <CardTitle className="text-corporate-blue">Mary William Mwanukuzi</CardTitle>
                <CardDescription className="text-corporate-orange font-medium">
                  Chief Executive Officer & Lead Engineer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-corporate-grey-dark mb-4">
                  With over 15 years of experience in engineering diagnostics and industrial maintenance, 
                  Mary leads our organization with a commitment to technical excellence and innovation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-corporate-orange rounded-full"></div>
                    <span className="text-sm text-corporate-grey-dark">M.Eng in Mechanical Engineering</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-corporate-orange rounded-full"></div>
                    <span className="text-sm text-corporate-grey-dark">Certified Vibration Analyst (ISO 18436)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-corporate-orange rounded-full"></div>
                    <span className="text-sm text-corporate-grey-dark">Thermography Level III Certified</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-corporate-blue text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-t-4 border-t-corporate-orange">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-corporate-orange to-corporate-orange-dark rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform orange-shadow">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-corporate-blue group-hover:text-corporate-orange transition-colors">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-corporate-grey-dark text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 corporate-shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-corporate-blue mb-4">
              Ready to Optimize Your Operations?
            </h3>
            <p className="text-corporate-grey-dark mb-6 max-w-2xl mx-auto">
              Let our experienced team help you implement effective maintenance strategies that will 
              minimize downtime and maximize your equipment's performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-corporate-orange hover:bg-corporate-orange-dark text-white px-8 py-3 rounded-lg transition-all duration-200 orange-shadow">
                Contact Our Team
              </button>
              <button className="border-2 border-corporate-blue text-corporate-blue hover:bg-corporate-blue hover:text-white px-8 py-3 rounded-lg transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}