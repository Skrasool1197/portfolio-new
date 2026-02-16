import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background font-sans antialiased text-foreground">
      <Navbar />
      <Hero />
      <div className="space-y-32 pb-24">
        <About />
        <Separator className="mx-auto max-w-2xl bg-border/40" />
        <Experience />
        <Separator className="mx-auto max-w-2xl bg-border/40" />
        <Skills />
        <Separator className="mx-auto max-w-2xl bg-border/40" />
        <Projects />
        <Separator className="mx-auto max-w-2xl bg-border/40" />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
