import { MouseParallax } from "react-just-parallax";
import { useRef } from "react";

export default function Button({
    children,
    href,
    onClick,
    animationClass,
}: {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    animationClass?: string;
}) {
    const parallaxRef = useRef<HTMLDivElement>(null);

    return (
        <section
            className={`app-button-container ${animationClass}`}
            ref={parallaxRef}
        >
            <MouseParallax
                parallaxContainerRef={parallaxRef}
                shouldResetPosition
            >
                {href ? (
                    <a className="app-button" href={href}>
                        {children}
                    </a>
                ) : (
                    <button className="app-button" onClick={onClick}>
                        {children}
                    </button>
                )}
            </MouseParallax>
        </section>
    );
}
