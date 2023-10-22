import React, { useState, useEffect } from "react"; 
import styled, { keyframes } from "styled-components";
import profileImage from "./resim-23.png";
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

const mobile = "576px";
const tablet = "768px";
const desktop = "992px";
const largeDesktop = "1200px";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const NewTelevisionContainer = styled.div`
  position: relative;
  width: 80vw;
  height: 60vw;

  cursor: pointer; // Tıklanabilir olduğunu belirtmek için
  transition: transform 0.3s ease-in-out; // Ölçeklendirme efektini yumuşatmak için geçiş ekledik.

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
  @media (max-width: ${tablet}) {
    &:hover {
      transform: scale(1.2);
    }
  }
  @media (min-width: ${tablet}) and (max-width: ${desktop}) {
    width: 800px; // 800px'den 900px'ye çıkarıldı.
    height: 600px; // 600px'den 675px'ye çıkarıldı.
  }
  @media (min-width: ${desktop}) {
    width: 1000px; // 1000px'den 1100px'ye çıkarıldı.
    height: 800px; // 800px'den 825px'ye çıkarıldı.
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

// 2. Animasyonu HomeContainer bileşenine ekleyin
const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-color: #282c34;
  min-height: 100vh;
  justify-content: space-between;
  animation: ${fadeIn} 1s ease-in-out;
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
  width: auto;
  padding: 12px 24px;

  /* Adding a subtle transition for background and box-shadow */
  transition:
    background-color 0.3s ease-in-out,
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; // Butonları yatay eksende ortalar.
  gap: 20px; // Butonlar arasında bir boşluk bırakır.
`;

const AboutRouteButton = styled(ButtonBase)`
  background-color: #4a90e2;
  color: white;
  position: absolute; // To position it relative to the TelevisionContainer
  bottom: -20px;
  @media (max-width: ${mobile}) {
    bottom: -10px;
  }
  @media (min-width: ${tablet}) and (max-width: ${desktop}) {
    bottom: -15px;
  }
  @media (min-width: ${largeDesktop}) {
    bottom: -25px;
  }
  // Adjusted from -50px to -10px to move it closer to the television
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
    padding: 12px 20px; // Reduce padding for mobile
  }

  @media (min-width: ${tablet}) and (max-width: ${desktop}) {
    padding: 14px 25px; // Adjust padding for tablet
  }

  @media (min-width: ${largeDesktop}) {
    padding: 18px 35px; // Increase padding for larger desktops
  }
`;

const AboutButton = styled(ButtonBase)`
    background-color: #64ccc5;
    color: white;

    &:hover {
        background-color: #0056b3;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); // Giving more depth when hovered
    }

    @media (max-width: ${mobile}) {
        padding: 12px 20px; // Smaller padding for mobile for better fit
    }

    @media (min-width: ${tablet}) and (max-width: ${desktop}) {
        padding: 12px 24px; // Adjusting for tablet
    }
`;

const ProjectButton = styled(ButtonBase)`
    background-color: #64ccc5;
    color: white;

    &:hover {
        background-color: #218838;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); // Giving more depth when hovered
    }

    @media (max-width: ${mobile}) {
        padding: 12px 20px; // Smaller padding for mobile for better fit
    }

    @media (min-width: ${tablet}) and (max-width: ${desktop}) {
        padding: 12px 24px; // Adjusting for tablet
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

  border: 3px solid #61dafb;
  // Simplified border for a cleaner look
  border-radius: 25px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5); // Add background color for contrast
  max-width: 700px; // Added to ensure content doesn't stretch too wide on larger screens
  margin: 20px auto; // Centering
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); // Drop shadow for depth
`;

const ProfileImage = styled(LazyLoadImage)`
  width: 300px;
  height: 400px;
  border-radius: 25px;
  cursor: pointer; // Tıklanabilir olduğunu belirtmek için

  object-fit: cover;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 30px rgba(97, 218, 251, 0.5);
  }

  @media (min-width: ${tablet}) {
    width: 400px;
    height: 400px;
  }

  @media (min-width: ${desktop}) {
    width: 500px;
    height: 500px;
  }
`;

const blinkingAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const ProfileName = styled.h2`
  color: #61dafb;
  font-size: 1.5rem;
  margin-top: 15px;
  font-family: "Courier New", Courier, monospace;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const ProfileTitle = styled.h3`
  color: #ffffff;
  font-size: 1.2rem;
  margin-top: 10px;
  font-family: "Courier New", Courier, monospace;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
    }, 12000);
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
        </ProfileContainer>

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
        <ButtonContainer>
          <ProjectButton onClick={navigateToProjects}>
            <FaProjectDiagram /> {languageDescriptions.projectsButton[language]}
          </ProjectButton>
          <AboutButton onClick={() => setShowArticles(!showArticles)}>
            {languageDescriptions.startJourneyButton[language]} <FaArrowRight />
          </AboutButton>
        </ButtonContainer>

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
