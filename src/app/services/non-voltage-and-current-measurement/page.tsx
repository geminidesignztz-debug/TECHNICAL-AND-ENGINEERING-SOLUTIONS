import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';

export default function NonVoltageAndCurrentMeasurementPage() {
  return (
    <main className="bg-[#f6f8fa] min-h-screen py-10 px-4 md:px-16">
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4">
          <CardTitle className="text-xl md:text-2xl font-bold text-white">Non-Voltage And Current Measurement</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <p className="text-gray-700 text-base md:text-lg mb-4">
            Our Fluke 378 FC True RMS Clamp Meter enables non-contact voltage and current measurements.
          </p>
          <h2 className="text-lg font-semibold mb-2">Features</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
            <li>True RMS measurement</li>
            <li>Harmonic analysis</li>
            <li>Power factor testing</li>
          </ul>
        </CardContent>
      </section>
    </main>
  );
}
