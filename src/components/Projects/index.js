import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal";

import { useSelector, useDispatch } from "react-redux";
import {
  setProjects,
  setSelectedProject,
  setFilteredCategory,
  toggleModalOpen,
} from "../../actions/projectsActions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ExampleImage from "./example-project.jpg";
import restaurant1 from "./projects-images/first-project/restoran-1.jpg";
import restaurant2 from "./projects-images/first-project/restoran-2.jpg";
import restaurant3 from "./projects-images/first-project/restoran-3.jpg";
import restaurant4 from "./projects-images/first-project/restoran-4.jpg";
import restaurant5 from "./projects-images/first-project/restoran-5.jpg";
import restaurant6 from "./projects-images/first-project/restoran-6.jpg";
import restaurant7 from "./projects-images/first-project/restoran-7.jpg";
import restaurant8 from "./projects-images/first-project/restoran-8.jpg";
import weatherly1 from "./projects-images/second-project/resim-1.jpg";
import weatherly2 from "./projects-images/second-project/resim-2.jpg";
import weatherly3 from "./projects-images/second-project/resim-3.jpg";
import ChatApp1 from "./projects-images/third-project/photo-1.jpg";
import ChatApp2 from "./projects-images/third-project/photo-2.jpg";
import ChatApp3 from "./projects-images/third-project/photo-3.jpg";
import Project4First from "./projects-images/fourth-project/photo-1.jpg";
import Project4Second from "./projects-images/fourth-project/photo-2.jpg";
import Project4Third from "./projects-images/fourth-project/photo-3.jpg";
import Project4Fourth from "./projects-images/fourth-project/photo-4.jpg";
import Project4Fifth from "./projects-images/fourth-project/photo-5.jpg";
import CodeEditor1 from "./projects-images/fifth-project/photo-1.jpg";
import CodeEditor2 from "./projects-images/fifth-project/photo-2.jpg";
import CodeEditor3 from "./projects-images/fifth-project/photo-3.jpg";
import CodeEditor4 from "./projects-images/fifth-project/photo-4.jpg";
import EleventhProject1 from "./projects-images/eleventh-project/photo-1.jpg";
import EleventhProject2 from "./projects-images/eleventh-project/photo-2.jpg";
import EleventhProject3 from "./projects-images/eleventh-project/photo-3.jpg";
import EleventhProject4 from "./projects-images/eleventh-project/photo-4.jpg";
import TwelfthProject1 from "./projects-images/twelfth-project/image-1.png";
import TwelfthProject2 from "./projects-images/twelfth-project/image-2.png";
import TwelfthProject3 from "./projects-images/twelfth-project/image-3.png";
import TwelfthProject4 from "./projects-images/twelfth-project/image-4.png";
import TwelfthProject5 from "./projects-images/twelfth-project/image-5.png";
import ThirteenthProject1 from "./projects-images/thirteenth-project/netflix-clone-9.png";
import ThirteenthProject2 from "./projects-images/thirteenth-project/netflix-clone-10.png";
import ThirteenthProject3 from "./projects-images/thirteenth-project/netflix-clone-11.png";
import ThirteenthProject4 from "./projects-images/thirteenth-project/netflix-clone-12.png";
import ThirteenthProject5 from "./projects-images/thirteenth-project/netflix-clone-13.png";
import ThirteenthProject6 from "./projects-images/thirteenth-project/netflix-clone-14.png";
import ThirteenthProject7 from "./projects-images/thirteenth-project/netflix-clone-15.png";
import ThirteenthProject8 from "./projects-images/thirteenth-project/netflix-clone-16.png";
import ThirteenthProject9 from "./projects-images/thirteenth-project/netflix-clone-17.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProjectsContainer = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#2b2b2b")};
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f4f4f4")};
  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => (theme === "light" ? "#2c3e50" : "#f4f4f4")};
    font-weight: 600;
    margin-bottom: 40px;
    border-bottom: 3px solid
      ${({ theme }) => (theme === "light" ? "#61dafb" : "#888")};
    padding-bottom: 10px;
  }
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: ${({ theme }) => (theme === "light" ? "#f9f9f9" : "#333")};
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f4f4f4")};
  margin-bottom: 30px;
  padding: 0 10px;
  border-bottom: 3px solid
    ${({ theme }) => (theme === "light" ? "#eee" : "#555")};
  flex-wrap: wrap;
  button {
    padding: 12px 20px;
    font-size: 16px;
    border: none;
    background: ${({ theme }) => (theme === "dark" ? "#444" : "transparent")};
    color: ${({ theme }) => (theme === "light" ? "#555" : "#fff")};
    font-size: 16px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    outline: none;
    &:after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      right: 0;
      height: 3px;
      background-color: #6f8faf;
      transform: scaleX(0);
      transition: transform 0.2s;
    }
    &:hover {
      background: ${({ theme }) => (theme === "dark" ? "#555" : "#add8e6")};
      color: white;
      &:after {
        transform: scaleX(1);
      }
    }
    @media (max-width: 768px) {
      width: 90%;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    &.active {
      color: white;
      outline: none;
      background: #61dafb;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      &:after {
        transform: scaleX(1);
      }
    }
    &:focus {
      outline: none;
    }
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 80%;
  background-color: ${({ theme }) =>
    theme === "light" ? "#f9f9f9" : "#1d1d1d"};
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => (theme === "light" ? "#f9f9f9" : "#333")};
  border-radius: 10px;
  overflow: hidden;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  }
