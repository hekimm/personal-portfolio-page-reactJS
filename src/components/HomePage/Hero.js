import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaLink,
  FaChevronDown,
} from "react-icons/fa";

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  cursor: pointer;
`;

const Card = styled.div`
  width: 300px;
  height: 180px;
  perspective: 1000px;
  border-radius: 10px;
  font-family: "Courier New", monospace;
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 10px;
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const CardFront = styled(CardFace)`
  background: linear-gradient(45deg, #61dafb, #1a73e8);
  color: white;
`;

const CardBack = styled(CardFace)`
  background: linear-gradient(45deg, #343a40, #1c1e22);
  color: white;
  transform: rotateY(180deg);
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #61dafb;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Name = styled.h2`
  font-size: 1.2em;
  margin-bottom: 5px;
`;

const Title = styled.div`
  display: flex;
  font-size: 0.7em;
  margin: 0;
  white-space: nowrap;
`;

const ContactInfo = styled.div`
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;

  & > svg {
    margin-right: 8px;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  & > * {
    margin: 0 5px;
    font-size: 1.5em;
    color: #61dafb;
    transition: color 0.3s;
    &:hover {
      color: #f7f7f7;
    }
  }
`;

const ContactPrompt = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${blink} 1s linear infinite;
`;

const ContactLabel = styled.p`
  font-size: 0.8em;
  color: #61dafb;
  cursor: pointer;
`;

const ContactArrow = styled(FaChevronDown)`
  font-size: 2em;
  color: #61dafb;
  cursor: pointer;
`;

const BusinessCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <CardWrapper onClick={() => setIsFlipped(!isFlipped)}>
      <ContactPrompt>
        <ContactLabel>İletişim İçin Tıklayınız</ContactLabel>
        <ContactArrow />
      </ContactPrompt>
      <Card>
        <CardInner
          style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          <CardFront>
            <ProfileImage
              src="https://scontent.fadb6-4.fna.fbcdn.net/v/t39.30808-6/398980843_6737153783041359_5877629588252561537_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=IGzqKsjw6IgAX8zDADN&_nc_ht=scontent.fadb6-4.fna&oh=00_AfDdcurVkTOdtS5Cjf2ezj6l_ETY0Ao-uNd-JSvG7v7LFQ&oe=65933360"
              alt="Hekimcan Aktaş"
            />
            <Name>Hekimcan Aktaş</Name>
            <Title>Software Developer | Software Engineer</Title>
          </CardFront>
          <CardBack>
            <ContactInfo>
              <ContactItem>
                <FaPhone />
                +90 531 905 0275
              </ContactItem>
              <ContactItem>
                <FaEnvelope />
                hekimcanaktas@gmail.com
              </ContactItem>
              <ContactItem>
                <FaLink />
                www.hekimcanaktas.com
              </ContactItem>
            </ContactInfo>
            <SocialMediaIcons>
              <FaTwitter />
              <FaLinkedinIn />
              <FaGithub />
            </SocialMediaIcons>
          </CardBack>
        </CardInner>
      </Card>
    </CardWrapper>
  );
};

export default BusinessCard;
