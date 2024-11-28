import { useState } from "react";
import EditPersonalInfoPanel from "./EditPersonalInfoPanel.jsx";
import EditEducationPanel from "./EditEducationPanel.jsx";
import EditProfessionalExperience from "./EditProfessionalExperience.jsx";
import "../../styles/editor/EditPanel.css";

function EditPanel(props) {
  const [currentPanel, setCurrentPanel] = useState("personal-info");

  return (
    <div className="edit-panel">
      <h2>Edit Panel</h2>
      {renderCurrentPanel(currentPanel, props)}
    </div>
  );
}

function renderCurrentPanel(currentPanel, props) {
  switch (currentPanel) {
    case "personal-info":
      return (
        <EditPersonalInfoPanel
          personalInfo={props.personalInfo}
          setPersonalInfo={props.setPersonalInfo}
        />
      );
    case "education":
      return (
        <EditEducationPanel
          education={props.education}
          setEducation={props.setEducation}
        />
      );
    case "professional-experience":
      return (
        <EditProfessionalExperience
          professionalExperience={props.professionalExperience}
          setProfessionalExperience={props.setProfessionalExperience}
        />
      );
    default:
      return null;
  }
}

export default EditPanel;
