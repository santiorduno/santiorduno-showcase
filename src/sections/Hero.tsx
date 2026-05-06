import { Canvas } from "@react-three/fiber";
import { lazy, Suspense } from "react";
import { Environment, Lightformer } from "@react-three/drei";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useContent } from "../i18n/useContent";
import { useLanguage } from "../i18n/LanguageContext";

// Lazy load Planet component for better performance
const Planet = lazy(() => import("../components/Planet").then(module => ({ default: module.Planet })));

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 833});
  const { about } = useContent();
  const { t } = useLanguage();
  const { fn, title, about: bioDescription } = about;

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection
        subTitle={title}
        title={fn}
        text={bioDescription}
      />
      <div className="px-10 pb-12">
        <Link to="work" smooth duration={1500} offset={0}>
          <button className="border border-navy text-navy uppercase tracking-widest font-light text-sm px-8 py-3 rounded-full hover:bg-navy hover:text-cream transition-all duration-300 cursor-pointer">
            {t.nav.work}
          </button>
        </Link>
      </div>      
      <figure
      className="absolute inset-0 -z-50"
      style={{width: "100%", height: "100vh"}}
      >
        <Canvas shadows camera={{position: [0, 0, -10], fov: 17.5, near: 1, far: 20}}>
            <ambientLight intensity={0.5} />
            <Suspense fallback={null}>
              <Float speed={0.5}>
                <Planet scale={isMobile ? 0.7 : 1}/>
              </Float>
            </Suspense>
            <Environment resolution={256}>
              <group rotation={[-Math.PI / 3, 4, 1]}>

                <Lightformer 
                form={"circle"} 
                intensity={20} 
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
