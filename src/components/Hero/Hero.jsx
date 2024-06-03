import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Halo! Aku Baiq Anggita Arsya Rahmatin</h1>
        <p className={styles.description}>
          Aku mahasiswi dari Universitas Mataram jurusan Teknik Informatika dan sedang tertarik dalam front-end. Untuk informasi lebih lanjut dapat melakukan explore pada web ini ya!
        </p>
        <a href="baiqanggitaarsya@gmail.com" className={styles.contactBtn}>
          Kontak  Saya
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
