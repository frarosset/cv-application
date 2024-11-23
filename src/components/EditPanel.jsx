import EditPersonalInfoPanel from "./EditPersonalInfoPanel.jsx";
import EditEducationPanel from "./EditEducationPanel.jsx";

function EditPanel() {
  return (
    <div className="edit-panel">
      <h2>Edit Panel</h2>
      <EditPersonalInfoPanel />
      <EditEducationPanel />
    </div>
  );
}

export default EditPanel;
