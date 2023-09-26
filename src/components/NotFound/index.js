import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #282c34;
`;

const ErrorCode = styled.h1`
  font-size: 10rem;
  color: #61dafb;
  margin: 0;
`;

const ErrorMessage = styled.p`
  font-size: 2rem;
  color: #e0e0e0;
  text-align: center;
  max-width: 600px;
  line-height: 1.5;
  margin-top: 1rem;
`;

const GoBackButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  background-color: #61dafb;
  color: #282c34;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #4caac9;
  }
`;

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>
        The page you are looking for does not exist or has been moved.
      </ErrorMessage>
      <GoBackButton onClick={handleGoHome}>Go to Home</GoBackButton>
    </NotFoundContainer>
  );
};

export default NotFound;
