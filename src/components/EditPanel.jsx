import EditPersonalInfoPanel from "./EditPersonalInfoPanel.jsx";
import EditEducationPanel from "./EditEducationPanel.jsx";
import EditProfessionalExperience from "./EditProfessionalExperience.jsx";

function EditPanel() {
  return (
    <div className="edit-panel">
      <h2>Edit Panel</h2>
      <EditPersonalInfoPanel />
      <EditEducationPanel />
      <EditProfessionalExperience />
    </div>
  );
}

export default EditPanel;
