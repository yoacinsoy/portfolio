import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";

export default function Welcome() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden scroll-smooth z-70"
      id="home"
    >
      <Hero />
      <About />
    </section>
  );
}
