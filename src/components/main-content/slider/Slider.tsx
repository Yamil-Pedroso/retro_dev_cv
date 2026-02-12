import { useState } from "react";
import Header from "../../common/header/Header";
import {
  SliderContainer,
  SliderWrapper,
  SliderTrack,
  TechBox,
} from "../styles";
import images from "../../../assets";

const techs = [
  images.javascript,
  images.react,
  images.typescript,
  images.python,
  images.nodejs,
  images.ruby,
  images.cShatp,
  images.html,
  images.css,
  images.mongodb,
  images.docker,
  images.git,
  images.github,
];

const TechSlider = () => {
  return (
    <SliderContainer>
      <div style={{ display: "flex" }}>
        <Header>Tech Stack</Header>
      </div>
      <SliderWrapper>
        <SliderTrack>
          {[...techs, ...techs].map((tech, index) => (
            <TechBox key={index}>
              <img src={tech} alt={`Tech ${index}`} />
            </TechBox>
          ))}
        </SliderTrack>
      </SliderWrapper>
    </SliderContainer>
  );
};

export default TechSlider;
