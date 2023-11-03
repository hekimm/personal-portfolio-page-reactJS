import React from "react";
import useMediumPosts from "./useMediumPosts";
import styled from "styled-components";
import { useSelector } from "react-redux";
import defaultImage from "./default.jpg"; // Alternatif resim yolu

const GeneralContainer = styled.div`
  padding: 2rem 0;
  background-color: ${({ theme }) => (theme === "light" ? "#f4f4f4" : "#333")};
`;

const PostContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  border: 2px solid #e5e5e5;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  transition: 0.3s;
  background-color: ${({ theme }) => (theme === "light" ? "#ffffff" : "#444")};

  &:hover {
    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const Header = styled.h1`
  font-size: 2.2em;
  text-align: center;
  border-bottom: 4px solid
    ${({ theme }) => (theme === "light" ? "#61dafb" : "#aaa")};
  padding-bottom: 12px;
  margin-bottom: 32px;
`;

const Thumbnail = styled.img`
  width: 100%;
  max-width: 260px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  margin: 0 auto 20px auto;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    margin-right: 24px;
  }
`;

const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const translations = {
  en: {
    myBlogs: "My Blog Posts on Medium",
    readMore: "Read More",
    authorBy: "Written by",
  },
  tr: {
    myBlogs: "Medium'daki Blog Yazılarım",
    readMore: "Devamını Oku",
    authorBy: "Yazar:",
  },
};

function MediumPosts() {
  const theme = useSelector((state) => state.theme.theme);
  const language = useSelector((state) => state.language.value);
  const textColor = theme === "light" ? "#333" : "#f4f4f4";
  // Place this function inside MediumPosts.js at the top or before the MediumPosts component.
  const getExcerpt = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const paragraphs = Array.from(doc.querySelectorAll("p"));
    const excerpt = paragraphs
      .slice(0, 2)
      .map((p) => p.innerHTML.replace(/\. /g, ".<br><br>")) // This regex replaces all periods followed by a space with a period followed by two <br> tags.
      .join("<br><br>"); // Join paragraphs with line breaks as well.
    return excerpt;
  };

  const { posts, loading } = useMediumPosts();

  if (loading) {
    return (
      <div className="container d-flex justify-content-center mt-5">
        <LoadingSpinner />
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="container d-flex justify-content-center mt-5">
        <p>No posts available or there was an error loading the posts.</p>
      </div>
    );
  }

  return (
    <GeneralContainer theme={theme}>
      <div className="container">
        <Header theme={theme} style={{ color: textColor }}>
          {translations[language].myBlogs}
        </Header>
        {posts.map((post) => (
          <PostContainer key={post.guid} theme={theme}>
            <Thumbnail
              src={
                post.thumbnail && post.thumbnail.length > 0
                  ? post.thumbnail
                  : defaultImage // Update this line if you have named it defaultThumbnail
              }
              alt={post.title}
            />
            <div style={{ color: textColor }}>
              <h2 style={{ marginBottom: "16px" }}>{post.title}</h2>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ marginRight: "10px", fontSize: "0.9em" }}>
                  {new Date(post.pubDate).toLocaleDateString()}
                </span>
                <span style={{ fontSize: "0.9em" }}>
                  {translations[language].authorBy} {post.author}
                </span>
              </div>
              {/* Display the excerpt from the post content */}
              <p
                style={{ marginBottom: "16px" }}
                dangerouslySetInnerHTML={{ __html: getExcerpt(post.content) }}
              >
                {/* This will be empty since we're using dangerouslySetInnerHTML */}
              </p>{" "}
              {/* Add this line */}
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: textColor,
                  color: theme === "light" ? "#fff" : "#333",
                  padding: "10px 15px", // Added padding for better visuals
                  textDecoration: "none", // Remove underline from the link
                  transition: "background-color 0.3s, color 0.3s",
                }}
                className="btn mt-2"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor =
                    theme === "light" ? "#333" : "#f4f4f4";
                  e.target.style.color = theme === "light" ? "#f4f4f4" : "#333";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = textColor;
                  e.target.style.color = theme === "light" ? "#fff" : "#333";
                }}
              >
                {translations[language].readMore}
              </a>
            </div>
          </PostContainer>
        ))}
      </div>
    </GeneralContainer>
  );
}

export default MediumPosts;
