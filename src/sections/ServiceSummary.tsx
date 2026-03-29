import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLanguage } from "../i18n/LanguageContext";
gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () =>{
    const { t } = useLanguage();
    useGSAP(() => {
        gsap.to("#title-service-1", {
            xPercent: 20,
            scrollTrigger: {
                trigger: "#title-service-1",
                scrub: true,
            }
        });
        gsap.to("#title-service-2", {
            xPercent: -30,
            scrollTrigger: {
                trigger: "#title-service-2",
                scrub: true,
            }
        });
        gsap.to("#title-service-3", {
            xPercent: 100,
            scrollTrigger: {
                trigger: "#title-service-3",
                scrub: true,
            }
        });
        gsap.to("#title-service-4", {
            xPercent: -100,
            scrollTrigger: {
                trigger: "#title-service-4",
                scrub: true,
            }
        });
    });

    return <section className="mt-20 overflow-hidden font-light leading-snug text-snug text-center mb-42 contact-text-responsive">
        <div id="title-service-1" className="">
            <p>{t.serviceSummary.line1}</p>
        </div>
        <div id="title-service-2" className="flex items-center justify-center gap-3 translate-x-16">
            <p className="font-normal">{t.serviceSummary.line2a}</p>
            <div className="w-10 h-1 md:w-32 bg-gold"/>
            <p>{t.serviceSummary.line2b}</p>
        </div>
        <div id="title-service-3" className="flex items-center justify-center gap-3 -translate-x-48">
            <p>{t.serviceSummary.line3a}</p>
            <div className="w-10 h-1 md:w-32 bg-gold"/>
            <p className="italic">{t.serviceSummary.line3b}</p>
            <div className="w-10 h-1 md:w-32 bg-gold"/>
            <p>{t.serviceSummary.line3c}</p>
        </div>
        <div id="title-service-4" className="translate-x-48">
            <p>{t.serviceSummary.line4}</p>
        </div>
    </section>
};


export default ServiceSummary;
