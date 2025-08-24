import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';

export default function ElectricalTestingPage() {
  return (
    <main className="bg-[#f6f8fa] min-h-screen py-10 px-4 md:px-16">
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4">
          <CardTitle className="text-xl md:text-2xl font-bold text-white">Electrical Testing</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="mb-4 text-gray-700 text-base md:text-lg">
            Comprehensive electrical system testing and certification for safety and compliance requirements.
          </p>
          <h2 className="text-lg font-semibold mb-2">Features</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
            <li>Power system analysis</li>
            <li>Ground fault testing</li>
            <li>Load bank testing</li>
            <li>Relay protection testing</li>
          </ul>
          <h2 className="text-lg font-semibold mb-2">Benefits</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
            <li>Ensure electrical safety</li>
            <li>Regulatory compliance</li>
            <li>System optimization</li>
            <li>Risk mitigation</li>
          </ul>
        </CardContent>
      </section>
    </main>
  );
}
