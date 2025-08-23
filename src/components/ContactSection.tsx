import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+255 123 456 789', '+255 987 654 321'],
      description: 'Call us during business hours'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@tes.co.tz', 'support@tes.co.tz'],
      description: 'Send us your inquiries anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Technical & Engineering Solutions'],
      description: 'Dar es Salaam, Tanzania'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
      description: 'Emergency services available 24/7'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-corporate-grey-dark max-w-3xl mx-auto">
            Ready to optimize your operations? Contact our expert team for professional 
            engineering diagnostics and consultation services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-corporate-blue mb-6">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-corporate-orange">
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-corporate-orange to-corporate-orange-dark rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform orange-shadow">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <CardTitle className="text-lg text-corporate-blue group-hover:text-corporate-orange transition-colors">
                            {item.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-1">
                          {item.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-corporate-grey-dark font-medium">
                              {detail}
                            </p>
                          ))}
                          <CardDescription className="text-sm text-corporate-grey">
                            {item.description}
                          </CardDescription>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-corporate-blue">Our Location</CardTitle>
                <CardDescription>Find us in Dar es Salaam, Tanzania</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gradient-to-br from-corporate-blue to-corporate-blue-dark flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-corporate-orange" />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-blue-200">Dar es Salaam, Tanzania</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-t-4 border-t-corporate-orange">
              <CardHeader>
                <CardTitle className="text-2xl text-corporate-blue">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-corporate-blue mb-2">
                      First Name *
                    </label>
                    <Input 
                      placeholder="John"
                      className="border-gray-300 focus:border-corporate-orange focus:ring-corporate-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-corporate-blue mb-2">
                      Last Name *
                    </label>
                    <Input 
                      placeholder="Doe"
                      className="border-gray-300 focus:border-corporate-orange focus:ring-corporate-orange"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-corporate-blue mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email"
                    placeholder="john.doe@example.com"
                    className="border-gray-300 focus:border-corporate-orange focus:ring-corporate-orange"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-corporate-blue mb-2">
                    Phone Number
                  </label>
                  <Input 
                    type="tel"
                    placeholder="+255 123 456 789"
                    className="border-gray-300 focus:border-corporate-orange focus:ring-corporate-orange"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-corporate-blue mb-2">
                    Service Interest
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-corporate-orange focus:ring-1 focus:ring-corporate-orange">
                    <option value="">Select a service</option>
                    <option value="thermography">Infrared Thermography</option>
                    <option value="vibration">Vibration Analysis</option>
                    <option value="oil">Oil Analysis</option>
                    <option value="motor">Motor Circuit Analysis</option>
                    <option value="electrical">Electrical Testing</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-corporate-blue mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    className="border-gray-300 focus:border-corporate-orange focus:ring-corporate-orange"
                  />
                </div>

                <Button 
                  className="w-full bg-corporate-orange hover:bg-corporate-orange-dark text-white py-3 orange-shadow transition-all duration-200"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 corporate-shadow-lg border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-corporate-blue to-corporate-orange"></div>
            <h3 className="text-2xl font-bold text-corporate-blue mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-corporate-grey-dark mb-6 max-w-2xl mx-auto">
              For urgent technical support or emergency diagnostics, our expert team is available 24/7. 
              Don't let equipment failure disrupt your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-corporate-orange hover:bg-corporate-orange-dark text-white px-8 py-3 rounded-lg transition-all duration-200 orange-shadow font-medium">
                Call Emergency Line
              </button>
              <button className="border-2 border-corporate-blue text-corporate-blue hover:bg-corporate-blue hover:text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}