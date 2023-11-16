import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import profileImage from "./profile-image.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ROUTES } from "../Routes";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../reducers/themeSlice";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaTimes, FaCheck } from "react-icons/fa";
import { setLanguage, selectLanguage } from "../../reducers/languageSlice"; // Import setLanguage ve selectLanguage
import { RiGlobalLine } from "react-icons/ri";
import { FaBars, FaArrowLeft } from "react-icons/fa";
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px; // Bu değeri ihtiyaca göre ayarlayabilirsiniz
  margin-bottom: 1rem;
`;

const COLORS = {
  primary: "#61dafb",
  dark: "#20232a", // Darker tone
  light: "#e1e1e1",
  white: "#ffffff",
  gradient: "linear-gradient(45deg, #20232a, #343a40)", // New gradient
};

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Sidebar = styled.div`
  position: fixed;
  width: 280px;
  height: 100vh; // Yüksekliği ekran boyutuna ayarlayın
  overflow-y: auto; // Yatayda kaydırma çubuğu ekleyin
  background: ${COLORS.gradient};
  padding: 1.5rem 2.5rem;
  z-index: 1000;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-100%")};
  transition: left 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.2);

  /* Kaydırma çubuğunu özelleştirmek için */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #20232a; // Track rengini değiştirebilirsiniz
  }

  &::-webkit-scrollbar-thumb {
    background-color: #61dafb; // Thumb rengini değiştirebilirsiniz
    border-radius: 20px;
    border: 3px solid #20232a; // Thumb sınır rengini değiştirebilirsiniz
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Daha önce tanımlanmış bileşenleri (StyledLink, StyledNavLink, etc.) kullanarak sidebar içeriğini oluşturabiliriz.

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

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

const ProfileLazyImage = styled(LazyLoadImage)`
  width: 150px; // genişliği arttırdık
  height: 150px; // yüksekliği arttırdık
  border-radius: 50%;
  border: 3px solid #61dafb;
  object-fit: cover;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100px; // Mobil cihazlar için daha küçük boyut
    height: 100px; // Mobil cihazlar için daha küçük boyut
    margin-top: 40px;
  }
`;

const LanguageIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    color: ${COLORS.primary};
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
    color: ${COLORS.primary};
    transform: scale(1.1); // Hafif büyütme efekti
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
  color: ${COLORS.light};
  display: block;
  padding: 10px 20px;
  margin-bottom: 8px;
  font-size: 1.1rem;
  font-weight: 300;
  transition:
    color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  border-radius: 8px;
  &:hover {
    color: ${COLORS.white};
    background-color: ${COLORS.primary};
    text-decoration: none;
  }
  &.active {
    font-weight: 500;
    color: ${COLORS.primary};
    background-color: #666;
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
    MENU: "Menü",
    CLOSE_MENU: "Menüyü Kapat",
    BLOG: " Blog Yazılarım",
  },
  en: {
    ABOUT: "About",
    SKILLS: "Languages & Tools",
    EDUCATION: "Education",
    PROJECTS: "My Projects",
    EXPERTISE_AREA: "Software & Programming Area",
    CONTACT: "Contact",
    MENU: "Menu",
    CLOSE_MENU: " Close the Menu",
    BLOG: "My Blog Posts",
  },
};
const UserName = styled.h2`
  color: #61dafb;
  font-size: 1.2rem;
  font-weight: 600; // Koyu font ağırlığı
  margin-bottom: 10px;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
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
  const ToggleButton = styled.button`
    position: fixed;
    top: 10px;
    left: ${(props) => (props.isOpen ? "250px" : "10px")};
    background-color: ${(props) =>
      props.theme === "dark"
        ? "rgba(255, 255, 255, 0.2)"
        : "rgba(0,0,0,0.6)"}; // Temaya göre renk tersine çevrildi
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    z-index: 1010;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;

    &:hover {
      background-color: ${(props) =>
        props.theme === "dark" ? "#4a4a4a" : "#555"};
      transform: scale(1.05);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 768px) {
      left: ${(props) => (props.isOpen ? "200px" : "10px")};
    }
  `;

  const MenuText = styled.span`
    display: inline;
    color: white;
    font-weight: bold;
    animation: ${(props) =>
      !props.isOpen &&
      css`
        ${blink} 1s infinite
      `};
    &:hover {
      animation: ${(props) =>
        !props.isOpen &&
        css`
          ${blink} 1s infinite, ${rotate} 2s infinite linear
        `};
    }

    @media (max-width: 768px) {
      margin-left: 10px;
    }
  `;

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
    <>
      <ToggleButton isOpen={isOpen} theme={theme} onClick={handleToggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
        <MenuText isOpen={isOpen}>
          {isOpen ? NAV_TEXTS[language].CLOSE_MENU : NAV_TEXTS[language].MENU}
        </MenuText>
      </ToggleButton>

      <Sidebar isOpen={isOpen}>
        <ProfileWrapper>
          <StyledLink className="navbar-brand" to="/">
            <ProfileLazyImage
              src={profileImage}
              alt="Profil"
              width="150"
              height="150"
            />
          </StyledLink>
          <UserName>Hekimcan Aktaş</UserName>
          <SocialLinks>
            <IconLink
              href="https://github.com/hekimm"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </IconLink>
            <IconLink
              href="https://linkedin.com/in/hekimcanaktas"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </IconLink>
            <IconLink href="mailto:hekimcanaktas@gmail.com">
              <FaGoogle />
            </IconLink>
          </SocialLinks>
        </ProfileWrapper>
        <ul className="navbar-nav">
          <li className="nav-item">
            <LanguageDropdown>
              <LanguageToggle onClick={handleLanguageToggle}>
                <LanguageIconWrapper onClick={handleLanguageToggle}>
                  <LanguageIcon />
                  <MenuText isOpen={isOpen}>
                    {language === "tr" ? "TR" : "EN"}
                  </MenuText>
                </LanguageIconWrapper>
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
              to={ROUTES.BLOG}
              className={location.pathname === ROUTES.BLOG ? "active" : ""}
            >
              {NAV_TEXTS[language].BLOG}
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
        </ul>

        {toastMessage && (
          <Toast message={toastMessage.text} error={toastMessage.error} />
        )}
      </Sidebar>
    </>
  );
};

export default Navbar;
