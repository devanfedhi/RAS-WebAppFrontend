import React, { useEffect, useRef } from 'react';
import styles from './ProjectBlockStyles.module.css';
import { HashLink } from 'react-router-hash-link';

function ProjectBlock({data}) {

  const headerRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === `#header`) {
      headerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <section className={styles.container}>
      <HashLink className={styles.link} to={`projects/${data.id}#project`}>
        <div className={styles.project}>
          <img className={styles.icon} src={data.icon}></img>

          <h5>{data.title}</h5>

          <p>{data.description}</p>

          <div className={styles.footer}>
            <h6>Read more...</h6>
            
          </div>
          
        </div>
      </HashLink>
        
    </section>
  )
}

export default ProjectBlock