"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FolderGit2, Calculator, TrendingUp, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
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
    <section id="projects" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
            <FolderGit2 size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Featured Projects</h2>
        </div>

        <Link href="https://my-portfolio-siegqiercfktftmabsned5.streamlit.app/" target="_blank" rel="noopener noreferrer" className="block outline-none" title="Open Personal Finance Simulator">
          <div 
            ref={containerRef}
            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-3xl p-8 md:p-10 overflow-hidden shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
          >
            {/* Background Glow Effect */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-colors duration-500 pointer-events-none" />
            
            <div className="absolute top-8 right-8 text-slate-500 group-hover:text-blue-400 transition-colors">
              <ExternalLink size={24} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 mt-4 md:mt-0">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">Personal Finance Simulator</h3>
                  <span className="bg-blue-500/10 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide border border-blue-500/20">
                    Python / Streamlit
                  </span>
                </div>
                
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  A modern, web-based simulator designed for university students. Helps users input monthly cashflow to calculate savings, estimate net worth, and project 10-year investment growth using Plotly visualizations. Features a built-in AI Financial Advisor.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4 p-5 bg-slate-800/40 rounded-xl border border-slate-700/50 group-hover:bg-slate-800/80 transition-colors">
                    <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 shrink-0">
                      <Calculator size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200 mb-1">Cashflow Analytics</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">Dynamic calculation of savings rates and Singapore CPF employee contributions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-5 bg-slate-800/40 rounded-xl border border-slate-700/50 group-hover:bg-slate-800/80 transition-colors">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 shrink-0">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200 mb-1">Predictive Growth</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">Visualizes 10-year compounding investment portfolios using interactive donut and line charts.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
