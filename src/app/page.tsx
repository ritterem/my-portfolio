import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}
