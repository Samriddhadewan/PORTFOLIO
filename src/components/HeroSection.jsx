import { ArrowBigDown, ArrowDown } from "lucide-react";
import { assets } from "../assets/asstes";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="flex flex-col mt-30 md:mt-0 items-center justify-center md:flex-row w-full h-full">
              <div className="container max-w-4xl mx-auto z-10">
                {/* profile pic  */}
            <div className=" my-8 mx-auto flex items-center justify-center">
              <img src={assets.profile2} alt="" className="w-60 h-60 rounded-full object-cover border-4 border-primary shadow-lg" />
            </div>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Samriddha
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Dewan
            </span>
          </h1>
          <p className="text-lg md:text-cl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 ">
            A web developer who turns ideas into interactive, responsive, and
            user-friendly websites. I build with passion, code with purpose, and
            love crafting seamless digital experiences.
          </p>

          <div className="pt-4  opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My work
            </a>
          </div>
        </div>
        </div>
      </div>
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
