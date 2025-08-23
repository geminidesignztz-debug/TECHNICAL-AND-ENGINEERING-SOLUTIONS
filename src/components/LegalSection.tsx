import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  FileText, 
  Shield, 
  CheckCircle, 
  Award, 
  Building,
  CreditCard,
  Users,
  Globe
} from 'lucide-react';

const legalDocuments = [
  {
    icon: Building,
    title: "Business Registration Certificate",
    description: "Officially registered with the Business Registration and Licensing Agency (BRELA)",
    status: "Valid",
    registrationNumber: "BRC-2018-TES-001234",
    issueDate: "March 15, 2018",
    category: "Business License"
  },
  {
    icon: CreditCard,
    title: "Tax Identification Number (TIN)",
    description: "Registered taxpayer with Tanzania Revenue Authority (TRA)",
    status: "Active",
    registrationNumber: "TIN: 123-456-789",
    issueDate: "March 20, 2018",
    category: "Tax Registration"
  },
  {
    icon: Shield,
    title: "Professional Engineering License",
    description: "Licensed professional engineering services provider",
    status: "Valid",
    registrationNumber: "PEL-2018-456789",
    issueDate: "April 10, 2018",
    category: "Professional License"
  },
  {
    icon: Award,
    title: "ISO 9001:2015 Certification",
    description: "Quality management system certification for service excellence",
    status: "Certified",
    registrationNumber: "ISO-9001-TES-2020",
    issueDate: "June 15, 2020",
    category: "Quality Certification"
  },
  {
    icon: Users,
    title: "Workers' Compensation Insurance",
    description: "Comprehensive insurance coverage for all employees",
    status: "Active",
    registrationNumber: "WCI-2024-789012",
    issueDate: "January 1, 2024",
    category: "Insurance"
  },
  {
    icon: Globe,
    title: "Environmental Compliance Certificate",
    description: "Environmental impact assessment and compliance certification",
    status: "Valid",
    registrationNumber: "ECC-2019-345678",
    issueDate: "August 5, 2019",
    category: "Environmental"
  }
];

const compliance = [
  {
    standard: "ISO 18436-2",
    description: "Condition monitoring and diagnostics of machines - Vibration condition monitoring",
    status: "Compliant"
  },
  {
    standard: "IEC 62271-37",
    description: "High-voltage switchgear and controlgear - Alternating current generator circuit-breakers",
    status: "Compliant"
  },
  {
    standard: "IEEE 493",
    description: "Recommended Practice for the Design of Reliable Industrial and Commercial Power Systems",
    status: "Compliant"
  },
  {
    standard: "NFPA 70E",
    description: "Standard for Electrical Safety in the Workplace",
    status: "Compliant"
  },
  {
    standard: "API 677",
    description: "General-Purpose Gear Units for Petroleum, Chemical, and Gas Industry Services",
    status: "Compliant"
  }
];

export function LegalSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-black mb-4">
            Legal Documents & Compliance
          </h2>
          <p className="text-xl text-corporate-grey max-w-3xl mx-auto">
            Fully licensed, certified, and compliant with all regulatory requirements and international standards
          </p>
        </div>

        {/* Legal Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {legalDocuments.map((document, index) => {
            const IconComponent = document.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-corporate-blue">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-corporate-blue" />
                    </div>
                    <Badge 
                      className={`text-xs ${
                        document.status === 'Valid' || document.status === 'Active' || document.status === 'Certified'
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {document.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-corporate-black">
                    {document.title}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs w-fit">
                    {document.category}
                  </Badge>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-corporate-grey-dark text-sm mb-4 leading-relaxed">
                    {document.description}
                  </p>
                  
                  <div className="space-y-2 text-xs text-corporate-grey">
                    <div className="flex justify-between">
                      <span>Registration #:</span>
                      <span className="font-mono">{document.registrationNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Issue Date:</span>
                      <span>{document.issueDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Compliance Standards */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-corporate-black mb-4">
              International Standards Compliance
            </h3>
            <p className="text-corporate-grey max-w-2xl mx-auto">
              Our services adhere to internationally recognized standards and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {compliance.map((item, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-corporate-blue" />
                      <h4 className="font-bold text-corporate-black">{item.standard}</h4>
                    </div>
                    <Badge className="bg-green-100 text-green-800 text-xs">
                      {item.status}
                    </Badge>
                  </div>
                  <p className="text-corporate-grey-dark text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us - Legal Perspective */}
        <div className="mt-16">
          <Card className="corporate-shadow-lg bg-corporate-blue/5 border-corporate-blue/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Shield className="h-16 w-16 text-corporate-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-corporate-black mb-4">
                  Why Choose Technical & Engineering Solutions
                </h3>
                <p className="text-corporate-grey max-w-2xl mx-auto">
                  Our commitment to legal compliance and professional standards ensures reliable, trustworthy service
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center corporate-shadow">
                    <CheckCircle className="h-8 w-8 text-corporate-blue" />
                  </div>
                  <h4 className="font-semibold text-corporate-black mb-2">Fully Licensed</h4>
                  <p className="text-sm text-corporate-grey-dark">All required business and professional licenses</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center corporate-shadow">
                    <Award className="h-8 w-8 text-corporate-blue" />
                  </div>
                  <h4 className="font-semibold text-corporate-black mb-2">Certified Quality</h4>
                  <p className="text-sm text-corporate-grey-dark">ISO 9001:2015 quality management certification</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center corporate-shadow">
                    <Shield className="h-8 w-8 text-corporate-blue" />
                  </div>
                  <h4 className="font-semibold text-corporate-black mb-2">Insured & Protected</h4>
                  <p className="text-sm text-corporate-grey-dark">Comprehensive insurance coverage</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center corporate-shadow">
                    <Globe className="h-8 w-8 text-corporate-blue" />
                  </div>
                  <h4 className="font-semibold text-corporate-black mb-2">International Standards</h4>
                  <p className="text-sm text-corporate-grey-dark">Compliant with global best practices</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}