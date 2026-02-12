import Header from "../../common/header/Header";
import { AboutContainer, AboutMeContent } from "../styles";
import { fullContent } from "../../../data/data";

const AboutMe = () => {
  return (
    <AboutContainer>
      <div style={{ display: "flex" }}>
        <Header>About</Header>
      </div>
      <AboutMeContent>
        <p>{fullContent.overview}</p>
        <p>{fullContent.continueOverview}</p>
      </AboutMeContent>
    </AboutContainer>
  );
};

export default AboutMe;
