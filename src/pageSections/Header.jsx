import styles from "./Header.module.css";
import logoLightMood from "../assets/images/my-logo-light-mood.webp";
import logoDarkMood from "../assets/images/my-logo-dark-mood.webp";

function Header({ isDarkMood }) {
    return (
        <header className={styles.header}>
            <img
                src={isDarkMood ? logoDarkMood : logoLightMood}
                alt="personal logo"
            />
        </header>
    );
}

export default Header;
