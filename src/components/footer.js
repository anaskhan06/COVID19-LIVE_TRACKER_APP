import React from 'react';
import * as Icon from 'react-feather';
import styles from '../App.module.css';


export function Footer(props) {
  return (
    <footer className={styles.main}>
        <div className={styles.footer}>
      <h5 >We stand with everyone fighting on the frontlines</h5>
      </div>
      <div className="link">
        <a
          href="https://github.com/covid19india"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>
      <div className={styles.github}>
      <a
        href="https://github.com/covid19india/covid19india-react"
        className="button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.GitHub />
        <span>Open Sourced on GitHub</span>
      </a>
      </div>
      <div className={styles.Linkedin}>
      <a
        href="https://www.linkedin.com/in/mohdanas06"
        target="_blank"
        rel="noopener noreferrer"
        className="button twitter"
        style={{justifyContent: 'center'}}
      >
        <Icon.Linkedin />
        <span>My LinkedIn Profile</span>
      </a>
      </div>
      
    </footer>
  );
}
