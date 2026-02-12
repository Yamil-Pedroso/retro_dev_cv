import { FaCircle } from "react-icons/fa";
import { FaCircleHalfStroke } from "react-icons/fa6";
import styles from "../Skills.module.css";

interface SkillsLevelProps {
  name?: string;
  percent?: number;
}

interface SKillsByCategory {
  Frontend: SkillsLevelProps[];
  Backend: SkillsLevelProps[];
  Databases: SkillsLevelProps[];
  Design: SkillsLevelProps[];
  DevOps: SkillsLevelProps[];
  Architecture: SkillsLevelProps[];
}

const iconCounts: Record<string, number> = {
  Frontend: 4.5,
  Backend: 3.5,
  Databases: 3,
  Design: 4.5,
  DevOps: 3.4,
  Architecture: 3,
};

const techObj: SKillsByCategory = {
  Frontend: [
    { name: "React", percent: 90 },
    { name: "Angular", percent: 75 },
    { name: "TypeScript", percent: 85 },
    { name: "JavaScript", percent: 90 },
    { name: "HTML", percent: 95 },
    { name: "CSS", percent: 90 },
    { name: "Tailwind CSS", percent: 85 },
    { name: "Three.js", percent: 80 },
    { name: "Next.js", percent: 80 },
  ],
  Backend: [
    { name: "Node.js", percent: 90 },
    { name: "Django", percent: 80 },
    { name: "C#", percent: 75 },
    { name: "Python", percent: 80 },
    { name: "Ruby", percent: 75 },
    { name: "Rest API", percent: 85 },
  ],
  Databases: [
    { name: "MySQL", percent: 80 },
    { name: "NoSQL", percent: 85 },
  ],
  Design: [
    { name: "Figma", percent: 90 },
    { name: "Photoshop", percent: 95 },
    { name: "Illustrator", percent: 90 },
    { name: "Digital Art", percent: 90 },
  ],
  DevOps: [
    { name: "Docker", percent: 80 },
    { name: "Git", percent: 90 },
    { name: "GitHub", percent: 90 },
    { name: "Gitlab", percent: 90 },
    { name: "Netlify", percent: 90 },
    { name: "Vercel", percent: 90 },
  ],
  Architecture: [{ name: "Design Pattern", percent: 80 }],
};

const categories = Object.entries(techObj) as [
  keyof SKillsByCategory,
  SkillsLevelProps[],
][];

const rows: Array<Array<{ category: string; items: SkillsLevelProps[] }>> = [
  [],
  [],
];
categories.forEach(([category, items], idx) => {
  const rowIdx = idx < 3 ? 0 : 1;
  rows[rowIdx].push({ category, items });
});

const SkillLevel = () => {
  return (
    <div className={styles.skillsLevelContainer}>
      {categories.map(([category, items]) => (
        <div key={category} className={styles.column}>
          <div className={styles.category}>
            <div className={styles.iconGroup}>
              {Array.from({
                length: Math.floor(iconCounts[category] || 1),
              }).map((_, idx) => (
                <FaCircle key={idx} className={styles.iconPlus} />
              ))}
              {iconCounts[category] % 1 !== 0 && (
                <FaCircleHalfStroke className={styles.iconPlus} />
              )}
            </div>
            <h3>{category}</h3>
            {items.map((tech, j) => (
              <p key={j}>{tech.name}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillLevel;
