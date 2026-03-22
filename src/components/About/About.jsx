import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developement</h3>
              <p>
                I create responsive and user-friendly interfaces using HTML, CSS, JavaScript, and modern frameworks like React and Bootstrap.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developement</h3>
              <p>
                I have experience developing scalable backend systems and REST APIs using Django, with strong knowledge of databases like MySQL and SqlLite.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Development</h3>
              <p>
                I build end-to-end web applications using Python, Django, and React, focusing on clean design, performance, and real-world functionality.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
