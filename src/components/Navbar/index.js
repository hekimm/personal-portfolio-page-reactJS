import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import profileImage from "./profile-image.jpeg";
import { ROUTES } from "../Routes";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../reducers/themeSlice";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaTimes, FaCheck } from "react-icons/fa";
import { setLanguage, selectLanguage } from "../../reducers/languageSlice"; // Import setLanguage ve selectLanguage
import { RiGlobalLine } from "react-icons/ri";

const LanguageIcon = styled(RiGlobalLine)`
  font-size: 24px;
`;

const LanguageToggle = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    color: #61dafb;
  }
`;

const rotateAnimation = css`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const DropdownAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LanguageDropdown = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    color: #61dafb;
  }

  &:hover div {
    display: block;
    animation: ${DropdownAnimation} 0.3s forwards;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #2c3e50;
  min-width: 120px;
  border-radius: 8px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  text-align: center;
`;

const DropdownItem = styled.div`
  color: #e1e1e1;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};

  &:hover {
    background-color: #34495e;
    color: #fff;
  }
`;
const Nav = styled.nav`
  background-color: #343a40;
  padding: 1rem 5%;
  position: relative;
  z-index: 1000;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 10px;
  border: 3px solid #2c3e50;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: none;
    color: #61dafb;
  }
`;

const IconLink = styled.a`
  margin-left: 10px;
  color: #fff;
  font-size: 32px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #61dafb;
  }
`;

const underlineAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const StyledNavLink = styled(Link)`
  color: #fff;
  margin-right: 15px;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #61dafb;
    text-decoration: none;
  }

  &.active {
    font-weight: bold;
    color: #61dafb;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #61dafb;
      animation: ${underlineAnimation} 0.3s forwards;
    }
  }

  @media (max-width: 768px) {
    display: block;
    margin: 5px 0;
  }
