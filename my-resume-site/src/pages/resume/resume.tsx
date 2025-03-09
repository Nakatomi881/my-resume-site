import React from "react";
import styles from './resume.module.css'

const Resume: React.FC = () => {
  return (
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Ryan Palmer</h1>
          <p>Helping companies improve product quality for their users</p>
        </div>
      </div>
    );
};


export default Resume;