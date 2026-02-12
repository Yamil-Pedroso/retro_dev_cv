import { useState } from "react";
import Header from "../../common/header/Header";
import styles from "./Languages.module.css";
import { fullContent } from "../../../data/data";

const Languages = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div style={{ display: "flex" }}>
        <Header>Languages</Header>
        <div className={styles.switchContainer}>
          {click ? (
            <div className={styles.arrow} onClick={handleClick}>
              Show
            </div>
          ) : (
            <div className={styles.arrow} onClick={handleClick}>
              Store
            </div>
          )}
        </div>
      </div>

      <div className={styles.langWrapper}>
        {fullContent.languages?.map((language, index) => (
          <div className={styles.languageBox} key={index}>
            <div
              className={`${styles.languageItem} ${
                click ? styles.languagePosition : ""
              }`}
            >
              <div
                className={`${styles.languageLevel} ${
                  click ? styles.inactive : styles.active
                }`}
              >
                <p>{language.level}</p>
              </div>
              <p className={styles.languageName}>{language.name}</p>
              <div
                className={`${styles.behindBoxBase} ${
                  click ? styles.behindBoxOpen : styles.behindBoxClose
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
