import Bullet from "./Bullet";
import styles from "./NavigationBullets.module.css";

function NavigationBullets({ numPages, page, setPage }) {
    return (
        <ul className={styles.navigationBullets}>
            {Array(numPages)
                .fill(0)
                .map((_, i) => (
                    <Bullet
                        isActive={page - 1 === i}
                        key={i}
                        onClick={() => setPage(i + 1)}
                        ariaLabel={`Go to page ${i + 1}`}
                    />
                ))}
        </ul>
    );
}

export default NavigationBullets;
