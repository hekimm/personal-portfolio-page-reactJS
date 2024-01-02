import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import profileImage from "./profile-image.jpeg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "../../actions/loadingActions";
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;
const SkipButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #61dafb;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  z-index: 1001; // Üstte olması için z-index.
  &:hover {
    background-color: #4da8da;
  }
`;
const AnimatedText = styled.div`
  position: absolute;

  font-size: 2em;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  animation: ${(props) => (props.fadeIn ? fadeIn : fadeOut)} 1s ease;
  text-align: center;
  width: 100%;
  font-family: "Poppins", sans-serif; // Örnek bir font. Dilerseniz başka bir font da seçebilirsiniz.
`;

const heartbeat = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  10% {
    transform: translate(-50%, -50%) scale(1.05);
  }
  15% {
    transform: translate(-50%, -50%) scale(1);
  }
  25% {
    transform: translate(-50%, -50%) scale(1.05);
  }
  30% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
`;

const ProfileImage = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(
    -50%,
    -50%
  ); // Bu kod profil resmini tam merkeze yerleştiriyor
  z-index: 10;
  border: 3px solid #ffffff;
  box-shadow:
    0 0 25px #61dafb,
    0 0 5px #61dafb;
  animation: ${heartbeat} 1.5s infinite;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;
const borderAnimation = keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
`;

const TextBorder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid #61dafb; // Mavi rengi kullanıyoruz.
  box-shadow:
    0 0 25px #61dafb,
    0 0 5px #61dafb;
  border-radius: 10px;
  width: 0;
  height: 0;
  animation: ${borderAnimation} 1.5s ease forwards;
  opacity: 0;
  z-index: -1; // Metnin altında olmasını sağlar.
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const dashOne = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 85, 150;
    stroke-dashoffset: -40;
  }
  100% {
    stroke-dasharray: 85, 150;
    stroke-dashoffset: -140;
  }
`;

const dashTwo = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  70% {
    stroke-dasharray: 110, 150;
    stroke-dashoffset: -50;
  }
  100% {
    stroke-dasharray: 110, 150;
    stroke-dashoffset: -150;
  }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: background-color 1.5s; // Arka plan renginin yumuşak bir şekilde değişmesini sağlamak için geçiş süresini 1.5 saniye olarak belirledik.
  background-color: ${(props) => props.bgColor || "rgba(0, 0, 0, 0.9)"};
`;

const Spinner = styled.svg`
  animation: ${rotate} 3.5s linear infinite;
  margin: -100px 0 0 -100px;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & .pathOne {
    stroke: #61dafb; // Mavi renk kullandık.
    stroke-linecap: round;
    animation: ${dashOne} 1.9s ease-in-out infinite;
  }

  & .pathTwo {
    stroke: #ff6b6b; // Canlı bir kırmızı ton kullandık.
    stroke-linecap: round;
    animation: ${dashTwo} 2.3s ease-in-out infinite;
  }
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
  }
`;

const Loading = () => {
  const [loading, setLoadingState] = useState(true);
  const [showText, setShowText] = useState(false); // Metinlerin görünürlüğü için yeni bir state
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [welcome, setWelcome] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const backgroundColors = [
    "rgba(0, 0, 0, 0.9)",
    "#232323",
    "#464646",
    "#696969",
  ];

  const texts = [
    "Ben Hekimcan Aktaş",
    "Yazılım Mühendisliği Öğrencisi",
    "Full Stack Web Developer",
    "Jr.Data Scientist",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingState(false);
      setShowText(true); // Metinleri göstermeye başla
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let timeout;
    if (showText) {
      setWelcome(true);
      timeout = setTimeout(() => {
        setWelcome(false);
        setCurrentIndex(0);
      }, 2000);
    }

    return () => timeout && clearTimeout(timeout);
  }, [showText]);

  useEffect(() => {
    let timeout;
    if (currentIndex > -1) {
      timeout = setTimeout(() => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < texts.length) {
          setCurrentIndex(nextIndex);
        }
      }, 1500);
    }

    return () => timeout && clearTimeout(timeout);
  }, [currentIndex, texts.length]);

  const handleSkip = () => {
    dispatch(setLoading(false));
    navigate("/");
  };

  return (
    <LoadingContainer bgColor={backgroundColors[currentIndex + 1]}>
      <SkipButton onClick={handleSkip}>Intro'yu Atla</SkipButton>

      {loading && (
        <>
          <ProfileImage src={profileImage} alt="Profil Resmi" />
          <Spinner viewBox="0 0 200 200">
            <circle
              className="pathOne"
              cx="100"
              cy="100"
              r="80"
              fill="none"
              strokeWidth="4"
            />
            <circle
              className="pathTwo"
              cx="100"
              cy="100"
              r="60"
              fill="none"
              strokeWidth="4"
            />
          </Spinner>
        </>
      )}
      {welcome && (
        <>
          <AnimatedText fadeIn={true}>Hoşgeldiniz!</AnimatedText>
          <TextBorder />
        </>
      )}
      {currentIndex > -1 && (
        <>
          <AnimatedText fadeIn={currentIndex % 2 === 0}>
            {texts[currentIndex]}
          </AnimatedText>
          <TextBorder />
        </>
      )}
    </LoadingContainer>
  );
};

export default Loading;
