import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ExpertiseArea from "./components/ExpertiseArea";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import MediumPosts from "./components/MediumPosts/index";

import { useSelector } from "react-redux";
import { ROUTES } from "./components/Routes";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const isLoading = useSelector((state) => state.loading.isLoading);

  return (
    <Router>
      {!isLoading && <Navbar />}
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.SKILLS} element={<Skills />} />
        <Route path={ROUTES.EDUCATION} element={<Education />} />
        <Route path={ROUTES.PROJECTS} element={<Projects />} />
        <Route path={ROUTES.BLOG} element={<MediumPosts />} />
        <Route path={ROUTES.EXPERTISE_AREA} element={<ExpertiseArea />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
      {!isLoading && <Footer />}
    </Router>
  );
}

export default App;
