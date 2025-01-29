import styles from "./ButtonsIcon.module.css";
import Linkedin from "../assets/icons/linkedin.svg?react";
import Github from "../assets/icons/github.svg?react";
import ButtonIcon from "./ButtonIcon";

function ButtonsIcon() {
    return (
        <div className={styles.buttonsIcon}>
            <ButtonIcon
                link="https://www.linkedin.com/in/hagar-ragab-12ab8b256/"
                target="_blank"
                ariaLabel="Go to my linkedin page"
            >
                <Linkedin />
            </ButtonIcon>
            <ButtonIcon
                link="https://github.com/HagarRagab"
                target="_blank"
                ariaLabel="Go to my github page"
            >
                <Github />
            </ButtonIcon>
        </div>
    );
}

export default ButtonsIcon;
