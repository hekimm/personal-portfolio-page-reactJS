import React from "react";
import styled from "styled-components";
import localVideo from "./video.mp4"; // Yerel video dosyasını import et

// Arka plan için container
const VideoBackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; // 16:9 aspect ratio
  background-image: url("https://img.freepik.com/free-vector/red-movie-theater-seats-with-curtains-background_1017-38388.jpg?t=st=1701960771~exp=1701961371~hmac=dd349c53e8bed2b31af703334260bda8856fd47df6343f7c7947d9a02d66f274");
  background-size: cover;
  background-position: center;
  border-radius: 20px; // Yuvarlak köşeler
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5); // Gölge efekti
  overflow: hidden; // Yuvarlak köşeler için
`;

// Video'yu saran ve konumlandıran wrapper
const VideoWrapper = styled.div`
  position: absolute;
  top: 35%; // Videoyu biraz daha aşağıya taşı
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%; // Genişlik
  padding-bottom: 33.75%; // Yükseklik
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6); // Daha etkileyici bir gölge
  border-radius: 15px; // Daha yuvarlak köşeler

  // Küçük ekranlar için stil ayarlamaları
  @media (max-width: 768px) {
    top: 35%; // Küçük ekranlarda videoyu biraz daha aşağı taşı
    width: 60%; // Küçük ekranlarda genişlik
    padding-bottom: 42.1875%; // Küçük ekranlarda yükseklik
  }
`;

// Yerel video'yu gösteren video etiketi
const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 15px; // Video için yuvarlak köşeler
`;

// Bileşen
const VideoBackground = () => {
  return (
    <VideoBackgroundContainer>
      <VideoWrapper>
        <StyledVideo
          src={localVideo}
          frameBorder="0"
          autoPlay
          loop
          muted
          playsInline
          title="Embedded Video"
        />
      </VideoWrapper>
    </VideoBackgroundContainer>
  );
};

export default VideoBackground;