`;
const CardContainer = styled.div`
  background: ${({ theme }) => (theme === "light" ? "#fff" : "#333")};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  }
`;
const ProjectTitle = styled.h4`
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f4f4f4")};
  font-size: 18px;
  margin-bottom: 8px;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => (theme === "light" ? "#555" : "#aaa")};
  margin-bottom: 10px;
  white-space: pre-line;
`;
const TechnologiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const TechnologyItem = styled.li`
  background: #007bff;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
`;
const ProjectImage = styled(LazyLoadImage)`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f4f4f4")};
  padding: 15px;

  h3 {
    font-size: 24px;
    margin-bottom: 8px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  outline: none;
  &:hover {
    color: #007bff;
  }
  &:focus {
    outline: none;
  }
`;
const ModalContainer = styled.div`
  background: ${({ theme }) => (theme === "light" ? "#fff" : "#333")};
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 100%;
  padding: 20px;
`;

const ModalImage = styled(LazyLoadImage)`
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: auto;
  display: block;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
`;

const ModalContent = styled.div`
  flex-grow: 1;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f4f4f4")};
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 70vh;
  margin: 20px;
`;

const ModalTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f4f4f4")};
  margin-bottom: 10px;
  margin-top: 20px;
`;

const ModalDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => (theme === "light" ? "#555" : "#aaa")};
  margin-bottom: 20px;
  white-space: pre-line;
`;

const ModalTechnologies = styled.p`
  font-weight: bold;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f4f4f4")};
  margin-bottom: 20px;
