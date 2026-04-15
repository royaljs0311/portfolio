export default function GridBackground({
    type,
    animationClass,
    position,
    size,
    repeat,
    zIndex,
}: {
    type?: number;
    animationClass?: string;
    position?: string;
    size?: string;
    repeat?: string;
    zIndex?: number;
}) {
    const styles = {
        backgroundPosition: position,
        backgroundSize: size,
        backgroundRepeat: repeat,
        zIndex: zIndex,
    };

    if (type === 1) {
        return (
            <span
                style={styles}
                className={`grid-background-1 ${animationClass || ""}`}
            ></span>
        );
    }
    return (
        <span
            style={styles}
            className={`grid-background-2 ${animationClass || ""}`}
        ></span>
    );
}
