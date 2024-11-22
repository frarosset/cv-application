import { useState } from "react";
import EditPanel from "./EditPanel.jsx";
import PreviewPanel from "./PreviewPanel.jsx";

function Main() {
  const [personalInfo, setPersonalInfo] = useState({
    test: "initial personalInfo state of Main",
  });

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
