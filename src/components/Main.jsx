import { useState } from "react";
import EditPanel from "./editor/EditPanel.jsx";
import PreviewPanel from "./preview/PreviewPanel.jsx";
import sampleData from "../data/sampleData.json";
import "../styles/Main.css";

function Main() {
  const [personalInfo, setPersonalInfo] = useState(sampleData.personalInfo);

  return (
    <main>
      <EditPanel
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      <PreviewPanel personalInfo={personalInfo} />
    </main>
  );
}

export default Main;
