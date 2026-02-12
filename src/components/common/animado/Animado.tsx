import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export type AnimationType = "fade" | "slideUp" | "slideLeft" | "zoom";

interface AnimadoProps {
  children: React.ReactNode;
  animationType?: AnimationType;
  duration?: number;
  stopAnimation?: boolean;
}

const Animado = ({
  children,
  animationType = "slideUp",
  duration = 0.6,
  stopAnimation,
}: AnimadoProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  const [ isMobile, setIsMobile ] = React.useState(false);

  const variants = React.useMemo(
    () => ({
      fade: { opacity: 1, y: 0 },
      slideUp: { opacity: 1, y: 0 },
      slideLeft: { opacity: 1, x: 0 },
      zoom: { opacity: 1, scale: 1 },
    }),
    []
  );

  const initialStates = React.useMemo(
    () => ({
      fade: { opacity: 0 },
      slideUp: { opacity: 0, y: 50 },
      slideLeft: { opacity: 0, x: -50 },
      zoom: { opacity: 0, scale: 0.8 },
    }),
    []
  );

  useEffect(() => {
    if (inView) {
      controls.start({ ...variants[animationType], transition: { duration } });
    } else {
      controls.start(initialStates[animationType]);
    }
  }, [inView, controls, animationType, duration, initialStates, variants]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }
  , []);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={initialStates[animationType]}
    >
      {children}
    </motion.div>
  );
};

export default Animado;
