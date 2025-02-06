import React, { useState, useEffect }  from 'react';
import ProjectBlock from '../ProjectBlock/ProjectBlock';
import styles from './ProjectsStyles.module.css';
import { projects } from '../../data/Data';
import Pagination from '../Pagination/Pagination';


function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const newProjectPerPage = window.innerWidth < 620 ? 2 : window.innerWidth < 1200 ? 4 : 6;
      if (newProjectPerPage !== projectsPerPage) {
        setCurrentPage(1);
      }
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projectsPerPage = screenWidth < 620 ? 2 : screenWidth < 1200 ? 4 : 6;

  // Calculate the projects to display on the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <section id="projects" className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.projectTable}>
        {currentProjects.map((project, index) => {
          return (
            <ProjectBlock className={styles.projectItem} data={project} key={index} />
          )
        })}

      </div>
      {/* <button>all projects</button> */}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalProjects={projects.length} projectsPerPage={projectsPerPage}/>

    </section>
  )
}

export default Projects