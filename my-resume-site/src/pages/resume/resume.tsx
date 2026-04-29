import React from "react";
import styles from "./resume.module.css";

const Resume: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <header>Ryan Palmer</header>
        <p>
          <strong>Software Engineer</strong> | Ryandanpalmer@gmail.com | Provo, Utah | <a href="https://www.linkedin.com/in/ryan-palmer-softwareengineerstudent/">
            LinkedIn
          </a>
        </p>
      </div>
      <div className={styles.summary}>
        <h1>Professional Summary</h1>
        <p>
          Results-oriented Software Engineer with extensive experience in the
          full product life cycle, moving from a foundation in quality
          engineering to building robust full-stack applications. Proven track
          record of automating complex workflows and integrating third-party
          systems to improve user experience and operational efficiency.
        </p>
      </div>
      <div className={styles.skills}>
        <h1>Technical Skills</h1>
        <div className={styles.list}>
          <ul>
            <li>
              <strong>Automation & Testing Tools:</strong> Playwright
              (TypeScript), Selenium (C#), Lisa (Service Virtualization)
            </li>
            <li>
              <strong>Programming Languages:</strong>C#, TypeScript, Java
            </li>
            <li>
              <strong>
                Continuous Integration/Continuous Deployment (CI/CD):
              </strong>{" "}
              Jenkins, CircleCI, Octopus, Azure DevOps
            </li>
            <li>
              <strong>Bug Tracking & Project Management:</strong> Jira
            </li>
            <li>
              <strong>Log Management & Analysis:</strong> Splunk
            </li>
            <li>
              <strong>Database & Queries:</strong> SQL for database operations,
              data integration, and querying
            </li>
            <li>
              <strong>Post-Release Testing:</strong> Manual and automated
              testing, defect reduction strategies
            </li>
          </ul>
        </div>
        <div className={styles.experience}>
          <h1>Experience</h1>
          <h2>
            Palmer Software Consulting | <span>Intern</span>
          </h2>
          <p>October 2025 - Current</p>
          <ul>
            <li>
              Full Stack Development: Developed and maintained responsive web applications using the Angular framework, focusing on modular component design.
            </li>
            <li>
              System Integration: Engineered a custom API integration between a proprietary work order application and HighLevel, automating data synchronization.
            </li>
            <li>
              Workflow Automation: Built automation scripts to trigger personalized customer reminder messages based on appointment scheduling, reducing manual overhead.
            </li>
            <li>
              Quality Assurance: Leveraged Playwright to create end-to-end test suites, ensuring the reliability of new feature deployments.
            </li>
          </ul>
          <h2>
           Progressive Leasing | <span>Draper, UT Quality Engineer</span>
          </h2>
          <p>September 2021 - March 2024</p>
          <ul>
            <li>
              Developed and refactored automated tests using C# and Playwright, increasing test coverage by 20%
            </li>
            <li>
              Managed data integrations and executed SQL queries to ensure data integrity and performance.
            </li>
            <li>
              Led post-release testing initiatives, resulting in a 15% reduction in post-release defects.
            </li>
          </ul>
          <h2>
            Softwise | <span> Lehi, UT QA Engineer (SDET) </span>
          </h2>
          <p>January 2018 - September 2021</p>
          <ul>
            <li>
              Authored a suite of automated tests in C# using Selenium, achieving an 80% pass rate.
            </li>
            <li>
              Collaborated with cross-functional teams to identify root causes of complex issues and implement quality improvements
            </li>
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
