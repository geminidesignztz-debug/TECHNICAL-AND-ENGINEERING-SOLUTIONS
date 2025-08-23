import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Building2, 
  Factory, 
  Calendar, 
  CheckCircle, 
  TrendingUp, 
  DollarSign,
  Users,
  Award
} from 'lucide-react';

const projects = [
  {
    title: "Hill Group Tanzania - Power Plant Optimization",
    client: "Hill Group Tanzania",
    category: "Power Generation",
    duration: "6 months",
    description: "Comprehensive condition monitoring implementation for critical power generation equipment, resulting in 40% reduction in unplanned downtime.",
    services: ["Vibration Analysis", "Infrared Thermography", "Power Quality Analysis", "Oil Monitoring"],
    results: [
      "40% reduction in unplanned downtime",
      "$2.3M in maintenance cost savings",
      "15% improvement in equipment efficiency",
      "Zero critical equipment failures"
    ],
    image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "DTB Bank - Critical Infrastructure Monitoring",
    client: "Diamond Trust Bank",
    category: "Financial Services",
    duration: "3 months",
    description: "Implementation of comprehensive electrical and mechanical monitoring systems for mission-critical banking infrastructure.",
    services: ["Power Quality Analysis", "Battery Testing", "Earth Resistance Testing", "Thermal Imaging"],
    results: [
      "99.9% uptime achievement",
      "Complete electrical safety compliance",
      "Proactive battery replacement program",
      "Enhanced disaster preparedness"
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

const caseStudies = [
  {
    title: "Damaged Pump Early Detection",
    problem: "A critical cooling water pump was experiencing unusual vibrations during operation.",
    solution: "Our advanced vibration analysis identified bearing wear and shaft misalignment before catastrophic failure.",
    outcome: "Prevented $150,000 in equipment damage and 3 days of production downtime.",
    technology: "Vibration Analysis",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Power Cable Failure Prevention",
    problem: "Electrical distribution system showing intermittent power quality issues.",
    solution: "Infrared thermography revealed hotspots in cable connections indicating imminent failure.",
    outcome: "Replaced faulty connections before failure, preventing $200,000 in business interruption costs.",
    technology: "Infrared Thermography",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const stats = [
  { icon: Building2, label: "Projects Completed", value: "150+" },
  { icon: Users, label: "Satisfied Clients", value: "75+" },
  { icon: DollarSign, label: "Cost Savings Generated", value: "$15M+" },
  { icon: Award, label: "Equipment Failures Prevented", value: "500+" }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-black mb-4">
            Projects & Experience
          </h2>
          <p className="text-xl text-corporate-grey max-w-3xl mx-auto">
            Proven track record of delivering exceptional results for leading organizations across various industries
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-corporate-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-corporate-blue" />
                </div>
                <div className="text-2xl font-bold text-corporate-black">{stat.value}</div>
                <div className="text-sm text-corporate-grey">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Major Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-corporate-black mb-8 text-center">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden corporate-shadow-lg">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-corporate-blue text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl text-corporate-black">{project.title}</CardTitle>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-corporate-grey">
                    <div className="flex items-center space-x-1">
                      <Building2 className="h-4 w-4" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-corporate-grey-dark mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium text-corporate-black mb-2">Services Provided:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-corporate-black mb-2 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      Key Results:
                    </h4>
                    <div className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-corporate-grey-dark">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-corporate-black mb-8 text-center">Case Studies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-white">
                <div className="relative h-32">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-corporate-blue text-white text-xs">
                      {study.technology}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h4 className="font-bold text-corporate-black mb-3">{study.title}</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-corporate-grey-dark text-sm mb-1">Problem:</h5>
                      <p className="text-sm text-corporate-grey-dark">{study.problem}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-corporate-grey-dark text-sm mb-1">Solution:</h5>
                      <p className="text-sm text-corporate-grey-dark">{study.solution}</p>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-medium text-green-800 text-sm mb-1">Outcome:</h5>
                      <p className="text-sm text-green-700">{study.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}