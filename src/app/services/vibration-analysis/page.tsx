import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';

export default function VibrationAnalysisPage() {
  return (
    <main className="bg-[#f6f8fa] min-h-screen py-10 px-4 md:px-16">
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4">
          <CardTitle className="text-xl md:text-2xl font-bold text-white">Vibration Analysis</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="mb-4 text-gray-700 text-base md:text-lg">
            Comprehensive vibration monitoring and analysis to detect mechanical issues before they cause equipment failure.
          </p>
          <h2 className="text-lg font-semibold mb-2">Features</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
            <li>Bearing condition monitoring</li>
            <li>Shaft alignment verification</li>
            <li>Balance assessment</li>
            <li>Resonance analysis</li>
          </ul>
          <h2 className="text-lg font-semibold mb-2">Benefits</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
            <li>Prevent catastrophic failures</li>
            <li>Extend equipment life</li>
            <li>Optimize maintenance schedules</li>
            <li>Reduce unplanned downtime</li>
          </ul>
        </CardContent>
      </section>
    </main>
  );
}
