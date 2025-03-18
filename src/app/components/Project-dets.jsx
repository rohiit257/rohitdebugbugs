"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TracingBeam } from "../components/ui/tracing-beam";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPython,
  SiDjango,
  SiNextdotjs,
  SiSolidity,
  SiEthereum,
  SiTailwindcss,
  SiAlchemy,
  SiOpenzeppelin,
  SiIpfs,
  SiLangchain,
  SiGooglegemini,
  SiHuggingface,
  SiStreamlit,
  SiBootstrap,
  SiJavascript,
  SiJquery,
  SiPandas,
  SiJsonwebtokens,
} from "react-icons/si";

export function TracingBeamDemo() {
  const [projects, setProjects] = useState([]); // State to store fetched projects
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch projects from the API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/get_projects"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data); // Update state with fetched projects
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchProjects();
  }, []);

  // Display loading state
  if (loading) {
    return <div className="text-center text-neutral-200">Loading projects...</div>;
  }

  // Display error message
  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {projects.map((item, index) => (
          <div key={`content-${index}`} className="mb-12">
            <h2 className="bg-black text-neutral-200 rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge || "Project"} {/* Use a default badge if not provided */}
            </h2>

            <p className="text-xl mb-6 font-semibold">{item.name}</p>

            {item.techStackIcons && (
              <div className="flex gap-4 mb-6 text-4xl text-neutral-200">
                {item.techStackIcons.map((icon, iconIndex) => {
                  const IconComponent = {
                    SiReact,
                    SiNodedotjs,
                    SiMongodb,
                    SiExpress,
                    SiPython,
                    SiDjango,
                    SiNextdotjs,
                    SiSolidity,
                    SiEthereum,
                    SiTailwindcss,
                    SiAlchemy,
                    SiOpenzeppelin,
                    SiIpfs,
                    SiLangchain,
                    SiGooglegemini,
                    SiHuggingface,
                    SiStreamlit,
                    SiBootstrap,
                    SiJavascript,
                    SiJquery,
                    SiPandas,
                    SiJsonwebtokens,
                  }[icon]; // Dynamically get the icon component
                  return IconComponent ? <IconComponent key={iconIndex} /> : null;
                })}
              </div>
            )}

            <div className="text-base md:text-md leading-relaxed prose dark:prose-invert">
              {item?.imagelink && (
                <Image
                  src={item.imagelink}
                  alt={item.name}
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              <div className="text-neutral-200">
                <p>{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Visit Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}