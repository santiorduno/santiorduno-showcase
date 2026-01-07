import { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { about } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Lightformer } from "@react-three/drei";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 833});
  const contextRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl: GSAPTimeline = gsap.timeline();
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(headerRef.current, {
      opacity: 0,
      duration: 1,
      ease: "circ.out",
    },
    "<+0.2"
    );
  },);
  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <div ref={contextRef}>
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
          <div
            ref={headerRef}
            className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
          > {about.map((item) => (
              <p className="text-sm font-light tracking-[0.5rem] uppercase px-10 text-black">
                {item.title}
              </p>
            ))}
          </div>

          <div className="px-10">
            {about.map((item) =>(
              <h1 className="flex flex-col flex-wrap gap-12 text-black uppercase banner-text-responsive sm:gap-16 md:block py-6">
                {item.fn}
              </h1>
            ))}
          </div>
        </div>

        <div className="realtive px-10 text-black"></div>
        <div className="absolute inset-x-0 border-t-2" />
        <div className="py-12 sm:py-16">
          <AnimatedTextLines
            text={about[0].about}
            className="font-light uppercase value-text-responsive max-w-5xl px-10"
          />
        </div>
      </div>
      <figure
      className="absolute inset-0 -z-50"
      style={{width: "100%", height: "100vh"}}
      >
        <Canvas shadows camera={{position: [0, 0, -10], fov: 17.5, near: 1, far: 20}}>
            <ambientLight intensity={0.5} />
            <Float speed={0.5}>
              <Planet scale={isMobile ? 0.7 : 1}/>
            </Float>
            <Environment resolution={256}>
              <group rotation={[-Math.PI / 3, 4, 1]}>

                <Lightformer 
                form={"circle"} 
                intensity={4} 
                position={[8, 5, -9]}
                scale={36}
                />

                <Lightformer 
                form={"circle"} 
                intensity={2} 
                position={[0, 3, -1]}
                scale={40}
                />

                <Lightformer 
                form={"circle"} 
                intensity={2} 
                position={[-5, -1, -1]}
                scale={10}
                />

                <Lightformer 
                form={"circle"} 
                intensity={1} 
                position={[2, -10, 0]}
                scale={20}
                />

              </group>

            </Environment>
        </Canvas>
        
      </figure>
    </section>
  );
};

export default Hero;
