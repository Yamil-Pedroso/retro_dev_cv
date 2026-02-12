import { HeaderContainer } from "./styles";

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <HeaderContainer className={className}>
      <h3>{children}</h3>
    </HeaderContainer>
  );
};

export default Header;
