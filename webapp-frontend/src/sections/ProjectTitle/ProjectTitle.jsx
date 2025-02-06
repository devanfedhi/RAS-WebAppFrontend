import styles from './ProjectTitleStyles.module.css'

function ProjectTitle({data}) {


  return (
    <>
      <section id="title" className={styles.container}>
        <h1>Project: {data.title}</h1>

        <h2>Featured technologies</h2>
        <ul className={styles.techList}>
          {data.techList.map((tech, index) => {
            return (
              <li className={styles.data} key={index}><h6>{tech}</h6></li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default ProjectTitle
