
import Footer from '../../../sections/Footer/Footer'
import Header from '../../../sections/Header/Header'
import styles from './JavaFieryDragonsStyles.module.css'
import ProjectTitle from '../../../sections/ProjectTitle/ProjectTitle'

function JavaFieryDragons() {
  const projectData = {title: "Java Fiery Dragons Board Game", techList: ["Java","Windows","Git"]};
  
  return (
    <>
      <Header />
      <section id="project" className={styles.project}>
        <ProjectTitle data={projectData}/>
        <section id="content" className={styles.content}>
          <h2>description</h2>  
          <p> WIP: check back later</p>
        </section>
      </section>
      <Footer />
    </>
  )
}

export default JavaFieryDragons
