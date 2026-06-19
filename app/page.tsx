import Image from "next/image";
import Navbar from "@/components/Navbar";
import { space_grotesk } from "@/app/ui/fonts";
import { gradientTextStyling } from "@/app/ui/fonts";

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
      <section className="relative flex flex-col min-h-screen z-10">
        <Navbar />
        <section className="flex-1
      flex
      flex-col
      items-center
      justify-center
      text-center
      px-6 font-[space_grotesk] antialiased">
          <h1 className={`text-9xl ${gradientTextStyling}`}>Software Engineer <br/> + <br/> Web Developer</h1>
          <h2>Building modern websites, applications, and digital solutions that help businesses grow.</h2>
          <div>
            <button>View Projects</button>
            <button>Work with Me</button>
          </div>
        </section>
      </section>
    </header>  
  );
}
