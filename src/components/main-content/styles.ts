import styled, { keyframes } from "styled-components";

const marginTopContainer = "2.5rem";
const marginTop = "2rem";

interface Props {
  width?: string;
  height?: string;
  dashedColor?: string;
  backgroundColor?: string;
}

interface Props {
  pause?: boolean;
}

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 500px;

  @media (max-width: 1200px) {
    margin: 18rem auto 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 0.7rem;
  }
`;

// About
export const AboutContainer = styled.div`
  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 768px) {
  }
`;

export const AboutMeContent = styled.div`
  margin-top: ${marginTop};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1200px) {
    width: 100%;
  }

  p {
    text-align: left;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #888888;
    line-height: 1.6rem;

    @media (max-width: 1200px) {
    }
  }
`;

// Experience
export const ExperienceContainer = styled.div`
  margin-top: ${marginTopContainer};

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const ExperienceWrapper = styled.div<Props>`
  margin-top: ${marginTop};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .exp-box {
    display: flex;
    width: 31.25rem;
    position: relative;
    transition: max-height 0.3s ease-in-out;

    @media (max-width: 1200px) {
      width: 100%;
    }

    @media (max-width: 768px) {
    }
  }

  .exp-box-content {
    @media (max-width: 1200px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      p {
      }
    }
  }
`;

export const FirmaLogoWrapper = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.8rem;
  //border: 1px dashed ${(props) => props.dashedColor || "#888888"};
  background-color: ${(props) => props.backgroundColor || "#fefefe"};
  border-right: none;
  overflow: hidden;
  border-radius: 0.5rem;

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    text-align: left;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.1rem;

  h3 {
    font-size: 1rem;
    font-weight: 500;
    color: rgb(35, 35, 35);

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  p {
    font-size: 0.8rem;
    color: #888888;
    margin-top: 0.2rem;
    font-weight: 500;

    @media (max-width: 768px) {
    }
  }
`;
export const DateWrapper = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: .75rem;
    color: #888888;
    margin-right: 0.5rem;

    @media (max-width: 768px) {
      font-size: 0.7rem;
      white-space: nowrap;
}
    }

  .arrow-icon, .close-icon {
    color: #888888;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #333333;
    }
  }
}
`;

export const Icons = styled.div`
  display: flex;
  cursor: pointer;
`;

// Tech Stack
export const SliderContainer = styled.div`
  margin-top: ${marginTopContainer};

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 502px;
    margin: 0 auto;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  margin-top: ${marginTop};
  width: 95%;
  overflow: hidden;
  padding: 0rem 0;
  background-color: #f6f6f6;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 40px;
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }
  &::before {
    left: 0;
    background: linear-gradient(to right, #f6f6f6, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #f6f6f6, transparent);
  }

  @media (max-width: 1200px) {
  }
`;

export const SliderTrack = styled.div<Props>`
  display: flex;
  width: 200%; /* doble porque se repite */
  //animation: ${scroll} 20s linear infinite;
  animation: ${(props) => (props.pause ? "none" : scroll)} 20s linear infinite;
`;

export const TechBox = styled.div<Props>`
  flex: 0 0 auto;
  padding: 1rem 2rem;
  margin: 0 0rem;
  border-radius: 8px;
  font-size: 1rem;

  user-select: none;

  img {
    width: 2.8rem;
    height: 2.8rem;
    object-fit: cover;
  }
`;

// Projects
export const ProjectContainer = styled.div`
  margin-top: ${marginTopContainer};
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    //border: 1px solid blue;
  }

  .card-proj__layout {
    background-color: #f6f6f6;
    width: 100%;
    margin-top: ${marginTop};
    gap: 2rem;
    overflow: hidden;
    position: relative;

    .arrow-left-icon,
    .arrow-right-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      color: #fff;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      cursor: pointer;
      z-index: 1;

      @media (max-width: 768px) {
        width: 2rem;
        height: 2rem;
        font-size: 1.2rem;
      }
    }

    .arrow-left-icon {
      top: 50%;
      transform: translateY(-50%);
      left: 1rem;
      opacity: 0.6;
    }

    .arrow-right-icon {
      top: 50%;
      transform: translateY(-50%);
      right: 2.5rem;
      opacity: 0.6;
    }
  }
`;

export const ProjectCardContainer = styled.div`
  display: flex;
  gap: 0.8rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 14.3rem;
  height: 329px;
  padding: 6px;
  border-radius: 0.5rem;
  background-color: #fefefe;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding-bottom: 0.8rem;
  //border: 1px solid blue;

  @media (max-width: 768px) {
    width: 10rem;
    height: 290px;
  }

  .proj-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid #e1e1e1;
    gap: 0.5rem;
    margin-top: 0.5rem;

    span {
      .link-icon {
        color: #888888;
        transition: color 0.3s;

        &:hover {
          color: #333333;
          cursor: pointer;
        }
      }
    }
  }
`;

export const ContentCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0.8rem;
  gap: 0.5rem;
  height: 100%;

  h2 {
    margin-top: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    line-height: 24px;
    color: rgb(60, 60, 60);

    @media (max-width: 768px) {
      font-size: 0.9rem;
      line-height: 1rem;
    }
  }

  p {
    font-size: 0.8rem;
    color: #888888;
    text-align: left;

    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  }

  a {
    text-decoration: none;
    margin-top: auto;
  }
`;

export const ImageWrapper = styled.div`
  width: 13.625rem;
  height: 10rem;
  border-radius: 0.5rem;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 768px) {
    width: 9rem;
    height: 7rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

// Education
export const EducationContainer = styled.div`
  @media (max-width: 1200px) {
    width: 100%;
  }
  margin-top: ${marginTopContainer};
  .card-edu__layout {
    margin-top: ${marginTop};
  }
`;

export const EducationWrapper = styled.div<Props>`
  margin-top: ${marginTop};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .edu-box {
    display: flex;
    width: 31.25rem;
    position: relative;
    transition: max-height 0.3s ease-in-out;
    border: 1px dashed #d9d9d9;

    @media (max-width: 1200px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      width: 100%;
    }

    .edu-box-content {
       @media (max-width: 1200px) {
          width: 100%;
         }

      @media (max-width: 768px) {
        p {
          font-size: 0.8rem;
}
  }
`;

export const SchoolLogoWrapper = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  overflow: hidden;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
  }
