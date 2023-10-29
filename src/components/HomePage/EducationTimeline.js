import React from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../reducers/languageSlice";
const TimelineContainer = styled.div`
  width: 80%;
  margin: 40px auto;
`;

const Title = styled.h3`
  color: #61dafb;
  border-bottom: 5px solid #f4f4f4;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  font-weight: bold;
`;

const Timeline = styled.ul`
  list-style: none;
  padding: 0;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 50px;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: #61dafb;
  }
`;

const TimelineItem = styled.li`
  margin-bottom: 40px;
  position: relative;
  padding-left: 80px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Dot = styled.div`
  background-color: #61dafb;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  position: absolute;
  left: 50px;
  transform: translateX(-50%);
  top: 0;
`;

const Content = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;

  ${Dot}:hover + & {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Date = styled.div`
  color: #61dafb;
  font-size: 0.9rem;
  margin-bottom: 15px;
  font-weight: bold;
`;

const Info = styled.div`
  font-size: 1.2rem;
  color: #2c3e50;
  line-height: 1.5;
`;
const translations = {
  tr: {
    title: "Eğitimim",
    educationData: [
      { date: "2017-2021", info: "Övgü Terzibaşığlu Anadolu Lisesi" },
      {
        date: "2022 - 2026 (beklenen)",
        info: "Manisa Celal Bayar Üniversitesi - Yazılım Mühendisliği",
      },
    ],
  },
  en: {
    title: "My Education",
    educationData: [
      { date: "2017-2021", info: "Övgü Terzibaşığlu Anatolian High School" },
      {
        date: "2022 - 2026 (expected)",
        info: "Manisa Celal Bayar University - Software Engineering",
      },
    ],
  },
  // Diğer diller için çevirileri buraya ekleyebilirsiniz.
};

const EducationTimeline = () => {
  const language = useSelector(selectLanguage);
  const { title, educationData } = translations[language] || translations.tr; // Varsayılan dil Türkçe

  return (
    <TimelineContainer>
      <Title>{title}</Title>
      <Timeline>
        {educationData.map((item, index) => (
          <TimelineItem key={index}>
            <Dot />
            <Content>
              <Date>{item.date}</Date>
              <Info>{item.info}</Info>
            </Content>
          </TimelineItem>
        ))}
      </Timeline>
    </TimelineContainer>
  );
};

export default EducationTimeline;
