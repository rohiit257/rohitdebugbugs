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
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
        title: "LinkedIn",
        icon: (
            <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        )
    },
    {
        title: "Leetcode",
        icon: (
            <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        )
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
