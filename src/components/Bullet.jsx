import styles from "./Bullet.module.css";

function Bullet({ isActive, onClick, ariaLabel }) {
    return (
        <li className={styles.bullet}>
            <button
                className={isActive ? styles.active : ""}
                onClick={onClick}
                aria-label={ariaLabel}
            />
        </li>
    );
}

export default Bullet;
