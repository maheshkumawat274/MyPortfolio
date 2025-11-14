import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import "./AnimatedGlaxy.css";

const AnimatedGalaxySection: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative  w-full overflow-hidden flex flex-col items-center justify-center text-white text-center">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          background: {
            image: "url('/0abe93d6-b206-4131-bd35-62a32844933e.png')",
            size: "cover",
            repeat: "no-repeat",
            position: "center center",
          },
          fpsLimit: 60,
          detectRetina: true,
          particles: {
            number: { value: 120, density: { enable: true, area: 800 } },
            color: { value: ["#ffcc00", "#ff66ff", "#66ccff", "#ffffff"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.8,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.3,
              },
            },
            size: {
              value: { min: 1, max: 4 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5,
              },
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "top",
              random: true,
              straight: false,
              outModes: { default: "out" },
              attract: { enable: true, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 80, duration: 0.4 },
              push: { quantity: 3 },
            },
          },
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-3xl px-4 animate-fade-in">
        
      </div>
    </section>
  );
};

export default AnimatedGalaxySection;
