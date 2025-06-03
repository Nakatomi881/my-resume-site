import React from "react";
import styles from './resume.module.css'

const Resume: React.FC = () => {
  return (
      <div className={styles.container}>
        <div className={styles.heading}>
          <header>Ryan Palmer</header>
          <p>Driving product quality improvements to enhance user experience and satisfaction.</p>
        </div> 
        
        <div className={styles.info}>
        <p>Sandy, Utah 84092</p>
        <p>Ryandanpalmer@gmail.com</p>
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
            <li><strong>Automation & Testing Tools:</strong> Playwright (TypeScript), Selenium (C#), Lisa (Service Virtualization)</li>
            <li><strong>Programming Languages:</strong>C#, TypeScript, Java</li>
            <li><strong>Continuous Integration/Continuous Deployment (CI/CD):</strong> Jenkins, CircleCI, Octopus, Azure DevOps</li>
            <li><strong>Bug Tracking & Project Management:</strong> Jira</li>
            <li><strong>Log Management & Analysis:</strong> Splunk</li>
            <li><strong>Database & Queries:</strong> SQL for database operations, data integration, and querying</li>
            <li><strong>Post-Release Testing:</strong> Manual and automated testing, defect reduction strategies</li>
            </ul>
          </div>
          <div className={styles.experience}>
            <h1>Experience</h1>
            <h2>Quality Engineer - <span>Progressive Leasing, Draper, Utah</span></h2>
            <p>September 2021 - March 2024</p>
            <ul>
              <li>Developed, maintained, and refactor automated tests using C#, Playwright with Typescript and Java, increasing test coverage by 20% and improving reliability. Proficient with the following CI/CD pipelines: Jenkins, CircleCI, and Octopus.</li>
              <li>Utilized Jira for bug tracking and project management, ensuring efficient workflow and resolution of issues</li>
              <li>Use Lisa for service virtualization, Splunk for log management and analysis, and Azure DevOps for continuous integration and deployment.</li>
              <li>Executed SQL database queries and manage data integrations, ensuring data integrity and performance.</li>
              <li>Spearhead post-release testing initiatives, conducting both manual and automated tests to guarantee product quality resulting in a 15% reduction in post-release defects.</li>
              <li>Collaborated closely with cross-functional teams to spearhead post-release testing initiatives, conducting both manual and automated tests to guarantee product quality.</li>
              <li>Communicated effectively with stakeholders to provide regular updates and insights on testing progress and outcomes.</li>
              <li>Problem-solved complex issues by identifying root causes and implementing effective solutions to improve product quality.</li>
            </ul>
            <h2>QA Engineer (SDET) - <span>Softwise, Lehi, Utah</span></h2>
            <p>January 2018 - September 2021</p>
            <ul>
              <li>Authored and maintained a suite of automated tests in C# using the selenium framework, achieving an 80% pass rate.</li>
              <li>Conducted SQL queries for database operations, contributing to seamless data integration processes.</li>
              <li>Served as a Product Trainer, educating fellow QE staff on product intricacies and best practices.</li>
              <li>Led the post-release testing phase, ensuring a robust and user-centric product experience.</li>
              <li>Collaborated closely with cross-functional teams to spearhead post-release testing initiatives, conducting both manual and automated tests to guarantee product quality.</li>
              <li>Communicated effectively with stakeholders to provide regular updates and insights on testing progress and outcomes.</li>
              <li>Problem-solved complex issues by identifying root causes and implementing effective solutions to improve product quality.</li>
            </ul>
            <h2>Online Support Supervisor - <span>Check City, Provo, Utah</span></h2>
            <p>January 2014 - January 2018</p>
            <ul>
            <li>Provided technical support by troubleshooting website issues, identifying bugs, and assisting customers.</li>
            <li>Actively involved in product support, learning, and aiding in the implementation of a new and existing offerings</li>
            <li>Processed loans with attention to compliance and customer satisfaction  </li>
            <li>Responsible for the training and development of new customer support staff, enhancing team collaboration and communication skills.</li>
            </ul>
          </div>
          <div className={styles.education}>
            <h1>Education</h1>
            <p>Western Governors University</p>
            <p>Bachelor of Science - Software Engineer</p>
            <p>Currently enrolled</p>
          </div>
        </div>
      </div>
    );
};


export default Resume;