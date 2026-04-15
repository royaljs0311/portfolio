import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroContent } from "../data";
import Button from "./Button";
import Gradient from "./design/Gradient";
import GridBackground from "./design/GridBackground";
import { LuMousePointerClick } from "react-icons/lu";
import { useState } from "react";

export default function Hero() {
    const [gradientLoaded, setGradientLoaded] = useState(0);

    const onLoadGradient = () => {
        setGradientLoaded((prev) => prev + 1);
    };

    useGSAP(() => {
        gsap.to(".stagger-box-hero", {
            opacity: 1,
            stagger: 0.1,
            duration: 0.2,
        });

        gsap.to(".hero-description", {
            opacity: 1,
            duration: 0.3,
            y: 0,
        });

        gsap.fromTo(
            ".hero-button",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        );
    }, []);

    useGSAP(() => {
        if (gradientLoaded === 2) {
            gsap.to(
                ".gradient-hero1",

                {
                    opacity: 0.3,
                    duration: 1,
                    ease: "power2.out",
                }
            );

            gsap.to(
                ".gradient-hero2",

                {
                    opacity: 0.3,
                    duration: 1,
                    delay: 0.5,
                    ease: "power2.out",
                }
            );

            gsap.to(".gradient-hero2", {
                top: -190,
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        }
    }, [gradientLoaded]);

    // Split the string into an array using newline as delimiter.
    const mainArray = heroContent.main.split(" ");

    return (
        <main className="hero-container">
            <GridBackground
                type={1}
                size="contain"
                repeat="repeat"
                zIndex={-3}
                position="center"
            />
            <p className="hero-title">{heroContent.title}</p>
            <div>
                <Gradient
                    animationClass="gradient-hero1"
                    top={"-200px"}
                    left={"-50px"}
                    width="300px"
                    priority={true}
                    onLoadGradient={onLoadGradient}
                    opacity={0}
                />
                {mainArray.map((item, index) => (
                    <h1
                        key={index}
                        className={`stagger-box-hero ${
                            index > 4 ? "hero-text-purple" : ""
                        } `}
                    >
                        {item}
                    </h1>
                ))}
                <Gradient
                    animationClass="gradient-hero2"
                    right={"-100px"}
                    top="0px"
                    width="500px"
                    rotation="-90deg"
                    priority={true}
                    onLoadGradient={onLoadGradient}
                    opacity={0}
                />
            </div>
            <p className="hero-description">{heroContent.description}</p>
            <Button href="#projects" animationClass="hero-button">
                <LuMousePointerClick
                    style={{
                        marginRight: "10px",
                    }}
                />
                Check my Work
            </Button>
        </main>
    );
}
