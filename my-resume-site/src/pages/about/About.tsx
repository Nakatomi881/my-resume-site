import React from 'react';
import styles from './about.module.css'

const About : React.FC = () => {
    return (
        <div className={styles.container}>
            
            <h1 className={styles.title}>
                <span>I'm Ryan Palmer</span>
            </h1>
            
            <div className={styles.aboutme}>
            <img src='/family.jpg' alt='Ryan family' className={styles.familyimage}></img>
            <div className={styles.textblock}>
            <h2>About me</h2>
            <p>I have been a Quality Engineer for over 5 years. Now I am back in school to obtain my Undergraduate as a software engineer.
            I have a family and two small dogs.  
            I enjoy movies, hiking, music, and jiu jitsu.
            </p>
            </div>
            </div>


        </div>
    )
}

export default About;