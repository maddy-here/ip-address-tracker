import React, { useContext } from "react";

import styles from "./MainContent.module.css";

import Data from "./Data";
import context from "../../store/context";

const HEADINGS = ["ip address", "location", "time zone", "isp"];

const MainContent = () => {
  const ctx = useContext(context);

  const loadingMessage = (
    <p
      style={{
        fontSize: "20px",
        fontWeight: "600",
      }}
    >
      Loading...
    </p>
  );
  const errorMessage = (
    <p
      style={{
        fontSize: "20px",
        fontWeight: "600",
      }}
    >
      Please enter valid IP address
    </p>
  );
  if (ctx.isLoading) {
    return <div className={styles["main-content"]}>{loadingMessage}</div>;
  }
  if (ctx.error) {
    return <div className={styles["main-content"]}>{errorMessage}</div>;
  }

  return (
    <div className={styles["main-content"]}>
      {ctx.data.map((data, index) => {
        // console.log(Object.entries(data)[0][1]);
        return (
          <React.Fragment key={index}>
            <Data
              heading={HEADINGS[index]}
              mainContent={Object.entries(data)[0][1]}
            />
            <div className={styles["vertical-line"]}></div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default MainContent;
