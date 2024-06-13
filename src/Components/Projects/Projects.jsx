import Headline from "../Headline/Headline"
import styles from "./Projects.module.css"
import React from "react"
import data from "../../Data/Data"

const Projects = React.forwardRef((props, ref) => { 
    return (
        <div id="projects" className={styles.block}>
            <div ref={ref} className={styles.invisible}></div>
            <Headline big={true} text={"PROJECTS ____ PROJECTS ____ PROJECTS"}/>
            <h1 className={styles.projects}>PROJECTS</h1>
            <div className={styles.allProjects}>
               {data.map(el => <div className={styles.one}>
                <div>
                    <img className={styles.photo} src={el.picture}/>
                    <h2 className={styles.headline}>{el.shortDescription}</h2>
                    <p className={styles.description}>{el.fullDescription}</p>
                    <p className={styles.p}>Cтек: {el.stack}</p>
                </div>
                <a className={styles.button} target="_blank" href={el.link}>github</a>
            </div>)}
            </div>     
        </div>
    )
})

export default Projects