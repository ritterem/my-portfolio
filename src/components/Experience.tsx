"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (cardsRef.current.length > 0) {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const experiences = [
    {
      company: "EMBED FINANCIAL GROUP HOLDINGS",
      role: "Intern",
      period: "May 2025 - Aug 2025",
      achievements: [
        "Assessed company grants and financial resources to support funding of up to 90% of expenditure",
        "Developed PowerPoint presentations to visualise business frameworks and strategic initiatives",
        "Supported post-acquisition integration planning and coordination of 30 employees"
      ]
    },
    {
      company: "INLAND REVENUE AUTHORITY SINGAPORE (IRAS)",
      role: "Clerical Officer",
      period: "Mar 2024 - Jul 2024",
      achievements: [
        "Processed 1,200 suspended tax forms within four months, ensuring accurate tax administration",
        "Corrected data discrepancies across 300+ employer income tax records for YA2024",
        "Co-developed a tax rebate checklist, improving verification efficiency by 70%"
      ]
    },
    {
      company: "MINISTRY OF EDUCATION (MOE)",
      role: "Customer Service Executive Intern",
      period: "Dec 2023 - Feb 2024",
      achievements: [
        "Handled 50+ financial enquiries, escalating complex cases to relevant departments"
      ]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-slate-900 relative">
      <div className="absolute inset-0 bg-slate-800/10 pointer-events-none" />
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
            <Briefcase size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Work Experience</h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              ref={addToRefs}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-800 group-hover:border-blue-400 group-hover:bg-blue-400/20 text-slate-400 group-hover:text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-current" />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800/50 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl hover:border-blue-500/30 hover:bg-slate-800/80 transition-all shadow-xl group-hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-gray-100">{exp.role}</h3>
                  <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full w-fit shrink-0 border border-blue-400/20">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-slate-300 mb-4">{exp.company}</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-blue-400 mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
