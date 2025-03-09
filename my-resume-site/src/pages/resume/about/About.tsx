import React from 'react';
import styles from './about.module.css'

const About : React.FC = () => {
    return (
        <div className={styles.container}>
            <h2>About me</h2>
            <p>Hi, I'm Ryan Palmer, a passionate software engineer learning react and Vite...</p>

        </div>
    )
}

export default About;