`;
const ThemeToggle = styled.label`
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: 64px;
  height: 38px;
  margin: 0 15px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition:
      background-color 0.4s,
      transform 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(28px);
  }

  .slider.round {
    border-radius: 38px;
  }

  .icon {
    position: absolute;
    top: 50%;
    font-size: 20px;
    transform: translateY(-50%);
    transition:
      color 0.4s,
      opacity 0.4s;
  }

  .icon.sun {
    left: 8px;
    color: ${(props) => (props.theme === "light" ? "#FFD700" : "transparent")};
    opacity: ${(props) => (props.theme === "light" ? 1 : 0.3)};
  }

  .icon.moon {
    right: 8px;
    color: ${(props) => (props.theme === "light" ? "transparent" : "#F5E1D3")};
    opacity: ${(props) => (props.theme === "light" ? 0.3 : 1)};
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px 20px;
  background-color: white;
  color: ${(props) => (props.error ? "#ffcc00" : "#2ecc71")};
  border-radius: 4px;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 0.3s forwards;
  z-index: 2000;

  svg {
    margin-right: 10px;
    font-size: 1.5em;
    border-radius: 50%;
    padding: 0.2em;
  }
`;
const ErrorMessage = styled.span`
  color: red;
`;

const Toast = ({ message, error }) => {
  return (
    <ToastContainer error={error}>
      {error ? (
        <FaTimes style={{ color: "red" }} />
      ) : (
        <FaCheck style={{ color: "#2ecc71" }} />
      )}
      {error ? (
        <>
          <ErrorMessage>Error message:</ErrorMessage>{" "}
          {message.replace("Error message:", "")}
        </>
      ) : (
        message
      )}
    </ToastContainer>
  );
};

const NAV_TEXTS = {
  tr: {
    ABOUT: "Hakkımda",
    SKILLS: "Diller ve Araçlar",
    EDUCATION: "Eğitimim",
    PROJECTS: "Projelerim",
    EXPERTISE_AREA: "Yazılım ve Programlama Alanım",
    CONTACT: "İletişim",
  },
  en: {
    ABOUT: "About",
    SKILLS: "Languages & Tools",
    EDUCATION: "Education",
    PROJECTS: "My Projects",
    EXPERTISE_AREA: "Software & Programming Area",
    CONTACT: "Contact",
  },
};

const Navbar = () => {
  const language = useSelector(selectLanguage);

  const handleLanguageToggle = () => {
    // Dil değiştirme işlemleri
    dispatch(setLanguage(language === "tr" ? "en" : "tr"));
  };

  const [toastMessage, setToastMessage] = React.useState(null);

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const location = useLocation();
  // Toast mesajlarını tanımla
  const TOAST_MESSAGES = {
    tr: {
      THEME_CHANGED_SUCCESS: "Tema başarıyla değiştirildi.",
      THEME_CHANGE_ERROR:
        "Error message: Dark Tema Özelliği AnaSayfa dışındaki sayfalarda geçerlidir. AnaSayfa için Dark Tema Özelliği ihtiyaç görülmediği için entegre edilmemiştir.",
    },
    en: {
      THEME_CHANGED_SUCCESS: "Theme changed successfully.",
      THEME_CHANGE_ERROR:
        "Error message: Dark Theme feature is only valid on pages other than the Home Page. The Dark Theme feature was not integrated for the Home Page as it was not deemed necessary.",
    },
  };

  const handleThemeToggle = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();

      setToastMessage({
        text: TOAST_MESSAGES[language].THEME_CHANGE_ERROR,
        error: true,
      });

      setTimeout(() => setToastMessage(null), 4000);
    } else {
      setToastMessage({
        text: TOAST_MESSAGES[language].THEME_CHANGED_SUCCESS,
        error: false,
      });

      setTimeout(() => setToastMessage(null), 2000);
      dispatch(toggleTheme());
    }
  };

  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <StyledLink className="navbar-brand" to="/">
        <ProfileImage src={profileImage} alt="Profil" />
        Hekimcan AKTAŞ
      </StyledLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <StyledNavLink
              to={ROUTES.ABOUT}
              className={location.pathname === ROUTES.ABOUT ? "active" : ""}
            >
              {NAV_TEXTS[language].ABOUT}
            </StyledNavLink>
          </li>
          <li className="nav-item">
            <StyledNavLink
              to={ROUTES.SKILLS}
              className={location.pathname === ROUTES.SKILLS ? "active" : ""}
            >
              {NAV_TEXTS[language].SKILLS}
            </StyledNavLink>
          </li>
          <li className="nav-item">
            <StyledNavLink
              to={ROUTES.EDUCATION}
              className={location.pathname === ROUTES.EDUCATION ? "active" : ""}
            >
              {NAV_TEXTS[language].EDUCATION}
            </StyledNavLink>
          </li>
          <li className="nav-item">
            <StyledNavLink
              to={ROUTES.PROJECTS}
              className={location.pathname === ROUTES.PROJECTS ? "active" : ""}
            >
              {NAV_TEXTS[language].PROJECTS}
            </StyledNavLink>
          </li>
          <li className="nav-item">
            <StyledNavLink
              to={ROUTES.EXPERTISE_AREA}
              className={
                location.pathname === ROUTES.EXPERTISE_AREA ? "active" : ""
              }
            >
              {NAV_TEXTS[language].EXPERTISE_AREA}
            </StyledNavLink>
          </li>
          <li className="nav-item">
            <StyledNavLink
              to={ROUTES.CONTACT}
              className={location.pathname === ROUTES.CONTACT ? "active" : ""}
            >
              {NAV_TEXTS[language].CONTACT}
            </StyledNavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <IconLink
              href="https://github.com/hekimm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </IconLink>
          </li>
          <li className="nav-item">
            <IconLink
              href="https://www.linkedin.com/in/hekimcanaktas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </IconLink>
          </li>
          <li className="nav-item">
            <IconLink
              href="mailto:hekimcanaktas@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle />
            </IconLink>
          </li>
          <li className="nav-item">
            <ThemeToggle theme={theme}>
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={handleThemeToggle}
              />

              <span className="slider round"></span>
              {theme === "light" && <FaSun className="icon sun" />}
              <FaMoon className="icon moon" />
            </ThemeToggle>
          </li>
          <li className="nav-item">
            <LanguageDropdown>
              <LanguageToggle onClick={handleLanguageToggle}>
                <LanguageIcon />
                <span>{language === "tr" ? "EN" : "TR"}</span>
              </LanguageToggle>

              <DropdownContent>
                <DropdownItem
                  active={language === "tr"}
                  onClick={() => dispatch(setLanguage("tr"))}
                >
                  Türkçe
                </DropdownItem>
                <DropdownItem
                  active={language === "en"}
                  onClick={() => dispatch(setLanguage("en"))}
                >
                  English
                </DropdownItem>
              </DropdownContent>
            </LanguageDropdown>
          </li>
        </ul>
      </div>
      {toastMessage && (
        <Toast message={toastMessage.text} error={toastMessage.error} />
      )}
    </Nav>
  );
};

export default Navbar;
