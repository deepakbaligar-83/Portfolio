import { FaLocationArrow } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export function ButtonWithIcon() {
  return (
    <Button className="pl-5 pr-5 pt-6 pb-6 mt-10">
      <a
        href="https://drive.google.com/file/d/19k9u597i6NR_TnUrwlC-SowaUQfKZpj3/view"
        target="_blank"
        className="pl-5 pr-5"
      >
        <p className="text-md font-bold">Download My Resume</p>
      </a>
    </Button>
  );
}

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid Background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl -mt-10"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-sm lg:text-2xl">
            Hi! I&apos;m Deepak Baligar, a Frontend-developer based in Hubli.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4">
            <a href="#projects">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <div className="mt-4 md:mt-0">
              <ButtonWithIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
