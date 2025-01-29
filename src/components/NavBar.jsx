import { useState } from "react";
import { useMatchMedia } from "../hooks/useMatchMedia";
import styles from "./NavBar.module.css";
import MenuLeft from "../assets/icons/menu-left.svg?react";
import MenuRight from "../assets/icons/menu-Right.svg?react";
import Moon from "../assets/icons/moon.svg?react";
import Sun from "../assets/icons/sun.svg?react";
import ButtonIcon from "./ButtonIcon";
import Nav from "./Nav";

function NavBar({ onChangeMood, isDarkMood }) {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const matches = useMatchMedia("(max-width: 576px)");
    const device = matches ? "mobile" : "desktop";

    return (
        <>
            <button
                className={styles.navMobile}
                onClick={() => setIsMenuOpened((isOpened) => !isOpened)}
                aria-label="Open or close menu"
            >
                <MenuLeft />
            </button>
            <nav
                className={`${styles.navBar} ${
                    device === "mobile" && isMenuOpened ? styles.open : ""
                }`}
            >
                <ButtonIcon
                    onClick={() => setIsMenuOpened((isOpened) => !isOpened)}
                    ariaLabel="Open or close menu"
                >
                    {device === "desktop" ? <MenuLeft /> : <MenuRight />}
                </ButtonIcon>
                <Nav className={styles.navIcons} childrenType="iconEle" />
                <ButtonIcon
                    onClick={onChangeMood}
                    ariaLabel={
                        isDarkMood ? "Turn on light mood" : "Turn on dark mood"
                    }
                >
                    {isDarkMood ? <Sun /> : <Moon />}
                </ButtonIcon>
            </nav>
            <nav
                className={`${styles.openedMenu} ${
                    isMenuOpened && device === "desktop" ? styles.open : ""
                }`}
            >
                <ButtonIcon
                    onClick={() => setIsMenuOpened(false)}
                    ariaLabel="Close menu"
                >
                    <MenuRight />
                </ButtonIcon>
                <Nav childrenType="title" />
            </nav>
        </>
    );
}

export default NavBar;
