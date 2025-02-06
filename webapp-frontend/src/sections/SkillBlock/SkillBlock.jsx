import React from 'react'
import styles from './SkillBlockStyles.module.css';

function SkillBlock({ data }) {
  
  return (
    <section id="skillBlock" className={styles.container}>
      <h4 className={styles.title}>{data.name}</h4>
      <div className={styles.technologies}>
        <ul className={styles.techList}>
          {data.technologies.map((tech, index) => {
            return (
              <li className={styles.data} key={index}>{tech}</li>
            )
          })}
        </ul>
      </div>
      
    </section>
  )
}

export default SkillBlock