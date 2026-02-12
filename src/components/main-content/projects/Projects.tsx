import { useState, useEffect } from "react";
import Header from "../../common/header/Header";
import {
  ProjectContainer,
  ProjectCardWrapper,
  ImageWrapper,
  ContentCard,
  ProjectCardContainer,
} from "../styles";
import { fullContent } from "../../../data/data";
import CardLayout from "../../common/cards/Cards";
import Button from "../../common/buttons/Button";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const LIMIT_VISIBLE_CARDS = 2;
const LIMIT_VISIBLE_CARDS_MOBILE = 3;

const Projects = () => {
  const projects = fullContent.projects ?? [];
  const [startIdx, setStartIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }
  , []);


  const next = () => {
    if (startIdx + LIMIT_VISIBLE_CARDS < projects?.length) {
      if (isMobile) {
        setStartIdx(startIdx + LIMIT_VISIBLE_CARDS_MOBILE);
      }
      if (!isMobile) {
        setStartIdx(startIdx + LIMIT_VISIBLE_CARDS);
      }
    }
  };

  const back = () => {
    if (startIdx - LIMIT_VISIBLE_CARDS >= 0) {
      if (isMobile) {
        setStartIdx(startIdx - LIMIT_VISIBLE_CARDS_MOBILE);
      }
      if (!isMobile) {
        setStartIdx(startIdx - LIMIT_VISIBLE_CARDS);
      }
    }
  };

  const visiblesCards = projects.slice(
    startIdx,
    startIdx + (isMobile ? LIMIT_VISIBLE_CARDS_MOBILE : LIMIT_VISIBLE_CARDS)
  );

  const conditionL = startIdx === 0;
  const conditionR = (isMobile ? startIdx + LIMIT_VISIBLE_CARDS_MOBILE >= projects.length : startIdx + LIMIT_VISIBLE_CARDS >= projects.length);

  return (
    <ProjectContainer>
      <div style={{ display: "flex" }}>
        <Header>Projects</Header>
      </div>

      <CardLayout className="card-proj__layout">
        <HiChevronLeft
          style={{
            background: conditionL ? "gray" : "black",
            cursor: conditionL ? "not-allowed" : "",
            display: conditionL ? "none" : "block",
          }}
          className="arrow-left-icon"
          onClick={back}
        />
        <AnimatePresence mode="wait">
          <ProjectCardContainer
            as={motion.div}
             key={startIdx}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
             transition={{
              duration: 0.6,
              ease: "easeInOut"
            }}
          >
            {visiblesCards.map((proj, idx) => (
              <ProjectCardWrapper key={idx}>
                <ImageWrapper>
                  <img src={proj.img} alt="proj-img" />
                </ImageWrapper>
                <ContentCard>
                  <h2>{proj.title}</h2>
                  <p>{proj.description}</p>

                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    <Button className="proj-btn"
                      onMouseEnter={() => {}}
                      onMouseLeave={() => {}}

                    >
                      <p>Click to view</p>
                      <span>
                        {proj.icon && (
                          <proj.icon className="link-icon" size={20} />
                        )}
                      </span>
                    </Button>
                  </a>
                </ContentCard>
              </ProjectCardWrapper>
            ))}
          </ProjectCardContainer>
        </AnimatePresence>

        <HiChevronRight
          style={{
            background: conditionR ? "gray" : "black",
            cursor: conditionR ? "not-allowed" : "",
            display: conditionR ? "none" : "block",
          }}
          className="arrow-right-icon"
          onClick={next}
        />
      </CardLayout>
    </ProjectContainer>
  );
};

export default Projects;
