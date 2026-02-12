import { useState } from "react";
import { EducationContainer, SchoolLogoWrapper } from "../styles";
import Header from "../../common/header/Header";
import {
  EducationWrapper,
  Content,
  TextContent,
  DateWrapper,
  Icons,
} from "../styles";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import LargeBtn from "../../common/large-btn/LargeBtn";
import { fullContent } from "../../../data/data";
import ExpandingBox from "../../common/expanding-box/ExpandingBox";

const imgCustomSize = [
  {
    logo: fullContent.education && fullContent.education[0]?.img,
    width: "60px",
    height: "60px",
    dashedColor: "blue",
  },
  {
    logo: fullContent.education && fullContent.education[1]?.img,
    width: "40px",
    height: "40px",
    dashedColor: "violet",
  },
  {
    logo: fullContent.education && fullContent.education[2]?.img,
    width: "55px",
    height: "50px",
    dashedColor: "green",
  },
  {
    logo: fullContent.education && fullContent.education[3]?.img,
    width: "50px",
    height: "50px",
    dashedColor: "black",
  },
  {
    logo: fullContent.education && fullContent.education[4]?.img,
    width: "50px",
    height: "50px",
    dashedColor: "pink",
  },
  {
    logo: fullContent.education && fullContent.education[5]?.img,
    width: "45px",
    height: "45px",
    dashedColor: "orange",
  },
  {
    logo: fullContent.education && fullContent.education[6]?.img,
    width: "45px",
    height: "50px",
    dashedColor: "red",
  },
];

const Education = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };
  return (
    <EducationContainer>
      <div style={{ display: "flex" }}>
        <Header>Education</Header>
      </div>

      <EducationWrapper>
        {fullContent.education?.map((item, index) => (
          <div key={index} style={{ position: "relative" }}>
            <LargeBtn
              className="edu-box"
              isOpen={isOpen === index}
              style={{
                borderRadius: isOpen === index ? "0.5rem 0.5rem 0 0" : "0.5rem",
                position: "relative",
              }}
            >
              <SchoolLogoWrapper>
                {
                  <img
                    src={imgCustomSize[index]?.logo}
                    width={imgCustomSize[index]?.width}
                    height={imgCustomSize[index]?.height}
                    alt="Logo"
                  />
                }
              </SchoolLogoWrapper>

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
              className="edu-box-content"
            >
              <p className="edu-text" style={{ lineHeight: "1.3rem", padding: "1rem" }}>{item.description}</p>
            </ExpandingBox>
          </div>
        ))}
      </EducationWrapper>
    </EducationContainer>
  );
};

export default Education;
