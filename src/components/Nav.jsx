import { pageSections } from "../pageSections";
import NavLink from "./NavLink";
import styles from "./Nav.module.css";

function Nav({ className = "", childrenType }) {
    return (
        <ul className={className}>
            {pageSections.map((section) => (
                <NavLink
                    key={section.id}
                    to={section.id}
                    className={styles.active}
                >
                    {section[childrenType]}
                </NavLink>
            ))}
        </ul>
    );
}

export default Nav;
