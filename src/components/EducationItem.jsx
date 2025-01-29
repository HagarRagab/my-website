import styles from "./EducationItem.module.css";

function EducationItem({ item, isLastItem }) {
    return (
        <li className={styles.educationItem}>
            <p className={styles.date}>{item.date}</p>
            <h3 className={isLastItem ? styles.last : ""}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
        </li>
    );
}

export default EducationItem;
