import styled, { keyframes } from "styled-components";
import profileImage from "./profile-image.jpeg";
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
  transform: translate(-50%, -50%);
  z-index: 10;
  border: 3px solid #ffffff;
  box-shadow:
    0 0 25px #61dafb,
    0 0 5px #61dafb;
  animation: ${heartbeat} 1.5s infinite; // Heartbeat animasyonunu ekledik.
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
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Spinner = styled.svg`
  animation: ${rotate} 3.5s linear infinite;
  margin: -100px 0 0 -100px;
  width: 200px;
  height: 200px;

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
`;

const Loading = () => (
  <LoadingContainer>
    <ProfileImage src={profileImage} alt="Profil Resmi" />
    <Spinner viewBox="0 0 200 200">
      <circle
        className="pathOne"
        cx="100"
        cy="100"
        r="80"
        fill="none"
        strokeWidth="4"
      ></circle>
      <circle
        className="pathTwo"
        cx="100"
        cy="100"
        r="60"
        fill="none"
        strokeWidth="4"
      ></circle>
    </Spinner>
  </LoadingContainer>
);

export default Loading;
