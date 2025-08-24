import Image from 'next/image';

export default function MonitoringWithInsight() {
  return (
    <main className="bg-[#f6f8fa] min-h-screen py-10 px-4 md:px-16">
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[#2a388f] px-6 py-4">
          <h1 className="text-xl md:text-2xl font-bold text-white">Battery Impedance Inspection</h1>
          <p className="mt-2 text-sm md:text-base text-white/80 font-medium">
            With the Fluke BT521 Battery Analyzer, we conduct comprehensive performance tests on battery banks to ensure reliable power backup for critical systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="flex items-center justify-center">
            <Image src="/assets/fc32a1188f420b43c5a81277275b1c17d9480550.png" alt="Battery Analyzer" width={220} height={220} className="rounded-xl border" />
          </div>
          <div className="flex items-center justify-center">
            <Image src="/assets/fc32a1188f420b43c5a81277275b1c17d9480550.png" alt="Battery Analyzer Probes" width={220} height={220} className="rounded-xl border" />
          </div>
        </div>
        <div className="px-6 pb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-2">What is Battery Impedance Inspection?</h2>
            <p className="text-gray-700 mb-4 text-sm md:text-base">
              Battery Impedance Inspection is a crucial diagnostic method for evaluating the internal condition of batteries used in backup power systems, UPS units, telecom infrastructure, and data centers. As batteries degrade over time, their internal impedance rises—an early warning sign of potential failure even when voltage levels appear normal. The Fluke BT521 Battery Analyzer’s purpose-built kit simplifies and elevates this inspection process.
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
              <li>Cell degradation</li>
              <li>Increased resistance levels</li>
              <li>Corroded terminals</li>
              <li>Imbalanced string performance</li>
            </ul>
            <p className="text-gray-700 mb-4 text-sm md:text-base">
              The Fluke BT521 is a professional-grade battery analyzer tailored for stationary battery systems. It enables fast, accurate impedance and voltage measurements while streamlining data collection and analysis.
            </p>
            <h3 className="text-md font-semibold mb-2">Core Features</h3>
            <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm md:text-base">
              <li>AC Impedance Testing (No-load): Non-disruptive internal resistance measurement</li>
              <li>DC Voltage Measurement: For each cell and string</li>
              <li>Automated String Testing: Measures up to 500 batteries in a single session</li>
              <li>Temperature Measurement: Via included IR temperature probe</li>
              <li>Battery Management Software: For advanced reporting and analysis</li>
              <li>Bluetooth Connectivity: Wireless communication with PCs and mobile devices</li>
              <li>BAT IR/IRR Probe: Smart operation with trigger button and LED feedback for faster testing</li>
              <li>Pass/Warning/Fail Indicators: Based on user-defined thresholds</li>
            </ul>
            <p className="text-gray-700 mb-4 text-sm md:text-base">
              The Fluke BT521 Battery Analyzer empowers technicians to conduct fast, accurate, and comprehensive battery inspections with minimal disruption. Its advanced impedance diagnostics, intelligent probes, and seamless data handling make it an essential tool for any facility relying on uninterrupted power.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#eaf0fb] rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-[#2a388f] mb-2 text-sm md:text-base">Battery Health Assessment</h4>
              <p className="text-gray-700 text-xs md:text-sm">Examines battery capacity and internal resistance to ensure optimal performance.</p>
            </div>
            <div className="bg-[#fff7e6] rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-[#d97706] mb-2 text-sm md:text-base">Troubleshooting</h4>
              <p className="text-gray-700 text-xs md:text-sm">Identifies faulty cells or connections to prevent unexpected power interruptions.</p>
            </div>
            <div className="bg-[#fbeaea] rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-[#c81e1e] mb-2 text-sm md:text-base">Maintenance Planning</h4>
              <p className="text-gray-700 text-xs md:text-sm">Helps schedule proactive battery replacements and maintenance.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
