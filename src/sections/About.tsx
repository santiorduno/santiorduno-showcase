import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { about } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
    const { name, title, bio, softSkills } = about[0];     
    const imgRef = useRef<HTMLImageElement>(null);
    
    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger: {
                trigger: "#about",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: true,
                markers: true
            },
            ease:"power1.inOut"
        });
        
        gsap.set(imgRef.current, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%"
        });
        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%",
            duration: 2,
            ease: "power4.out",
            scrollTrigger: { trigger:imgRef.current },
        })
    })
    return (
        <div>
            <section id="about" className="min-h-screen bg-black rounded-b-4xl">
                <AnimatedHeaderSection 
                subTitle={name} 
                title={title}
                text={bio}
                textColor={"text-white"}
                withScrollTrigger={true}
                />
                <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
                    <img 
                    ref={imgRef}
                    src="images/santi.jpeg" alt="santiago"
                    className="w-md"
                    />
                    <AnimatedTextLines
                    text={softSkills}
                    className="w-full"
                    />
                </div>
            </section>
        </div>
    )
}

export default About;