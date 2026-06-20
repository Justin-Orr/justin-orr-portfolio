import Image from "next/image";
import Button from "@/components/Button";
import "@/styles/GradientText.css"
import "@/styles/FloatUp.css"
import { BsArrowDownCircle } from "react-icons/bs";

export default function HomePage() {
  return (
    <header className="relative min-h-screen w-full">
      
      {/* Background Image*/}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/CoffeeDesk.png"
          alt="Minimalist dark mountain background image."
          fill
          priority
          className="object-cover"
        />
        {/* Black left side of screen */}
        <span className="absolute inset-0 h-screen w-2/5 bg-black" /> 

         {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black to-transparent" />
      </div>

      {/* Hero Content */}
      <section className="content-padding relative flex flex-col min-h-screen justify-center">
        <section className="flex flex-col animate-float-up">

          <p className="text-3xl font-extralight mb-3">
            Nice to meet you!
          </p>

          <h1 className={`text-9xl`}>
            I&apos;m <span className="gradientText">Justin.</span>
          </h1>

          <span className="h-1 w-24 my-9 bg-linear-to-r from-(--accent-purple) to-(--accent-cyan)"></span>

          <p className="text-2xl font-light mb-11">
            Software Engineer with enterprise experience building <br/>
            modern <span className="gradientText">web applications</span> and <span className="gradientText">business solutions.</span>
          </p>

          <div>
            <Button href="/projects" className="text-xl px-8 py-4 mr-4 border border-solid border-(--accent-cyan) hover:bg-(--accent-cyan) transition duration-300 ease-in-out">
              View Projects
            </Button>

            <Button href="/contact" className="text-xl px-8 py-4 ml-4 border border-solid border-(--accent-purple) hover:bg-(--accent-purple) transition duration-300 ease-in-out">
              Contact Me
            </Button>
          </div>
        </section>

        {/* Arrow Icon */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center animate-bounce">
          <p className="text-xl font-light text-(--accent-cyan)/70 mb-1">Scroll</p> 
          <BsArrowDownCircle className="text-xl text-(--accent-cyan)"/>
        </div>
        
      </section>
    </header>  
  );
}
