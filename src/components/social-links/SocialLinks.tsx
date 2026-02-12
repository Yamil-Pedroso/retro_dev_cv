import Header from "../common/header/Header";
import {
  LinksContainer,
  LinksWrapper,
  LinksContent,
} from "../main-content/styles";
import Button from "../common/buttons/Button";
import { fullContent } from "../../data/data";
import { getHrefValue } from "../../utils/getHrefValue";

const SocialLinks = () => {
  return (
    <LinksContainer>
      <div style={{ display: "flex" }}>
        <Header>Links</Header>
      </div>

      <LinksWrapper>
        {fullContent.links?.map((link, idx) => (
          <LinksContent key={idx}>
            <a
              href={getHrefValue(link.items)}
              target="_blank"
              rel="noopener noreferrer"
              className="links_a"
            >
              <Button
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                className={`links_btn ${
                  idx === 0 || idx === 1
                    ? "btn_one-two"
                    : idx === 2
                      ? "btn_three"
                      : idx === 3
                        ? "btn_four"
                        : idx === 4
                          ? "btn_five"
                          : ""
                }`}
              >
                <p>{link.name}</p>
                <span>
                  {link.icon && <link.icon className="link-s-icon" />}
                </span>
              </Button>
            </a>
          </LinksContent>
        ))}
      </LinksWrapper>
    </LinksContainer>
  );
};

export default SocialLinks;
