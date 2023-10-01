import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaSass,
  FaBootstrap,
  FaPython,
  FaGit,
  FaDatabase,
} from "react-icons/fa";
import lightReactRouterIcon from "./react-router-color.png"; // Light tema için ikonun path'ini yazmalısınız
import darkReactRouterIcon from "./react-router-color-inverted.png"; // Dark tema için ikonun path'ini yazmalısınız

import { useSelector } from "react-redux";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const SkillsContainer = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
  padding: 30px; // 50px'den 30px'e düşürüldü
  max-width: 1200px;
  background: ${({ theme }) => (theme === "light" ? "#f5f5f5" : "#2b2b2b")};
  border-radius: 12px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const CategoryContainer = styled.div`
  margin-bottom: 40px;
`;

const CategoryTitle = styled.h3`
  font-size: 1.6em;
  color: ${({ theme }) => (theme === "light" ? "#2c3e50" : "#f4f4f4")};
  margin-bottom: 20px;
  border-bottom: 3px solid #61dafb;
  padding-bottom: 10px;
`;
const skillHover = keyframes`
  0% {
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.0);
    transform: translateY(0);
  }
  100% {
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

const iconRotate = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 10px;
  background: ${({ theme }) => (theme === "light" ? "transparent" : "#333")};

  &:hover {
    animation: ${skillHover} 0.3s ease forwards;
    transform: scale(1.05);
    box-shadow:
      0 14px 28px rgba(0, 0, 0, 0.1),
      0 10px 10px rgba(0, 0, 0, 0.05);
    background: ${({ theme }) => (theme === "light" ? "#fff5ee" : "#222")};
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5em;
  margin-right: 15px;
  color: ${(props) => props.color || "#333"};
  background: transparent;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 60px;
  height: 60px;

  &:hover {
    animation: ${iconRotate} 0.6s ease-in-out;
    box-shadow:
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 15px #00f2ff,
      0 0 20px #00f2ff,
      0 0 25px #00f2ff,
      0 0 30px #00f2ff,
      0 0 35px #00f2ff;
  }
`;

const SkillName = styled.span`
  flex: 1;
  font-weight: 600;
  color: ${({ theme }) => (theme === "light" ? "#34495e" : "#f4f4f4")};
  font-size: 1.1em;
`;

const ProgressBar = styled.div`
  background: #dcdcdc;
  border-radius: 50px;
  flex: 3;
  height: 22px;
  margin-left: 15px;
  overflow: hidden;
  position: relative;
`;
const move = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Progress = styled.div`
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  border-radius: 50px;
  height: 100%;
  transition: width 2s;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      60deg,
      transparent,
      rgba(255, 255, 255, 0.5),
      transparent
    );
    animation: move 2s infinite;
  }
`;

const ProgressText = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 500;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f4f4f4")};
`;
const textGlow = keyframes`
  0% {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00ff, 0 0 20px #ff00ff, 0 0 25px #ff00ff, 0 0 30px #ff00ff, 0 0 35px #ff00ff;
  }
  100% {
    text-shadow: 0 0 10px #fff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff, 0 0 50px #ff00ff, 0 0 60px #ff00ff, 0 0 70px #ff00ff;
  }
`;
const Explanation = styled.p`
  font-style: italic;
  margin-top: 10px;
  font-size: 0.9em;
  color: ${({ theme }) => (theme === "light" ? "#777" : "#aaa")};
  text-align: center;
  animation: textGlow 2s infinite alternate;
