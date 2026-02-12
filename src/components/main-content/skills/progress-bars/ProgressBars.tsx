import { useState } from "react";
import Button from "../../../common/buttons/Button";
import { fullContent } from "../../../../data/data";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../Skills.module.css";

type Skill = {
  name: string;
  percent?: number;
  parts: string[];
};

const ProgressBars = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const initialSkills: Skill[] = (fullContent.skills ?? []).map((skill) => ({
    name: skill.name,
    percent: skill.percent,
    parts: [skill.name],
  }));
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dropEffectIndex, setDropEffectIndex] = useState<number | null>(null);

  console.log("Hovered Item: ", hoveredItem);

  //initialSkills.map((skill, idx) => {
  //  console.log("Index: ", idx, "Skill: ", skill.name);
  //});

  const mouseEnter = (index: number) => setHoveredItem(index);
  const mouseLeave = () => setHoveredItem(null);
  const handleDragStart = (index: number) => setDraggedIndex(index);

  const handleDrop = (targetIndex: number) => {
    if (draggedIndex === null || draggedIndex === targetIndex) return;

    const updatedSkills = [...skills];
    const draggedSkill = updatedSkills[draggedIndex];
    const targetSkill = updatedSkills[targetIndex];

    const newSkill: Skill = {
      name: `${draggedSkill.name} + ${targetSkill.name}`,
      //percent: `${draggedSkill.percent} + ${targetSkill.percent}`,
      parts: [...draggedSkill.parts, ...targetSkill.parts],
    };

    const newSkills = updatedSkills.filter(
      (_, i) => i !== draggedIndex && i !== targetIndex
    );
    newSkills.push(newSkill);

    setSkills(newSkills);
    setDropEffectIndex(newSkills.length - 1);

    setTimeout(() => setDropEffectIndex(null), 800);
    setDraggedIndex(null);
  };

  const handleClick = (index: number) => {
    const skill = skills[index];
    if (skill.parts.length <= 1) return;

    const separatedSkills: Skill[] = skill.parts.map((part) => ({
      name: part,
      percent: skill.percent,
      parts: [part],
    }));

    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1, ...separatedSkills);

    setSkills(updatedSkills);
  };

  const columns = [[], [], []] as Skill[][];

  skills.forEach((skill, index) => {
    columns[index % 3].push(skill);
  });

  return (
    <div className={styles.skillsWrapper}>
      {columns.map((columnSkills, colIndex) => (
        <div key={colIndex} className={styles.column}>
          <AnimatePresence>
            {columnSkills.map((skill, indexInColumn) => {
              const globalIndex = colIndex + indexInColumn * 3;

              return (
                <motion.div
                  key={globalIndex}
                  layout
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{
                    opacity: 1,
                    scale: dropEffectIndex === globalIndex ? [1, 1.2, 1] : 1,
                    boxShadow:
                      dropEffectIndex === globalIndex
                        ? [
                            "0 0 0 rgba(0,0,0,0)",
                            "0 0 15px rgba(0,0,0,0.3)",
                            "0 0 0 rgba(0,0,0,0)",
                          ]
                        : "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  draggable
                  onDragStart={() => handleDragStart(globalIndex)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => handleDrop(globalIndex)}
                  onClick={() => handleClick(globalIndex)}
                  style={{
                    margin: ".5rem 0",
                    cursor: skill.parts.length > 1 ? "pointer" : "grab",
                    userSelect: "none",
                  }}
                >
                  <div
                    style={{
                      width: skill?.percent + "%" || "100%",
                    }}
                    className={styles.percentBar}
                  ></div>
                  <Button
                    className={styles.skillBox}
                    onMouseEnter={() => mouseEnter(globalIndex)}
                    onMouseLeave={() => mouseLeave()}
                  >
                    <h3>{skill.name}</h3>
                  </Button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default ProgressBars;
