import styles from "./ButtonIcon.module.css";

function ButtonIcon({ children, onClick, link, target, ariaLabel }) {
    if (link)
        return (
            <a href={link} target={target} aria-label={ariaLabel}>
                {children}
            </a>
        );
    return (
        <button
            className={styles.buttonIcon}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}

export default ButtonIcon;
