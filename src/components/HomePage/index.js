import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../actions/loadingActions";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import BusinessCard from "./Hero";
import Skill from "./Skills";
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
import { Carousel } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap"; // React Bootstrap'ten gerekli bileşenleri import et

import profileImageUrl from "./resim-23.png";
import Loading from "../Loading";
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
const MoreInfoButton = styled(Link)`
  display: inline-block;
  background-color: #61dafb;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 20px;
  transition:
    background-color 0.3s,
    transform 0.3s;

  &:hover {
    background-color: #4da8da;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
const FeaturedProjectsContainer = styled.div`
  width: 100%;
  padding: 40px 0;
  background-color: #1c1e22;
  color: white;
`;
const ControlIcon = styled.span`
  background-color: #343a40;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    background: white;
    mask: url("data:image/svg+xml;utf8,<svg ...></svg>") no-repeat 50% 50%;
    mask-size: 100%;
  }
`;
const ProjectCarousel = styled(Carousel)`
  max-width: 1200px;
  margin: auto;

  .carousel-item {
    text-align: center;
    padding: 20px;
    background-color: #282c34;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }

  .carousel-indicators {
    button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin: 0 5px;
      border: none;
      background-color: #adb5bd;
    }

    .active {
      background-color: #61dafb;
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    background-color: transparent;
    border: none;
    font-size: 24px;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: #343a40;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .carousel-control-prev:hover,
  .carousel-control-next:hover {
    background-color: rgba(52, 58, 64, 0.8);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const ProjectTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.75em;
  color: #61dafb;
`;

const ProjectDescription = styled.p`
  font-size: 1em;
  color: #f4f4f4;
  line-height: 1.5;
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
const AboutSection = styled.div`
  color: white;
  padding: 20px;
  border-radius: 10px;
  background-color: #20232a;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
  margin: 20px;
  width: 90%;
  max-width: 600px; // Maksimum genişlik
  text-align: center; // Metni ortala

  @media (min-width: 768px) {
    // Büyük ekranlar için ek stil tanımları
    width: 100%;
    padding: 20px;
    text-align: left; // Metni sola hizala
  }
`;

const ProfileAndAboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; // Büyük ekranlar için iki sütun
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Küçük ekranlar için tek sütun
  }
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
  width: fit-content;
  @media (min-width: 768px) {
    // Büyük ekranlar için ek stil tanımları
    width: 100%;
  }
`;

const ProfileImage = styled.img`
  width: 250px; // Resim genişliği
  border-radius: 10px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 100%; // Küçük ekranlarda genişlik %100
  }
  @media (min-width: 768px) {
    width: 400px;
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
        <ExternalIcon
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
          alt="csharp"
        />
        <ExternalIcon
          src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
          alt="sqlserver"
        />
        <ExternalIcon
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"
          alt="dotnet"
        />
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
      "Software Engineer ",
      "Software Developer ",
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
      <div>
        <HeroContainer>
          <ProfileAndAboutContainer>
            <ProfileContainer>
              <ProfileImage src={profileImageUrl} alt="Hekimcan Aktaş" />
              <Name>Hekimcan Aktaş</Name>
            </ProfileContainer>
            <TypingText>
              {this.state.currentTitle}
              <Caret>|</Caret>
            </TypingText>
          </ProfileAndAboutContainer>
          <Container fluid>
            <Row>
              {/* Büyük ekranlarda offset ekleyerek bileşenleri merkeze al */}
              <Col xs={12} md={5} lg={{ span: 4, offset: 1 }}>
                <BusinessCard />
              </Col>
              <Col xs={12} md={5} lg={{ span: 4, offset: 2 }}>
                <Skill />
              </Col>
            </Row>
          </Container>
          <AboutSection>
            <h2>Hakkımda</h2>
            <p>
              Ben Hekimcan Aktaş,Yazılım ve Programlama tutkulu bir Yazılım
              Geliştiricisiyim,
            </p>
            <p>Yazılım Mühendisliği - 2. Sınıf</p>
            <p>
              Manisa Celal Bayar Üniversitesi Yazılım Mühendisliği bölümünde 2.
              sınıf öğrencisiyim.
            </p>
            <p>
              Bölümümde aldığım eğitimin yanı sıra, bireysel olarak da sürekli
              öğrenme ilkesiyle yeni teknolojileri, dilleri ve araçları
              öğrenmeye devam ediyorum.
            </p>
            {/* Hakkımda metni */}
            <MoreInfoButton to="/about">
              Hakkımda Detaylı Bilgi İçin
            </MoreInfoButton>
          </AboutSection>
        </HeroContainer>

        {/* Diğer ana sayfa bileşenleri buraya eklenebilir */}
      </div>
    );
  }
}
function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    // Yüklenme ekranını göstermek için
    dispatch(setLoading(true));

    const timeout = setTimeout(() => {
      // Yüklenme ekranını gizlemek için
      dispatch(setLoading(false));
    }, 13000); // 13 saniye sonra yüklenme ekranını kapat

    return () => clearTimeout(timeout);
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Hero />
          <Skills />

          {/* Diğer ana sayfa bileşenleri buraya eklenebilir */}
          {/* Öne Çıkan Projeler Carousel */}
          <FeaturedProjectsContainer>
            <ProjectCarousel
              prevIcon={
                <span
                  aria-hidden="true"
                  className="carousel-control-prev-icon"
                />
              }
              nextIcon={
                <span
                  aria-hidden="true"
                  className="carousel-control-next-icon"
                />
              }
              prevLabel=""
              nextLabel=""
            >
              <Carousel.Item>
                <ProjectImage
                  src="https://hekimcanaktas.com/static/media/netflix-clone-9.f076741bb3825cefead7.png"
                  alt="Project 1"
                />
                <ProjectTitle>Netflix Clone Project</ProjectTitle>
                <ProjectDescription>
                  13.10.2023 'te Enes Doğan ile Netflix Clone kodlanması
                  projesine başladık.
                </ProjectDescription>
                <ProjectDescription>
                  Her gün adım adım ilerliyoruz.
                </ProjectDescription>
                <ProjectDescription>
                  Bu süreçte ben Frontend 'i tasarlayıp kodlarken Enes Doğan ise
                  Backend kodlarını kodlamaktadır. Şu anda bu proje üzerinde
                  çalışıyoruz ve kodlanmaya devam edilmektedir.
                </ProjectDescription>
              </Carousel.Item>
              <Carousel.Item>
                <ProjectImage
                  src="https://hekimcanaktas.com/static/media/image-1.4766aad0641928ea9e88.png"
                  alt="Project 2"
                />
                <ProjectTitle>
                  E-commerce checkout page with React and Redux
                </ProjectTitle>
                <ProjectDescription>
                  👨‍💻 Bu proje, gerçek zamanlı animasyonlu kredi kartı geri
                  bildirimi sunan bir form uygulamasıdır.
                </ProjectDescription>
                <ProjectDescription>
                  Bu projede iyi ve güzel bir kullanıcı deneyimi hedefledim🔄✨
                </ProjectDescription>
              </Carousel.Item>
              <Carousel.Item>
                <ProjectImage
                  src="https://hekimcanaktas.com/static/media/resim-1.8986daecb21a5e3dc280.jpg"
                  alt="Project 3"
                />
                <ProjectTitle>Weatherly Portal</ProjectTitle>
                <ProjectDescription>
                  Bootstrap 4, jQuery ve OpenWeatherMap API ile oluşturulan Hava
                  Tahmini Portalı, kullanıcıların seçtikleri şehir veya bölge
                  için mevcut hava durumunu ve yaklaşan saatlik tahminleri
                  kontrol etmelerine olanak tanır.
                </ProjectDescription>

                <ProjectDescription>
                  {" "}
                  Koyu ve açık mod için tema değiştirme özelliği içerir.
                </ProjectDescription>
              </Carousel.Item>
              <Carousel.Item>
                <ProjectImage
                  src="https://hekimcanaktas.com/static/media/photo-2.2499ba8d81a9ccc363b0.jpg"
                  alt="Project 4"
                />
                <ProjectTitle>
                  Code Editor that compiles HTML-CSS-JS
                </ProjectTitle>
                <ProjectDescription>
                  Code Editor, geliştiricilere HTML, CSS ve JavaScript kodlarını
                  tarayıcı içinde anında yazma, düzenleme ve görselleştirme
                  imkanı sunan sofistike ve modern bir integrated development
                  environment (IDE)dir.
                </ProjectDescription>

                <ProjectDescription>
                  {" "}
                  Güçlü ACE Editör Library kullanarak sözdizimi vurgulama, Emmet
                  kısaltmaları ve otomatik tamamlama sağlayarak
                  zenginleştirilmiş bir kodlama deneyimi sunar.
                </ProjectDescription>
              </Carousel.Item>
            </ProjectCarousel>
          </FeaturedProjectsContainer>
        </div>
      )}
    </>
  );
}

export default App;
