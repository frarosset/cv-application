import { useState } from "react";
import EditPanel from "./editor/EditPanel.jsx";
import PreviewPanel from "./preview/PreviewPanel.jsx";
import sampleData from "../data/sampleData.json";
import "../styles/Main.css";

function Main() {
  const [personalInfo, setPersonalInfo] = useState(sampleData.personalInfo);
  const [education, setEducation] = useState(sampleData.education);
  const [professionalExperience, setProfessionalExperience] = useState(
    sampleData.professionalExperience
  );

  return (
    <main>
      <EditPanel
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        education={education}
        setEducation={setEducation}
        professionalExperience={professionalExperience}
        setProfessionalExperience={setProfessionalExperience}
      />
      <PreviewPanel
        personalInfo={personalInfo}
        education={education}
        professionalExperience={professionalExperience}
      />
    </main>
  );
}

export default Main;
