"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../components/ui/navbar-menu"; // Assuming you are using these components for UI
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <HoveredLink href="/">Home</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <HoveredLink href="/Projects">Projects</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Blog">
          <HoveredLink href="/blogs">Blog</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <HoveredLink href="/Contact">Contact</HoveredLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
