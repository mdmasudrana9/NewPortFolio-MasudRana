import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const technicalSkills = [
    { name: "React", progress: 85, icon: "⚛️" }, // React logo
    { name: "Next.js", progress: 70, icon: "⬛" }, // Next.js (black circle)
    { name: "Redux", progress: 80, icon: "🌀" }, // Redux swirl logo
    { name: "Material UI", progress: 65, icon: "📐" }, // Material UI (ruler for design)
    { name: "Shadcn", progress: 75, icon: "🎨" }, // Paint palette for UI
    { name: "Node.js", progress: 85, icon: "🟢" }, // Green circle (Node.js logo color)
    { name: "Express.js", progress: 85, icon: "🚀" }, // Express lightweight rocket
    { name: "Django", progress: 65, icon: "🐍" }, // Python snake (Django is Python-based)
    { name: "Mongoose", progress: 85, icon: "🐹" }, // Mongoose (MongoDB ODM) - hamster
    { name: "TypeScript", progress: 75, icon: "🔷" }, // TypeScript (blue square)
    { name: "Python", progress: 70, icon: "🐍" }, // Python snake
  ];

  const professionalSkills = [
    { name: "🎨 Creativity", progress: 90 },
    { name: "💬 Communication", progress: 65 },
    { name: "🔧 Problem Solving", progress: 75 },
    { name: "👥 Teamwork", progress: 85 },
    { name: "⏳ Time Management", progress: 80 }, // Managing deadlines efficiently
    { name: "📊 Analytical Thinking", progress: 70 }, // Making data-driven decisions
    { name: "⚡ Adaptability", progress: 85 }, // Adjusting to new challenges
    { name: "📝 Attention to Detail", progress: 90 }, // Ensuring accuracy in work
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  type CircularProgressProps = {
    progress: number;
    size?: number;
  };

  const CircularProgress: React.FC<CircularProgressProps> = ({
    progress,
    size = 120,
  }) => {
    const strokeWidth = 8;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    return (
      <motion.svg
        className="transform -rotate-90 w-32 h-32"
        initial={{ strokeDashoffset: circumference }}
        animate={
          isInView
            ? { strokeDashoffset: offset }
            : { strokeDashoffset: circumference }
        }
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <circle
          className="stroke-gray-700"
          strokeWidth={strokeWidth}
          fill="none"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <motion.circle
          className="stroke-cyan-400"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={
            isInView
              ? { strokeDashoffset: offset }
              : { strokeDashoffset: circumference }
          }
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </motion.svg>
    );
  };

  return (
    <div
      id="skills"
      ref={ref}
      className="dark:text-white px-[12%] text-black py-10 mb-10 scroll-mt-20 w-full"
    >
      <h3 className="text-center text-5xl font-ovo mb-16">
        <span className="dark:text-white">My </span>
        <span className="text-cyan-400">Skills</span>
      </h3>

      <div className="flex flex-col md:flex-row gap-8 justify-between">
        {/* Technical Skills */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-8 border-b-2 border-black dark:border-white pb-2">
            Technical Skills
          </h2>
          <div className="space-y-6">
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="flex items-center gap-2">
                    <span>{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span>{skill.progress}%</span>
                </div>
                <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-cyan-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={
                      isInView
                        ? { width: `${skill.progress}%` }
                        : { width: "0%" }
                    }
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-8 border-b-2 border-black dark:border-white pb-2">
            Professional Skills
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {professionalSkills.map((skill) => (
              <div
                key={skill.name}
                className="relative flex flex-col items-center"
              >
                <div className="relative">
                  <CircularProgress progress={skill.progress} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">{skill.progress}%</span>
                  </div>
                </div>
                <p className="text-center mt-4">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
