import styled, { keyframes } from "styled-components";

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
    stroke-dasharray: 100, 150;
    stroke-dashoffset: -30;
  }
  100% {
    stroke-dasharray: 100, 150;
    stroke-dashoffset: -130;
  }
`;

const dashTwo = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 110, 150;
    stroke-dashoffset: -40;
  }
  100% {
    stroke-dasharray: 110, 150;
    stroke-dashoffset: -140;
  }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Spinner = styled.svg`
  animation: ${rotate} 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;

  & .pathOne {
    stroke: #61dafb;
    stroke-linecap: round;
    animation: ${dashOne} 1.5s ease-in-out infinite;
  }

  & .pathTwo {
    stroke: #fff;
    stroke-linecap: round;
    animation: ${dashTwo} 2s ease-in-out infinite;
  }
`;

const Loading = () => (
  <LoadingContainer>
    <Spinner viewBox="0 0 50 50">
      <circle
        className="pathOne"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      ></circle>
      <circle
        className="pathTwo"
        cx="25"
        cy="25"
        r="15"
        fill="none"
        strokeWidth="2"
      ></circle>
    </Spinner>
  </LoadingContainer>
);

export default Loading;
