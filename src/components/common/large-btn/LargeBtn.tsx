import { LargeButtonContainer } from "./styles";
import { motion } from "framer-motion";

interface LargeBtnProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  isOpen?: boolean;
}

const Button: React.FC<LargeBtnProps> = ({
  children,
  className,
  style,
  isOpen,
}) => {

  return (
    <LargeButtonContainer
      as={motion.div}
      animate={{
        y: isOpen ? 5 : 0,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 15,
        },
      }}
      style={style}
      className={className}
    >
      {children}
    </LargeButtonContainer>
  );
};

export default Button;
