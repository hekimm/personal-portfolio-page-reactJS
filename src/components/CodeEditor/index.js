import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import Modal from "react-modal";
import styled, { createGlobalStyle, css } from "styled-components";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai"; // Dark theme for Ace Editor
import "ace-builds/src-noconflict/ext-language_tools"; // Import for autocomplete
import { useSelector } from "react-redux"; // Import useSelector

// Define dark theme styles
const darkTheme = css`
  background-color: #333;
  color: #fff;
  .ace_gutter {
    background: #333;
    color: #fff;
  }
`;

// Global Styles for Modal
const GlobalStyle = createGlobalStyle`
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
  }
`;

// Custom Styled Components
const EditorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  z-index: 1; // Set a lower z-index to ensure it's below the Footer
  ${({ theme }) => (theme === "dark" ? darkTheme : "")}
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledAceEditor = styled(AceEditor)`
  border: 2px solid #61dafb;
  border-radius: 10px;
  height: 250px;
  background-color: ${({ theme }) => (theme === "dark" ? "#333" : "#fff")};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#333")};
  z-index: 2; // Set a higher z-index for the editors
`;

const StyledButton = styled.button`
  background-color: #61dafb;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: #4da8da;
  }
`;

const EditorHeader = styled.div`
  background-color: ${({ theme }) =>
        theme === "dark" ? "#4da8da" : "#61dafb"};
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 5px 5px 0 0;
  font-size: 1.1em;
  font-weight: bold;

  // Responsive adjustments
  @media (max-width: 768px) {
    font-size: 0.9em; // Smaller font size for smaller screens
  }
  @media (min-width: 768px) {
    font-size: 1.1em; // Larger font size for larger screens
  }
  @media (min-width: 1024px) {
    font-size: 1.2em; // Even larger font size for desktop and large screens
  }
`;
const EnhancedOutputModal = styled(Modal)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 1000; // Ensure modal is on top of everything
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: #ff5f57;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const OutputIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
`;

const CodeEditor = () => {
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");
    const [srcDoc, setSrcDoc] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);
    const theme = useSelector((state) => state.theme.theme); // Access theme from Redux store

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <>
            <GlobalStyle theme={theme} />
            {!isModalOpen && (
                <EditorContainer theme={theme}>
                    <div>
                        <EditorHeader theme={theme}>HTML Editor</EditorHeader>

                        <StyledAceEditor
                            mode="html"
                            theme={theme === "dark" ? "monokai" : "github"} // Set the Ace Editor theme
                            onChange={setHtml}
                            name="html_editor"
                            editorProps={{ $blockScrolling: true, $useWorker: false }}
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                            }}
                            theme={theme}
                        />
                    </div>
                    <div>
                        <EditorHeader theme={theme}>CSS Editor</EditorHeader>

                        <StyledAceEditor
                            mode="css"
                            theme={theme === "dark" ? "monokai" : "github"} // Set the Ace Editor theme
                            onChange={setCss}
                            name="css_editor"
                            editorProps={{ $blockScrolling: true, $useWorker: false }}
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                            }}
                            theme={theme}
                        />
                    </div>
                    <div>
                        <EditorHeader theme={theme}>JavaScript Editor</EditorHeader>

                        <StyledAceEditor
                            mode="javascript"
                            theme={theme === "dark" ? "monokai" : "github"} // Set the Ace Editor theme
                            onChange={setJs}
                            name="js_editor"
                            editorProps={{ $blockScrolling: true, $useWorker: false }}
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                            }}
                            theme={theme}
                        />
                    </div>
                    <StyledButton onClick={() => setModalOpen(true)}>Run</StyledButton>
                </EditorContainer>
            )}
            <EnhancedOutputModal
                isOpen={isModalOpen}
                onRequestClose={() => setModalOpen(false)}
                ariaHideApp={false}
            >
                <ModalContent>
                    <CloseButton onClick={() => setModalOpen(false)}>×</CloseButton>
                    <OutputIframe
                        srcDoc={srcDoc}
                        title="output"
                        sandbox="allow-scripts"
                    />
                </ModalContent>
            </EnhancedOutputModal>
        </>
    );
};

export default CodeEditor;
