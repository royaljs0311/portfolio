import gradient from "../../assets/gradient.webp";

export default function Gradient({
    animationClass,
    top,
    right,
    left,
    bottom,
    width,
    rotation,
    priority,
    opacity,
    center,
    onLoadGradient,
}: {
    animationClass?: string;
    top?: string;
    right?: string;
    left?: string;
    bottom?: string;
    width?: string;
    rotation?: string;
    priority?: boolean;
    opacity?: number;
    center?: boolean;
    onLoadGradient?: () => void;
}) {
    return (
        <img
            className={`gradient ${animationClass} ${center ? "center" : ""}`}
            src={gradient}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            onLoad={onLoadGradient}
            style={{
                top: top,
                right: right,
                left: left,
                bottom: bottom,
                width: width,
                opacity: opacity,
                transform: `rotate(${rotation})`,
            }}
            alt="gradient-background"
        />
    );
}
