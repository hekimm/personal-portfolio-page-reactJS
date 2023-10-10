import React, { useState, useEffect } from "react";
import styled from "styled-components";
import profileImage from "./profile-image.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import firstCardImage from "./first-card-image.jpeg";
import secondCardImage from "./second-card-image.jpeg";
import thirdCardImage from "./teog-sonuc.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../Routes";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from ".././../actions/loadingActions";
import { languageDescriptions } from "./LanguageDescriptions";
import Loading from "../Loading/index";
import NewTelevisionImage from "./television.png";
import NewVideoSource from "./video.mp4";
import { FaDev, FaArrowLeft } from "react-icons/fa";
import { FaJava, FaAndroid, FaApple, FaSwift } from "react-icons/fa";

const mobile = "576px";
const tablet = "768px";
const desktop = "992px";
const largeDesktop = "1200px";

const NewTelevisionContainer = styled.div`
  position: relative;
  width: 80vw;
  height: 60vw;
  cursor: pointer; // Tıklanabilir olduğunu belirtmek için
  transition: transform 0.3s ease-in-out; // Ölçeklendirme efektini yumuşatmak için geçiş ekledik.
  margin-top: 40px;
  &:active {
    transform: scale(
      1
    ); // Aktif (tıklanma) durumunda ölçeklendirme efektini geri al
  }

  &::before {
    content: "";
    background: url(${(props) => props.televisionImage}) no-repeat center;
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media (min-width: ${tablet}) and (max-width: ${desktop}) {
    width: 700px;
    height: 500px;
  }

  @media (min-width: ${desktop}) {
    width: 900px;
    height: 700px;
  }
`;

const NewInnerVideo = styled.video`
  width: 54.5%; // Televizyonun içine sığdırmak için
  height: 100%; // Televizyonun içine sığdırmak için
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${mobile}) {
    width: 54%; // Burada oranı tahmini olarak ayarladım
    height: 110%; // Burada oranı tahmini olarak ayarladım
  }

  @media (min-width: ${tablet}) and (max-width: ${desktop}) {
    width: 52%; // Burada oranı tahmini olarak ayarladım
    height: 105%; // Burada oranı tahmini olarak ayarladım
  }
  &[disablePictureInPicture] {
    // Bu özelliği devre dışı bırakmak için
    disablepictureinpicture: true;
  }
`;

import {
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaProjectDiagram,
  FaArrowRight,
} from "react-icons/fa";

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-color: #282c34;
  min-height: 100vh; /* Her zaman tüm ekranı kaplaması için minimum yükseklik değerini ayarladık. */
  justify-content: space-between; /* Navbar ve Footer arasında içeriği merkezlemek için. */
`;

const Card = styled.article`
  background-color: #64ccc5;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
  transition:
    transform 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    background-color: #176b87;
    color: #fffff0;
  }
`;
const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ButtonBase = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition:
    background-color 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  svg {
    margin-right: 10px;
    font-size: 20px; // iyi bir denge sağlamak için ikonun boyutunu ayarladık
  }

  &:hover {
    transform: translateY(
      -2px
    ); // butonun hafifçe yukarı doğru hareket etmesini sağlar
  }

  &:active {
    transform: translateY(
      1px
    ); // butona tıklanıldığında aşağıya doğru hafif hareket
  }
`;

const AboutRouteButton = styled(ButtonBase)`
  background-color: #4a90e2;
  color: white;
  position: absolute; // To position it relative to the TelevisionContainer
  bottom: -10px; // Adjusted from -50px to -10px to move it closer to the television
  left: 50%;
  transform: translateX(-50%);
  border-radius: 25px; // Rounded edges for a modern look
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for elevation
  padding: 15px 30px; // Proper padding
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #357abd;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); // Enhanced shadow on hover for depth
    transform: translateY(-2px) translateX(-50%); // Slight upward movement for interaction feedback
  }

  &:active {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); // Subtle shadow on click
    transform: translateY(0px) translateX(-50%); // Reset to original position when clicked
  }

  svg {
    margin-right: 10px; // Spacing between icon and text
  }
  @media (max-width: ${mobile}) {
    bottom: -5px; // Adjust position for mobile
    padding: 12px 20px; // Reduce padding for mobile
  }

  @media (min-width: ${tablet}) and (max-width: ${desktop}) {
    bottom: -8px; // Adjust position for tablet
    padding: 14px 25px; // Adjust padding for tablet
  }

  @media (min-width: ${largeDesktop}) {
    bottom: -15px; // Adjust position for larger desktops
    padding: 18px 35px; // Increase padding for larger desktops
  }
`;

