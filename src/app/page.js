import About from "@/features/about/components/About";
import Hero from "@/features/hero/components/Hero";
import Projects from "@/features/projects/components/Projects";
import Header from "@/shared/components/layout/Header";
import Grid from "@/shared/components/ui/Grid";
import ParticlesBackground from "@/shared/components/ui/ParticlesBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Header />
      <Grid />
      <ParticlesBackground />

      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden z-70"
      >
        <Hero />
        <About />
      </section>

      <Projects />
    </div>
  );
}
