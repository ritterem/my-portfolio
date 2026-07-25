"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="education" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
            <GraduationCap size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Education & Skills</h2>
        </div>

        <div ref={containerRef} className="space-y-8">
          <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl shadow-lg hover:border-blue-500/30 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-100">NATIONAL UNIVERSITY OF SINGAPORE (NUS)</h3>
                <h4 className="text-xl text-blue-400 mt-1">Bachelor of Business Administration (Penultimate Year)</h4>
              </div>
              <span className="text-sm font-medium text-slate-300 bg-slate-700/50 px-4 py-2 rounded-full whitespace-nowrap">
                2024 - 2028
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-slate-300">
                <strong className="text-gray-100">Major:</strong> Double major in Finance and Leadership & Human Capital Management, with Ridge View Residential College Programme (RVRC)
              </p>
              <p className="text-slate-300">
                <strong className="text-gray-100">Relevant Coursework:</strong> Corporate Finance, Decision Analytics using Spreadsheets, Programming for Business Analytics, Human Capital Management, Understanding Disability and Fostering Inclusivity
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <div className="flex items-start gap-3">
                <Award className="text-blue-400 shrink-0 mt-1" size={20} />
                <p className="text-slate-400">
                  <strong className="text-gray-200">Academic Competitions:</strong> National Sustainability Case Challenge (NSCC) 2025, GIC-MOE Last Reserve Game Competition for Economics 2023
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl shadow-lg hover:border-blue-500/30 transition-colors">
            <h3 className="text-xl font-bold text-gray-100 mb-4">Core Competencies & Skills</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm tracking-wider text-slate-500 uppercase mb-3">Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  {["Corporate Finance", "Data Analytics & Visualisation", "Investment Analysis", "ESG & Sustainability Reporting", "Leadership", "Business Management"].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-700/40 text-slate-300 rounded-md text-sm border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm tracking-wider text-slate-500 uppercase mb-3">Technical</h4>
                <div className="flex flex-wrap gap-2">
                  {["Excel", "PowerPoint", "Google Workspace", "Python"].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
