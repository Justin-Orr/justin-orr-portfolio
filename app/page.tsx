import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <header className="relative min-h-screen overflow-hidden">
  
      <div className="absolute inset-0 -z-10">
        {/* Background */}
        <Image
          src="/images/GoldLeafBackground.jpg"
          alt="Minimalist dark mountain background image."
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <section className="relative flex flex-col z-10">
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