const AboutButton = styled(ButtonBase)`
  background-color: #64ccc5;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProjectButton = styled(ButtonBase)`
  background-color: #64ccc5;
  color: white;

  &:hover {
    background-color: #218838;
  }
`;

const MainCard = styled.div`
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const ProfileImage = styled(LazyLoadImage)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #2c3e50;
  margin-bottom: 20px;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
  }
`;

const ProfileName = styled.h2`
  color: #61dafb;
  font-size: 24px;
`;
const ProfileTitle = styled.h3`
  color: #ffffff; // Beyaz renk
  font-size: 18px; // Font boyutu
  text-align: center; // Merkez hizalama
`;

const TechnologyIcons = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  svg {
    transition:
      transform 0.2s ease-in-out,
      color 0.2s ease-in-out;
    cursor: pointer;
    color: #61dafb;
    &:hover {
      transform: scale(1.2);
      color: white;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 10;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1f2023;
  padding: 20px;
  border-radius: 10px;
  z-index: 11;
  width: 80%;
  max-width: 500px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ModalHeader = styled.div`
  font-size: 20px;
  color: #61dafb;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const ModalContent = styled.pre`
  color: #61dafb;
  font-size: 18px;
  background-color: #282c34;
  padding: 10px;
  border-radius: 5px;
  overflow-y: auto;
  max-height: 300px;
  white-space: pre-wrap;
`;

const CloseButton = styled.button`
  background-color: #333;
  color: #61dafb;
  border: none;
  cursor: pointer;
  background: transparent;
  position: absolute;
  top: 10px;
  right: 10px;
  &:focus {
    outline: none;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: -20px; /* overlay'i resmin altına taşıyın */
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 5px;
  font-size: 12px; /* font boyutunu küçültün */
  border-radius: 0 0 10px 10px; /* yalnızca alt köşeleri yuvarlayın */
  opacity: 0; /* başlangıçta görünmez yapın */
  transition: opacity 0.3s ease;
  position: absolute;
  bottom: 0; /* altına değil, üstüne yerleştirin */
  &:hover {
    opacity: 1; /* hover durumunda görünür yapın */
  }
`;

const ImageCard = styled.div`
  min-width: 90px;
  min-height: 90px;
  max-width: 150px; // ya da ihtiyacınıza göre bir değer
  max-height: 150px; // ya da ihtiyacınıza göre bir değer
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out; // transition ekledik
  &:hover {
    transform: scale(1.15); // daha büyük bir scale değeri
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.3); // daha belirgin bir shadow
  }
`;

const StyledLazyLoadImage = styled(LazyLoadImage)`
  width: 100%; // Resmin genişliği parent elementine göre ayarlanır.
  height: 100%; // Resmin yüksekliği parent elementine göre ayarlanır.
  object-fit: cover; // Resmin, parent elementini dolduracak şekilde ayarlanır.
  border-radius: 10px;
`;
const CardContentText = styled.p`
  white-space: pre-line;
`;
const ThirdCardImage = styled(StyledLazyLoadImage)`
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); // Belirgin bir scale değeri
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.3); // Daha belirgin bir shadow
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  font-weight: 500;
  padding: 1.5rem 0; // Padding eklenerek yükseklik arttırılır.

  &:after {
    content: none; // Removing the content property will prevent the pseudo-element from being generated.
  }

  &:last-child:after {
    display: none;
  }

  @media (min-width: ${tablet}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${desktop}) {
    font-size: 1.5rem;
  }
