import React, { useRef, useContext, useEffect } from "react";
import styles from "./SearchBar.module.css";

import { FaGreaterThan } from "react-icons/fa";

import context from "../../store/context";

const SearchBar = () => {
  const ipAddressInputRef = useRef();
  const ctx = useContext(context);

  const ipSearchHandler = (event) => {
    event.preventDefault();
    const ip = ipAddressInputRef.current.value;
    ctx.getData(ip);
    ipAddressInputRef.current.value = "";
  };

  useEffect(() => {
    ctx.getData("103.255.7.6");
  }, []);

  return (
    <form onSubmit={ipSearchHandler} className={styles["search-bar"]}>
      <input
        ref={ipAddressInputRef}
        className={styles.input}
        placeholder="Search for any IP address or domain"
        type="text"
      />
      <button className={styles["btn-submit"]} type="submit">
        <FaGreaterThan />
      </button>
    </form>
  );
};

export default SearchBar;
