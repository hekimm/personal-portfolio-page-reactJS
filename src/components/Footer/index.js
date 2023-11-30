import React from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
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
  faUserAlt,
  faGraduationCap,
  faBriefcase,
  faEnvelope,
  faCode,
  faBlog,
  faHome,
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
  z-index: 2;
`;
const DesktopFooterContainer = styled(FooterContainer)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileFooterContainer = styled(FooterContainer)`
  background-color: #20232a; // Koyu renk arka plan
  // Üst kısma hafif bir gölge ekleme
  @media (min-width: 769px) {
    display: none;
  }
`;
const RouteButtons = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #282c34; // Same as the footer container for a cohesive look
  padding: 10px 0; // Adequate padding for touch targets

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px; // Slightly reduced for mobile
    border-top: 2px solid #343a40; // Slightly thicker for a pronounced separation
  }
`;

const activeButtonStyle = css`
  color: #61dafb;
  svg {
    transform: scale(1.25);
  }
`;

const RouteButton = styled(Link)`
  color: #bdc3c7; // Daha açık renk
  font-size: 16px; // İkonların boyutunu artır
  padding: 10px; // Daha fazla padding
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    color 0.2s,
    transform 0.2s;

  svg {
    font-size: 24px; // İkon boyutunu artır
  }

  &:hover {
    color: #ecf0f1; // Hover durumunda renk değişikliği
  }

  ${(props) =>
    props.isActive &&
    css`
      color: #3498db; // Aktif ikon rengi
      svg {
        transform: scale(1.1); // Aktif ikonu biraz büyüt
      }
    `}
`;

const DesktopRouteButton = styled(RouteButton)`
  padding: 10px;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const SocialMediaIcon = styled(FontAwesomeIcon)`
  color: #adb5bd;
  margin: 0 10px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #61dafb;
  }
`;

const FooterText = styled.p`
  color: #adb5bd;
  font-size: 12px;
  padding: 8px 0;
  background-color: #20232a;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Footer = () => {
  const location = useLocation();
  const language = useSelector(selectLanguage);
  const isActive = (path) => location.pathname === path;
  const TEXTS = {
    tr: {
      ABOUT: "Hakkımda",
      EDUCATION: "Eğitimim Hakkında",
      PROJECTS: "Projelerim",
      EXPERTISE_AREA: "Yazılım ve Programlama Alanım",
      CONTACT: "İletişim",
      SKILLS: "Öğrendiğim Diller ve Araçlar",
      BLOG: "Blog Yazılarım",
    },
    en: {
      ABOUT: "About",
      EDUCATION: "About My Education",
      PROJECTS: "My Projects",
      EXPERTISE_AREA: "My Software and Programming Area",
      CONTACT: "Contact",
      SKILLS: "Languages and Tools I’ve Learned",
      BLOG: "My Blog Posts",
    },
  };

  return (
    <>
      <DesktopFooterContainer>
        <SocialMediaContainer>
          <a href="https://twitter.com/yourtwitter">
            <SocialMediaIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://linkedin.com/yourlinkedin">
            <SocialMediaIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://github.com/yourgithub">
            <SocialMediaIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://medium.com/yourmedium">
            <SocialMediaIcon icon={faMediumM} size="lg" />
          </a>
        </SocialMediaContainer>
        <RouteButtons>
          {Object.entries(TEXTS[language]).map(([key, value]) => (
            <DesktopRouteButton
              key={key}
              to={`/${key}`}
              aria-label={value}
              isActive={isActive(`/${key}`)}
            >
              <FontAwesomeIcon
                icon={
                  key === "ABOUT"
                    ? faUserAlt
                    : key === "EDUCATION"
                    ? faGraduationCap
                    : key === "PROJECTS"
                    ? faBriefcase
                    : key === "CONTACT"
                    ? faEnvelope
                    : key === "SKILLS"
                    ? faCode
                    : faBlog
                }
              />
              {value}
            </DesktopRouteButton>
          ))}
        </RouteButtons>
      </DesktopFooterContainer>

      <MobileFooterContainer>
        <RouteButtons>
          {/* Apply the active style conditionally based on the current route */}
          <RouteButton
            to="/about"
            aria-label="About"
            isActive={isActive("/about")}
          >
            <FontAwesomeIcon icon={faUserAlt} />
          </RouteButton>
          <RouteButton
            to="/skills"
            aria-label="Skills"
            isActive={isActive("/skills")}
          >
            <FontAwesomeIcon icon={faCode} />
          </RouteButton>
          <RouteButton
            to="/education"
            aria-label="Education"
            isActive={isActive("/education")}
          >
            <FontAwesomeIcon icon={faGraduationCap} />
          </RouteButton>
          <RouteButton
            to="/projects"
            aria-label="Projects"
            isActive={isActive("/projects")}
          >
            <FontAwesomeIcon icon={faBriefcase} />
          </RouteButton>
          <RouteButton
            to="/blog"
            aria-label="Blog"
            isActive={isActive("/blog")}
          >
            <FontAwesomeIcon icon={faBlog} />
          </RouteButton>
          <RouteButton
            to="/contact"
            aria-label="Contact"
            isActive={isActive("/contact")}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </RouteButton>
        </RouteButtons>
      </MobileFooterContainer>
    </>
  );
};

export default Footer;
