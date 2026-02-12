import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Skill = {
  id: number;
  name: string;
  parts: string[];
};

const initialSkills: Skill[] = [
  { id: 1, name: "React", parts: ["React"] },
  { id: 2, name: "CSS", parts: ["CSS"] },
  { id: 3, name: "Node", parts: ["Node"] },
];

const SkillsDragFusion = () => {
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [draggedSkill, setDraggedSkill] = useState<Skill | null>(null);
  const [dropEffectId, setDropEffectId] = useState<number | null>(null);

  const handleDragStart = (skill: Skill) => {
    setDraggedSkill(skill);
  };

  const handleDrop = (targetSkill: Skill) => {
    if (!draggedSkill || draggedSkill.id === targetSkill.id) return;

    const newSkill: Skill = {
      id: Date.now(),
      name: `${draggedSkill.name} + ${targetSkill.name}`,
      parts: [...draggedSkill.parts, ...targetSkill.parts],
    };

    const updatedSkills = skills.filter(
      (s) => s.id !== draggedSkill.id && s.id !== targetSkill.id
    );
    updatedSkills.push(newSkill);

    setSkills(updatedSkills);
    setDraggedSkill(null);
    setDropEffectId(newSkill.id);
    setTimeout(() => setDropEffectId(null), 800);
  };

  const handleClick = (skill: Skill) => {
    if (skill.parts.length <= 1) return; // no hacer nada si es un item individual

    // Separa los elementos
    const separatedSkills: Skill[] = skill.parts.map((part) => ({
      id: Date.now() + Math.random(), // id único
      name: part,
      parts: [part],
    }));

    const updatedSkills = skills.filter((s) => s.id !== skill.id);
    setSkills([...updatedSkills, ...separatedSkills]);
  };

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <AnimatePresence>
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            layout
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: 1,
              scale: dropEffectId === skill.id ? [1, 1.3, 1] : 1,
              boxShadow: dropEffectId === skill.id
                ? ["0 0 0 rgba(0,0,0,0)", "0 0 15px rgba(0,0,0,0.2)", "0 0 0 rgba(0,0,0,0)"]
                : "0 2px 5px rgba(0,0,0,0.1)",
            }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            draggable
            onDragStart={() => handleDragStart(skill)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(skill)}
            onClick={() => handleClick(skill)}
            style={{
              width: "8rem",
              height: "4rem",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              color: "#333",
              cursor: skill.parts.length > 1 ? "pointer" : "grab",
              userSelect: "none",
              textAlign: "center",
            }}
          >
            {skill.name}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SkillsDragFusion;
