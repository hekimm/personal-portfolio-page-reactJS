import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Devicon';
    src: url('https://raw.githubusercontent.com/devicons/devicon/master/fonts/devicon.ttf') format('truetype');
  }
`;
const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rgbKeyLight = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const SkillsCard = styled.div`
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background: linear-gradient(
    -45deg,
    #ee7752,
    #e73c7e,
    #23a6d5,
    #23d5ab,
    #ee7752
  );
  background-size: 400% 100%;
  animation: ${rgbKeyLight} 15s ease-in-out infinite;
  padding: 40px;
  margin: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const SkillIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  color: white;
  cursor: pointer;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
`;
const HtmlIcon = styled(FaHtml5)`
  color: #e34c26;
`;

const CssIcon = styled(FaCss3Alt)`
  color: #1572b6;
`;

const JsIcon = styled(FaJsSquare)`
  color: #f7df1e;
`;

const ReactIcon = styled(FaReact)`
  color: #61dbfb;
`;

const NodeIcon = styled(FaNodeJs)`
  color: #68a063;
`;

const AngularIcon = styled(FaAngular)`
  color: #b52e31;
`;

const SassIcon = styled(FaSass)`
  color: #cc6699;
`;

const BootstrapIcon = styled(FaBootstrap)`
  color: #563d7c;
`;

const ExternalIcon = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
`;

function Skills() {
  return (
    <SkillsContainer>
      <GlobalStyle />
      <SkillsCard>
        <SkillIcon>
          <HtmlIcon />
        </SkillIcon>
        <SkillIcon>
          <CssIcon />
        </SkillIcon>

        <SkillIcon>
          <SassIcon />
        </SkillIcon>
        <SkillIcon>
          <BootstrapIcon />
        </SkillIcon>
        <SkillIcon>
          <JsIcon />
        </SkillIcon>
        <SkillIcon>
          <ExternalIcon
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original-wordmark.svg"
            alt="jQuery"
          />
        </SkillIcon>
        <SkillIcon>
          <ExternalIcon
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="TypeScript"
          />
        </SkillIcon>
        <SkillIcon>
          <AngularIcon />
        </SkillIcon>
        <SkillIcon>
          <ReactIcon />
        </SkillIcon>
        <SkillIcon>
          <ExternalIcon
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="Redux"
          />
        </SkillIcon>
        <SkillIcon>
          <ExternalIcon
            src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
            alt="Next.js"
          />
        </SkillIcon>
        <SkillIcon>
          <ExternalIcon
            src="https://reactnative.dev/img/header_logo.svg"
            alt="React Native"
          />
        </SkillIcon>
        <SkillIcon>
          <NodeIcon />
        </SkillIcon>
        <SkillIcon>
          <ExternalIcon
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="MongoDB"
          />
        </SkillIcon>

        <SkillIcon>
          <ExternalIcon
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
            alt="C"
          />
        </SkillIcon>
        <SkillIcon>
          <ExternalIcon
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
            alt="C++"
          />
        </SkillIcon>
        <SkillIcon>
          <ExternalIcon
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="Python"
          />
        </SkillIcon>

        <SkillIcon>
          <ExternalIcon
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="Git"
          />
        </SkillIcon>
        {/* Diğer ikonları da buraya ekleyebilirsiniz. */}
      </SkillsCard>
    </SkillsContainer>
  );
}

export default Skills;
