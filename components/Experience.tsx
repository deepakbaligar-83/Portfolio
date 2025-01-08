"use client";

import React from "react";
import { workExperience } from "@/data";
import { Button } from "@/components/ui/button";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ButtonWithIcon() {
  return (
    <Button>
      <GitHubIcon />
      <a
        href="https://github.com/deepakbaligar-83/3D-Human-Avatar-Creation-from-an-Image.git"
        target="_blank"
        className="ml-2 text-md font-bold"
      >
        Github
      </a>
    </Button>
  );
}

export function ButtonLink() {
  return (
    <Button variant="link">
      <a
        href="https://p3d.in/iF1cX"
        target="_blank"
        rel="noopener noreferrer"
        className="text-md font-semibold"
      >
        Quick Demo
      </a>
    </Button>
  );
}

const Experience = () => {
  return (
    <div className="py-20  px-4 sm:px-8 lg:px-16 w-full">
      <h1 className="heading text-center">
        My <span className="text-purple -mb-[280px]">work experience</span>
      </h1>

      <div className="w-full h-auto flex flex-wrap justify-center gap-6 mt-10">
        {workExperience.map((card) => (
          <CardContainer
            key={card.id}
            className="group relative flex flex-col lg:flex-row lg:items-center gap-4 p-4 sm:p-6 lg:p-8 w-[400px] sm:w-[450px] md:w-[500px] h-[470px] sm:h-[520px] md:h-[570px]"
          >
            <CardBody className="bg-gray-50 relative group/card dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-4 sm:p-6 border">
              <CardItem
                translateZ="50"
                className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
              >
                {card.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-xs sm:text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {card.company}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={card.thumbnail}
                  height="1000"
                  width="1000"
                  className="h-48 sm:h-52 md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={card.title}
                />
              </CardItem>
              <CardItem
                translateZ={20}
                className="text-neutral-400 mt-4 sm:mt-6 text-md sm:text-md"
              >
                {card.desc}
              </CardItem>
            </CardBody>

            {/* Buttons Section */}
            <div className="absolute bottom-8 sm:bottom-12 flex gap-4 left-1/3 transform -translate-x-1/2">
              <ButtonLink />
              <ButtonWithIcon />
            </div>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Experience;
