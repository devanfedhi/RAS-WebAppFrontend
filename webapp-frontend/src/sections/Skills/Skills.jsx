import React from 'react'
import styles from './SkillsStyles.module.css';
import SkillBlock from '../SkillBlock/SkillBlock';
import {skills} from '../../data/Data';

function Skills() {
                  
  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>

      <div className={styles.table}>
        {skills.map((skill, index) => {
            return (
              <SkillBlock className={styles.item} data={skill} key={index} />
            )
        })}
      </div>

    </section>
  )
}

export default Skills