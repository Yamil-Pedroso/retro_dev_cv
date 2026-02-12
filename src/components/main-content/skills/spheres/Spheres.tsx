import styles from "./Sphere.module.css";

interface SpheresProps {
  size?: number;
  color?: string;
}

const Spheres = ({ size = 80, color = "#00bcd4" }: SpheresProps) => {
  return (
    <div
      className={styles.sphere}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, white 10%, ${color} 80%)`,
      }}
    ></div>
  );
};

export default Spheres;
