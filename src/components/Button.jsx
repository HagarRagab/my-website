import { Link } from "react-scroll";
import styles from "./Button.module.css";

function Button({ children, link = "", style, onClick }) {
    const classes = `${styles.button} ${
        style === "filled" ? styles.filled : styles.outlined
    }`;

    if (link)
        return (
            <Link
                to={link}
                smooth={true}
                duration={400}
                className={classes}
                spy={true}
            >
                {children}
            </Link>
        );

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
