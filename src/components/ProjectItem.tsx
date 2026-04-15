import { FaLocationArrow } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectItem({
    projectIndex,
    img,
    title,
    description,
    codebaseUrl,
    liveUrl,
    techStack,
}: {
    projectIndex?: number;
    img?: string;
    title?: string;
    description?: string;
    codebaseUrl?: string;
    liveUrl?: string;
    techStack?: { icon: string; name: string }[];
}) {
    useGSAP(() => {
        gsap.fromTo(
            ".icons-tech-stack-" + projectIndex,
            {
                scale: 0,
            },
            {
                scale: 1,
                duration: 0.3,
                stagger: 0.2,
                ease: "expo.inOut",
                scrollTrigger: {
                    trigger: ".icons-tech-stack-" + projectIndex,
                    start: "top bottom", // when the top of .project hits the bottom of the viewport
                    end: "bottom top", // when the bottom of .project hits the top of the viewport
                },
            }
        );
    }, []);
    return (
        <article className={`project`}>
            <div className="project-image-box">
                <img
                    className="project-image"
                    src={img}
                    alt={title + " image"}
                />
            </div>
            <div className="project-description">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="project-details">
                <div className={`project-tech-stack `}>
                    {techStack?.map((img, index) => (
                        <img
                            key={index}
                            className={`project-tech-icon icons-tech-stack-${projectIndex}`}
                            src={img.icon}
                            alt={`${img.name} icon`}
                            title={img.name}
                            style={{
                                left: `${index * 33}px`,
                            }}
                        />
                    ))}
                </div>
                <div className="project-urls">
                    {codebaseUrl && (
                        <a href={codebaseUrl} target="_blank">
                            Repo <FaLocationArrow />
                        </a>
                    )}
                    {liveUrl && (
                        <a href={liveUrl} target="_blank">
                            Live <FaLocationArrow />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
