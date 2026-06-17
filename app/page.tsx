import Image from "next/image";
import Navbar from "@/components/Navbar";
import "@/styles/Homepage.css";

export default function HomePage() {
  return (
    <header className="relative min-h-screen">
      {/* Background */}
      <Image
        src="/images/home-page-hero-background.png"
        alt="Minimalist dark mountain background image."
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <section id="homeHeaderContainer" className="z-10">
        <Navbar />
        <section>
          <h1>Justin Orr</h1>
          <p>Full Stack Developer</p>
          <button>Hire Me</button>
        </section>
      </section>
    </header>  
  );
}
