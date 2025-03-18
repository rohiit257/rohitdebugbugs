'use client'
import React from 'react'
import { NavbarDemo } from '../components/Navbar'
import { PlaceholdersAndVanishInputDemo } from '../components/Input'
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from '../components/ui/canvas-reveal-effect'

const Page = () => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <>
      <NavbarDemo />
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* PlaceholdersAndVanishInputDemo will stay above the background */}
        <div className="relative z-10">
          <PlaceholdersAndVanishInputDemo />
        </div>

        {/* CanvasRevealEffect - positioned as the background */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full absolute inset-0 z-0" // Ensure it's behind the input with a lower z-index
            >
              <CanvasRevealEffect
                animationSpeed={5}
                containerClassName="bg-transparent"
                colors={[
                  [59, 130, 246],
                  [139, 92, 246],
                ]}
                opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                dotSize={2}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Page;
