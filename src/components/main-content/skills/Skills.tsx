import Header from "../../common/header/Header";
import SkillLevel from "./skill-level/SkillLevel";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <div style={{ display: "flex" }}>
        <Header>Skills</Header>
      </div>

      <SkillLevel />
    </div>
  );
};

export default Skills;
