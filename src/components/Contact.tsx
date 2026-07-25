"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail } from "lucide-react";

export default function Contact() {
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
    <section id="contact" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
        <div ref={containerRef} className="flex flex-col items-center">
          <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 mb-6">
            <Mail size={32} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6">Let's Connect</h2>
          
          <p className="text-lg text-slate-400 mb-10">
            Currently seeking analytical, treasury, or middle-office roles. If you have an opportunity or just want to connect, my inbox is always open!
          </p>
          
          <a 
            href="mailto:ngaijiaxuan190@gmail.com"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-medium overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)]"
          >
            <span className="relative z-10">Drop Me an Email</span>
            <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-0" />
            <Mail size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
