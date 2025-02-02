import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMatchMedia } from "../hooks/useMatchMedia";
import { projects } from "../projects";
import styles from "./Projects.module.css";
import ProjectItem from "../components/ProjectItem";
import Section from "../components/Section";
import RightArrow from "../assets/icons/right-arrow.svg?react";
import LeftArrow from "../assets/icons/left-arrow.svg?react";
import NavigationBullets from "../components/NavigationBullets";
import Filter from "../components/Filter";

function Projects() {
    const [sortBy, setSortBy] = useState("all");
    const [page, setPage] = useState(1);
    const matches = useMatchMedia("(max-width: 768px)");
    const projectsPerPage = matches ? 3 : 6;

    const sortedProjects =
        sortBy !== "all"
            ? projects.filter((project) => project.category === sortBy)
            : projects;
    const numPages = Math.ceil(sortedProjects.length / projectsPerPage);
    const displayedProjects = sortedProjects.slice(
        (page - 1) * projectsPerPage,
        projectsPerPage * page
    );

    return (
        <Section id="projects" className={styles.projects}>
            <header>
                <h2>
                    My <span>Projects</span>
                </h2>
                <Filter
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    setPage={setPage}
                />
            </header>
            <main>
                <button
                    onClick={() => setPage((page) => page - 1)}
                    disabled={page === 1}
                    aria-label="Go to previous page"
                >
                    <LeftArrow />
                </button>
                <div>
                    {displayedProjects.map((project) => (
                        <ProjectItem project={project} key={project.title} />
                    ))}
                </div>
                <button
                    onClick={() => setPage((page) => page + 1)}
                    disabled={page === numPages}
                    aria-label="Go to next page"
                >
                    <RightArrow />
                </button>
            </main>
            {numPages > 1 && (
                <NavigationBullets
                    numPages={numPages}
                    page={page}
                    setPage={setPage}
                />
            )}
        </Section>
    );
}

export default Projects;
