import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () =>{ 
    useGSAP(() => {
        gsap.to("#title-service-1", {
            xPercent: 20,
            ScrollTrigger: {
                target: "#title-service-1",
                scrub: true,
            }
        });
    });

    return <section className="mt-20 overflow-hidden font-light leading-snug text-snug text-center mb-42 contact-text-responsive">
        <div id="title-service-1" className="">
            <p>Architecture</p>
        </div>
        <div id="title-service-2" className="flex items-center justify-center gap-3 translate-x-16">
            <p className="font-normal"> Development</p>
            <div className="w-10 h-1 md:w-32 bg-gold"/>
            <p>Development</p>
        </div>
        <div id="title-service-3" className="flex items-center justify-center gap-3 -translate-x-48">
            <p>APIs</p>
            <div className="w-10 h-1 md:w-32 bg-gold"/>
            <p className="italic">Frotends</p>
            <div className="w-10 h-1 md:w-32 bg-gold"/>
            <p>Scalability</p>
        </div>
        <div id="title-service-4" className="translate-x-48">
            <p>Databases</p>
        </div>
    </section>
};


export default ServiceSummary;
