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
import profileImageUrl from "./resim-23.png";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Devicon';
    src: url('https://raw.githubusercontent.com/devicons/devicon/master/fonts/devicon.ttf') format('truetype');
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: #282c34;
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
  justify-content: center; // Yatayda merkezleme
  align-items: center; // Dikeyde merkezleme
  grid-template-columns: repeat(
    4,
    1fr
  ); // Geniş ekranlar için varsayılan olarak 4 sütun
  gap: 40px;
  width: 90%; // Genişliği artır
  max-width: 1200px; // Maksimum genişlik sınırlaması

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    // Orta büyüklükte ekranlar için 3 sütun
  }

  @media (max-width: 900px) {
    gap: 20px;

    grid-template-columns: repeat(2, 1fr); // Daha küçük ekranlar için 2 sütun
  }
`;

const SkillIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center; // İkonun kendi içinde yatayda merkezlenmesi
  align-items: center; // İkonun kendi içinde dikeyde merkezlenmesi
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
const rainbow = keyframes`
  0% { border-color: red; }
  10% { border-color: orange; }
  20% { border-color: yellow; }
  30% { border-color: green; }
  40% { border-color: blue; }
  50% { border-color: indigo; }
  60% { border-color: violet; }
  70% { border-color: purple; }
  80% { border-color: pink; }
  90% { border-color: lightblue; }
  100% { border-color: red; }
`;

// Stil bileşenleri
const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #282c34; // Arka plan rengi
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  border-radius: 15px;
  margin-bottom: 20px;
  background-color: #20232a;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
  border: 5px solid;
  animation: ${rainbow} 8s linear infinite; // Animasyon süresini 8 saniyeye indir
  width: fit-content;
`;

const ProfileImage = styled.img`
  width: 250px; // Resim genişliği
  border-radius: 10px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 100%; // Küçük ekranlarda genişlik %100
  }
`;

const Name = styled.h2`
  color: #f4f4f4; // İsim rengi
  margin: 0;
`;

const TypingText = styled.div`
  font-size: 2em;
  color: #61dafb; // Yazı rengi
  font-family: "Courier New", Courier, monospace;
  overflow: hidden;

  /* Ekstra stil */
  padding: 20px;
  border-radius: 10px;
  background-color: #20232a;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
  margin: 20px;
  max-width: 90%; // Genişlik sınırlaması
  word-wrap: break-word; // Kelimeleri kırma
`;

const Caret = styled.span`
  font-size: inherit; // Yazı font boyutunu miras alır
  color: #61dafb; // İmleç rengi
  animation: blink 1s infinite;
  @keyframes blink {
    50% {
      opacity: 0;
    }
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
      </SkillsCard>
    </SkillsContainer>
  );
}

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.titles = [
      "Software Developer",
      "Software Engineer",
      "Jr. Data Scientist",
      "Full Stack Web Developer",
    ];
    this.state = { currentTitle: "", fullTitle: "" };
  }

  componentDidMount() {
    let currentChar = 0;
    let currentTitleIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentTitle = this.titles[currentTitleIndex];
      let updatedTitle = isDeleting
        ? currentTitle.slice(0, currentChar--)
        : currentTitle.slice(0, currentChar++);

      this.setState({ currentTitle: updatedTitle, fullTitle: currentTitle });

      if (!isDeleting && currentChar === currentTitle.length) {
        setTimeout(() => (isDeleting = true), 1000);
      } else if (isDeleting && currentChar === 0) {
        currentTitleIndex = (currentTitleIndex + 1) % this.titles.length;
        isDeleting = false;
      }

      const typingSpeed = isDeleting ? 150 : 150;
      setTimeout(type, typingSpeed);
    };

    type();
  }

  render() {
   

    return (
      <HeroContainer>
        <ProfileContainer>
          <ProfileImage src={profileImageUrl} alt="Hekimcan Aktaş" />
          <Name>Hekimcan Aktaş</Name>
        </ProfileContainer>
        <TypingText>
          {this.state.currentTitle}
          <Caret>|</Caret>
        </TypingText>
      </HeroContainer>
    );
  }
}
function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Skills />
    </>
  );
}

export default App;
