import React from "react";
import styles from "./Header.module.css";

import SearchBar from "../searchBar/SearchBar";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>IP Address Tracker</h1>
      <SearchBar />
    </div>
  );
};

export default Header;
