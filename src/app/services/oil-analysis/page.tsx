import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';

export default function OilAnalysisPage() {
  return (
    <main className="bg-[#f6f8fa] min-h-screen py-10 px-4 md:px-16">
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 px-6 py-4">
          <CardTitle className="text-xl md:text-2xl font-bold text-white">Oil Analysis</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="mb-4 text-gray-700 text-base md:text-lg">
            Laboratory testing and analysis of lubricating oils to determine equipment health and optimize maintenance schedules.
          </p>
          <h2 className="text-lg font-semibold mb-2">Features</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
            <li>Contamination detection</li>
            <li>Wear particle analysis</li>
            <li>Chemical property testing</li>
            <li>Trend analysis reporting</li>
          </ul>
          <h2 className="text-lg font-semibold mb-2">Benefits</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
            <li>Optimize oil change intervals</li>
            <li>Detect internal wear</li>
            <li>Prevent component failure</li>
            <li>Reduce maintenance costs</li>
          </ul>
        </CardContent>
      </section>
    </main>
  );
}
