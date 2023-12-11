import React, { useState } from "react";
import AceEditor from "react-ace";
import styled from "styled-components";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #282c34;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  margin: 20px;
  width: 80%;
  max-width: 900px;
`;

const StyledButton = styled.button`
  background-color: #61dafb;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  font-weight: bold;
  transition:
    background-color 0.2s,
    transform 0.2s;

  &:hover {
    background-color: #4da8da;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const OutputSection = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TextOutput = styled.pre`
  color: #e6e6e6; // A bright white tone
  margin: 0;
`;

const OutputContainer = styled.div`
  padding: 10px;
  border-radius: 5px;
  background-color: #1c1e22;
  color: #61dafb;
  width: 100%;
  height: 200px;
  overflow: auto;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.3);
  font-family: "Courier New", Courier, monospace;
`;

const ConsoleContainer = styled(OutputContainer)`
  margin-top: 10px;
`;

const JavaScriptEditor = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [consoleOutput, setConsoleOutput] = useState([]);

  const runCode = () => {
    const log = (...args) => setConsoleOutput((prev) => [...prev, ...args]);
    try {
      // eslint-disable-next-line no-new-func
      const result = new Function("console", `return ${code}`)({ log });
      setOutput(JSON.stringify(result, null, 2));
    } catch (error) {
      setOutput(error.toString());
    }
  };

  return (
    <EditorContainer>
      <AceEditor
        mode="javascript"
        theme="monokai"
        value={code}
        onChange={setCode}
        name="JS_CODE_EDITOR"
        editorProps={{ $blockScrolling: true }}
        height="300px"
        width="100%"
        fontSize={16}
      />
      <StyledButton onClick={runCode}>Run Code</StyledButton>
      <OutputSection>
        <OutputContainer>
          <strong>Output:</strong>
          <TextOutput>{output}</TextOutput>
        </OutputContainer>
        <ConsoleContainer>
          <strong>Console:</strong>
          {consoleOutput.map((item, index) => (
            <TextOutput key={index}>{JSON.stringify(item)}</TextOutput>
          ))}
        </ConsoleContainer>
      </OutputSection>
    </EditorContainer>
  );
};

export default JavaScriptEditor;
