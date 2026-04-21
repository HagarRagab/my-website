import styles from "./EducationItem.module.css";
import { formatDate } from "../utils/helper";

function EducationItem({ item, isLastItem }) {
    const startAt = item.startAt ? formatDate(item.startAt) + "-" : "";
    const endAt = item.present ? "Present" : formatDate(item.endAt);

    return (
        <li className={styles.educationItem}>
            <p className={styles.date}>
                {startAt} {endAt}
            </p>
            <h3 className={isLastItem ? styles.last : ""}>{item.company}</h3>
            <p className={styles.description}>{item.description}</p>
        </li>
    );
}

export default EducationItem;
