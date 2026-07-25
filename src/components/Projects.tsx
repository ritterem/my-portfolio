"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FolderGit2, Globe, TrendingUp } from "lucide-react";

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

        <div 
          ref={containerRef}
          className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-3xl p-8 md:p-10 overflow-hidden shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 hover:-translate-y-2"
        >
          {/* Background Glow Effect */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-colors duration-500 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-100">Global Market & Climate Predictor</h3>
                <span className="bg-blue-500/10 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide border border-blue-500/20">
                  Predictive Model
                </span>
              </div>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                A data-driven predictive model designed to forecast global financial market trends alongside key sustainability metrics, such as global warming rates, to guide ESG-focused investment strategies.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 p-5 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:bg-slate-800/80 transition-colors">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 shrink-0">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-1">Sustainability Trends</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">Modeling climate data and global warming trajectories to assess long-term environmental risks and impacts.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-5 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:bg-slate-800/80 transition-colors">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-1">Market Forecasting</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">Analyzing financial datasets to predict market movements and align portfolios with sustainable goals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
