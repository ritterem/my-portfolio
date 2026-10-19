"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Award, Globe, Shield } from "lucide-react";

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
          {/* NUS */}
          <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl shadow-lg hover:border-blue-500/30 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-100">NATIONAL UNIVERSITY OF SINGAPORE (NUS)</h3>
                <h4 className="text-xl text-blue-400 mt-1">Bachelor of Business Administration</h4>
              </div>
              <span className="text-sm font-medium text-slate-300 bg-slate-700/50 px-4 py-2 rounded-full whitespace-nowrap">
                Aug 2024 - Present
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

          {/* Queens University Exchange */}
          <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl shadow-lg hover:border-blue-500/30 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div className="flex items-start gap-3">
                <Globe className="text-blue-400 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-2xl font-bold text-gray-100">QUEENS UNIVERSITY AT KINGSTON</h3>
                  <h4 className="text-xl text-blue-400 mt-1">Student Exchange Program</h4>
                </div>
              </div>
              <span className="text-sm font-medium text-slate-300 bg-slate-700/50 px-4 py-2 rounded-full whitespace-nowrap">
                Aug 2026 - Present
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-slate-300">
                <strong className="text-gray-100">Investment Portfolio Management | IBKR Paper Trading Project</strong>
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1 shrink-0">•</span>
                  <span>Managed a simulated CA$1M equity portfolio, monitoring returns, asset allocation and portfolio rebalancing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1 shrink-0">•</span>
                  <span>Evaluated ETF exposure and allocation drift, replacing SPY with VOO while maintaining a 60% S&P 500 target</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Co-Curricular Activities */}
          <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl shadow-lg hover:border-blue-500/30 transition-colors">
            <h3 className="text-xl font-bold text-gray-100 mb-4">Co-Curricular Activities & Community Service</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Treasurer — NUS Wushu (Varsity Team)</h4>
                <span className="text-sm text-slate-500 mb-3 block">Sep 2025 - May 2026</span>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex gap-2">
                    <span className="text-blue-400 mt-1 shrink-0">•</span>
                    <span>Managed team budgets and reimbursements, improving fund allocation efficiency by 85%</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400 mt-1 shrink-0">•</span>
                    <span>Liaised with NUS departments to process reimbursement claims and payment requests</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400 mt-1 shrink-0">•</span>
                    <span>Managed NUS FastPay transactions, supporting S$1,000 in merchandise sales</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400 mt-1 shrink-0">•</span>
                    <span>Represented NUS in Institute Varsity-Polytechnic (IVP) Games 2024 & 2025 at NTU</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-700/50">
                <h4 className="text-sm tracking-wider text-slate-500 uppercase mb-3">Community Services</h4>
                <p className="text-slate-400 text-sm">Meals on Wheels, Singapore Red Cross Society, SAS, RVRC Mahjong with Seniors, National Youth Council</p>
              </div>
            </div>
          </div>

          {/* Core Competencies & Skills */}
          <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl shadow-lg hover:border-blue-500/30 transition-colors">
            <h3 className="text-xl font-bold text-gray-100 mb-4">Core Competencies & Skills</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm tracking-wider text-slate-500 uppercase mb-3">Technical</h4>
                <div className="flex flex-wrap gap-2">
                  {["Microsoft Excel", "PowerPoint", "Python", "Google Workspace"].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm tracking-wider text-slate-500 uppercase mb-3">Finance</h4>
                <div className="flex flex-wrap gap-2">
                  {["Budgeting", "Financial Resource Assessment", "Expense Tracking", "Data Analysis"].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-700/40 text-slate-300 rounded-md text-sm border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm tracking-wider text-slate-500 uppercase mb-3">Certificates</h4>
                <div className="flex flex-wrap gap-2">
                  {["M9", "M9A", "HI", "RES5", "NUS Sports Team of the Year", "Anthropic AI Fluency Framework & Foundations"].map((cert, i) => (
                    <span key={i} className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded-md text-sm">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm tracking-wider text-slate-500 uppercase mb-3">Languages</h4>
                <p className="text-slate-400 text-sm">Fluent and proficient in written and spoken English and Mandarin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
