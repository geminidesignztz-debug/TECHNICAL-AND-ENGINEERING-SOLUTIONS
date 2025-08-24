import React from 'react';
import { motion } from 'motion/react';
import site1 from '../assets/site1.webp';
import site2 from '../assets/site2.webp';
import site3 from '../assets/site3.webp';
import site4 from '../assets/site4.webp';

const projects = [
  {
    id: 1,
    image: site1,
    title: "ENGINEERING SITE VISIT – ARUSHA",
    description: "STRUCTURAL INSPECTION | EQUIPMENT TESTING",
    showPrev: true,
  },
  {
    id: 2,
    image: site2,
    title: "ENGINEERING SITE VISIT – DAR ES SALAAM",
    description: "MAINTENANCE INSPECTION | SAFETY AUDIT",
    showNext: false,
  },
  {
    id: 3,
    image: site3,
    title: "ENGINEERING SITE VISIT – MWANZA",
    description: "VIBRATION ANALYSIS | THERMAL IMAGING",
    showNext: false,
  },
  {
    id: 4,
    image: site4,
    title: "ENGINEERING SITE VISIT – DODOMA",
    description: "ELECTRICAL TESTING | PREVENTIVE MAINTENANCE",
    showNext: true,
  }
];

export default function EngineeringShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Showcase
          </h2>
          <p className="text-lg text-gray-600">
            Explore our recent engineering projects and site visits
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative h-[400px] overflow-hidden rounded-lg shadow-xl"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
              </div>

              {/* Content Overlay */}
              <div className="relative h-full flex flex-col justify-between p-6 text-white">
                {/* Title Area */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>

                {/* Navigation Hints */}
                <div className="flex justify-between items-end">
                  {project.showPrev && (
                    <span className="text-sm font-medium">← PREV</span>
                  )}
                  {project.showNext && (
                    <span className="text-sm font-medium ml-auto">NEXT →</span>
                  )}
                </div>

                {/* Vertical Label */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 rotate-90 origin-left">
                  <span className="text-xs tracking-widest opacity-70">ENGINEERING</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
