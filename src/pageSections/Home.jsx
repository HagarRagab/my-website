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
            <div className={styles.text}>
                <h1>Hi, I’m Hagar Ragab</h1>
                <h2>Frontend Developer</h2>
                <p>
                    Front-End Developer (React.js). Passionate about crafting
                    seamless user experiences with a focus on performance and
                    modern design principles. A dedicated self-learner driven by
                    curiosity and innovation.
                </p>
                <div>
                    <Button link="about" style="filled">
                        Know More
                    </Button>
                    <Button link="contact" style="outlined">
                        Contact Me
                    </Button>
                </div>
                <ButtonsIcon />
            </div>
            <picture>
                <source srcSet={mobSrc} media="(max-width: 768px)" />
                <source srcSet={src} />
                <img src={src} alt={alt} />
            </picture>
        </Section>
    );
}

export default Home;