`;

// Recommendations
export const RecommendationsContainer = styled.div`
  margin-top: ${marginTopContainer};

  .card-rec__layout {
    margin-top: ${marginTop};
    display: flex;
    flex-direction: column;

    .card-rec__wrapper {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;

      .card-rec__item {
        display: flex;
        justify-content: space-between;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem;
        background-color: #f6f6f6;

        .date__content {
          display: flex;
          height: 100%;
          background-color: #fefefe;
          padding: 0.2rem;
          border-radius: 0.2rem;
          margin: 0.5rem 0.5rem 0.5rem 0;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

          .date {
            font-size: 0.8rem;
            color: #888888;
            text-align: right;

            @media (max-width: 768px) {
              font-size: 0.7rem;
            }
          }
        }
      }
    }

    .card-rec__content {
      padding: 1rem 0.875rem;
      background-color: #fefefe;
      border-radius: 0 0 0.5rem 0.5rem;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      color: #646464;

      p {
        font-size: 0.9rem;
        color: #888888;
        text-align: left;
        line-height: 1.3rem;
      }
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const RecUserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RecUserInfo = styled.div`
  h2 {
    font-size: 1rem;
    font-weight: 500;
    color: rgb(35, 35, 35);

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  p {
    font-size: 0.8rem;
    color: #888888;
    margin-top: 0.2rem;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  }
`;

export const ImageWrapper2 = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  overflow: hidden;
  border-radius: 0.5rem 0.5rem 0.5rem 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Links
export const LinksContainer = styled.div`
  margin-top: 2rem;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    margin-top: -3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LinksWrapper = styled.div`
  width: 510px;
  //border: 1px solid blue;
  margin-top: ${marginTop};
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;

  @media (max-width: 585px) {
    width: 100%;
    fle-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }
`;

export const LinksContent = styled.div`
  a {
    text-decoration: none;
  }
  .links_btn {
    display: flex;
    justify-content: space-between;

    @media (max-width: 585px) {
    }

    p {
      color: #888888;
    }

    span {
      color: #888888;
      transition: color 0.3s;
      font-size: 1.3rem;

      &:hover {
        color: #333333;
        cursor: pointer;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 0.5rem 0.75rem;

      p {
        font-size: 0.9rem;
      }

      .link-s-icon {
        font-size: 1.2rem;
      }
    }
  }
  .btn_one-two {
    width: 245px;
    height: 50px;

    @media (max-width: 585px) {
      width: 10rem;
      height: 50px;
    }
  }
  .btn_three {
    width: 216px;
    height: 50px;
    @media (max-width: 585px) {
      width: 10rem;
      height: 50px;
    }
  }
  .btn_four {
    width: 274px;
    height: 50px;
    @media (max-width: 585px) {
      width: 10rem;
      height: 50px;
    }
  }
  .btn_five {
    width: 500px;
    height: 50px;
    @media (max-width: 585px) {
      width: 12rem;
      height: 50px;
    }
  }
`;

// Contact
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 0.5rem;
  color: #565656;
`;

export const Input = styled.input`
  height: 3.125rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
  background-color: #fefefe;

  &:focus {
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
  min-height: 129.6px;
  resize: vertical;
  background-color: #fefefe;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 3.125rem;
  align-self: flex-start;
  background-color: #2c2c2c;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #494949;
  }
`;
