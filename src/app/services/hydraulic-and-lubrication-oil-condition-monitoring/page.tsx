import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';

export default function HydraulicAndLubricationOilConditionMonitoringPage() {
  return (
    <main className="bg-[#f6f8fa] min-h-screen py-10 px-4 md:px-16">
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4">
          <CardTitle className="text-xl md:text-2xl font-bold text-white">Hydraulic And Lubrication Oil Condition Monitoring</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <p className="text-gray-700 text-base md:text-lg mb-4">
            We perform detailed analysis of hydraulic and lubrication oil using advanced laboratory techniques.
          </p>
          <h2 className="text-lg font-semibold mb-2">Features</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
            <li>Viscosity testing</li>
            <li>Contamination analysis</li>
            <li>Wear particle monitoring</li>
          </ul>
        </CardContent>
      </section>
    </main>
  );
}
