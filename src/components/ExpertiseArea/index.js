import React, { useEffect } from "react";
import styled from "styled-components";
import {
  FaCode,
  FaServer,
  FaLaptopCode,
  FaKeyboard,
  FaMobileAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { translations } from "./translations";
const ExpertiseAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-color: ${({ theme }) =>
    theme === "light" ? "#ffffff" : "#121212"};

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => (theme === "light" ? "#2c3e50" : "#ffffff")};
    font-weight: 600;
    margin-bottom: 40px;
    border-bottom: 3px solid
      ${({ theme }) => (theme === "light" ? "#61dafb" : "#888")};
    padding-bottom: 10px;
  }
`;

const ExpertiseArea = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 10px 0;
  width: 80%;
  background-color: ${({ theme }) =>
    theme === "light" ? "#f9f9f9" : "#2e2e2e"};
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  }
`;

const IconContainer = styled.div`
  padding: 10px;
  font-size: 2.5rem;
  margin-right: 20px;
  color: ${({ theme }) => (theme === "light" ? "#007bff" : "#1e90ff")};
`;

const Description = styled.div`
  flex: 1;
  h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: ${({ theme }) => (theme === "light" ? "#333" : "#ffffff")};
  }
  p {
    color: ${({ theme }) => (theme === "light" ? "#666" : "#aaaaaa")};
  }
`;

const AreaOfExpertise = () => {
  const theme = useSelector((state) => state.theme.theme);
  const language = useSelector((state) => state.language.value);

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "#ffffff" : "#121212";
  }, [theme]);
  const areas = [
    {
      title: translations[language].frontend,
      description: translations[language].frontendDesc,
      icon: <FaCode />,
    },
    {
      title: translations[language].backend,
      description: translations[language].backendDesc,
      icon: <FaServer />,
    },
    {
      title: translations[language].fullStack,
      description: translations[language].fullStackDesc,
      icon: <FaLaptopCode />,
    },
    {
      title: translations[language].mobileApp,
      description: translations[language].mobileAppDesc,
      icon: <FaMobileAlt />,
    },
    {
      title: translations[language].programming,
      description: translations[language].programmingDesc,
      icon: <FaKeyboard />,
    },
  ];

  return (
    <ExpertiseAreaContainer theme={theme}>
      <h2>{translations[language].title}</h2>
      {areas.map((area) => (
        <ExpertiseArea theme={theme} key={area.title}>
          <IconContainer theme={theme}>{area.icon}</IconContainer>
          <Description theme={theme}>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </Description>
        </ExpertiseArea>
      ))}
    </ExpertiseAreaContainer>
  );
};

export default AreaOfExpertise;
