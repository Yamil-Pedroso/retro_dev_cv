import { useState } from "react";
import Header from "../../common/header/Header";
import styles from "./Skills.module.css";
import { fullContent } from "../../../data/data";
import { AnimatePresence, motion } from "framer-motion";
import Spheres from "./spheres/Spheres";

type Skill = {
  name: string;
  percent?: number;
};

const SkillsTwo = () => {
  const initialSkills: Skill[] = (fullContent.skills ?? []).map((skill) => ({
    name: skill.name,
    percent: skill.percent,
  }));

  const [skills, setSkills] = useState<Skill[]>(initialSkills);

  const columns = [[], []] as Skill[][];

  skills.forEach((skill, index) => {
    columns[index % 2].push(skill);
  });

  return (
    <div className={styles.skillsContainer}>
      <div style={{ display: "flex" }}>
        <Header>Skills</Header>
      </div>

      {/*<div className={styles.skillsWrapper}>
        {columns.map((columnSkills, colIndex) => (
          <div key={colIndex} className={styles.column}>
            <AnimatePresence>
              {columnSkills.map((skill, indexInCol) => {
                const globalIndex = colIndex + indexInCol * 2;

                return (
                  <motion.div
                    key={globalIndex}
                    className={styles.contentWrapper}
                  >
                    <h3>[ {skill.name} ]</h3>
                    <span>-</span>
                    <h3> ({skill.percent}%)</h3>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ))}
      </div>*/}
      {/*<Spheres />*/}
    </div>
  );
};

export default SkillsTwo;
