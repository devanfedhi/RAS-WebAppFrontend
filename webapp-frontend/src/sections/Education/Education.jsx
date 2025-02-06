import React from 'react'
import styles from './EducationStyles.module.css'

function Education() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h4 className={styles.title}>Monash University (2022 - 2025)</h4>
            <h5 className={styles.subtitle}>Bachelor of Engineering (Software)</h5>
            <h6 className={styles.description}>Grade: HD, WAM: 86.7, GPA: 3.92/4.00</h6>
        </div>

        <div className={styles.content}>
            <h4 className={styles.title}>Nossal High School (2018 - 2021)</h4>
            <h5 className={styles.subtitle}>Victorian Certificate of Education (vce)</h5>
            <h6 className={styles.description}>atar: 99.25</h6>
        </div>
    </section>
  )
}

export default Education