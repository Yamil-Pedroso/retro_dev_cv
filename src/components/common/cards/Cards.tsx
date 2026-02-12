import { CardContainer } from "./styles";

interface CardProps {
   children?: React.ReactNode;
   className?: string;
}


const CardLayout: React.FC<CardProps> = ({ children, className }) => {
  return (
    <CardContainer className={className}>
        {children}
    </CardContainer>
  )
}

export default CardLayout
