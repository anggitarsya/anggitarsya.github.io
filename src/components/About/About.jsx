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
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Sebagai seorang pengembang front-end, saya sangat antusias dalam
                menciptakan antarmuka pengguna yang intuitif dan menarik.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Desain Grafis</h3>
              <p>
                Dalam beberapa tahun terakhir, saya telah bekerja pada berbagai
                proyek yang mencakup desain logo, identitas merek, dan
                ilustrasi.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                Saya tertarik pada bagaimana elemen visual dapat mempengaruhi
                interaksi dan persepsi pengguna. Setiap proyek adalah kesempatan
                untuk mengeksplorasi kreativitas, sekaligus memecahkan masalah
                dengan solusi desain yang inovatif.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
