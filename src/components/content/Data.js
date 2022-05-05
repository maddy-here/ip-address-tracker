import React from "react";

import styles from "./Data.module.css";

const Data = (props) => {
  return (
    <section className={styles["data-section"]}>
      <p className={styles.heading}>{props.heading}</p>
      <h3 className={styles["main-content"]}>{props.mainContent}</h3>
    </section>
  );
};

export default Data;
