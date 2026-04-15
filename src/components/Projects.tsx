import SectionTitle from "./SectionTitle";
import ProjectItem from "./ProjectItem";
import Gradient from "./design/Gradient";
import { projects } from "../data";
import { ScrollParallax } from "react-just-parallax";

export default function Projects() {
    return (
        <main id="projects">
            <ScrollParallax isAbsolutelyPositioned>
                <Gradient top={"150px"} left={"-100px"} width="400px" />
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
                <Gradient top={"900px"} right={"-100px"} width="400px" />
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
                <Gradient top={"1300px"} left={"-100px"} width="400px" />
            </ScrollParallax>
            <SectionTitle animationClassName="projects-title">
                A small selection of
                <span> Recent Projects</span>
            </SectionTitle>
            <section className="projects-container">
                {projects.map((project, index) => (
                    <ProjectItem
                        projectIndex={index}
                        key={index}
                        img={project.img}
                        title={project.title}
                        description={project.description}
                        codebaseUrl={project.codebaseUrl}
                        liveUrl={project.liveUrl}
                        techStack={project.techStack}
                    />
                ))}
            </section>
        </main>
    );
}
