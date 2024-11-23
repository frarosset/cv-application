import { useState } from "react";
import EditPanel from "./EditPanel.jsx";
import PreviewPanel from "./PreviewPanel.jsx";
import sampleData from "../data/sampleData.json";

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
