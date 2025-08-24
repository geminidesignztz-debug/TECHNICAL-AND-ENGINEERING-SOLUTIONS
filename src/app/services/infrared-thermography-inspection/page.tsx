import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';

export default function InfraredThermographyInspectionPage() {
  return (
    <main className="bg-[#f6f8fa] min-h-screen py-10 px-4 md:px-16">
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-4">
          <CardTitle className="text-xl md:text-2xl font-bold text-white">Infrared Thermography Inspection</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <p className="text-gray-700 text-base md:text-lg mb-4">
            Using the Fluke Ti480-PRO 60 Hz high-resolution thermal camera, we provide detailed thermal imaging to identify hot spots.
          </p>
          <h2 className="text-lg font-semibold mb-2">Features</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
            <li>Electrical system inspection</li>
            <li>Mechanical equipment analysis</li>
            <li>Building envelope assessment</li>
          </ul>
          <h2 className="text-lg font-semibold mb-2">Benefits</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
            <li>Early fault detection</li>
            <li>Energy savings</li>
            <li>Reduced fire risk</li>
          </ul>
        </CardContent>
      </section>
    </main>
  );
}
