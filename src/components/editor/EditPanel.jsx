import { useState } from "react";
import Button from "../base/Button.jsx";
import EditPersonalInfoPanel from "./EditPersonalInfoPanel.jsx";
import EditEducationPanel from "./EditEducationPanel.jsx";
import EditProfessionalExperience from "./EditProfessionalExperience.jsx";
import "../../styles/editor/EditPanel.css";

const panelsInfo = [
  { name: "personal-info", iconName: "user" },
  { name: "education", iconName: "bookOpen" },
  { name: "professional-experience", iconName: "briefcase" },
];

function EditPanel(props) {
  const [currentPanel, setCurrentPanel] = useState("personal-info");

  return (
    <div className="edit-panel">
      <h2>Edit Panel</h2>
      {renderSetCurrentPanelButtons(setCurrentPanel, currentPanel)}
      {renderCurrentPanel(currentPanel, props)}
    </div>
  );
}

function renderSetCurrentPanelButtons(setCurrentPanel, currentPanel) {
  return (
    <div className="edit-panel-buttons">
      {panelsInfo.map(({ name, iconName }) => (
        <Button
          key={name}
          customCssClass={`edit-panel-button ${name} ${
            name == currentPanel ? "current" : ""
          }`}
          iconName={iconName}
          onClickCallback={() => setCurrentPanel(name)}
        ></Button>
      ))}
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
