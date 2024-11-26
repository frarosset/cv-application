import { useState } from "react";
import EditPanel from "./editor/EditPanel.jsx";
import PreviewPanel from "./preview/PreviewPanel.jsx";
import sampleData from "../data/sampleData.json";
import "../styles/Main.css";

function Main() {
  const [personalInfo, setPersonalInfo] = useState(sampleData.personalInfo);
  const [education, setEducation] = useState(sampleData.education);

  return (
    <main>
      <EditPanel
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        education={education}
        setEducation={setEducation}
      />
      <PreviewPanel personalInfo={personalInfo} education={education} />
    </main>
  );
}

export default Main;
