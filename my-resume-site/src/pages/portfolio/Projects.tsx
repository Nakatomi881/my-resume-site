import React from "react";
import styles from './projects.module.css'

const Projects: React.FC = () => {
  return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Projects</h1>
        <div className={styles.grid}>
         

          <div className={styles.card}>
            <p>Brinkerhoff Drywall is a construction company based in Spanish Fork, UT, specializing in Wood Framing</p>
          </div>

          <div className={styles.card}>
            <p>Playwright testing for Palmer Software Consulting</p>
          </div>

          <div className={styles.card}>
            <p>KofM technology helping with quick websites and easy testing </p>
          </div>
        </div>

        
      </div>
    );
};


export default Projects;