import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import profileImage from "./resim-23.png";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideRight = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const ProfileCardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
`;

const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.color};
  animation:
    ${fadeIn} 1s ease-in-out,
    ${slideRight} 1s ease-in-out;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
  animation:
    ${fadeIn} 1s ease-in-out 2s forwards,
    ${slideRight} 1s ease-in-out 2s forwards;
  opacity: 0;
`;

const ProfileCard = () => {
  return (
    <ProfileCardContainer>
      <Card color="#61dafb" />
      <Card color="#f4f4f4" style={{ animationDelay: "1s" }} />
      <Image src={profileImage} alt="Profile" />
    </ProfileCardContainer>
  );
};

export default ProfileCard;