`;
const ModalStyles = (theme) => ({
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#333" : "#f4f4f4",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "900px",
    padding: "20px",
    border: "none",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    overflow: "auto",
  },
});

const sampleProjects = [
  {
    id: 1,
    title: {
      tr: "Basic-Restaurant-Reservation-System-Frontend",
      en: "Basic-Restaurant-Reservation-System-Frontend",
    },
    shortDescription: {
      tr: `Bu proje, kapsamlı ve kullanıcı dostu bir restoran rezervasyon sistemi geliştirmek amacıyla tasarlanmıştır.`,
      en: `This project is designed with the aim of developing a comprehensive and user-friendly restaurant reservation system.`,
    },
    description: {
      tr: `Bu proje, kapsamlı ve kullanıcı dostu bir restoran rezervasyon sistemi geliştirmek amacıyla tasarlanmıştır. Yüksek kaliteli bir kullanıcı deneyimi sağlamak için  ön yüz geliştirme araçları ve teknikleri entegre edilmektedir.
    
      Katkıda Bulunma
      Pull requestler memnuniyetle kabul edilir. Büyük değişiklikler için önce neyi değiştirmek istediğinizi tartışmak için bir issue  açmanızı rica ederim.
  
    Not:Her bir menü item'ı için Placeholder resim kullanılmıştır.
    
    Bu Placeholder resimin kaynağı -->Image by rawpixel.com on Freepik `,
      en: `This project is designed with the intention of creating a comprehensive and user-friendly restaurant reservation system. Front-end development tools and techniques are integrated to ensure a high-quality user experience.

      Contribution
      Pull requests are  welcomed. For significant changes, I kindly ask that you open an issue first to discuss what you'd like to modify.
      
      Note: Placeholder images have been used for each menu item.
      
      The source of this placeholder image is --> Image by rawpixel.com on Freepik.`,
    },
    images: [
      restaurant1,
      restaurant2,
      restaurant3,
      restaurant4,
      restaurant5,
      restaurant6,
      restaurant7,
      restaurant8,
    ],
    category: "JS",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"], // ...
  },
  {
    id: 2,
    title: {
      tr: "Weatherly Portal",
      en: "Weatherly Portal",
    },
    images: [weatherly1, weatherly2, weatherly3],
    category: "JS",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    shortDescription: {
      tr: `Bootstrap 4, jQuery ve OpenWeatherMap API ile oluşturulan Hava Tahmini Portalı, kullanıcıların seçtikleri şehir veya bölge için mevcut hava durumunu ve yaklaşan saatlik tahminleri kontrol etmelerine olanak tanır.
    
      Koyu ve açık mod için tema değiştirme özelliği içerir.`,
      en: `The Weatherly Portal, created with Bootstrap 4, jQuery, and the OpenWeatherMap API, allows users to check the current weather conditions and upcoming hourly forecasts for the city or region of their choice.

      It includes a feature for changing themes for dark and light modes.`,
    },
    description: {
      tr: `Özellikler
      -Mobil ve masaüstü cihazlar için responsive tasarım.
      -Aydınlık ve karanlık mod arasında geçiş yapma olanağı sunan dinamik tema anahtarı.
      -Belirli bir şehir veya bölge için mevcut ve saatlik hava verilerini almak için arama işlevselliği.
      -Desteklenmeyen veya var olmayan şehirler için kullanıcı dostu hata mesajları.
      -Veri alınırken akıcı yükleyici geçişi.
      
      Katkıda Bulunma
      Pull requestler memnuniyetle kabul edilir. Büyük değişiklikler için önce neyi değiştirmek istediğinizi tartışmak için bir issue  açmanızı rica ederim. `,
      en: `Features

      -Responsive design for mobile and desktop devices.
      -Dynamic theme switcher that allows transitioning between light and dark modes.
      -Search functionality to retrieve current and hourly weather data for a specific city or region.
      -User-friendly error messages for unsupported or nonexistent cities.
      -Smooth loader transition while fetching data.,
      

      Contribution
      Pull requests are  welcomed. For significant changes, I kindly ask that you open an issue first to discuss what you'd like to modify.`,
    },
  },

  {
    id: 3,
    title: {
      tr: "Basic Chat Uygulaması-Frontend",
      en: "Basic Chat App-Frontend",
    },
    images: [ChatApp1, ChatApp2, ChatApp3],
    category: "JS",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    shortDescription: {
      tr: `Bu proje, HTML, CSS ve JavaScript kullanarak Basic bir sohbet uygulaması oluşturmayı amaçlamaktadır.`,
      en: `This project aims to create a basic chat application using HTML, CSS, and JavaScript.
      `,
    },
    description: {
      tr: `Bu proje, HTML, CSS ve JavaScript kullanarak Basic bir sohbet uygulaması oluşturmayı amaçlamaktadır. Proje, her biri belirli görevler ve hedeflerle üç ana adıma ayrılmıştır.

      Katkıda Bulunma
      Pull requestler  memnuniyetle kabul edilir. Büyük değişiklikler için önce neyi değiştirmek istediğinizi tartışmak için bir issue  açmanızı rica ederim.`,
      en: `This project aims to create a basic chat application using HTML, CSS, and JavaScript. The project is divided into three main steps, each with specific tasks and objectives.
      
      Contribution
      Pull requests are  welcomed. For significant changes, I kindly ask that you open an issue first to discuss what you'd like to modify.`,
    },
  },
  {
    id: 4,
    title: {
      tr: "E-Commerce Website - Checkout Page-Frontend",
      en: " E-Commerce Website - Checkout Page-Frontend",
    },
    images: [
      Project4First,
      Project4Second,
      Project4Third,
      Project4Fourth,
      Project4Fifth,
    ],
    category: "JS",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    shortDescription: {
      tr: `Bu proje, kullanıcı dostu etkileşimler sunan, mobil öncelikli bir yaklaşımla düzenlenmiş,  bir ödeme sayfası frontend projesidir.

      `,
      en: `This project is a payment page frontend project, organized with a mobile-first approach, offering user-friendly interactions.
      `,
    },
    description: {
      tr: `Bu proje, kullanıcı dostu etkileşimler sunan , mobil öncelikli bir yaklaşımla düzenlenmiş,  bir ödeme sayfasıdır.
     
    
    Sayfa Türkçe olarak yazılmış, ancak evrensel anlayış için İngilizce olarak iyi bir şekilde belgelenmiştir.
    
    Web geliştirmenin bazı en iyi uygulamaları kullanılarak, detaylara, kullanıcı deneyimine ve performansa büyük önem verilerek oluşturulmuştur.
    
    Katkıda Bulunma
   Pull requestler memnuniyetle kabul edilir. Büyük değişiklikler için önce neyi değiştirmek istediğinizi tartışmak için bir issue  açmanızı rica ederim.`,
      en: `This project is a payment page frontend project, organized with a mobile-first approach, offering user-friendly interactions.
      
      The page was coded in Turkish, but for universal understanding, it has been well-documented in English.

Created using some of the best practices of web development, substantial attention has been given to details, user experience, and performance.

      Contribution
      Pull requests are  welcomed. For significant changes, I kindly ask that you open an issue first to discuss what you'd like to modify.`,
    },
  },
  {
    id: 5,
    title: {
      tr: "Code Editor that compiles HTML-CSS-JS",
      en: "Code Editor that compiles HTML-CSS-JS ",
    },
    images: [CodeEditor1, CodeEditor2, CodeEditor3, CodeEditor4],
    category: "JS",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    shortDescription: {
      tr: `Code Editor, geliştiricilere HTML, CSS ve JavaScript kodlarını tarayıcı içinde anında yazma, düzenleme ve görselleştirme imkanı sunan sofistike ve modern bir integrated development environment (IDE)dir.
    
    Güçlü ACE Editör Library kullanarak sözdizimi vurgulama, Emmet kısaltmaları ve otomatik tamamlama sağlayarak zenginleştirilmiş bir kodlama deneyimi sunar.

      `,
      en: `Code Editor is a sophisticated and modern integrated development environment (IDE) that offers developers the opportunity to instantly write, edit, and visualize HTML, CSS, and JavaScript codes within the browser.

Enriched with the powerful ACE Editor Library, it provides a rich coding experience by offering syntax highlighting, Emmet shortcuts, and autocompletion.
      `,
    },
    description: {
      tr: `Genel Bakış
      Code Editor, geliştiricilere HTML, CSS ve JavaScript kodlarını tarayıcı içinde anında yazma, düzenleme ve görselleştirme imkanı sunan sofistike ve modern bir entegre geliştirme ortamı (IDE)dir. Güçlü ACE Editör Library kullanarak sözdizimi vurgulama, Emmet kısaltmaları ve otomatik tamamlama sağlayarak zenginleştirilmiş bir kodlama deneyimi sunar.
     
     Özellikler

     ACE Editör Library Entegrasyonu: ACE Editör Library kullanarak sözdizimi vurgulama ve satır numaraları ile zenginleştirilmiş bir kodlama ortamı oluşturur.
 
     Responsive Tasarım: Farklı ekran boyutlarına uyum sağlar, böylece geniş bir cihaz yelpazesi üzerinde en iyi görüntüleme ve etkileşim deneyimini sunar.
 
     Canlı Otomatik Tamamlama: Kullanıcı yazarken dil sözdizimine ve kullanıcının girdisine dayalı olarak anında kod önerileri sunarak kodlama hızını artırır.
 
     Emmet Kısaltmaları: Emmet kısaltmalarını ve parçacıklarını destekler, böylece geliştiricilere kısaltmalar kullanarak daha hızlı HTML ve CSS kodu yazma olanağı sağlar.
 
     Gerçek Zamanlı Çıkış Görünümü: HTML, CSS ve JavaScript kodunun sonucunu anında bir pencere içinde görselleştirir, böylece gerçek zamanlı geri bildirim sağlar.
 
 
 
     Kullanılan Teknolojiler ve Kütüphaneler
     HTML5
     CSS3
     JavaScript (jQuery)
     Bootstrap
     ACE Editör Library
     Emmet
     
    
    Katkıda Bulunma
   Pull requestler memnuniyetle kabul edilir. Büyük değişiklikler için önce neyi değiştirmek istediğinizi tartışmak için bir issue  açmanızı rica ederim.`,
      en: `Overview
      Code Editor is a sophisticated and modern integrated development environment (IDE) that provides developers with the opportunity to instantly write, edit, and visualize HTML, CSS, and JavaScript codes within the browser. It delivers an enriched coding experience by utilizing the powerful ACE Editor Library for syntax highlighting, Emmet shortcuts, and auto-completion.
      
      Features
      
      ACE Editor Library Integration: It creates an enriched coding environment with syntax highlighting and line numbers using the ACE Editor Library.

      Responsive Design: It adapts to various screen sizes, offering the best viewing and interaction experience across a broad range of devices.

      Live Auto-Completion: Increases coding speed by providing instant code suggestions based on language syntax and user input as the user types.

      Emmet Shortcuts: Supports Emmet shortcuts and snippets, allowing developers to write HTML and CSS code faster using abbreviations.

      Real-Time Output View: Visualizes the result of HTML, CSS, and JavaScript code instantly within a window, providing real-time feedback.

      Used Technologies and Libraries
      
      HTML5
      CSS3
      JavaScript (jQuery)
      Bootstrap
      ACE Editor Library
      Emmet

      Contribution
      Pull requests are  welcomed. For significant changes, I kindly ask that you open an issue first to discuss what you'd like to modify.`,
    },
  },
  {
    id: 6,
    title: {
      tr: "Angular ile kodlanan Proje 6",
      en: " Project 6 Coded with Angular",
    },
    images: [ExampleImage, ExampleImage],
    category: "Angular",
    technologies: ["Angular", "TypeScript"],
    shortDescription: {
      tr: `Angular projesi 1 için kısa açıklama.`,
      en: `Short description for Angular project 1.        `,
    },
    description: {
      tr: `Angular projesi 1 için detaylı açıklama.`,
      en: `Detailed description for Angular project 1.        `,
    },
  },
  {
    id: 7,
    title: {
      tr: "Angular ile kodlanan Proje 7",
      en: " Project 7 Coded with Angular",
    },
    images: [ExampleImage, ExampleImage],
    category: "Angular",
    technologies: ["Angular", "TypeScript"],
    shortDescription: {
      tr: `Angular projesi 2 için kısa açıklama.`,
      en: `Short description for Angular project 2.        `,
    },
    description: {
      tr: `Angular projesi 2 için detaylı açıklama.`,
      en: `Detailed description for Angular project 2.        `,
    },
  },
  {
    id: 8,
    title: {
      tr: "Angular ile kodlanan Proje 8",
      en: " Project 8 Coded with Angular",
    },
    images: [ExampleImage, ExampleImage],
    category: "Angular",
    technologies: ["Angular", "TypeScript"],
    shortDescription: {
      tr: `Angular projesi 3 için kısa açıklama.`,
      en: `Short description for Angular project 3.        `,
    },
    description: {
      tr: `Angular projesi 3 için detaylı açıklama.`,
      en: `Detailed description for Angular project 3.        `,
    },
  },

  {
    id: 9,
    title: {
      tr: "Angular ile kodlanan Proje 9",
      en: " Project 9 Coded with Angular",
    },
    images: [ExampleImage, ExampleImage],
    category: "Angular",
    technologies: ["Angular", "TypeScript"],
    shortDescription: {
      tr: `Angular projesi 4 için kısa açıklama.`,
      en: `Short description for Angular project 4        `,
    },
    description: {
      tr: `Angular projesi 4 için detaylı açıklama.`,
      en: `Detailed description for Angular project 4.        `,
    },
  },
  {
    id: 10,
    title: {
      tr: "Angular ile kodlanan Proje 10",
      en: " Project 10 Coded with Angular",
    },
    images: [ExampleImage, ExampleImage],
    category: "Angular",
    technologies: ["Angular", "TypeScript"],
    shortDescription: {
      tr: `Angular projesi 5 için kısa açıklama.`,
      en: `Short description for Angular project 5.        `,
    },
    description: {
      tr: `Angular projesi 5 için detaylı açıklama.`,
      en: `Detailed description for Angular project 5.        `,
    },
  },
  {
    id: 11,
    title: "Depremi Çocuklara Nasıl Anlatmalıyız ?",
    images: [
      EleventhProject1,
      EleventhProject2,
      EleventhProject3,
      EleventhProject4,
    ],
    category: "React.js",
    technologies: ["React.js", "Bootstrap"],
    shortDescription: {
      tr: `"Depremi çocuklarımıza nasıl anlatmalıyız?" sorusu her birimiz için önem arz eden sorulardan bir tanesi.

      Ben de bir süredir üzerinde çalıştığım web geliştirme yazılımlarının şu ana kadar öğrendiğim kadarıyla bu konuda neler yapılabileceğini anlatan bir web sitesi hazırladım.`,
      en: `The question, "How should we explain earthquakes to our children?" is of significant importance for each of us.

      I have  prepared a website explaining what can be done on this subject to the extent of my knowledge thus far with the web development software I have been working on for some time.`,
    },
    description: {
      tr: `"Depremi çocuklarımıza nasıl anlatmalıyız?" sorusu her birimiz için önem arz eden sorulardan bir tanesi.
    
      Ben de bir süredir üzerinde çalıştığım web geliştirme yazılımlarının şu ana kadar öğrendiğim kadarıyla bu konuda neler yapılabileceğini anlatan bir web sitesi hazırladım.
      
      Bu websitesi ilk kez 19.02.2023'te HTML,CSS ve JavaScript ile hazırlanmıştı.
      
      Zaman içerisinde yeni öğrendiğim Web Geliştirme Teknolojileri ile websitesi yenilenip güncellenmiştir.
      
       Pull requestler memnuniyetle kabul edilir. Büyük değişiklikler için önce neyi değiştirmek istediğinizi tartışmak için bir issue  açmanızı rica ederim.
  
       
      Web sitesi linki:
      https://cocugumubilinclendiriyorum.
      com.tr`,
      en: `The question, "How should we explain earthquakes to our children?" is of significant importance for each of us.

      I have  prepared a website explaining what can be done on this subject to the extent of my knowledge thus far with the web development software I have been working on for some time. 
      
      
This website was initially prepared using HTML, CSS, and JavaScript on 19.02.2023.

Over time, the website has been renovated and updated with new Web Development Technologies that I have learned.

Website link:
cocugumubilinclendiriyorum.com.tr
`,
    },
  },

  {
    id: 12,
    title: {
      tr: "E-commerce checkout page with React and Redux",
      en: " E-commerce checkout page with React and Redux",
    },
    images: [
      TwelfthProject1,
      TwelfthProject2,
      TwelfthProject3,
      TwelfthProject4,
      TwelfthProject5,
    ],
    category: "React.js",
    technologies: ["React.js", "React Redux"],
    shortDescription: {
      tr: `👨‍💻 Bu proje, gerçek zamanlı animasyonlu kredi kartı geri bildirimi sunan bir form uygulamasıdır.

Bu projede iyi ve güzel bir kullanıcı deneyimi hedefledim🔄✨`,
      en: `👨‍💻 This project is a form application that provides real-time animated credit card feedback.
      In this project, I aimed to provide a good and pleasant user experience🔄✨.`,
    },
    description: {
      tr: `⭐⭐Özellikler:

✨Dinamik Gösterim: Kullanıcının girdiği kredi kartı bilgilerine göre kartın ön yüzü ve arka yüzü canlı olarak güncellenir.

✨Kart Tipleri: Visa, Mastercard ve Troy kart tipleri desteklenmektedir ve belirli bir algoritmaya göre otomatik olarak kart tipi belirlenir.

✨Animasyonlar: "react-spring" kütüphanesi sayesinde kart numarası, kart sahibi adı ve son kullanma tarihi bilgilerinin animasyonlu bir şekilde gösterilmesi sağlanmıştır.

✨Responsive Tasarım: Mobil cihazlarda da uyumlu bir kullanıcı deneyimi sunmak için stil dosyalarında medya sorguları kullanılmıştır.

📚 Kullandığım Teknolojiler:

⚛️React: Fonksiyonel bileşen yapısını kullanarak bu projeyi oluşturmayı hedefledim.

⚛️ React Redux: Uygulama durumunu yönetmeyi hedefledim.

⚛️ styled-components: Bileşenlere şık ve güzel bir görünüm kazandırmak için.

⚛️ react-spring: Bazı animasyonlar için react-spring tercih ettim ve kullanıcı dostu bir deneyim yaşanmasını hedefledim.

📝Formdaki background resmi :Designed by pikisuperstar on Freepik.

📝 Not:Bu proje React ve Redux ile oluşturmuş bir frontend projesidir,sadece eğitim amaçlı hazırlanmış olup sadece eğitim amaçlı kullanılmıştır.`,
      en: `⭐⭐Features:

      ✨Dynamic Display: The front and back of the card are updated in real-time based on the credit card information entered by the user.
      
      ✨ Card Types: Visa, Mastercard, and Troy card types are supported, and the card type is automatically determined based on a specific algorithm.
      
      ✨Animations: Thanks to the "react-spring" library, card number, cardholder name, and expiration date are displayed with animations.
      
      ✨Responsive Design: Media queries have been used in the style files to ensure a compatible user experience on mobile devices.
      
      📚 Technologies I Used:

      ⚛️ React: I aimed to create this project using the functional component structure.

      ⚛️ React Redux: I aimed to manage the application state.

      ⚛️ styled-components: To give a stylish and beautiful appearance to the components.

      ⚛️ react-spring: I chose react-spring for certain animations and aimed to provide a user-friendly experience.
      
      📝Background image in the form: Designed by pikisuperstar on Freepik.
      
      
      📝 Note: This project is a frontend project created with React and Redux, prepared solely for educational purposes and used only for educational reasons. `,
    },
  },
  {
    id: 13,
    title: {
      tr: "Netflix Clone Projesi",
      en: " Netflix Clone Project",
    },
    images: [
      ThirteenthProject1,
      ThirteenthProject2,
      ThirteenthProject3,
      ThirteenthProject4,
      ThirteenthProject5,
      ThirteenthProject6,
      ThirteenthProject7,
      ThirteenthProject8,
      ThirteenthProject9,
    ],
    category: "React.js",
    technologies: ["React.js", "React Redux", "Node.js"],
    shortDescription: {
      tr: `13.10.2023 'te Enes Doğan ile Netflix Clone kodlanması projesine başladık.
      
      Her gün adım adım ilerliyoruz.
      
      Bu süreçte ben Frontend 'i tasarlayıp kodlarken Enes Doğan ise Backend kodlarını kodlamaktadır.
      Şu anda bu proje üzerinde çalışıyoruz ve kodlanmaya devam edilmektedir.
  `,
      en: `On October 13, 2023, Enes Doğan and I started working on a Netflix Clone coding project.

      We're making progress step by step each day.
      
      During this process, I've been designing and coding the Frontend, while Enes Doğan has been handling the Backend coding.
      
      We are currently working on this project, and the coding is ongoing.       `,
    },
    description: {
      tr: `13.10.2023 'te Enes Doğan ile Netflix Clone kodlanması projesine başladık.
      
      Her gün adım adım ilerliyoruz.
      
      Bu süreçte ben Frontend 'i tasarlayıp kodlarken Enes Doğan ise Backend kodlarını kodlamaktadır.

      Şu anda bu proje üzerinde çalışıyoruz ve kodlanmaya devam edilmektedir.

      Kullanılan Teknojiler:
      Frontend:
      🟣Bootstrap 
      ⚛️ React.js
      ⚛️React Styled Components
      ⚛️React Router
      ⚛️ Redux
      
      Backend ve Veri Tabanları:
      🖥️ Node.js
      👨‍💻Express.js
      🌱MongoDB`,
      en: `On October 13, 2023, Enes Doğan and I started working on a Netflix Clone coding project.

      We're making progress step by step each day.
      
      During this process, I've been designing and coding the Frontend, while Enes Doğan has been handling the Backend coding.
      
      We are currently working on this project, and the coding is ongoing.
      
      Technology Stack:
      Frontend:
      🟣Bootstrap
      ⚛️ React.js
      ⚛️React Styled Components
      ⚛️React Router
      ⚛️ Redux
      
      Backend and Databases:
      🖥️ Node.js
      👨‍💻Express.js
      🌱MongoDB        `,
    },
  },
];

