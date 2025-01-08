import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const checkpointRefs = useRef<React.RefObject<HTMLDivElement>[]>(
    data.map(() => React.createRef())
  );

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 25%", "end 40%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-#000319 font-sans md:px-6 mb-28" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-6 lg:px-8">
        <h2 className="text-base md:text-2xl font-semibold text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-12">
        {data.map((item, index) => {
          const isInView = useInView(checkpointRefs.current[index], {
            margin: "0px 0px -80% 0px",
          });

          return (
            <div
              key={index}
              className="flex justify-start pt-6 md:pt-24 md:gap-10"
              ref={checkpointRefs.current[index]}
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-28 self-start max-w-xs lg:max-w-sm md:w-full">
                <motion.div
                  className="h-5 w-5 absolute left-2 md:left-2 rounded-full flex items-center justify-center"
                  style={{
                    background: isInView
                      ? "linear-gradient(to right, #a855f7, #3b82f6, #14b8a6)"
                      : "#737373",
                    boxShadow: isInView
                      ? "0 0 8px rgba(168, 85, 247, 0.7)"
                      : "none",
                  }}
                />
                <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-6 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          );
        })}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-4 sm:left-4 left-4 top-0 overflow-hidden w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
