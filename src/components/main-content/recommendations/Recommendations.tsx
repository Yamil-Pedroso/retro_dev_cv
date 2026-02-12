import Header from "../../common/header/Header";
import CardLayout from "../../common/cards/Cards";
import { fullContent } from "../../../data/data";
import {
  RecommendationsContainer,
  ImageWrapper2,
  RecUserInfoWrapper,
  RecUserInfo,
} from "../styles";

const Recommendations = () => {
  return (
    <RecommendationsContainer>
      <div style={{ display: "flex" }}>
        <Header>Recommendations</Header>
      </div>

      <CardLayout className="card-rec__layout">
        {fullContent.recommendations?.map((rec, idx) => (
          <div className="card-rec__wrapper" key={idx}>
            <div className="card-rec__item">
              <RecUserInfoWrapper>
                <ImageWrapper2>
                  <img src={rec.avatar} alt="rec-img" />
                </ImageWrapper2>
                <RecUserInfo>
                  <h2>{rec.name}</h2>
                  <p>{rec.position}</p>
                </RecUserInfo>
              </RecUserInfoWrapper>
              <div className="date__content">
                <p className="date">{rec.date}</p>
              </div>
            </div>

            <div className="card-rec__content">
              <p>
                {rec.text}
              </p>
            </div>
          </div>
        ))}
      </CardLayout>
    </RecommendationsContainer>
  );
};

export default Recommendations;
