import SectionTitle from "./SectionTitle";
import GridBackground from "./design/GridBackground";
import CodeDiv from "./CodeDiv";
import Gradient from "./design/Gradient";
import worldimg from "../assets/world.webp";
import { techStack } from "../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import rightLine from "../assets/right-line.svg";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    useGSAP(() => {
        gsap.to(".skills-wheel", {
            rotation: 160,
            ease: "none",
            scrollTrigger: {
                trigger: ".skills-wheel",
                start: "top bottom", // when the top of .skills-wheel hits the bottom of the viewport
                end: "bottom top", // when the bottom of .skills-wheel hits the top of the viewport
                scrub: true, // ties the animation progress to the scrollbar
            },
        });
    }, []);
    return (
        <main id="about">
            <SectionTitle animationClassName="about-title">
                A little bit <span>about me</span>
            </SectionTitle>
            <section className="about-container">
                <Gradient
                    top={"-60px"}
                    left={"-200px"}
                    width="600px"
                    rotation="-90deg"
                    opacity={0.7}
                />

                <article className="about-text">
                    <GridBackground
                        type={2}
                        size="cover"
                        repeat="no-repeat"
                        zIndex={-3}
                        position="center"
                    />
                    <CodeDiv />
                </article>
                <article className="about-skills">
                    <img
                        src={rightLine}
                        alt="Left Line"
                        className="left-line"
                    />
                    <img
                        src={rightLine}
                        alt="Right Line"
                        className="right-line"
                    />
                    <div className="skills-wheel">
                        <Gradient
                            top={"50%"}
                            left={"50%"}
                            center={true}
                            width="700px"
                            opacity={0.1}
                        />
                        <img src={worldimg} alt="World" className="world-img" />
                        <div className="outer-circle">
                            <div className="inner-circle"></div>
                        </div>
                        {techStack.map((item, index) => (
                            <div
                                key={index}
                                className="skills-item"
                                style={{
                                    transform: `rotate(${
                                        index * 36
                                    }deg) translateY(-40%)`,
                                }}
                            >
                                <img
                                    src={item.icon}
                                    className={`skills-item-inner`}
                                    alt={`${item.name} icon`}
                                    title={item.name}
                                />
                            </div>
                        ))}
                    </div>
                </article>
            </section>
        </main>
    );
}
