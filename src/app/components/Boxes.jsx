"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { LinkPreview } from "./ui/link-preview";

export function BackgroundBoxesDemo() {
  return (
    <div
      className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div
        className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Welcome To My Blogs
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        I&apos;m obsessed with writing bad code. I&apos;m also obsessed with writing. Here, I write about my experiences with code and the things I&apos;ve learned along the way.
        <br />
        <br />
        <LinkPreview url="https://rohitdebugbugs.hashnode.dev/">
          Click Here To Visit My Blog
        </LinkPreview>
      </p>
    </div>
  );
}
