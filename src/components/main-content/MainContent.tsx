import { MainContentContainer } from "./styles";
import AboutMe from "./about/AboutMe";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import TechSlider from "./slider/Slider";
import Projects from "./projects/Projects";
import Education from "./education/Education";
import Recommendations from "./recommendations/Recommendations";
import Languages from "./languages/Languages";
import Animado from "../common/animado/Animado";
import SocialLinks from "../social-links/SocialLinks";

const secciones: { componente: React.ComponentType; animacion: string }[] = [
  { componente: AboutMe, animacion: "fade" },
  { componente: Skills, animacion: "slideUp" },
  { componente: Experience, animacion: "slideLeft" },
  { componente: TechSlider, animacion: "zoom" },
  { componente: Projects, animacion: "fade" },
  { componente: Education, animacion: "slideLeft" },
  { componente: Recommendations, animacion: "slideUp" },
  { componente: Languages, animacion: "slideLeft" },
  { componente: SocialLinks, animacion: "zoom" },
];

const MainContent = () => {
  return (
    <MainContentContainer>
      {secciones.map(({ componente: Componente, animacion }, i) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Animado key={i} animationType={animacion as any} duration={0.6}>
          <Componente />
        </Animado>
      ))}
    </MainContentContainer>
  );
};

export default MainContent;
