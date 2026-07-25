"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    
    gsap.fromTo(
      textRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-slate-900 pointer-events-none" />
      
      <div 
        ref={textRef}
        className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-4xl"
      >
        <h2 className="text-blue-400 font-medium tracking-wider uppercase mb-4 opacity-0">
          Ngai Jia Xuan
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-6 leading-tight opacity-0">
          Driven by a passion for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">ESG</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">sustainable finance</span>.
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl opacity-0">
          NUS Business Administration Finance penultimate year undergraduate seeking analytical, treasury, or middle-office roles. I aim to apply my skills in stakeholder analysis and strategic problem-solving to help corporations achieve their business and sustainability goals.
        </p>
        
        <div className="opacity-0">
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-900/50"
          >
            View Projects
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ArrowDown size={24} />
      </div>
    </section>
  );
}
