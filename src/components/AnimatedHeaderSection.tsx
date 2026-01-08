import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { about } from "../constants";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface AnimatedHeaderProps {
  subTitle: string;
  title: string;
  text: string;
  textColor?: string;
  withScrollTrigger?: boolean;
}

const AnimatedHeaderSection = ({subTitle, title, text, textColor, withScrollTrigger}: AnimatedHeaderProps) => {
    const contextRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl: GSAPTimeline = gsap.timeline({
            scrollTrigger: withScrollTrigger ? {
               trigger: contextRef.current,
            }: undefined,
        });
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
    },)
    return (
        <div ref={contextRef}>
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
            <div
            ref={headerRef}
            className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
            >
                <p className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}>
                {subTitle}
                </p>
            </div>

            <div className="px-10">
                <h1 className={`flex flex-col flex-wrap gap-12 ${textColor} uppercase banner-text-responsive sm:gap-16 md:block py-6`}>
                {title}
                </h1>
            </div>
        </div>

        <div className={`realtive px-10 ${textColor}`}>
            <div className="absolute inset-x-0 border-t-2" />
            <div className="py-12 sm:py-16 text-end">
                <AnimatedTextLines
                text={text}
                className={`font-light uppercase value-text-responsive max-w-5xl px-10 ${textColor}`}
                />
            </div>

        </div>
    </div>         
    )
}

export default AnimatedHeaderSection;