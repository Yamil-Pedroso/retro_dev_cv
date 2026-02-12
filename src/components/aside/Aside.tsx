import { useState, useEffect } from "react";
import {
  Container,
  AsideLeftWrapper,
  AsideCompLayoutLeft,
  AsideCompLayoutRight,
  ImageWrapper,
  InfoWrapper,
  StatusIconWrapper,
  UserInfo,
  BtnContactWrapper,
  ContactMeButton,
  //DownloadCVWrapper,
  AsideCompLayoutCenter,
  MenuIconWrapper,
  ExpandedBoxContent,
  CVLink,
  CVLinkWrapper,
} from "./styles";
import Layout from "../common/layout/Layout";
import { personalInfo } from "../../data/data";
import { TbWorld } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
import { BsMenuApp, BsMenuAppFill } from "react-icons/bs";
import images from "../../assets/index";
import { motion } from "framer-motion";
import { IoMdDownload } from "react-icons/io";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [responsive, setResponsive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(responsive);
  const handleResize = () => {
    if (window.innerWidth <= 1200) {
      setResponsive(true);
    } else {
      setResponsive(false);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Layout>
      <Container style={{}}>
        {/*<a href="/practice">link to practice</a>*/}
        <AsideLeftWrapper>
          <AsideCompLayoutLeft isClicked={isOpen}>
            <MenuIconWrapper>
              {isOpen ? (
                <BsMenuApp
                  className="menu__icon"
                  onClick={toggleMenu}
                  size={25}
                />
              ) : (
                <BsMenuAppFill
                  className="menu__icon"
                  onClick={toggleMenu}
                  size={25}
                />
              )}
            </MenuIconWrapper>
            <ImageWrapper>
              <img src={personalInfo.img} alt="profile" width={200} />
            </ImageWrapper>
            <>
              <UserInfo>
                <div className="user__name">
                  <span className="aside__name">Hi I'm</span>
                  <span>{personalInfo.name}</span>
                </div>
                <p className="aside__title">Full Stack Developer & Artist</p>

                <div className="status__header">
                  <StatusIconWrapper>
                    <TbPointFilled className="status_icon" />
                  </StatusIconWrapper>

                  <span>Available to work</span>
                </div>

                <div
                  className="location"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <FaMapMarkerAlt
                    style={{ color: "gray", fontSize: ".9rem" }}
                  />
                  <span>Zurich, Switzerland</span>

                  <div
                    style={{
                      opacity: hovered ? "1" : "0",
                      transition: "opacity 0.3s ease-in-out",
                    }}
                    className="location-img__wrapper"
                  >
                    <div className="location-img">
                      <img
                        src="https://images.unsplash.com/photo-1657137436880-e906b111b040?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="location"
                      />
                    </div>
                  </div>
                </div>
              </UserInfo>

              <AsideCompLayoutCenter>
                <p>{personalInfo.nationality} Cuban</p>
                <p>{personalInfo.residencePermit} C</p>
              </AsideCompLayoutCenter>
            </>
            {isOpen && (
              <ExpandedBoxContent>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <InfoWrapper>
                    <div>
                      <TbWorld />
                    </div>

                    <span>
                      <a
                        href="https://www.yampe.dev/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.yampe.dev
                      </a>
                    </span>
                  </InfoWrapper>

                  <InfoWrapper>
                    <div>
                      <IoPhonePortraitOutline />
                    </div>
                    <span>+41 79 532 65 19</span>
                  </InfoWrapper>

                  <InfoWrapper>
                    <div>
                      <MdOutlineEmail />
                    </div>
                    <a
                      href="mailto:yamilpedroso@gmail.com"
                      className="hover:underline"
                    >
                      yamilpedroso@gmail.com
                    </a>
                  </InfoWrapper>
                </motion.div>
                <div className="btn__contact">
                  <ContactMeButton
                    href="https://cal.com/yamil-pedroso/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={images.googleMeet} alt="google meet" />
                    <span>Book a meeting</span>
                  </ContactMeButton>
                </div>
              </ExpandedBoxContent>
            )}
          </AsideCompLayoutLeft>
        </AsideLeftWrapper>

        <div>
          <AsideCompLayoutRight>
            <InfoWrapper>
              <div>
                <TbWorld />
              </div>

              <span>
                <a
                  href="https://www.yampe.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.yampe.dev
                </a>
              </span>
            </InfoWrapper>

            <InfoWrapper>
              <div>
                <IoPhonePortraitOutline />
              </div>
              <span>+41 79 532 65 19</span>
            </InfoWrapper>

            <InfoWrapper>
              <div>
                <MdOutlineEmail />
              </div>
              <a
                href="mailto:yamilpedroso@gmail.com"
                className="hover:underline"
              >
                yamilpedroso@gmail.com
              </a>
            </InfoWrapper>

            <BtnContactWrapper>
              <ContactMeButton
                href="https://cal.com/yamil-pedroso/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={images.googleMeet} alt="google meet" />
                <span>Book a meeting</span>
              </ContactMeButton>
            </BtnContactWrapper>
          </AsideCompLayoutRight>
          <CVLinkWrapper>
            <CVLink href="/docs/CVs/Yamil_Pedroso_CV_2026_EN.pdf" download>
              <IoMdDownload size={20} style={{ marginRight: "2px" }} />
              EN
            </CVLink>
            <CVLink href="/docs/CVs/Yamil_Pedroso_CV_2026_DE.pdf" download>
              <IoMdDownload size={20} style={{ marginRight: "2px" }} />
              DE
            </CVLink>
          </CVLinkWrapper>
        </div>
      </Container>
    </Layout>
  );
};

export default Aside;
