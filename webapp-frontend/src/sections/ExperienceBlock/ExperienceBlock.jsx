import React from 'react'
import styles from './ExperienceBlockStyles.module.css'
import { UilCalendarAlt } from '@iconscout/react-unicons';

function ExperienceBlock({ data }) {

  return (

    <section className={styles.container}>
        
      {data.key % 2 === 0 ? (
        <div className={`${styles.content} ${styles.contentRight}`}>
          <h4 className={styles.title}>{data.title}</h4>
          <h5 className={styles.company}>{data.company}</h5>
          <h6 className={`${styles.duration} ${styles.durationRight}`}>
            {data.duration} <UilCalendarAlt className={`${styles.icon} ${styles.iconRight}`} />
          </h6>
        </div>
      
        ) : (
          <div className={`${styles.content} ${styles.contentLeft}`}>
            <h4 className={styles.title}>{data.title}</h4>
            <h5 className={styles.company}>{data.company}</h5>
            <h6 className={`${styles.duration} ${styles.durationLeft}`}>
              <UilCalendarAlt className={`${styles.icon} ${styles.iconLeft}`} /> {data.duration}
            </h6>
          </div>
        )}
    </section>
  );
}

export default ExperienceBlock;