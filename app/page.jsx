"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full px-6 md:px-4">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* SUMMARY */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl animate-pulse">
              Software Developer<sub className="text-xs">.junior</sub>
            </span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-cyan-500">Omar Azel</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 font-mono">
              I'm passionate about art and music. Oh and I'm also a developer.
              So, if you want to share something, here I am.{" "}
              <b>God bless you ☕</b>.
            </p>
            {/* social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/omargpax-CV.pdf" download className="cursor-pointer">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0 ">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-cyan-500 rounded-full flex justify-center items-center text-cyan-500 text-base hover:bg-cyan-500 hover:text-gray-900 hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* PICTURE */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
