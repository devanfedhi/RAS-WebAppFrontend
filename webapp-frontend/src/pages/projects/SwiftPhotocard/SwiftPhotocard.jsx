
import Footer from '../../../sections/Footer/Footer'
import Header from '../../../sections/Header/Header'
import styles from './SwiftPhotocardStyles.module.css'
import ProjectTitle from '../../../sections/ProjectTitle/ProjectTitle'

function SwiftPhotocard() {
  const projectData = {title: "iOS K-Pop Photocard Collection App", techList: ["Swift","Restful APIs","Git","MacOs","iOS"]};
  
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

export default SwiftPhotocard