`;

const HomePage = () => {
  const [showArticles, setShowArticles] = useState(false);
  const aboutButtonText = useSelector(
    (state) => languageDescriptions.aboutButton[state.language.value],
  );

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate(ROUTES.ABOUT);
  };

  const navigateToProjects = () => {
    navigate(ROUTES.PROJECTS);
  };
  const handleTelevisionClick = () => {
    // Örnek olarak bir rota yönlendirmesi yapabilirsiniz.
    // İstediğiniz bir işlevsellik eklemek için bu fonksiyonu değiştirebilirsiniz.
    console.log("The computer has been clicked");
  };
  const [modalContent, setModalContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const language = useSelector((state) => state.language.value);

  const openModal = (languageKey) => {
    const description = languageDescriptions[languageKey][language];
    setModalContent(description);
    setShowModal(true);
  };

  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);

  const isLoading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    dispatch(setLoading(true));
    const timer = setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <HomeContainer>
      <MainCard>
        <ProfileContainer>
          <ProfileImage
            src={profileImage}
            alt="Hekimcan AKTAŞ"
            onClick={navigateToAbout}
            effect="blur"
          />
          <ProfileName>Hekimcan AKTAŞ</ProfileName>
          <ProfileTitle>
            {languageDescriptions.profileTitle[language]}
          </ProfileTitle>

          <TechnologyIcons>
            <FaCss3Alt size={50} onClick={() => openModal("CSS")} />
            <FaBootstrap size={50} onClick={() => openModal("Bootstrap")} />
            <FaJsSquare size={50} onClick={() => openModal("JavaScript")} />

            <FaReact size={50} onClick={() => openModal("React.js")} />
            <FaNodeJs size={50} onClick={() => openModal("Node.js")} />
            <FaJava size={50} onClick={() => openModal("Java")} />
            <FaAndroid
              size={50}
              onClick={() => openModal("Android App Development")}
            />
            <FaSwift size={50} onClick={() => openModal("Swift")} />
            <FaApple
              size={50}
              onClick={() => openModal("IOS App Development")}
            />
          </TechnologyIcons>
          <ModalOverlay show={showModal} onClick={() => setShowModal(false)}>
            <Modal onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>
              <ModalHeader>
                {language === "tr"
                  ? "Dil/Framework Tanıtımı"
                  : "Language/Framework Introduction"}
              </ModalHeader>

              <ModalContent>{modalContent}</ModalContent>
            </Modal>
          </ModalOverlay>
          <Description>
            <NewTelevisionContainer
              onClick={handleTelevisionClick}
              televisionImage={NewTelevisionImage}
            >
              <NewInnerVideo
                disablePictureInPicture
                playsInline
                muted
                autoPlay
                loop
              >
                <source src={NewVideoSource} type="video/mp4" />
                Tarayıcınız bu video formatını desteklemiyor.
              </NewInnerVideo>

              <AboutRouteButton onClick={navigateToAbout}>
                <FaDev /> {aboutButtonText} <FaArrowLeft />
              </AboutRouteButton>
            </NewTelevisionContainer>
          </Description>
          <ProjectButton onClick={navigateToProjects}>
            <FaProjectDiagram /> {languageDescriptions.projectsButton[language]}
          </ProjectButton>
          <AboutButton onClick={() => setShowArticles(!showArticles)}>
            {languageDescriptions.startJourneyButton[language]} <FaArrowRight />
          </AboutButton>
        </ProfileContainer>

        {showArticles && (
          <>
            <Card data-aos="fade-up">
              <CardContent>
                <ImageCard
                  onMouseEnter={() => setHovered(true)} // onMouseEnter ve onMouseLeave kullanılır.
                  onMouseLeave={() => setHovered(false)}
                >
                  <StyledLazyLoadImage
                    src={firstCardImage}
                    alt="First Card"
                    effect="blur"
                  />
                  {hovered && (
                    <ImageOverlay>Image by vectorpouch on Freepik</ImageOverlay>
                  )}
                  {/* Bu satır eklenmiştir */}
                </ImageCard>
                <CardContentText>
                  {languageDescriptions.card1[language]}
                </CardContentText>
              </CardContent>
            </Card>
            <Card data-aos="fade-up">
              <CardContent>
                <ImageCard
                  onMouseEnter={() => setHovered(true)} // onMouseEnter ve onMouseLeave kullanılır
                  onMouseLeave={() => setHovered(false)}
                >
                  <StyledLazyLoadImage
                    src={secondCardImage}
                    alt="Second Card"
                    effect="blur"
                  />
                  {hovered && (
                    <ImageOverlay>Image by vectorpouch on Freepik</ImageOverlay>
                  )}
                  {/* Bu satır eklenmiştir */}
                </ImageCard>
                <CardContentText>
                  {languageDescriptions.card2[language]}
                </CardContentText>
              </CardContent>
            </Card>
            <Card data-aos="fade-up">
              <CardContent>
                <ThirdCardImage
                  src={thirdCardImage}
                  alt="Third Card"
                  effect="blur"
                />
                <CardContentText>
                  {languageDescriptions.card3[language]}
                </CardContentText>
              </CardContent>
            </Card>
          </>
        )}
      </MainCard>
    </HomeContainer>
  );
};

export default HomePage;
