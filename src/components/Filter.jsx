import styles from "./Filter.module.css";

const filterList = ["all", "html&css", "js", "react"];

function Filter({ sortBy, setSortBy, setPage }) {
    function handleFilter(list) {
        setSortBy(list);
        setPage(1);
    }

    return (
        <ul className={styles.filter}>
            {filterList.map((list) => (
                <li className={sortBy === list ? styles.active : ""} key={list}>
                    <button onClick={() => handleFilter(list)}>{list}</button>
                </li>
            ))}
        </ul>
    );
}

export default Filter;
