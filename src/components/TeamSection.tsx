import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Users, 
  Mail, 
  Phone, 
  Award, 
  GraduationCap, 
  Briefcase,
  Star
} from 'lucide-react';

const teamMembers = [
  {
    name: "Mary William Mwanukuzi",
    position: "Managing Director",
    department: "Leadership",
    experience: "30+ Years",
    specializations: ["Power Plant Operations", "Strategic Planning", "Industrial Engineering", "Team Leadership"],
    bio: "Mary brings over three decades of invaluable experience in power plant operations and industrial engineering. Her extensive background in the energy sector provides deep insights into preventive maintenance and condition-based monitoring.",
    achievements: [
      "30+ years in power plant operations",
      "Expert in industrial maintenance strategies",
      "Led multiple large-scale engineering projects",
      "Recognized industry leader in Tanzania"
    ],
    email: "mary@testz.co.tz",
    phone: "+255 758 123 456"
  },
  {
    name: "Emmanuel Calist Tarimo",
    position: "Technical Engineer",
    department: "Engineering",
    experience: "12+ Years",
    specializations: ["Vibration Analysis", "Infrared Thermography", "Power Systems", "Diagnostic Equipment"],
    bio: "Emmanuel is a highly skilled technical engineer specializing in advanced diagnostic technologies. His expertise in vibration analysis and thermography has helped numerous clients prevent costly equipment failures.",
    achievements: [
      "Certified vibration analyst (ISO 18436)",
      "Expert in thermal imaging applications",
      "150+ successful diagnostic projects",
      "Advanced power systems specialist"
    ],
    email: "emmanuel@testz.co.tz",
    phone: "+255 758 123 457"
  },
  {
    name: "Goodluck Mwikala",
    position: "Technical Engineer",
    department: "Engineering",
    experience: "10+ Years",
    specializations: ["Power Quality Analysis", "Battery Testing", "Oil Analysis", "Safety Systems"],
    bio: "Goodluck specializes in electrical systems diagnostics and power quality analysis. His meticulous approach to testing and analysis ensures the highest standards of electrical safety and system reliability.",
    achievements: [
      "Certified electrical systems analyst",
      "Expert in power quality diagnostics",
      "100+ electrical safety audits completed",
      "Specialist in backup power systems"
    ],
    email: "goodluck@testz.co.tz",
    phone: "+255 758 123 458"
  }
];

const certifications = [
  "ISO 18436 Vibration Analysis Certification",
  "ITC Level II Infrared Thermography",
  "IEEE Power Quality Standards",
  "NFPA Electrical Safety Compliance",
  "API Oil Analysis Certification"
];

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-black mb-4">
            Our Expert Team
          </h2>
          <p className="text-xl text-corporate-grey max-w-3xl mx-auto">
            Meet the experienced professionals who deliver world-class engineering diagnostic services
          </p>
        </div>

        {/* Team Members */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white corporate-shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                {/* Profile Header */}
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-corporate-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-corporate-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-corporate-black mb-1">{member.name}</h3>
                  <p className="text-corporate-blue font-medium mb-2">{member.position}</p>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="secondary" className="text-xs">{member.department}</Badge>
                    <Badge variant="outline" className="text-xs">{member.experience}</Badge>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-corporate-grey-dark text-sm mb-6 leading-relaxed text-center">
                  {member.bio}
                </p>

                {/* Specializations */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <GraduationCap className="h-4 w-4 text-corporate-blue mr-2" />
                    <h4 className="font-medium text-corporate-black text-sm">Specializations</h4>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {member.specializations.map((spec, specIndex) => (
                      <Badge key={specIndex} variant="secondary" className="text-xs bg-corporate-blue/5 text-corporate-blue">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Award className="h-4 w-4 text-corporate-blue mr-2" />
                    <h4 className="font-medium text-corporate-black text-sm">Key Achievements</h4>
                  </div>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start space-x-2">
                        <Star className="h-3 w-3 text-corporate-blue mt-1 flex-shrink-0" />
                        <span className="text-xs text-corporate-grey-dark">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-corporate-grey" />
                      <span className="text-sm text-corporate-grey-dark">{member.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-corporate-grey" />
                      <span className="text-sm text-corporate-grey-dark">{member.phone}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Capabilities */}
        <div className="bg-white rounded-2xl p-8 corporate-shadow">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-corporate-black mb-4">Team Capabilities</h3>
            <p className="text-corporate-grey max-w-2xl mx-auto">
              Our team combines extensive experience with cutting-edge certifications to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience Summary */}
            <div>
              <div className="flex items-center mb-4">
                <Briefcase className="h-5 w-5 text-corporate-blue mr-2" />
                <h4 className="font-bold text-corporate-black">Combined Experience</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-corporate-blue/5 rounded-lg">
                  <div className="text-2xl font-bold text-corporate-blue">50+</div>
                  <div className="text-sm text-corporate-grey">Years Combined</div>
                </div>
                <div className="text-center p-4 bg-corporate-blue/5 rounded-lg">
                  <div className="text-2xl font-bold text-corporate-blue">500+</div>
                  <div className="text-sm text-corporate-grey">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 text-corporate-blue mr-2" />
                <h4 className="font-bold text-corporate-black">Professional Certifications</h4>
              </div>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-corporate-blue flex-shrink-0" />
                    <span className="text-sm text-corporate-grey-dark">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-corporate-blue/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-corporate-black mb-4">
              Work with Industry Experts
            </h3>
            <p className="text-corporate-grey-dark mb-6 max-w-2xl mx-auto">
              Our experienced team is ready to help you implement advanced diagnostic solutions 
              that will revolutionize your maintenance strategy and operational efficiency.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-corporate-blue hover:bg-corporate-blue-dark text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}