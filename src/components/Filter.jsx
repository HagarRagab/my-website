import { motion } from "framer-motion";
import styles from "./Filter.module.css";

function Filter({ sortBy, setSortBy, setPage, projectsCategories }) {
    const filterList = [{ _id: "all", title: "all" }, ...projectsCategories];

    function handleFilter(category) {
        setSortBy(category._id);
        setPage(1);
    }

    return (
        <ul className={styles.filter}>
            {filterList.map((category) => (
                <li key={category._id}>
                    <button onClick={() => handleFilter(category)}>
                        {category.title}
                    </button>
                    {sortBy === category._id && (
                        <motion.span layoutId="active-indicator" />
                    )}
                </li>
            ))}
        </ul>
    );
}

export default Filter;
