import About from "./about/about";
import Contact from "./contact/contact";
import Experience from "./experience/experience";
import Hero from "./hero/hero";
import Projects from "./projects/projects";

export default function Page() {
  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      {/* Global ambient grid */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,40,200,0.12),transparent)] z-0" />

      {/* Sections without gaps */}
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />

      {/* Bottom padding for floating dock */}
      <div className="h-28" />
    </div>
  );
}
