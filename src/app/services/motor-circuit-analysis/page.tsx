import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';

export default function MotorCircuitAnalysisPage() {
  return (
    <main className="bg-[#f6f8fa] min-h-screen py-10 px-4 md:px-16">
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4">
          <CardTitle className="text-xl md:text-2xl font-bold text-white">Motor Circuit Analysis</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="mb-4 text-gray-700 text-base md:text-lg">
            Electrical testing of motor circuits to identify developing problems in motor-driven equipment.
          </p>
          <h2 className="text-lg font-semibold mb-2">Features</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
            <li>Insulation resistance testing</li>
            <li>Power quality analysis</li>
            <li>Motor efficiency testing</li>
            <li>Control circuit verification</li>
          </ul>
          <h2 className="text-lg font-semibold mb-2">Benefits</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
            <li>Improve motor efficiency</li>
            <li>Prevent electrical failures</li>
            <li>Ensure safety compliance</li>
            <li>Reduce energy costs</li>
          </ul>
        </CardContent>
      </section>
    </main>
  );
}
