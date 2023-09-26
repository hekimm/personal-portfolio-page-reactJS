import React from "react";
import styled from "styled-components";
import profileImage from "./profile-image.jpeg";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

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

  svg {
    transition:
      transform 0.3s ease-in-out,
      color 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
      color: #add8e6;
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
            <SectionTitle theme={theme}>Front-End</SectionTitle>
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
            <SectionTitle theme={theme}>Libraries & Frameworks</SectionTitle>
            <SkillsList>
              <Skill>
                <SkillIcon color="#7952B3">
                  <FaBootstrap />
                </SkillIcon>
                Bootstrap
              </Skill>
              <Skill>
                <SkillIcon color="#0769AD">
                  <FaJsSquare />
                </SkillIcon>
                jQuery
              </Skill>
              <Skill>
                <SkillIcon color="#3178C6">
                  <FaJsSquare />
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
                <SkillIcon color="#61DAFB">
                  <FaReact />
                </SkillIcon>
                Next.js
              </Skill>
            </SkillsList>
          </Card>
        </Article>
        <Article>
          <Card theme={theme}>
            <SectionTitle theme={theme}>Back-End</SectionTitle>
            <SkillsList>
              <Skill>
                <SkillIcon color="#3776AB">
                  <FaPython />
                </SkillIcon>
                Python
              </Skill>
              <Skill>
                <SkillIcon color="#339933">
                  <FaNodeJs />
                </SkillIcon>
                Node.js (Express.js)
              </Skill>
            </SkillsList>
          </Card>
        </Article>
        <Article>
          <Card theme={theme}>
            <SectionTitle theme={theme}>Databases</SectionTitle>
            <SkillsList>
              <Skill>
                <SkillIcon color="#514D64">
                  <FaDatabase />
                </SkillIcon>
                MongoDB
              </Skill>
            </SkillsList>
          </Card>
        </Article>
        <Article>
          <Card theme={theme}>
            <SectionTitle theme={theme}>Version Control</SectionTitle>
            <SkillsList>
              <Skill>
                <SkillIcon color="#F1502F">
                  <FaGit />
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
