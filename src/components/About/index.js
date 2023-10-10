import React, { useEffect } from "react";
import styled from "styled-components";
import profileImage from "./profile-image.jpeg";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import lightReactRouterIcon from "./react-router-color.png"; // Light tema için ikonun path'ini yazmalısınız
import darkReactRouterIcon from "./react-router-color-inverted.png"; // Dark tema için ikonun path'ini yazmalısınız

import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaGit,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import translations from "./aboutTranslations";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => (theme === "light" ? "#f4f4f4" : "#333")};
`;

const Article = styled.article`
  margin-bottom: 20px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

const Card = styled.div`
  background-color: ${({ theme }) => (theme === "light" ? "#ffffff" : "#444")};
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f4f4f4")};
  border-radius: 15px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LazyProfileImage = styled(LazyLoadImage)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 5px solid #2c3e50;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f4f4f4")};
  font-weight: bold;
`;
const SectionTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f4f4f4")};
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.1em;
  color: ${({ theme }) => (theme === "light" ? "#555" : "#ccc")};
  margin: 20px 0;
  text-align: center;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  font-size: 1.1em;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Skill = styled.li`
  margin-bottom: 10px;
  text-align: center;
`;

const SkillIcon = styled.span`
  margin-right: 8px;
  color: ${(props) => props.color || "black"};
  font-size: 3em;
  display: inline-flex;

  svg,
  img {
    transition:
      transform 0.3s ease-in-out,
      color 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const About = () => {
  const language = useSelector((state) => state.language.value);

  const theme = useSelector((state) => state.theme.theme);
  const text = {
    part1: translations.part1[language],
    part2: translations.part2[language],
    part3: translations.part3[language],
  };
  const sectionTitles = {
    frontEnd: translations.sectionTitles.frontEnd[language],
    librariesFrameworks:
      translations.sectionTitles.librariesFrameworks[language],
    backEnd: translations.sectionTitles.backEnd[language],
    databases: translations.sectionTitles.databases[language],
    mobileDevelopment: translations.sectionTitles.mobileDevelopment[language],
    versionControl: translations.sectionTitles.versionControl[language],
  };

  return (
    <Main theme={theme}>
      <Container>
        <Article>
          <Card theme={theme}>
            <LazyProfileImage src={profileImage} alt="Hekimcan" effect="blur" />
            <Title theme={theme}>Hekimcan AKTAŞ</Title>
            <Description theme={theme}>{text.part1}</Description>
          </Card>
        </Article>
        <Article>
          <Card theme={theme}>
            <Description theme={theme}>{text.part2}</Description>
          </Card>
        </Article>
        <Article>
          <Card theme={theme}>
            <Description theme={theme}>{text.part3}</Description>
          </Card>
        </Article>
        <Article>
          <Card theme={theme}>
            <SectionTitle theme={theme}>{sectionTitles.frontEnd}</SectionTitle>
            <SkillsList>
              <Skill>
                <SkillIcon color="#E34F26">
                  <FaHtml5 />
                </SkillIcon>
                HTML
              </Skill>
              <Skill>
                <SkillIcon color="#1572B6">
                  <FaCss3Alt />
                </SkillIcon>
                CSS
              </Skill>
              <Skill>
                <SkillIcon color="#C76494">
                  <FaSass />
                </SkillIcon>
                SASS
              </Skill>
              <Skill>
                <SkillIcon color="#F7DF1E">
                  <FaJsSquare />
                </SkillIcon>
                Javascript
              </Skill>
            </SkillsList>
          </Card>
        </Article>
        <Article>
          <Card theme={theme}>
            <SectionTitle theme={theme}>
              {sectionTitles.librariesFrameworks}
            </SectionTitle>
            <SkillsList>
              <Skill>
                <SkillIcon color="#7952B3">
                  <FaBootstrap />
                </SkillIcon>
                Bootstrap
              </Skill>
              <Skill>
                <SkillIcon color="#0769AD">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original-wordmark.svg"
                    alt="jQuery"
                    style={{ width: "60px", height: "60px" }}
                  />
                </SkillIcon>
                jQuery
              </Skill>
              <Skill>
                <SkillIcon color="#3178C6">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                    alt="TypeScript"
                    style={{ width: "60px", height: "60px" }}
                  />
                </SkillIcon>
                TypeScript
              </Skill>
              <Skill>
                <SkillIcon color="#DD0031">
                  <FaAngular />
                </SkillIcon>
                Angular
              </Skill>
              <Skill>
                <SkillIcon color="#61DAFB">
                  <FaReact />
                </SkillIcon>
                React.js
              </Skill>

              <Skill>
                <SkillIcon color="#764ABC">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                    alt="Redux"
                    style={{ width: "60px", height: "60px" }}
                  />
                </SkillIcon>
                Redux
              </Skill>
              <Skill>
                <SkillIcon color="#3178C6">
                  <img
                    src={
                      theme === "light"
                        ? lightReactRouterIcon
                        : darkReactRouterIcon
                    }
                    alt="React Router"
                    style={{ width: "40px", height: "40px" }}
                  />
                </SkillIcon>
                React Router
              </Skill>
              <Skill>
                <SkillIcon color="#000000">
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                    alt="NextJs"
                    style={{ width: "60px", height: "60px" }}
                  />
                </SkillIcon>
                Next.js
              </Skill>
            </SkillsList>
          </Card>
        </Article>
        <Article>
          <Card theme={theme}>
            <SectionTitle theme={theme}>{sectionTitles.backEnd}</SectionTitle>
            <SkillsList>
              <Skill>
                <SkillIcon color="#A8B9CC">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                    alt="C"
                    style={{ width: "60px", height: "60px" }}
                  />
                </SkillIcon>
                C
              </Skill>
              <Skill>
                <SkillIcon color="#00599C">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                    alt="C++"
                    style={{ width: "60px", height: "60px" }}
                  />
                </SkillIcon>
                C++
              </Skill>
              <Skill>
                <SkillIcon color="#3776AB">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                    alt="Python"
                    style={{ width: "60px", height: "60px" }}
                  />
                </SkillIcon>
                Python
              </Skill>
              <Skill>
                <SkillIcon color="#339933">
                  <FaNodeJs />
                </SkillIcon>
                Node.js (Express.js)
              </Skill>
              <Skill>
                <SkillIcon color="#007396">
                  <img
                    src="https://www.vectorlogo.zone/logos/java/java-icon.svg"
                    alt="Java"
                    style={{ width: "60px", height: "60px" }}
                  />
                </SkillIcon>
                Java
              </Skill>
            </SkillsList>
          </Card>
        </Article>
        <Article>
          <Card theme={theme}>
            <SectionTitle theme={theme}>{sectionTitles.databases}</SectionTitle>

            <SkillsList>
              <Skill>
                <SkillIcon color="#514D64">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                    alt="MongoDB"
                    style={{ width: "60px", height: "60px" }}
                  />
                </SkillIcon>
                MongoDB
              </Skill>
            </SkillsList>
          </Card>
        </Article>

        <Article>
          <Card theme={theme}>
            <SectionTitle theme={theme}>
              {sectionTitles.mobileDevelopment}
            </SectionTitle>
            <SkillsList>
              <Skill>
                <SkillIcon color="#61DAFB">
                  <img
                    src="https://reactnative.dev/img/header_logo.svg"
                    alt="React Native"
                    style={{ width: "60px", height: "60px" }}
                  />
                </SkillIcon>
                React Native
              </Skill>
              <Skill>
                <SkillIcon color="#0095D5">
                  <img
                    src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg"
                    alt="Kotlin"
                    style={{ width: "60px", height: "60px" }}
                  />
                </SkillIcon>
                Kotlin
              </Skill>
              <Skill>
                <SkillIcon color="#FA7343">
                  <img
                    src="https://www.vectorlogo.zone/logos/swift/swift-icon.svg"
                    alt="Swift"
                    style={{ width: "60px", height: "60px" }}
                  />
                </SkillIcon>
                Swift
              </Skill>
            </SkillsList>
          </Card>
        </Article>
        <Article>
          <Card theme={theme}>
            <SectionTitle theme={theme}>
              {sectionTitles.versionControl}
            </SectionTitle>
            <SkillsList>
              <Skill>
                <SkillIcon color="#F1502F">
                  <img
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="Git"
                    style={{ width: "60px", height: "60px" }}
                  />
                </SkillIcon>
                Git
              </Skill>
            </SkillsList>
          </Card>
        </Article>
      </Container>
    </Main>
  );
};

export default About;
