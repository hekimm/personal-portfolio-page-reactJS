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
  faHome,
  faUserAlt,
  faBriefcase,
  faEnvelope,
  faGraduationCap,
  faCode,
  faBlog,
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
  @media (max-width: 768px) {
    font-size: 0;
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
  color: #61dafb; // Active button color
  svg {
    transform: scale(1.25); // Make the active icon larger
  }
`;

// Update the RouteButton styled component to use the props to determine if it's active
const RouteButton = styled(Link)`
  color: #adb5bd;
  font-size: 14px;
  transition:
    color 0.3s,
    transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #61dafb;
  }

  svg {
    font-size: 24px;
  }

  ${(props) => props.isActive && activeButtonStyle}
`;

const FooterText = styled.p`
  color: #adb5bd;
  font-size: 12px; // Smaller font size for a more discreet copyright message
  padding: 8px 0; // Padding for spacing
  background-color: #20232a; // Slightly darker to differentiate from main footer area
  width: 100%;
  @media (max-width: 768px) {
    font-size: 0;
  }
`;

const Footer = () => {
  const location = useLocation(); // Hook to get the current location
  const language = useSelector(selectLanguage);
  // Function to determine if the route is active
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
    <FooterContainer>
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
        <RouteButton to="/blog" aria-label="Blog" isActive={isActive("/blog")}>
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
    </FooterContainer>
  );
};

export default Footer;
