import React from "react";
import styles from "./ExperienceStyles.module.css";
import ExperienceBlock from "../ExperienceBlock/ExperienceBlock";

function Experience() {
  const pattern = ["X", "|", "-", "-", "|", "X"];
  const experiences = [
    {
      title: "Software Engineer",
      company: "Coles Group",
      duration: "Feb 2025 - Current",
    },
    {
      title: "DevOps Engineer",
      company: "Coles Group",
      duration: "Jun 2024 - Dec 2024",
    },
    {
      title: "Deep Learning Engineer",
      company: "Monash Deep Neuron",
      duration: "Aug 2023 - Jun 2024",
    },
    {
      title: "Commercial Coworker",
      company: "IKEA",
      duration: "Mar 2023 - Jun 2024",
    },
    {
      title: "Software Engineer",
      company: "MCAV",
      duration: "Aug 2022 - Apr 2023",
    },
    {
      title: "Customer Service Coworker",
      company: "Hungry Jacks",
      duration: "Nov 2021 - Feb 2023",
    },
  ];

  for (let i = 0; i < experiences.length; i++) {
    experiences[i].key = i;
  }
  let experienceIndex = 0;
  let lineIndex = 0;
  const totalBlocks = experiences.length * 3;

  return (
    <section className={styles.container}>
      <div className={styles.cascadingTable}>
        {Array.from({ length: totalBlocks }).map((_, index) => {
          const patternIndex = index % pattern.length;
          if (
            pattern[patternIndex] === "X" &&
            experienceIndex < experiences.length
          ) {
            return (
              <ExperienceBlock
                className={styles.item}
                data={experiences[experienceIndex++]}
              />
            );
          } else if (pattern[patternIndex] === "|") {
            if (lineIndex < experiences.length - 1) {
              return (
                lineIndex++,
                (
                  <div className={styles.shape}>
                    <div className={styles.circle}></div>
                    <div className={styles.line}></div>
                  </div>
                )
              );
            } else {
              return (
                <div className={styles.shape}>
                  <div className={styles.circleLone}></div>
                  <div className={styles.lineLone}></div>
                </div>
              );
            }
          } else {
            return <div></div>;
          }
        })}
      </div>
    </section>
  );
}

export default Experience;
