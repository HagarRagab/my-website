import styles from "./TechStack.module.css";
import Section from "../components/Section";
import TechIcons from "../components/TechIcons";

function TechStack() {
    return (
        <Section id="tech-stack" className={styles.techStack}>
            <h2>
                Technical <span>Stack</span>
            </h2>
            <div className={styles.iconsContainer}>
                <div className={styles.icons}>
                    <TechIcons />
                    <TechIcons />
                </div>
            </div>
        </Section>
    );
}

export default TechStack;
