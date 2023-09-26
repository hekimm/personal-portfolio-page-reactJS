import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../reducers/languageSlice";
import {
  faMediumM,
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faXTwitter as faTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import {
  faNewspaper,
  faBook,
  faProjectDiagram,
  faLaptopCode,
  faEnvelope,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.footer`
  background-color: #343a40;
  color: #adb5bd;
  padding: 20px 0;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #343a40;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
  flex-wrap: wrap;
`;

const SocialIcon = styled.a`
  color: #d3d3d3;
  font-size: 24px;
  transition:
    color 0.3s,
    transform 0.3s ease-in-out;

  &:hover {
    color: #ffffff;
    transform: scale(1.2);
  }
`;

const RouteButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
    font-size: 12px;
  }
`;

const RouteButton = styled(Link)`
  color: #d3d3d3;
  font-size: 14px;
  transition: color 0.3s;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    color: #ffffff;
  }

  svg {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    svg {
      margin-right: 4px;
      font-size: 12px;
    }
  }
`;

const FooterText = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
`;

const Footer = () => {
  const language = useSelector(selectLanguage);

  const TEXTS = {
    tr: {
      ABOUT: "Hakkımda",
      EDUCATION: "Eğitimim Hakkında",
      PROJECTS: "Projelerim",
      EXPERTISE_AREA: "Yazılım ve Programlama Alanım",
      CONTACT: "İletişim",
      SKILLS: "Öğrendiğim Diller ve Araçlar",
    },
    en: {
      ABOUT: "About",
      EDUCATION: "About My Education",
      PROJECTS: "My Projects",
      EXPERTISE_AREA: "My Software and Programming Area",
      CONTACT: "Contact",
      SKILLS: "Languages and Tools I’ve Learned",
    },
  };
  return (
    <FooterContainer>
      <RouteButtons>
        <RouteButton to="/about">
          <FontAwesomeIcon icon={faNewspaper} /> {TEXTS[language].ABOUT}
        </RouteButton>
        <RouteButton to="/education">
          <FontAwesomeIcon icon={faBook} /> {TEXTS[language].EDUCATION}
        </RouteButton>
        <RouteButton to="/projects">
          <FontAwesomeIcon icon={faProjectDiagram} /> {TEXTS[language].PROJECTS}
        </RouteButton>
        <RouteButton to="/expertise-area">
          <FontAwesomeIcon icon={faLaptopCode} />{" "}
          {TEXTS[language].EXPERTISE_AREA}
        </RouteButton>
        <RouteButton to="/contact">
          <FontAwesomeIcon icon={faEnvelope} /> {TEXTS[language].CONTACT}
        </RouteButton>
        <RouteButton to="/skills">
          <FontAwesomeIcon icon={faCode} /> {TEXTS[language].SKILLS}
        </RouteButton>
      </RouteButtons>
      <FooterText>
        Copyright © 2023 Hekimcan AKTAŞ. All rights are reserved.
      </FooterText>
      <SocialIcons>
        <SocialIcon
          href="https://medium.com/@hekimcanaktas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMediumM} />
        </SocialIcon>
        <SocialIcon
          href="https://twitter.com/hekimmcann"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </SocialIcon>
        <SocialIcon
          href="https://github.com/hekimm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/hekimcanaktas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialIcon>
        <SocialIcon
          href="mailto:hekimcanaktas@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGoogle} />
        </SocialIcon>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
