import SectionTitle from "./SectionTitle";
import { experience } from "../data";
import GridBackground from "./design/GridBackground";
import balls from "../assets/balls.svg";
import { MouseParallax } from "react-just-parallax";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    useGSAP(() => {
        gsap.fromTo(
            ".experience",
            {
                y: 40,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.4,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".experience",
                    start: "top bottom", // when the top of .skills-wheel hits the bottom of the viewport
                    end: "bottom top", // when the bottom of .skills-wheel hits the top of the viewport
                },
            }
        );
    }, []);
    return (
        <main id="experience">
            <SectionTitle animationClassName="experience-title">
                My <span>Work Experience</span>
            </SectionTitle>

            <section className="experience-container">
                <MouseParallax strength={0.07} isAbsolutelyPositioned>
                    <img src={balls} alt="balls" className="balls" />
                </MouseParallax>

                {experience.map((item, index) => (
                    <article className="experience" key={index}>
                        <GridBackground
                            type={2}
                            size="cover"
                            repeat="no-repeat"
                            zIndex={1}
                            position="left"
                        />

                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                        <img
                            src={item.img}
                            alt="experience-img"
                            className={item.imgClassName}
                        />
                    </article>
                ))}
            </section>
        </main>
    );
}
