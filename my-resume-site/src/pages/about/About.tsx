import React from 'react';
import styles from './about.module.css'

const About : React.FC = () => {
    return (
        <div className={styles.container}>
            
            <h1 className={styles.title}>
                <span>I'm Ryan Palmer</span>
            </h1>
            
            <div className={styles.aboutme}>
            <img src='/family.jpg' alt='Ryan family' height={500} width={750} className={styles.familyimage}></img>
            <div className={styles.textblock}>
            <h2>About me</h2>
            <p>I have been a Quality Engineer for over 5 years and have a strong passion for software testing, debugging, and building reliable systems. Now I am back in school pursuing my undergraduate degree in Computer Science with the goal of becoming a software engineer. I'm always looking for opportunities to grow and explore new technologies—recently diving into React, Angular, and TypeScript.</p>   
            <p>I’m a proud family man with a wife, kids, and two small dogs. I enjoy spending quality time with them and value the balance between work and personal life. Outside of tech, I love movies, board games, hiking, listening to music, and training in jiu jitsu. I’m also building my personal resume website to showcase projects and skills, as I continue developing both professionally and personally.</p>
            </div>
            </div>


        </div>
    )
}

export default About;