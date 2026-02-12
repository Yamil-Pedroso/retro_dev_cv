import styled, { keyframes } from "styled-components";

interface Props {
  isClicked?: boolean;
}

const pulseWave = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const growIcon = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  //border: 2px solid black;
  position: fixed;

  .menu__icon {
    display: none;
  }

  .expanding-box {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  @media (max-width: 1200px) {
    position: fixed;
    margin-top: 1rem
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: auto;
    //border: 1px solid blue;
    background-color: #f6f6f6;
    flex-direction: row;
    justify-content: center;
    z-index: 1;
}

  @media (max-width: 768px) {
    position: fixed;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: auto;
    background-color: #f6f6f6;
    flex-direction: row;
    justify-content: center;
    //border: 1px solid blue;
    z-index: 1;

    .expanding-box {
      display: block;
      width: 90%;
      height: auto;
      margin-top: -5rem;
      //border: 1px solid blue;
    }
  }
`;

export const AsideLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
  }

  @media (max-width: 768px) {
    //border: 1px solid blue;
    margin-top: 0rem;
    width: 100%;

    transition: height 0.5s ease-in-out;
    .expanding-box {
      width: 90%;
    }
  }
`;

export const AsideCompLayoutLeft = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 0.5rem;
  gap: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 8px 1px;
  position: relative;
  //border: 1px solid blue;

  @media (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    flex-direction: row;
    width: 382px;
    height: 100%;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: -5rem;
    margin: 0.5rem;
    width: 97%;
    height: ${(props) => (props.isClicked ? "290px" : "205px")};
    transition: height 0.5s ease-in-out;
    padding: 1rem;
    gap: 0.5rem;
  }
`;

export const ExpandedBoxContent = styled.div`
  display: none;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
    position: relative;
    background-color: #ffffff;
    display: block;
    position: absolute;
    width: 94.5%;
    height: 5rem;
    bottom: 0.8rem;
    //border: 1px solid blue;

    .btn__contact {
      width: 150px;
      position: absolute;
      bottom: 0.3rem;
      right: 0;

      img {
        width: 18px;
        height: 18px;
      }
      span {
        font-size: 13px;
        color: #ffffff;
      }
    }
  }
`;

export const MenuIconWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  .menu__icon {
    font-size: 1.5rem;
    color: #6c6c6c;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  .user__name {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    .aside__name {
      width: 8rem;
      line-height: 1.875rem;
    }
  }

  .aside__title {
    font-size: 1rem;
    color: #6c6c6c;
  }

  .status__header {
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    width: 9rem;
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 2px 10px 2px 2px;

    span {
      font-size: 14px;
      margin-left: 0.1rem;
      color: #6c6c6c;
    }
  }

  .location {
    display: flex;
    align-items: center;
    font-size: 14px;
    position: relative;

    span {
      margin-left: 0.2rem;
      color: #6c6c6c;
    }

    .location-img__wrapper {
      position: absolute;
      top: -5rem;
      left: -13rem;
      perspective: 300px;
      width: fit-content;

      .location-img {
        width: 250px;
        height: 200px;
        border-radius: 0.5rem;
        background: #fff;
        transform: rotateY(30deg);
        transform-origin: left center;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  @media (max-width: 1200px) {
    width: 157px;
    height: auto;
  }
`;

export const StatusIconWrapper = styled.div`
  position: relative;
  width: 1.4rem;
  height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .status_icon {
    color: #00b300;
    font-size: 1.4rem;
    position: relative;
    z-index: 2;
    animation: ${growIcon} 1s infinite alternate;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #00b300;
    opacity: 0.6;
    border-radius: 50%;
    animation: ${pulseWave} 2.5s infinite;
    z-index: 1;
  }
`;

export const AsideCompLayoutCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f6f6f6;
  padding: 10px;
  border-radius: 0.5rem;
  gap: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 8px 1px;
  margin-top: 0.8rem;
  border: 1px solid #e6e6e6;

  p {
    font-size: 14px;
    color: #6c6c6c;
    font-weight: bold;
  }

  @media (max-width: 1200px) {
    gap: 0.4rem;
    position: absolute;
    bottom: -4rem;
    left: 0;
    width: 165px;
    background-color: #ffffff;
    border: 1px solid #e6e6e6;

    p {
      font-weight: bold;
    }
  }
`;

export const AsideCompLayoutRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 8px 1px;
  position: relative;

  @media (max-width: 1200px) {
    height: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  width: 11.25rem;
  height: 193.55px;
  overflow: hidden;
  border-radius: 0.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    width: 134px;
    height: 170px;
    border-radius: 0.5rem;
    overflow: hidden;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;

  span,
  a {
    font-size: 14px;
    margin-bottom: 0.8rem;
    margin-left: 0.2rem;
    color: #6c6c6c;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const BtnContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
`;

export const DownloadCVWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 12px 36px;
  width: 184px;
  background-color: #f6f6f6;
  border: 1px solid #e6e6e6;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const ContactMeButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 184px;
  padding: 12px 36px;
  border-radius: 0.5rem;
  background-color: #2c2c2c;
  color: #ffffff;
  border: none;
  cursor: pointer;
  gap: 0.3rem;
  text-decoration: none;

  @media (max-width: 1200px) {
    width: 100%;
  }

  &:hover {
    background-color: #494949;
  }

  span {
    white-space: nowrap;
    font-size: 14px;
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }

  @media (max-width: 1200px) {
    margin: 0 auto;
    padding: 10px 0;
    margin-top: auto;
  }
`;

export const CVLinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.6rem;
  padding: 5px 8px 0px 0px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 8px 1px;
  border-radius: 0.5rem;
  padding: 0.5rem;

  a {
    text-decoration: none;
    color: #646464;

    &:hover {
      color: #4949490;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    right: 1rem;
    top: 14rem;
    gap: 1rem;

    a {
    }
  }
`;

export const CVLink = styled.a`
  display: flex;
  align-items: center;
  transition: color 0.3s;
  color: #6c6c6c;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #000000;
  }
`;
