import { pageSections } from "../utils/pageSections";
import NavLink from "./NavLink";
import styles from "./SideBullets.module.css";

function SideBullets() {
    return (
        <ul className={styles.sideBullets}>
            {pageSections.map((section) => (
                <NavLink
                    key={section.id}
                    to={section.id}
                    ariaLabel={`Go to ${section.title} section`}
                    className={styles.active}
                />
            ))}
        </ul>
    );
}

export default SideBullets;
