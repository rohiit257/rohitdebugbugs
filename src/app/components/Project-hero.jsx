"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    (<div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            Unleash the Power of Innovation <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Explore my projects and see how i turn ideas into cutting-edge solutions. 
              </span>
            </h1>
          </>
        }>
        <Image
          src={`/hithub.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false} />
      </ContainerScroll>
    </div>)
  );
}
