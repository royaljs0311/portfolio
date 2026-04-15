import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function SectionTitle({
    children,
    withInSection,
    animationClassName,
}: {
    children: React.ReactNode;
    withInSection?: boolean;
    animationClassName?: string;
}) {
    useGSAP(() => {
        gsap.fromTo(
            "." + animationClassName,
            {
                y: 40,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: "." + animationClassName,
                    start: "top bottom", // when the top of .skills-wheel hits the bottom of the viewport
                    end: "bottom top", // when the bottom of .skills-wheel hits the top of the viewport
                },
            }
        );
    }, []);

    return (
        <h2
            className={`section-title ${withInSection ? "title-in-section" : ""}
            ${animationClassName ? animationClassName : ""}`}
        >
            {children}
        </h2>
    );
}
