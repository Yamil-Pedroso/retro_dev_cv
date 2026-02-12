import { ContainerLayout } from "./styles"

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ContainerLayout>
        {children}
    </ContainerLayout>
  )
}

export default Layout
