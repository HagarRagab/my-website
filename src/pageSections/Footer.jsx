import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            Copyright &copy; {new Date().getFullYear()} All rights reserved |
            This website is designed and developed by <span>Hagar Ragab.</span>
        </footer>
    );
}

export default Footer;
