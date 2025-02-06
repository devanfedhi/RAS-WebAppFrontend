
import Footer from '../../../sections/Footer/Footer'
import Header from '../../../sections/Header/Header'
import styles from './ReactFrontendStyles.module.css'
import ProjectTitle from '../../../sections/ProjectTitle/ProjectTitle'

function ReactFrontend() {
  const projectData = {title: "React Frontend Webapp", techList: ["React.js","Javascript","HTML","CSS","Docker","Docker Compose","Git","Github Repositories","Github Actions","Github Packages"]};
  
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

export default ReactFrontend
