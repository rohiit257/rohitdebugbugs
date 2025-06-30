import { AuroraBackgroundDemo } from "./components/AuroraBackground"
import { TimelineDemo } from "./components/Timeline"
import { FloatingDockDemo } from "./components/Dock"

export default function Home() {
  return (
    <>
      <AuroraBackgroundDemo />
      <TimelineDemo />
      <div className="fixed bottom-3  left-1/2 -translate-x-1/2 z-50 w-full flex justify-center">
        <FloatingDockDemo />
      </div>
    </>
  )
}
