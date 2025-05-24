import React from "react";
import styles from './projects.module.css'

const Projects: React.FC = () => {
  return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Projects</h1>
        <div className={styles.grid}>
         

          <div className={styles.card}>
            <div className={styles.header}>
              <h2>Brinkerhoff Drywall</h2>
            </div>
            <p>Brinkerhoff Drywall is a construction company based in Spanish Fork, UT, specializing in Wood Framing</p>
          </div>

          <div className={styles.card}>
             <div className={styles.header}>
              <h2>Palmer Software Consulting</h2>
            </div>
            <p>Playwright testing for Palmer Software Consulting</p>
          </div>

          <div className={styles.card}>
             <div className={styles.header}>
              <h2>Kings of Monotony Technology</h2>
            </div>
            <p>KofM technology My journey through software, testing, and business </p>
          </div>
        </div>

        
      </div>
    );
};


export default Projects;