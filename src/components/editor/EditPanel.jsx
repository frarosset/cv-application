import EditPersonalInfoPanel from "./EditPersonalInfoPanel.jsx";
import EditEducationPanel from "./EditEducationPanel.jsx";
import EditProfessionalExperience from "./EditProfessionalExperience.jsx";
import "../../styles/editor/EditPanel.css";

function EditPanel(props) {
  return (
    <div className="edit-panel">
      <h2>Edit Panel</h2>
      <EditPersonalInfoPanel
        personalInfo={props.personalInfo}
        setPersonalInfo={props.setPersonalInfo}
      />
      <EditEducationPanel
        education={props.education}
        setEducation={props.setEducation}
      />
      <EditProfessionalExperience
        professionalExperience={props.professionalExperience}
        setProfessionalExperience={props.setProfessionalExperience}
      />
    </div>
  );
}

export default EditPanel;
