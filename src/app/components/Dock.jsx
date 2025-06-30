import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [

    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/rohitdebugbugs",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/rohiit257",
    },
    {
        title: "LinkedIn",
        icon: (
            <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.linkedin.com/in/rohit-shahi-152661253/",
    },
    {
        title: "Leetcode",
        icon: (
            <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://leetcode.com/u/rohitt257/",
    }
  ];
  return (
    <div className="w-full flex justify-center items-center">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
