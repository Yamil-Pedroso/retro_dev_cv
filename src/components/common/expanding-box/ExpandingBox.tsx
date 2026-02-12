import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

interface ExpandingBoxProps {
  isOpen: boolean;
  children: React.ReactNode;
  top?: string;
  left?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  borderTop?: string;
  zIndex?: number;
  marginTop?: string;
  padding?: string;
  color?: string;
  boxShadow?: string;
  className?: string;
}

const ExpandingBox = ({
  isOpen,
  children,
  top,
  left,
  width,
  height,
  backgroundColor,
  borderRadius,
  borderTop,
  zIndex,
  marginTop,
  padding,
  color,
  boxShadow,
  className,
}: ExpandingBoxProps) => {
  const controls = useAnimation();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;

      if (isOpen) {
        controls.start({ height: contentHeight, opacity: 1 });
      } else {
        controls.start({ height: 0, opacity: 0 });
      }
    }
  }, [isOpen, controls]);

  return (
    <motion.div
      animate={controls}
      initial={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{
        overflow: "hidden",
        top,
        left,
        backgroundColor,
        zIndex,
        borderRadius,
        borderTop,
        width,
        height,
        padding,
        color,
        marginTop,
        boxShadow,
      }}
      className={className}
    >
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};

export default ExpandingBox;
