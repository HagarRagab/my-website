import styles from "./Section.module.css";
import { Element } from "react-scroll";

function Section({ id, className, children }) {
    return (
        <Element name={id}>
            <section className={`${className} ${styles.section}`}>
                {children}
            </section>
        </Element>
    );
}

export default Section;
