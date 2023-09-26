import React, { useCallback, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faGithub,
  faLinkedin,
  faGoogle,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter as faTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import profileImage from "./profile-image.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { ROUTES } from "../Routes";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../reducers/languageSlice";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => (theme === "light" ? "#f4f4f4" : "#333")};
  padding: 1rem;
  overflow: hidden;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  background: ${({ theme }) => (theme === "light" ? "#fff" : "#444")};
  border-radius: 25px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
  padding: 2.5rem;
  width: 100%;
  max-width: 500px;
  animation: ${fadeInUp} 1.2s both;
`;

const ProfileImage = styled(LazyLoadImage)`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  cursor: pointer;
  transition: transform 0.3s;
  border: 5px solid #333;
  &:hover {
    transform: scale(1.1);
  }
`;

const Name = styled.h1`
  margin: 0.5rem 0;
  font-size: 2.5rem;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#eee")};
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
`;

const Description = styled.p`
  color: ${({ theme }) => (theme === "light" ? "#666" : "#ccc")};
  margin-bottom: 2rem;
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const IconLink = styled.a`
  display: inline-flex;
  background-color: ${({ theme }) =>
    theme === "light" ? "#007bff" : "#0056b3"};
  padding: 1rem;
  border-radius: 50%;
  transition:
    background-color 0.3s,
    transform 0.3s;

  &:hover {
    background-color: ${({ theme }) =>
      theme === "light" ? "#0056b3" : "#003f8f"};
    transform: translateY(-5px);
    animation: ${rotate} 1s forwards;
  }
`;

const Contact = () => {
  const theme = useSelector((state) => state.theme.theme);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const navigateToAbout = useCallback(() => {
    navigate(ROUTES.ABOUT);
  }, [navigate]);

  const language = useSelector(selectLanguage);

  const translations = {
    tr: {
      title: "Hekimcan AKTAŞ - İletişim",
      description:
        "Yazılım Mühendisliği Öğrencisi | Full Stack Web Geliştiricisi  ve  Mobile Uygulama Geliştiricisi",
    },
    en: {
      title: "Hekimcan AKTAŞ - Contact",
      description:
        "Software Engineering Student | Full Stack Web Developer & Mobile App Developer",
    },
  };

  const translate = (key) => {
    return translations[language]
      ? translations[language][key]
      : translations.tr[key];
  };

  useEffect(() => {
    document.title = translate("title");
  }, [language]);

  return (
    <Main theme={theme}>
      <Article theme={theme}>
        <ProfileImage
          src={profileImage}
          alt="Hekimcan AKTAŞ"
          onClick={navigateToAbout}
          effect="blur"
        />
        <Name theme={theme}>Hekimcan AKTAŞ</Name>
        <Description theme={theme}>{translate("description")}</Description>
        <IconContainer>
          {[
            { icon: faGithub, href: "https://github.com/hekim" },
            { icon: faGoogle, href: "mailto:hekimcanaktas@gmail.com" },
            {
              icon: faLinkedin,
              href: "https://www.linkedin.com/in/hekimcan-akta%C5%9F-24419b237/",
            },
            { icon: faMedium, href: "https://medium.com/@hekimcanaktas" },
            { icon: faTwitter, href: "https://twitter.com/hekimcanaktas" },
            { icon: faPhone, href: "tel:+905468909479" },
          ].map((item) => (
            <IconLink
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              theme={theme}
            >
              <FontAwesomeIcon
                icon={item.icon}
                color={theme === "light" ? "#fff" : "#eee"}
              />
            </IconLink>
          ))}
        </IconContainer>
      </Article>
    </Main>
  );
};

export default Contact;
