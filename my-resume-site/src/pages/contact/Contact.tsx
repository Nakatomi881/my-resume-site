import React from "react";
import styles from './contact.module.css';

const Contact: React.FC = () => {
  return (
    <div className={styles.contactSection}>
      <h1 className={styles.heading}>Contact</h1>
      
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.name}>
            <p>Ryan Palmer</p>
          </div>
          <div className={styles.email}>
            <p>Ryandanpalmer@gmail.com</p>
          </div>
          <div className={styles.location}>
            <p>Utah</p>
          </div>
        </div>

        <div className={styles.right}>
          <form action="https://formspree.io/f/xovepana" method="POST">
            <div className={styles.yourName}>
              <label htmlFor="name">Your name</label>
              <input placeholder="John McClane" id="name" required type="text" />
            </div>
            <div>
              <label htmlFor="email">Your email</label>
              <input placeholder="Youremail@example.com" id="email" required type="text" />
            </div>
            <div>
              <label htmlFor="textarea">Your message</label>
              <textarea id="textarea" name="message" required placeholder="Type your message here" rows={7} />
            </div>
            <div>
              <input type="submit" id="button" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
