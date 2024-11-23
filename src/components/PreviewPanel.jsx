import PreviewPersonalInfoPanel from "./PreviewPersonalInfoPanel.jsx";
import PreviewEducationPanel from "./PreviewEducationPanel.jsx";
import PreviewProfessionalExperience from "./PreviewProfessionalExperience.jsx";

function PreviewPanel() {
  return (
    <div className="preview-panel">
      <h2>Preview Panel</h2>
      <PreviewPersonalInfoPanel />
      <PreviewEducationPanel />
      <PreviewProfessionalExperience />
    </div>
  );
}

export default PreviewPanel;
