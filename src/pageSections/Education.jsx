import { useState } from "react";
import styles from "./Education.module.css";
import { education } from "../education";
import Button from "../components/Button";
import EducationItem from "../components/EducationItem";
import Section from "../components/Section";
import ImageComponent from "../components/ImageComponent";
import { hashImgs } from "../hashImgs";

function Education({ isDarkMood }) {
    const [isShowMore, setIsShowMore] = useState(false);
    const educationItems = isShowMore ? education : education.slice(0, 3);
    const { src, mobSrc, alt, hash } =
        hashImgs.education[isDarkMood ? "dark" : "light"];

    return (
        <Section id="education" className={styles.education}>
            <h2>Education</h2>
            <main>
                <div>
                    <ul>
                        {educationItems.map((item, i) => {
                            return (
                                <EducationItem
                                    key={item.description}
                                    item={item}
                                    isLastItem={education.length - 1 === i}
                                />
                            );
                        })}
                    </ul>
                    <Button
                        style="filled"
                        onClick={() => setIsShowMore((isShow) => !isShow)}
                    >
                        {isShowMore ? "Show Less" : "Show More"}
                    </Button>
                </div>
                <figure>
                    <ImageComponent
                        src={src}
                        mobSrc={mobSrc}
                        alt={alt}
                        hash={hash}
                    />
                </figure>
            </main>
        </Section>
    );
}

export default Education;
