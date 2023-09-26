import React, { useState, useEffect } from "react";
import styled from "styled-components";
import profileImage from "./profile-image.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "../Routes";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from ".././../actions/loadingActions";
import { languageDescriptions } from "./LanguageDescriptions";
import Loading from "../Loading/index";
import {
  updateText,
  updateIndex,
  setReverse,
  setTyping,
} from "../../reducers/typingSlice";

import {
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaAngular,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-color: #282c34;
  height: 100vh;
  justify-content: center;
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

const TypingEffect = styled.span`
  color: #61dafb;
  font-size: 24px;
  font-family: "Courier New", Courier, monospace;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #1f2023;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  line-height: 1.5em;
  height: auto;
  white-space: pre-wrap;
  word-break: break-word;
  display: inline-block;
  vertical-align: middle;
  @keyframes blinkingCursor {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  &::after {
    content: "";
    display: inline-block;
    width: 4px;
    height: 1em;
    background-color: #61dafb;
    animation: blinkingCursor 1s infinite;
  }
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

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate(ROUTES.ABOUT);
  };

  const [modalContent, setModalContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const language = useSelector((state) => state.language.value);

  const openModal = (languageKey) => {
    const description = languageDescriptions[languageKey][language];
    setModalContent(description);
    setShowModal(true);
  };

  const { text, index, reverse, typing } = useSelector((state) => state.typing);

  const dispatch = useDispatch();

  useEffect(() => {
    const messages =
      language === "tr"
        ? [
            "Ben bir Yazılım Mühendisliği Öğrencisi",
            "Ben bir Software Developer",
          ]
        : ["I'm a Software Engineering Student", "I'm a Software Developer"];

    if (text.length === messages[index].length && !reverse) {
      setTimeout(() => {
        dispatch(setTyping(false));
        dispatch(setReverse(true));
      }, 1000);
    } else if (reverse && text === "") {
      let nextIndex = index + 1;
      if (nextIndex === messages.length) nextIndex = 0;
      dispatch(setTyping(true));
      dispatch(setReverse(false));
      dispatch(updateIndex(nextIndex));
    }

    const timer = setTimeout(() => {
      if (typing && !reverse) {
        if (text.length < messages[index].length) {
          dispatch(updateText(text + messages[index][text.length]));
        }
      } else if (reverse) {
        dispatch(updateText(text.substring(0, text.length - 1)));
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [text, reverse, index, typing, dispatch]);

  useEffect(() => {
    dispatch(setTyping(true));
    dispatch(updateText(""));
    dispatch(updateIndex(0));
    dispatch(setReverse(false));
  }, [language, dispatch]);

  const isLoading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    dispatch(setLoading(true));
    const timer = setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <HomeContainer>
      <ProfileContainer>
        <ProfileImage
          src={profileImage}
          alt="Hekimcan AKTAŞ"
          onClick={navigateToAbout}
          effect="blur"
        />
        <ProfileName>Hekimcan AKTAŞ</ProfileName>
      </ProfileContainer>

      <TypingEffect>{text}</TypingEffect>
      <TechnologyIcons>
        <FaCss3Alt size={50} onClick={() => openModal("CSS")} />
        <FaBootstrap size={50} onClick={() => openModal("Bootstrap")} />
        <FaJsSquare size={50} onClick={() => openModal("JavaScript")} />
        <FaAngular size={50} onClick={() => openModal("Angular")} />
        <FaReact size={50} onClick={() => openModal("React.js")} />
        <FaNodeJs size={50} onClick={() => openModal("Node.js")} />
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
    </HomeContainer>
  );
};

export default HomePage;
