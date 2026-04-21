import { useEffect, useState } from "react";

import styles from "./Education.module.css";
import Button from "../components/Button";
import EducationItem from "../components/EducationItem";
import Section from "../components/Section";
import ImageComponent from "../components/ImageComponent";
import { hashImgs } from "../utils/hashImgs";
import { client } from "../lib/sanityClient";

function Education({ isDarkMood }) {
    const [educationExperience, setEducationExperience] = useState([]);
    const [isShowMore, setIsShowMore] = useState(false);
    const { src, mobSrc, alt, hash } =
        hashImgs.education[isDarkMood ? "dark" : "light"];

    useEffect(() => {
        (async () => {
            try {
                const data = await client.fetch(
                    `*[_type == "experienceEducation"] | order(_createdAt desc){company, description, startAt, endAt, present}`,
                );
                setEducationExperience(data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return (
        <Section id="education" className={styles.education}>
            <h2>Experience & Education</h2>
            <main>
                <figure>
                    <ImageComponent
                        src={src}
                        mobSrc={mobSrc}
                        alt={alt}
                        hash={hash}
                    />
                </figure>
                <div>
                    <ul>
                        {!isShowMore
                            ? educationExperience.slice(0, 4).map((item, i) => {
                                  return (
                                      <EducationItem
                                          key={item.description}
                                          item={item}
                                          isLastItem={
                                              educationExperience.length - 1 ===
                                              i
                                          }
                                      />
                                  );
                              })
                            : educationExperience.map((item, i) => {
                                  return (
                                      <EducationItem
                                          key={item.description}
                                          item={item}
                                          isLastItem={
                                              educationExperience.length - 1 ===
                                              i
                                          }
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
            </main>
        </Section>
    );
}

export default Education;
