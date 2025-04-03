import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Education.module.css";
import { education } from "../utils/education";
import Button from "../components/Button";
import EducationItem from "../components/EducationItem";
import Section from "../components/Section";
import ImageComponent from "../components/ImageComponent";
import { hashImgs } from "../utils/hashImgs";

function Education({ isDarkMood }) {
    const [isShowMore, setIsShowMore] = useState(false);
    const { src, mobSrc, alt, hash } =
        hashImgs.education[isDarkMood ? "dark" : "light"];

    return (
        <Section id="education" className={styles.education}>
            <h2>Education</h2>
            <main>
                <div>
                    <ul>
                        {education.slice(0, 3).map((item, i) => {
                            return (
                                <EducationItem
                                    key={item.description}
                                    item={item}
                                    isLastItem={education.length - 1 === i}
                                />
                            );
                        })}
                    </ul>
                    <AnimatePresence>
                        {isShowMore && (
                            <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, type: "spring" }}
                            >
                                {education.map((item, i) => {
                                    return (
                                        <EducationItem
                                            key={item.description}
                                            item={item}
                                            isLastItem={
                                                education.length - 1 === i
                                            }
                                        />
                                    );
                                })}
                            </motion.ul>
                        )}
                    </AnimatePresence>
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