`;

const Skills = () => {
  const theme = useSelector((state) => state.theme.theme);
  const language = useSelector((state) => state.language.value);

  const titles = {
    tr: {
      "Front-End": "Front-End",
      "Kütüphaneler & Frameworkler": "Kütüphaneler ve  Frameworkler",
      "Back-End": "Back-End",
      Veritabanları: "Veritabanları",
      "Versiyon(Sürüm) Kontrolü": "Versiyon Kontrolü",
      "Mobil Uygulama": "Mobil Uygulama Geliştirme",
      explanation: "Diller ve Araçlar",
    },
    en: {
      "Front-End": "Front-End",
      "Kütüphaneler & Frameworkler": "Libraries & Frameworks",
      "Back-End": "Back-End",
      Veritabanları: "Databases",
      "Versiyon(Sürüm) Kontrolü": "Version Control",
      "Mobil Uygulama": "Mobile App Development",
      explanation: "Languages and Tools",
    },
  };

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
    if (theme === "light") {
      document.body.style.backgroundColor = "#f5f5f5";
    } else {
      document.body.style.backgroundColor = "#2b2b2b";
    }
  }, [theme]);

  useEffect(() => {
    setLoaded(true);
  }, []);
  const skillCategories = {
    "Front-End": [
      { name: "HTML", icon: <FaHtml5 />, proficiency: 90, color: "#E34F26" },
      { name: "CSS", icon: <FaCss3Alt />, proficiency: 85, color: "#1572B6" },
      { name: "SASS", icon: <FaSass />, proficiency: 80, color: "#C76494" },
      {
        name: "JavaScript",
        icon: <FaJsSquare />,
        proficiency: 85,
        color: "#F7DF1E",
      },
    ],
    "Kütüphaneler & Frameworkler": [
      {
        name: "Bootstrap",
        icon: <FaBootstrap />,
        proficiency: 80,
        color: "#7952B3",
      },
      {
        name: "jQuery",
        icon: (
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original-wordmark.svg"
            alt="jQuery"
            style={{ width: "0.9em", height: "0.9em" }}
          />
        ),
        proficiency: 80,
        color: "#0769AD",
      },
      {
        name: "TypeScript",
        icon: (
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            style={{ width: "0.9em", height: "0.9em" }}
          />
        ),
        proficiency: 75,
        color: "#3178C6",
      },
      {
        name: "Angular",
        icon: <FaAngular />,
        proficiency: 75,
        color: "#DD0031",
      },
      {
        name: "React.js",
        icon: <FaReact />,
        proficiency: 75,
        color: "#61DAFB",
      },

      {
        name: "React Router",
        icon: (
          <img
            src={theme === "light" ? lightReactRouterIcon : darkReactRouterIcon}
            alt="React Router"
            style={{ width: "0.9em", height: "0.9em" }}
          />
        ),
        proficiency: 75,
        color: "#CA4245", // Eğer renk ayarlamak isterseniz
      },
      {
        name: "Redux",
        icon: (
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="Redux"
            style={{ width: "0.9em", height: "0.9em" }}
          />
        ),
        proficiency: 80,
        color: "#61DAFB",
      },
      ,
      {
        name: "Next.js",
        icon: (
          <img
            src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
            alt="Next.js"
            style={{ width: "0.9em", height: "0.9em" }}
          />
        ),
        proficiency: 70,
        color: "#61DAFB",
      },
    ],
    "Back-End": [
      {
        name: "C",
        icon: (
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
            alt="C"
            style={{ width: "0.9em", height: "0.9em" }}
          />
        ),
        proficiency: 70,
        color: "#A8B9CC",
      },
      {
        name: "C++",
        icon: (
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
            alt="C++"
            style={{ width: "0.9em", height: "0.9em" }}
          />
        ),
        proficiency: 70,
        color: "#00599C",
      },
      {
        name: "Python",
        icon: (
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="Python"
            style={{ width: "0.9em", height: "0.9em" }}
          />
        ),
        proficiency: 85,
        color: "#3776AB",
      },
      {
        name: "Node.js (Express.js)",
        icon: <FaNodeJs />,
        proficiency: 70,
        color: "#339933",
      },
    ],
    Veritabanları: [
      {
        name: "MongoDB",
        icon: (
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="MongoDB"
            style={{ width: "0.9em", height: "0.9em" }}
          />
        ),
        proficiency: 70,
        color: "#514D64",
      },
    ],

    "Mobil Uygulama": [
      {
        name: "Flutter",
        icon: (
          <img
            src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
            alt="Flutter"
            style={{ width: "0.9em", height: "0.9em" }}
          />
        ),
        proficiency: 30,
        color: "#02569B",
      },
      {
        name: "React Native",
        icon: (
          <img
            src="https://reactnative.dev/img/header_logo.svg"
            alt="React Native"
            style={{ width: "0.9em", height: "0.9em" }}
          />
        ),
        proficiency: 40,
        color: "#61DBFB",
      },
    ],
    "Versiyon(Sürüm) Kontrolü": [
      {
        name: "Git",
        icon: (
          <img
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="Flutter"
            style={{ width: "0.9em", height: "0.9em" }}
          />
        ),
        proficiency: 90,
        color: "#F1502F",
      },
    ],
  };

  return (
    <SkillsContainer theme={theme}>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <CategoryContainer key={category}>
          <CategoryTitle theme={theme}>
            {titles[language][category]}
          </CategoryTitle>
          {skills.map((skill) => (
            <SkillItem key={skill.name} theme={theme}>
              <SkillIcon color={skill.color}>{skill.icon}</SkillIcon>
              <SkillName theme={theme}>{skill.name}</SkillName>
              <ProgressBar>
                <Progress
                  style={{
                    width: loaded ? `${skill.proficiency}%` : "0%",
                  }}
                />
                <ProgressText theme={theme}>{skill.proficiency}%</ProgressText>
              </ProgressBar>
            </SkillItem>
          ))}
        </CategoryContainer>
      ))}
      <Explanation theme={theme}>{titles[language].explanation}</Explanation>
    </SkillsContainer>
  );
};

export default Skills;
