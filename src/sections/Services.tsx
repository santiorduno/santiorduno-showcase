import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { about } from "../constants";
import { services } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Services = () =>{
    const { subtitle, availability } = about[0];
    const serviceRefs = useRef<(HTMLDivElement | null) []>([]);
    const isDesktop = useMediaQuery({ minWidth: "48rem" }); //778px
    useGSAP(() => {
        serviceRefs.current.forEach((el)=>{
            if(!el) return;
            gsap.from(el, {
                y: 200,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                },
                duration: 1,
                ease: "circ.out",
            });
        });
    }, []);

    return (
        <section id="services" className="min-h-screen bg-black rounded-t-4xl rounded-4xl">
            <AnimatedHeaderSection
                title="Services"
                subTitle= {availability}
                text={subtitle}            
                textColor="text-white"
                withScrollTrigger={true}
            />
            {services.map((service: any, index: number) => (
                <div
                    key={index}
                    ref={(el) => { if (el) serviceRefs.current[index] = el; }}
                    className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
                    style={isDesktop?{top: `calc(10vh + ${index * 5}em)`, marginBottom: `${(services.length - index -1)*5}rem`,}:{ top:0 }}
                    >
                        <div className="flex items-center justify-between gap-4 font-light">
                            <div className="flex flex-col gap-6">
                                <h2 className="text-4xl lg:text-txl">{service.title}</h2>
                                <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">{service.description}</p>
                                <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                                {service.items?.map((item:any , itemIndex: number) => (
                                    <div key={`item-${index}-${itemIndex}`}>
                                        <h3 className="flex">
                                            <span className="mr-12 text-lg text-white/30 ">0{itemIndex + 1}</span>
                                            {item.title}
                                        </h3>
                                        {itemIndex < service.items.length - 1 && (
                                            <div className="w-full h-px m-2 bg-white/30"></div>
                                        )}
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
            ))}

        </section>
    )
};

export default Services;
