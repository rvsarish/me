import { ThemeProvider } from "styled-components"; // Provides theming support with styled-components
import { useState, useEffect } from "react"; // React hooks for managing state and lifecycle
import { darkTheme, lightTheme } from "./utils/Themes.js"; // Importing theme configurations
import Navbar from "./components/Navbar"; // Navigation bar component
import "./App.css"; // Global CSS styles
import { BrowserRouter as Router } from "react-router-dom"; // Router for handling navigation
import HeroSection from "./components/HeroSection"; // Hero section component
import About from "./components/About"; // About section component
import Skills from "./components/Skills"; // Skills section component
import Projects from "./components/Projects"; // Projects section component
import Contact from "./components/Contact"; // Contact section component
import Footer from "./components/Footer"; // Footer component
import Experience from "./components/Experience"; // Experience section component
import Education from "./components/Education"; // Education section component
import ProjectDetails from "./components/ProjectDetails"; // Project details modal component
import styled from "styled-components"; // Styled-components library for styling

// Styled-component for the main body, adapting to the theme's background color
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

// Styled-component for a decorative wrapper with gradient background and custom shape
const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true); // State to toggle between dark and light themes
  const [openModal, setOpenModal] = useState({ state: false, project: null }); // State for managing project details modal
  console.log(openModal); // Debugging: Log modal state to the console

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {" "}
      {/* Dynamically apply theme based on darkMode */}
      <Router>
        <Navbar /> {/* Render the navigation bar */}
        <Body>
          <HeroSection /> {/* Render the hero section */}
          <Wrapper>
            <Skills /> {/* Render the skills section */}
            <Experience /> {/* Render the experience section */}
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />{" "}
          {/* Render projects section */}
          <Wrapper>
            <Education /> {/* Render the education section */}
            <Contact /> {/* Render the contact section */}
          </Wrapper>
          <Footer /> {/* Render the footer */}
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App; // Export the main App component
