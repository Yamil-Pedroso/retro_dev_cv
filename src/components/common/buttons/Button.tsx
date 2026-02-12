import { ButtonContainer } from "./styles";

interface ButtonsProps {
   children?: React.ReactNode;
   className?: string;
   onMouseEnter: () => void
   onMouseLeave: () => void
}


const Button: React.FC<ButtonsProps> = ({ children, className, onMouseEnter, onMouseLeave }) => {
  return (
    <ButtonContainer className={className}
       onMouseEnter={onMouseEnter}
       onMouseLeave={onMouseLeave}
    >
        {children}
    </ButtonContainer>
  )
}

export default Button
