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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Engineering Excellence
          </motion.h2>
          <motion.div
            className="flex items-center justify-center gap-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-1 w-10 bg-corporate-orange rounded-full"></div>
            <div className="h-1 w-20 bg-corporate-orange rounded-full"></div>
            <div className="h-1 w-10 bg-corporate-orange rounded-full"></div>
          </motion.div>
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Discover our nationwide technical expertise through our recent site visits and professional assessments
          </motion.p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Card Container */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl h-[520px] flex flex-col">
                {/* Image Container */}
                <div className="relative h-[320px] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Top Tag */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full">
                      <span className="text-xs font-semibold text-gray-800 tracking-wide uppercase">
                        Site Visit
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col p-6">
                  {/* Location Indicator */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-corporate-orange"></div>
                    <span className="text-sm font-medium text-gray-600">
                      {project.title.split('–')[1].trim()}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-corporate-orange transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Footer with Navigation Hints */}
                  <div className="mt-auto pt-6 flex items-center justify-between text-sm text-gray-500">
                    {project.showPrev && (
                      <span className="hover:text-corporate-orange transition-colors">← Previous</span>
                    )}
                    {project.showNext && (
                      <span className="ml-auto hover:text-corporate-orange transition-colors">Next →</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
