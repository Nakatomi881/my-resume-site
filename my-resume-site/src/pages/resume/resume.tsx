import React from "react";
import styles from './resume.module.css'

const Resume: React.FC = () => {
  return (
      <div className={styles.container}>
        <div className={styles.heading}>
          <header>Ryan Palmer</header>
          <p>Helping companies improve product quality for their users</p>
        </div> 
        
        <div className={styles.info}>
        <p>Sandy, Utah 84092</p>
        <p>(801) 669-0006</p>
        <p>https://www.linkedin.com/in/ryan-palmer-softwareengineerstudent/</p>
        </div>
        <div className={styles.summary}>
          <h1>Professional Summary</h1>
          <p>Dedicated Quality Engineer with quantifiable achievements in supporting product and engineering teams throughout the product life cycle. Expertise in support operations, bug identification, prioritization, and a blend of manual and automated testing techniques.</p>
        </div>
        <div className={styles.skills}>
          <h1>Technical Skills</h1>
          <div className={styles.list}>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    );
};


export default Resume;