
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';

export default function InfraredThermographyPage() {
  return (
    <main className="bg-[#f6f8fa] min-h-screen py-10 px-4 md:px-16">
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-4">
          <CardTitle className="text-xl md:text-2xl font-bold text-white">Infrared Thermography Inspection</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">What Is Infrared Thermography Inspection?</h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              Infrared thermography is a non-contact, non-destructive testing (NDT) technique that uses infrared imaging to detect heat patterns and thermal anomalies in objects and systems. It’s widely used across industries for preventive maintenance, safety diagnostics, and quality assurance.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">How It Works</h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              All objects emit infrared radiation based on their temperature. Infrared cameras, also known as thermal imagers, capture this radiation and translate it into thermal images or thermograms. These images allow inspectors to visualize temperature differences—often revealing hidden problems like electrical faults, mechanical wear, insulation breakdown, fluid or gas leaks, and moisture intrusion.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Key Applications</h2>
            <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
              <li><span className="font-semibold">Electrical Systems:</span> Identify overheating components, loose connections, phase imbalances; prevent arc flash incidents or electrical fires; inspect transformers, switchgear, breakers, panels, and busbars.</li>
              <li><span className="font-semibold">Mechanical Equipment:</span> Detect bearing friction, misalignment, lubrication failure; monitor pumps, motors, compressors, and conveyors.</li>
              <li><span className="font-semibold">Building Diagnostics:</span> Locate air leaks, water infiltration, missing insulation; evaluate HVAC systems and ductwork.</li>
              <li><span className="font-semibold">Industrial Processes:</span> Monitor temperature-critical operations like smelting, casting, or chemical processing; verify process uniformity in manufacturing lines.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Our Technology</h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              We use the Fluke Ti480-PRO 60 Hz high-resolution thermal camera to provide detailed thermal imaging, identifying hot spots, overloaded circuits, and mechanical friction across electrical, mechanical, building, and HVAC systems. Our inspections help detect issues early, preventing equipment failure and ensuring energy efficiency.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Benefits</h2>
            <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
              <li>Early fault detection and prevention of costly failures</li>
              <li>Improved safety and reduced risk of fire or breakdown</li>
              <li>Enhanced energy efficiency and reduced operational costs</li>
              <li>Comprehensive reporting for compliance and quality assurance</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Our Application</h2>
            <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
              <li><span className="font-semibold">Hot Spot Detection:</span> Identifies overheating components in electrical equipment such as panels, motors, and transformers, enabling proactive maintenance.</li>
              <li><span className="font-semibold">Mechanical Friction Analysis:</span> Detects friction in rotating machinery, such as bearings and gears, to address wear before it leads to breakdowns.</li>
            </ul>
          </div>
        </CardContent>
      </section>
    </main>
  );
}
