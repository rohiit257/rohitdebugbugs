import Image from "next/image";
import { Menu, MenuItem } from "./components/ui/navbar-menu";
import { NavbarDemo } from "./components/Navbar";
import { AuroraBackgroundDemo } from "./components/AuroraBackground";
import { TimelineDemo } from "./components/Timeline";


export default function Home() {
  return (
   <>
   <NavbarDemo/>
   <AuroraBackgroundDemo/>
   <TimelineDemo/>
   
   </>
  );
}
