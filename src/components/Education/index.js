import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";

const EducationContainer = styled.section`
  padding: 5em 2em;
  background-color: ${({ theme }) =>
    theme === "light" ? "#fafafa" : "#212121"};
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

const Heading = styled.h2`
  font-size: 3em;
  margin-bottom: 4.5em;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#fff")};
  letter-spacing: 1px;
`;

const roadAnimation = keyframes`
  0% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const TimelineSVG = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Road = styled.rect`
  fill: #aaa;
`;

const RoadLines = styled.g`
  stroke: #fff;
  stroke-width: 4;
  stroke-dasharray: 15, 15;
  animation: ${roadAnimation} 1s linear infinite;
`;

const Entry = styled.div`
  display: flex;
  margin-bottom: 6em;
  flex-direction: column;
  z-index: 2;
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
`;

const DateText = styled.span`
  background-color: #3498db;
  padding: 6px 22px;
  border-radius: 25px;
  color: #fff;
  font-weight: bold;
  font-size: 1.2em;
`;

const Content = styled.div`
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#333")};
  padding: 25px 35px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  position: relative;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#fff")};

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.15);
  }
`;
const educationData = [
  {
    tr: {
      institution: "MANISA CELAL BAYAR ÜNIVERSITESI",
      major: "Yazılım Mühendisliği - 2. Sınıf",
      description: [
        "Manisa Celal Bayar Üniversitesi Yazılım Mühendisliği bölümünde 2. sınıf öğrencisiyim.",
        "Bölümümde aldığım eğitimin yanı sıra, bireysel olarak da sürekli öğrenme ilkesiyle yeni teknolojileri, dilleri ve araçları öğrenmeye devam ediyorum.",
      ],
      date: "2022-",
    },
    en: {
      institution: "MANISA CELAL BAYAR UNIVERSITY",
      major: "Software Engineering - 2nd Grade",
      description: [
        "I am a 2nd grade student in the Software Engineering department at Manisa Celal Bayar University.",
        "Alongside the education I receive in my department, I also persistently continue to learn new technologies, languages, and tools on an individual basis, adhering to the principle of continual learning.",
      ],
      date: "2022-",
    },
  },
  {
    tr: {
      institution: "BURSA ULUDAĞ ÜNIVERSITESI",
      major: "Makine Mühendisliği",
      description: [
        "2021 ve 2022 yılları arasında Bursa Uludağ Üniversitesi'nde Makine Mühendisliği okuyordum.Sonra programlamayı ne kadar çok sevdiğimi ve bu konudaki yeteneklerimi fark ettim. Makine Mühendisliği derslerine ve Makine Mühendisliği konularına pek ilgim yoktu.",
        'Sonra ana dalımı "Yazılım Mühendisliği" olarak değiştirmeye karar verdim, okulumu değiştirdim ve Manisa Celal Bayar Üniversitesi Teknoloji Fakültesi Yazılım Mühendisliği Bölümü\'ne geçtim.',
      ],
      date: "2021-2022",
    },
    en: {
      institution: "BURSA ULUDAG UNIVERSITY",
      major: "Mechanical Engineering",
      description: [
        "Between 2021 and 2022, I was studying Mechanical Engineering at Bursa Uludağ University. I then realized how much I loved programming and recognized my abilities in this field. I wasn't very interested in the Mechanical Engineering courses and topics.",
        "I later decided to change my major to 'Software Engineering', switched schools, and transferred to the Software Engineering Department at Manisa Celal Bayar University's Faculty of Technology.",
      ],
      date: "2021-2022",
    },
  },
];

function MyEducation() {
  const theme = useSelector((state) => state.theme.theme);
  const language = useSelector((state) => state.language.value);

  useEffect(() => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#fafafa";
    } else {
      document.body.style.backgroundColor = "#212121";
    }
  }, [theme]);
  return (
    <EducationContainer theme={theme}>
      <Heading theme={theme}>{language === "tr" ? "" : ""}</Heading>
      <TimelineSVG viewBox="0 0 100 500">
        <Road x="25" y="0" width="50" height="500" />
        <RoadLines>
          {[...Array(26)].map((_, index) => (
            <line
              key={index}
              x1="50"
              y1={index * 20}
              x2="50"
              y2={index * 20 + 15}
            />
          ))}
        </RoadLines>
      </TimelineSVG>

      {educationData.map((entry, index) => (
        <Entry key={index}>
          <Content theme={theme}>
            <h4>{entry[language].institution}</h4>
            <p>{entry[language].major}</p>
            {entry[language].description.map((desc, descIndex) => (
              <p key={descIndex}>{desc}</p>
            ))}
          </Content>
          <DateContainer>
            <DateText>{entry[language].date}</DateText>
          </DateContainer>
        </Entry>
      ))}
    </EducationContainer>
  );
}
export default MyEducation;
