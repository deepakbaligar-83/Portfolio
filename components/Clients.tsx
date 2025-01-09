"use client";

import React, { useState } from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsTitle,
} from "./ui/glowing-stars";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { motion } from "framer-motion";
import { Timeline } from "./ui/timeline";

// Define the hover state structure
type HoverState = {
  isHovering: boolean;
  mousePosition: { x: number; y: number };
};

type HoverStates = {
  card1: HoverState;
  card2: HoverState;
  card3: HoverState;
};

const Clients = () => {
  const [hoverStates, setHoverStates] = useState<HoverStates>({
    card1: { isHovering: false, mousePosition: { x: 0, y: 0 } },
    card2: { isHovering: false, mousePosition: { x: 0, y: 0 } },
    card3: { isHovering: false, mousePosition: { x: 0, y: 0 } },
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
    cardKey: keyof HoverStates
  ) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    setHoverStates((prev) => ({
      ...prev,
      [cardKey]: {
        ...prev[cardKey],
        mousePosition: {
          x: ((clientX - left) / width - 0.5) * 20,
          y: ((clientY - top) / height - 0.5) * 20,
        },
      },
    }));
  };

  const handleMouseEnter = (cardKey: keyof HoverStates) => {
    setHoverStates((prev) => ({
      ...prev,
      [cardKey]: { ...prev[cardKey], isHovering: true },
    }));
  };

  const handleMouseLeave = (cardKey: keyof HoverStates) => {
    setHoverStates((prev) => ({
      ...prev,
      [cardKey]: { isHovering: false, mousePosition: { x: 0, y: 0 } },
    }));
  };

  const renderCard = (
    cardKey: keyof HoverStates,
    title: string,
    link: string,
    color: string
  ) => {
    const { isHovering, mousePosition } = hoverStates[cardKey];

    return (
      <motion.div
        className="w-full max-w-sm sm:max-w-md relative"
        onMouseMove={(e) => handleMouseMove(e, cardKey)}
        onMouseEnter={() => handleMouseEnter(cardKey)}
        onMouseLeave={() => handleMouseLeave(cardKey)}
        style={{
          transform: isHovering
            ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
            : "translate3d(0px, 0px, 0)",
          transition: "transform 0.1s ease-out",
        }}
      >
        <GlowingStarsBackgroundCard
          className="w-full h-64 sm:h-80 relative p-4 sm:p-6"
          color={color}
        >
          <GlowingStarsTitle>{title}</GlowingStarsTitle>
          <div className="absolute bottom-3 right-3">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button
                className="w-8 h-8 bg-[#666] rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition"
                aria-label="Go"
              >
                <CallMadeIcon className="text-white w-5 h-5" />
              </button>
            </a>
          </div>
        </GlowingStarsBackgroundCard>
      </motion.div>
    );
  };

  const timelineData = [
    {
      title: "2009 - 2019",
      content: (
        <div>
          <h1 className="text-xl md:text-2xl font-bold">School</h1>
          <p className="text-sm md:text-lg mt-2">
            Attended Parivarthan Gurukul Heritage School, where I built a strong
            foundation in both academics and extracurricular activities.
          </p>
        </div>
      ),
    },
    {
      title: "2021 - 2019",
      content: (
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Pre-University</h1>
          <p className="text-sm md:text-lg mt-2">
            Completed Pre-University education in Science at Dr. R. B. Patil&aposs
            Mahesh PU College.
          </p>
        </div>
      ),
    },
    {
      title: "2025 - 2021",
      content: (
        <div>
          <h1 className="text-xl md:text-2xl font-bold">
            Computer Science and Engineering
          </h1>
          <p className="text-sm md:text-lg mt-2">
            Currently pursuing a degree in Computer Science and Engineering from
            KLE Technological University, Hubballi, India.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="testimonials" className="py-10 px-4">
       <h1 className="heading transition-all duration-300 ease-in-out hover:text-purple">
         <span>Education</span>
      </h1>

      <div className="flex flex-col items-center mt-10 ">
        <Timeline data={timelineData} />

        <h1 className="heading text-center transition-all duration-300 ease-in-out hover:text-purple">
          <span>Certificates</span>
        </h1>

        {/* <div className="flex justify-center gap-6 mt-10">
            {renderCard(
              "card1",
              "Comprehensive Networking Basics Course by Cisco",
              "https://www.credly.com/badges/d1819315-0133-4fd3-b108-f133cbf984e5",
              "#030109"
            )}
            <div className="mb-4 sm:mb-0"></div> 
            {renderCard(
              "card2",
              "Kubernetes Course from a DevOps guru (Kubernetes + Docker)",
              "https://drive.google.com/file/d/1v5MQk3n1pHNoJ8G1KIVFXL4o_6Yj0dRq/view",
              "#080426"
            )}
            <div className="mb-4 sm:mb-0"></div>
            {renderCard(
              "card3",
              "An Efficient Network Attack Detection system using Recurrent Neural Networks",
              "https://drive.google.com/file/d/17Fy8JVi6YXV7OngPRH2R9PZCrZiM0WXY/view",
              "#0f051c"
            )}
          </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
              {renderCard(
                "card1",
                "Comprehensive Networking Basics Course by Cisco",
                "https://www.credly.com/badges/d1819315-0133-4fd3-b108-f133cbf984e5",
                "#030109"
              )}
              {renderCard(
                "card2",
                "Kubernetes Course from a DevOps guru (Kubernetes + Docker)",
                "https://drive.google.com/file/d/1v5MQk3n1pHNoJ8G1KIVFXL4o_6Yj0dRq/view",
                "#080426"
              )}
              {renderCard(
                "card3",
                "An Efficient Network Attack Detection system using Recurrent Neural Networks",
                "https://drive.google.com/file/d/17Fy8JVi6YXV7OngPRH2R9PZCrZiM0WXY/view",
                "#0f051c"
              )}
            </div>


      </div>
    </section>
  );
};

export default Clients;
