import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./Home.module.css";
import Button from "../components/Button";
import ButtonsIcon from "../components/ButtonsIcon";
import Section from "../components/Section";

import homeImgLightMood from "../assets/images/home-light-mood.webp";
import homeImgDarkMood from "../assets/images/home-dark-mood.webp";
import homeImgLightMoodMobile from "../assets/images/home-light-mood-small.webp";
import homeImgDarkMoodMobile from "../assets/images/home-dark-mood-small.webp";
import { useEffect } from "react";
import { useMatchMedia } from "../hooks/useMatchMedia";

const homeImgs = {
    light: {
        src: homeImgLightMood,
        mobSrc: homeImgLightMoodMobile,
        alt: "Girl studies in dark color",
    },
    dark: {
        src: homeImgDarkMood,
        mobSrc: homeImgDarkMoodMobile,
        alt: "Girl studies in light color",
    },
};

function Home({ isDarkMood }) {
    const { src, mobSrc, alt } = homeImgs[isDarkMood ? "dark" : "light"];
    const matches = useMatchMedia("(max-width: 768px)");
    const { scrollY } = useScroll();
    const xText = useTransform(scrollY, [0, 300, 500], [0, -100, -500]);
    const xPicture = useTransform(scrollY, [0, 300, 500], [0, 100, 500]);
    const opacity = useTransform(scrollY, [0, 300, 500], [1, 0.8, 0]);

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.type = "image/webp";
        link.href = matches ? mobSrc : src;
        document.head.appendChild(link);

        return () => document.head.removeChild(link);
    }, [src, matches]);

    return (
        <Section id="home" className={styles.home}>
            <motion.div className={styles.text} style={{ x: xText, opacity }}>
                <h1>Hi, I&apos;m Hagar Ragab</h1>
                <h2>Frontend Developer</h2>
                <p>
                    Front-End Developer (React.js). Passionate about crafting
                    seamless user experiences with a focus on performance and
                    modern design principles. A dedicated self-learner driven by
                    curiosity and innovation.
                </p>
                <div className={styles.buttons}>
                    <Button style="filled">
                        <a
                            href="https://drive.google.com/file/d/1KQB4_vxT0xETdnoAr0JsTAF3gCYlrDuR/view?usp=sharing"
                            target="_blank"
                            className={styles.cvLink}
                        >
                            Show CV
                        </a>
                    </Button>
                    <Button link="contact" style="outlined">
                        Contact Me
                    </Button>
                </div>
                <ButtonsIcon />
            </motion.div>
            <motion.picture style={{ x: xPicture, opacity }}>
                <source srcSet={mobSrc} media="(max-width: 768px)" />
                <source srcSet={src} />
                <img src={src} alt={alt} />
            </motion.picture>
        </Section>
    );
}

export default Home;
