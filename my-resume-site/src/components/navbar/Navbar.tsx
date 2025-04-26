import React from "react";
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.links}>
                <ul>
                    <li><Link to="/" className={styles.link}>Resume</Link></li>
                    <li><Link to="/projects" className={styles.link}>Projects</Link></li>
                    <li><Link to="/contact" className={styles.link}>Contact</Link></li>
                    <li><Link to="/about" className={styles.link}>About</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
