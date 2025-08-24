import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';

export default function ConsultingServicesPage() {
  return (
    <main className="bg-[#f6f8fa] min-h-screen py-10 px-4 md:px-16">
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-4">
          <CardTitle className="text-xl md:text-2xl font-bold text-white">Consulting Services</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="mb-4 text-gray-700 text-base md:text-lg">
            Expert technical consulting and training services to help organizations implement effective maintenance strategies.
          </p>
          <h2 className="text-lg font-semibold mb-2">Features</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
            <li>Maintenance program development</li>
            <li>Technical training</li>
            <li>Equipment specification</li>
            <li>Reliability consulting</li>
          </ul>
          <h2 className="text-lg font-semibold mb-2">Benefits</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
            <li>Strategic planning support</li>
            <li>Knowledge transfer</li>
            <li>Best practice implementation</li>
            <li>Long-term partnerships</li>
          </ul>
        </CardContent>
      </section>
    </main>
  );
}
