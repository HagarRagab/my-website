import { useState } from "react";

import { useMatchMedia } from "../hooks/useMatchMedia";
import { projects } from "../utils/projects";
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
    const matches = useMatchMedia("(max-width: 992px)");
    const numProjectsPerPage = matches ? 3 : 6;

    const filterList = [
        "all",
        ...new Set(projects.map((project) => project.category)),
    ];

    const sortedProjects =
        sortBy !== "all"
            ? projects.filter((project) => project.category === sortBy)
            : projects;
    const numPages = Math.ceil(sortedProjects.length / numProjectsPerPage);

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
                    filterList={filterList}
                />
            </header>
            <main>
                <button
                    onClick={() => setPage((page) => page - 1)}
                    disabled={page <= 1}
                    aria-label="Go to previous page"
                >
                    <LeftArrow />
                </button>
                <div className={styles.projectsContainer}>
                    {Array.from({ length: numPages }, (_, i) => (
                        <div
                            style={{
                                transform: `translateX(${
                                    (i + 1 - page) * 100
                                }%)`,
                            }}
                        >
                            {sortedProjects
                                .slice(
                                    (i + 1 - 1) * numProjectsPerPage,
                                    numProjectsPerPage * (i + 1)
                                )
                                .map((project) => (
                                    <ProjectItem
                                        project={project}
                                        key={project.title}
                                    />
                                ))}
                        </div>
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