const translations = {
  en: {
    myProjects: "My Projects",
  },
  tr: {
    myProjects: "Projelerim",
  },
};

const MyProjects = () => {
  const theme = useSelector((state) => state.theme.theme);
  const language = useSelector((state) => state.language.value);
  const myProjectsTranslation = translations[language].myProjects;
  useEffect(() => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#fafafa";
    } else {
      document.body.style.backgroundColor = "#2b2b2b";
    }
  }, [theme]);
  const [activeSlide, setActiveSlide] = useState(0);
  const projects = useSelector((state) => state.projects.projects);
  const selectedProject = useSelector(
    (state) => state.projects.selectedProject,
  );
  const filteredCategory = useSelector(
    (state) => state.projects.filteredCategory,
  );
  const isModalOpen = useSelector((state) => state.projects.isModalOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProjects(sampleProjects));
  }, [dispatch]);

  const handleOpenModal = (project) => {
    dispatch(setSelectedProject(project));
    dispatch(toggleModalOpen(true));
  };

  const handleCloseModal = () => {
    dispatch(toggleModalOpen(false));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current, next) => setActiveSlide(next),
    customPaging: function (i) {
      return (
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: activeSlide === i ? "#61dafb" : "#ccc",
            margin: "5px",
          }}
        ></div>
      );
    },
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <ul
          style={{ margin: "0px", padding: "0px", display: "flex", gap: "5px" }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };
  const boldWords = [
    "Katkıda Bulunma",
    "Özellikler",
    "Kullanılan Teknolojiler ve Kütüphaneler",
    "Genel Bakış",
    "Responsive Tasarım: ",
    "Canlı Otomatik Tamamlama: ",
    "Emmet Kısaltmaları:",
    "Gerçek Zamanlı Çıkış Görünümü: ",
    "Web sitesi linki:",
    "https://cocugumubilinclendiriyorum.",
    "com.tr",
    "Not:",
    "  Contribution",
    "Note:",
    "Features",
    "ACE Editör Library Entegrasyonu: ",
    "Features",
    "Overview",
    "ACE Editor Library Integration:",
    "Responsive Design: ",
    "Live Auto-Completion:",
    "Emmet Shortcuts:",
    ,
    "Real-Time Output View:",
    "Used Technologies and Libraries",
    ,
    "Website link:",
  ];

  const highlightText = (text) => {
    let parts = [text];
    boldWords.forEach((boldWord) => {
      parts = parts
        .map((part) => {
          if (typeof part === "string") {
            const splitText = part.split(boldWord);
            return splitText.reduce((acc, fragment, index, array) => {
              if (index !== array.length - 1) {
                acc.push(
                  fragment,
                  <span style={{ fontWeight: "bold" }}>{boldWord}</span>,
                );
              } else {
                acc.push(fragment);
              }
              return acc;
            }, []);
          } else {
            return part;
          }
        })
        .flat();
    });
    return parts;
  };

  return (
    <ProjectsContainer theme={theme}>
      <h2>{myProjectsTranslation}</h2>
      <FilterBar theme={theme}>
        {["Hepsi", "JS", "Angular", "React.js", "Python"].map(
          (category, index) => (
            <button
              key={index}
              className={filteredCategory === category ? "active" : ""}
              onClick={() => dispatch(setFilteredCategory(category))}
            >
              {language === "tr"
                ? category
                : category === "Hepsi"
                ? "All"
                : category}
            </button>
          ),
        )}
      </FilterBar>
      <Gallery theme={theme}>
        {projects
          .filter(
            (project) =>
              filteredCategory === "Hepsi" ||
              project.category === filteredCategory,
          )
          .map((project, index) => (
            <ProjectCard
              key={index}
              theme={theme}
              onClick={() => handleOpenModal(project)}
            >
              <CardContainer theme={theme}>
                <ProjectImage
                  src={project.images[0]}
                  alt={`${project.title} image`}
                  effect="blur" // optional: resim yüklenene kadar blur efekti uygular
                />

                <ProjectInfo>
                  <ProjectTitle theme={theme}>
                    {project.title[language]}
                  </ProjectTitle>
                  <ProjectDescription theme={theme}>
                    {project.shortDescription[language]}
                  </ProjectDescription>
                  <TechnologiesList>
                    {project.technologies.map((tech, index) => (
                      <TechnologyItem key={index}>{tech}</TechnologyItem>
                    ))}
                  </TechnologiesList>
                </ProjectInfo>
              </CardContainer>
            </ProjectCard>
          ))}
      </Gallery>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={ModalStyles(theme)}
        contentLabel="Proje Detayları"
      >
        {selectedProject && (
          <ModalContainer theme={theme}>
            <ModalContent theme={theme}>
              <Slider {...settings} style={{ margin: "20px 0" }}>
                {selectedProject.images.map((image, index) => (
                  <div key={index}>
                    <ModalImage
                      src={image}
                      alt={`${selectedProject.title} image`}
                      effect="blur"
                    />
                  </div>
                ))}
              </Slider>

              <ModalTechnologies theme={theme}>
                {language === "tr" ? "Teknolojiler: " : "Technologies: "}
                {selectedProject.technologies.join(", ")}
              </ModalTechnologies>

              <ModalDescription theme={theme}>
                {highlightText(selectedProject.description[language])}
              </ModalDescription>
            </ModalContent>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
          </ModalContainer>
        )}
      </Modal>
    </ProjectsContainer>
  );
};

export default MyProjects;
