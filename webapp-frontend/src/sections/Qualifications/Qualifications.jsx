import React, { useState } from 'react';
import styles from './QualificationsStyles.module.css';
import { UilGraduationCap, UilBriefcaseAlt, UilAward } from '@iconscout/react-unicons';
import Experience from '../Experience/Experience'
import Certifications from '../Certifications/Certifications';
import Education from '../Education/Education';

function Qualifications() {
  const [selectedSection, setSelectedSection] = useState('experience');

  return (
    <section id="qualifications" className={styles.container}>
      <h1>Qualifications</h1>

      <div className={styles.tabs}>
        <div className={`${styles.qualification_type} ${selectedSection === 'experience' ? styles.selected : ''}`} onClick={() => setSelectedSection('experience')}>
          <UilBriefcaseAlt className={styles.icon} />
          <h2>Experience</h2>
        </div>
        <div className={`${styles.qualification_type} ${selectedSection === 'certifications' ? styles.selected : ''}`} onClick={() => setSelectedSection('certifications')}>
          <UilAward className={styles.icon} />
          <h2>Certifications</h2>
        </div>
        <div className={`${styles.qualification_type} ${selectedSection === 'education' ? styles.selected : ''}`} onClick={() => setSelectedSection('education')}>
          <UilGraduationCap className={styles.icon} />
          <h2>Education</h2>
        </div>
      </div>

      {selectedSection === 'experience' && ( <Experience /> )}
      {selectedSection === 'certifications' && ( <Certifications /> )}
      {selectedSection === 'education' && ( <Education /> )}


    </section>


  )
}

export default Qualifications