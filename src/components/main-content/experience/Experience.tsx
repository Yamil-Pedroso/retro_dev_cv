import { useState } from "react";
import { fullContent } from "../../../data/data";
import {
  ExperienceContainer,
  ExperienceWrapper,
  FirmaLogoWrapper,
  Content,
  TextContent,
  DateWrapper,
  Icons,
} from "../styles";
import LargeBtn from "../../common/large-btn/LargeBtn";
import Header from "../../common/header/Header";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import ExpandingBox from "../../common/expanding-box/ExpandingBox";
import { motion } from "framer-motion";

//backgroundColor: "#fff",
//zIndex: 999,
//borderRadius: "0 0 0.5rem 0.5rem",
//borderTop: "1px solid rgba(0,0,0,0.12)",
//width: "500px",
//marginTop: "0.3rem",
//padding: "0.875rem", color: "#888888"

const imgCustomSize = [
  {
    logo: fullContent.experience && fullContent.experience[0]?.img,
    width: "60px",
    height: "20px",
    dashedColor: "blue",
    backgroundColor: "rgba(0, 0, 255, 0.2)",
  },
  {
    logo: fullContent.experience && fullContent.experience[1]?.img,
    width: "50px",
    height: "50px",
    dashedColor: "violet",
    backgroundColor: "rgba(238, 130, 238, 0.2)",
  },
  {
    logo: fullContent.experience && fullContent.experience[2]?.img,
    width: "55px",
    height: "50px",
    dashedColor: "green",
    backgroundColor: "rgba(0, 128, 0, 0.2)",
  },
  {
    logo: fullContent.experience && fullContent.experience[3]?.img,
    width: "50px",
    height: "50px",
    dashedColor: "lightblue",
    backgroundColor: "rgba(173, 216, 230, 0.2)",
  },
  {
    logo: fullContent.experience && fullContent.experience[4]?.img,
    width: "50px",
    height: "50px",
    dashedColor: "pink",
    backgroundColor: "rgba(255, 192, 203, 0.2)",
  },
  {
    logo: fullContent.experience && fullContent.experience[5]?.img,
    width: "60px",
    height: "60px",
    dashedColor: "orange",
    backgroundColor: "rgba(255, 165, 0, 0.2)",
  },
];

const Experience = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };
  return (
    <ExperienceContainer>
      <div style={{ display: "flex" }}>
        <Header>Experience</Header>
      </div>

      <ExperienceWrapper>
        {fullContent.experience?.map((item, index) => (
          <div key={index} style={{ position: "relative" }}>
            <LargeBtn
              isOpen={isOpen === index}
              style={{
                borderRadius: isOpen === index ? "0.5rem 0.5rem 0 0" : "0.5rem",
                position: "relative",
              }}
              className="exp-box"
            >
              <FirmaLogoWrapper
                as={motion.div}
                animate={{
                  y: isOpen === index ? -15 : 0,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  },
                }}
                backgroundColor={imgCustomSize[index].backgroundColor}
              >
                {
                  <img
                    src={imgCustomSize[index]?.logo}
                    width={imgCustomSize[index]?.width}
                    height={imgCustomSize[index]?.height}
                    alt="Logo"
                  />
                }
              </FirmaLogoWrapper>

              <Content>
                <TextContent>
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                </TextContent>
                <DateWrapper>
                  <p>{item.date}</p>
                  <Icons onClick={() => handleToggle(index)}>
                    {isOpen === index ? (
                      <IoCloseSharp size={14} className="close-icon" />
                    ) : (
                      <IoIosArrowDown size={14} className="arrow-icon" />
                    )}
                  </Icons>
                </DateWrapper>
              </Content>
            </LargeBtn>
            <ExpandingBox
              isOpen={isOpen === index}
              height="auto"
              backgroundColor="#fff"
              borderRadius="0 0 0.5rem 0.5rem"
              borderTop="1px solid rgba(0,0,0,0.12)"
              marginTop="0.3rem"
              color="#888888"
              className="exp-box-content"
            >
              <p style={{ lineHeight: "1.3rem", padding:"1rem" }}>{item.description}</p>
            </ExpandingBox>
          </div>
        ))}
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};

export default Experience;
