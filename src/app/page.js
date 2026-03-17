import Header from "@/components/layout/Header";
import Projects from "@/components/sections/Projects";
import Welcome from "@/components/sections/Welcome";
import Grid from "@/components/ui/Grid";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Header />
      <Grid />
      <ParticlesBackground />
      <Welcome />
      <Projects />
    </div>
  );
}
